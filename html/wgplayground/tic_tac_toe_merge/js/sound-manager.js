/* Sound Manager: handles game audio playback
   Loads and plays audio files, respects volume settings from localStorage
*/
(function () {
  let audioContext = null;
  let soundGainNode = null;  // For sound effects (clicks, win, lose, etc.)
  let musicGainNode = null;  // For background music
  let initialized = false;
  let clickBuffer = null;
  let winBuffer = null;
  let loseBuffer = null;
  let tictacBuffer = null;
  let foundBuffer = null;
  let loopBuffer = null;
  let rawBuffer = null;
  let mergeBuffer = null;

  // Active audio sources
  let backgroundMusicSource = null;
  let matchmakingSource = null;

  // Initialize audio context on first user interaction (required by browsers)
  function init() {
    if (initialized) return;
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // Create separate gain nodes for sounds and music
      soundGainNode = audioContext.createGain();
      musicGainNode = audioContext.createGain();

      soundGainNode.connect(audioContext.destination);
      musicGainNode.connect(audioContext.destination);

      initialized = true;

      // Load sounds
      loadClickSound();
      loadWinSound();
      loadLoseSound();
      loadTicTacSound();
      loadFoundSound();
      loadLoopSound();
      loadRawSound();
      loadMergeSound();

      // Update volumes
      updateSoundVolume();
      updateMusicVolume();
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
    }
  }

  // Load click.ogg file and decode it
  function loadClickSound() {
    fetch('sounds/click.ogg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        clickBuffer = audioBuffer;
        console.log('Click sound loaded successfully');
      })
      .catch(e => {
        console.warn('Failed to load click sound:', e);
      });
  }

  // Load win.ogg file and decode it
  function loadWinSound() {
    fetch('sounds/win.ogg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        winBuffer = audioBuffer;
        console.log('Win sound loaded successfully');
      })
      .catch(e => {
        console.warn('Failed to load win sound:', e);
      });
  }

  // Load lose.ogg file and decode it
  function loadLoseSound() {
    fetch('sounds/lose.ogg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        loseBuffer = audioBuffer;
        console.log('Lose sound loaded successfully');
      })
      .catch(e => {
        console.warn('Failed to load lose sound:', e);
      });
  }

  // Load tictac.ogg file and decode it
  function loadTicTacSound() {
    fetch('sounds/tictac.ogg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        tictacBuffer = audioBuffer;
        console.log('TicTac sound loaded successfully');
      })
      .catch(e => {
        console.warn('Failed to load tictac sound:', e);
      });
  }

  // Load found.ogg file and decode it
  function loadFoundSound() {
    fetch('sounds/found.ogg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        foundBuffer = audioBuffer;
        console.log('Found sound loaded successfully');
      })
      .catch(e => {
        console.warn('Failed to load found sound:', e);
      });
  }

  // Load loop.ogg file and decode it
  function loadLoopSound() {
    fetch('sounds/loop.ogg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        loopBuffer = audioBuffer;
        console.log('Loop music loaded successfully');
        // Auto-start background music after loading
        startBackgroundMusic();
      })
      .catch(e => {
        console.warn('Failed to load loop music:', e);
      });
  }

  // Load row.ogg file and decode it
  function loadRawSound() {
    fetch('sounds/row.ogg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        rawBuffer = audioBuffer;
        console.log('Raw sound loaded successfully');
      })
      .catch(e => {
        console.warn('Failed to load raw sound:', e);
      });
  }

  // Load merge.ogg file and decode it
  function loadMergeSound() {
    fetch('sounds/merge.ogg')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        mergeBuffer = audioBuffer;
        console.log('Merge sound loaded successfully');
      })
      .catch(e => {
        console.warn('Failed to load merge sound:', e);
      });
  }

  // Get current sound volume from localStorage (0-100) and convert to gain (0-1)
  function getSoundVolume() {
    try {
      const vol = localStorage.getItem('sound_vol');
      if (vol === null) return 0.8; // default 80%
      return Math.max(0, Math.min(100, parseInt(vol, 10))) / 100;
    } catch (e) {
      return 0.8;
    }
  }

  // Get current music volume from localStorage (0-100) and convert to gain (0-1)
  function getMusicVolume() {
    try {
      const vol = localStorage.getItem('music_vol');
      if (vol === null) return 0.6; // default 60%
      return Math.max(0, Math.min(100, parseInt(vol, 10))) / 100;
    } catch (e) {
      return 0.6;
    }
  }

  // Update sound gain based on current volume setting, respecting SDK SFX mute
  function updateSoundVolume() {
    if (!soundGainNode) return;
    const muted = window.GamepushService?.sounds?.isSFXMuted;
    soundGainNode.gain.value = muted ? 0 : getSoundVolume();
  }

  // Update music gain based on current volume setting, respecting SDK Music mute
  function updateMusicVolume() {
    if (!musicGainNode) return;
    const muted = window.GamepushService?.sounds?.isMusicMuted;
    musicGainNode.gain.value = muted ? 0 : getMusicVolume();
  }

  // Apply SDK mute state to gain nodes (call after GP is ready)
  function applySdkMuteState() {
    updateSoundVolume();
    updateMusicVolume();
  }

  // Play click sound from loaded audio file
  function playClickSound() {
    if (!initialized) init();
    if (!audioContext || !soundGainNode || !clickBuffer) return;

    try {
      // Update volume in case it changed
      updateSoundVolume();

      const now = audioContext.currentTime;

      // Create buffer source
      const source = audioContext.createBufferSource();
      source.buffer = clickBuffer;

      // Connect: source -> sound gain -> destination
      source.connect(soundGainNode);

      // Play the sound
      source.start(now);

      // Clean up after sound finishes
      source.onended = () => {
        source.disconnect();
      };
    } catch (e) {
      console.warn('Error playing click sound:', e);
    }
  }

  // Alternative click sound (uses same file as main click)
  function playClickSoundAlt() {
    playClickSound();
  }

  // Play win sound from loaded audio file
  function playWinSound() {
    if (!initialized) init();
    if (!audioContext || !soundGainNode || !winBuffer) return;

    try {
      // Update volume in case it changed
      updateSoundVolume();

      const now = audioContext.currentTime;

      // Create buffer source
      const source = audioContext.createBufferSource();
      source.buffer = winBuffer;

      // Connect: source -> sound gain -> destination
      source.connect(soundGainNode);

      // Play the sound
      source.start(now);

      // Clean up after sound finishes
      source.onended = () => {
        source.disconnect();
      };
    } catch (e) {
      console.warn('Error playing win sound:', e);
    }
  }

  // Play lose sound from loaded audio file
  function playLoseSound() {
    if (!initialized) init();
    if (!audioContext || !soundGainNode || !loseBuffer) return;

    try {
      // Update volume in case it changed
      updateSoundVolume();

      const now = audioContext.currentTime;

      // Create buffer source
      const source = audioContext.createBufferSource();
      source.buffer = loseBuffer;

      // Connect: source -> sound gain -> destination
      source.connect(soundGainNode);

      // Play the sound
      source.start(now);

      // Clean up after sound finishes
      source.onended = () => {
        source.disconnect();
      };
    } catch (e) {
      console.warn('Error playing lose sound:', e);
    }
  }

  // Play found sound when opponent is found
  function playFoundSound() {
    if (!initialized) init();
    if (!audioContext || !soundGainNode || !foundBuffer) return;

    try {
      updateSoundVolume();

      const now = audioContext.currentTime;
      const source = audioContext.createBufferSource();
      source.buffer = foundBuffer;
      source.connect(soundGainNode);
      source.start(now);

      source.onended = () => {
        source.disconnect();
      };
    } catch (e) {
      console.warn('Error playing found sound:', e);
    }
  }

  // Play raw sound when a match (3 in a row) is made
  function playRawSound() {
    if (!initialized) init();
    if (!audioContext || !soundGainNode || !rawBuffer) return;

    try {
      updateSoundVolume();

      const now = audioContext.currentTime;
      const source = audioContext.createBufferSource();
      source.buffer = rawBuffer;
      source.connect(soundGainNode);
      source.start(now);

      source.onended = () => {
        source.disconnect();
      };
    } catch (e) {
      console.warn('Error playing raw sound:', e);
    }
  }

  // Play merge sound when pieces are merged (in hand or on board)
  function playMergeSound() {
    if (!initialized) init();
    if (!audioContext || !soundGainNode || !mergeBuffer) return;

    try {
      updateSoundVolume();

      const now = audioContext.currentTime;
      const source = audioContext.createBufferSource();
      source.buffer = mergeBuffer;
      source.connect(soundGainNode);
      source.start(now);

      source.onended = () => {
        source.disconnect();
      };
    } catch (e) {
      console.warn('Error playing merge sound:', e);
    }
  }

  // Start looping tictac sound during matchmaking
  function startMatchmakingSound() {
    if (!initialized) init();
    if (!audioContext || !soundGainNode || !tictacBuffer) return;
    if (matchmakingSource) return; // Already playing

    try {
      updateSoundVolume();

      const source = audioContext.createBufferSource();
      source.buffer = tictacBuffer;
      source.loop = true; // Loop the sound
      source.connect(soundGainNode);
      source.start(0);

      matchmakingSource = source;
      console.log('Matchmaking sound started');
    } catch (e) {
      console.warn('Error starting matchmaking sound:', e);
    }
  }

  // Stop matchmaking sound
  function stopMatchmakingSound() {
    if (matchmakingSource) {
      try {
        matchmakingSource.stop();
        matchmakingSource.disconnect();
        matchmakingSource = null;
        console.log('Matchmaking sound stopped');
      } catch (e) {
        console.warn('Error stopping matchmaking sound:', e);
      }
    }
  }

  // Start background music loop
  function startBackgroundMusic() {
    if (!initialized) init();
    if (!audioContext || !musicGainNode || !loopBuffer) return;
    if (backgroundMusicSource) return; // Already playing

    try {
      updateMusicVolume();

      const source = audioContext.createBufferSource();
      source.buffer = loopBuffer;
      source.loop = true; // Loop the music
      source.connect(musicGainNode);
      source.start(0);

      backgroundMusicSource = source;
      console.log('Background music started');
    } catch (e) {
      console.warn('Error starting background music:', e);
    }
  }

  // Stop background music
  function stopBackgroundMusic() {
    if (backgroundMusicSource) {
      try {
        backgroundMusicSource.stop();
        backgroundMusicSource.disconnect();
        backgroundMusicSource = null;
        console.log('Background music stopped');
      } catch (e) {
        console.warn('Error stopping background music:', e);
      }
    }
  }

  // Pause/Resume music and sounds based on page visibility
  let isPaused = false;
  let pausedByVisibility = false;
  let pausedByAd = false;

  function pauseAll() {
    if (isPaused) return;
    isPaused = true;

    // Suspend audio context to pause all sounds and music
    if (audioContext && audioContext.state === 'running') {
      audioContext.suspend().then(() => {
        console.log('Audio paused');
      }).catch(e => {
        console.warn('Error pausing audio:', e);
      });
    }
  }

  function resumeAll() {
    // Only resume if not paused by other sources
    if (pausedByVisibility || pausedByAd) return;
    if (!isPaused) return;
    isPaused = false;

    // Resume audio context
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume().then(() => {
        console.log('Audio resumed');
      }).catch(e => {
        console.warn('Error resuming audio:', e);
      });
    }
  }

  // Handle page visibility changes (tab switching, window minimizing)
  function handleVisibilityChange() {
    if (document.hidden) {
      pausedByVisibility = true;
      pauseAll();
    } else {
      pausedByVisibility = false;
      resumeAll();
    }
  }

  // Handle ad start/stop events
  function handleAdStart() {
    console.log('Ad started - pausing audio');
    pausedByAd = true;
    pauseAll();
  }

  function handleAdClose() {
    console.log('Ad closed - resuming audio');
    pausedByAd = false;
    resumeAll();
  }

  // Listen for volume changes from settings
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e) => {
      if (e.key === 'sound_vol') {
        updateSoundVolume();
      } else if (e.key === 'music_vol') {
        updateMusicVolume();
      }
    });

    // Listen for page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    function wireGamepushEvents(svc) {
      // Ad events — pause/resume AudioContext (separate from SDK mute)
      svc.on('ads:start', handleAdStart);
      svc.on('ads:close', handleAdClose);
      svc.on('rewarded:start', handleAdStart);
      svc.on('rewarded:close', handleAdClose);
      // SDK SFX/Music mute events — update gain nodes accordingly
      svc.on('mute:sfx',     () => { if (soundGainNode) soundGainNode.gain.value = 0; });
      svc.on('unmute:sfx',   () => { if (soundGainNode) soundGainNode.gain.value = getSoundVolume(); });
      svc.on('mute:music',   () => { if (musicGainNode) musicGainNode.gain.value = 0; });
      svc.on('unmute:music', () => { if (musicGainNode) musicGainNode.gain.value = getMusicVolume(); });
      // Apply current SDK mute state immediately
      applySdkMuteState();
    }

    // Listen for GamePush ad and sound events
    if (window.GamepushService) {
      wireGamepushEvents(window.GamepushService);
    } else {
      // If GamepushService not loaded yet, wait for it
      const checkGamepush = setInterval(() => {
        if (window.GamepushService) {
          clearInterval(checkGamepush);
          wireGamepushEvents(window.GamepushService);
        }
      }, 100);
      // Stop checking after 10 seconds
      setTimeout(() => clearInterval(checkGamepush), 10000);
    }
  }

  // Expose public API
  window.SoundManager = {
    init: init,
    playClick: playClickSound,
    playClickAlt: playClickSoundAlt,
    playWin: playWinSound,
    playLose: playLoseSound,
    playFound: playFoundSound,
    playRaw: playRawSound,
    playMerge: playMergeSound,
    startMatchmaking: startMatchmakingSound,
    stopMatchmaking: stopMatchmakingSound,
    startMusic: startBackgroundMusic,
    stopMusic: stopBackgroundMusic,
    updateSoundVolume: updateSoundVolume,
    updateMusicVolume: updateMusicVolume,
    // SDK mute helpers (delegate to GamepushService.sounds)
    isSFXMuted:   () => !!window.GamepushService?.sounds?.isSFXMuted,
    isMusicMuted: () => !!window.GamepushService?.sounds?.isMusicMuted,
    muteSFX:      () => window.GamepushService?.sounds?.muteSFX(),
    unmuteSFX:    () => window.GamepushService?.sounds?.unmuteSFX(),
    muteMusic:    () => window.GamepushService?.sounds?.muteMusic(),
    unmuteMusic:  () => window.GamepushService?.sounds?.unmuteMusic(),
    // Internal handlers exposed for GamePush integration
    _handleAdStart: handleAdStart,
    _handleAdClose: handleAdClose
  };

  // Auto-initialize on first user interaction
  const autoInit = () => {
    init();
    document.removeEventListener('click', autoInit);
    document.removeEventListener('touchstart', autoInit);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('click', autoInit, { once: true });
      document.addEventListener('touchstart', autoInit, { once: true });
    });
  } else {
    document.addEventListener('click', autoInit, { once: true });
    document.addEventListener('touchstart', autoInit, { once: true });
  }
})();
