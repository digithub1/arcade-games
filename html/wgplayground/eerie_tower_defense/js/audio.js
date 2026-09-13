




const AudioManager = {
    
    soundEnabled: true,
    sfxMutedBySDK: false,
    musicMutedBySDK: false,
    masterVolume: 0.7,
    audioUnlocked: false, 
    audioElements: [],
    pausedAudioElements: [],
    
    
    _shouldMuteSFX: false,
    _initialized: false,
    _audioUnlockHandlersBound: false,
    _audioUnlockHandler: null,
    _allPaused: false,            
    _userMutedManually: false,    
    _pausedByLifecycle: false,    
    _sdkMasterMuted: false,
    _preloaderListenerBound: false,
    _pendingMusicStartAfterPreloader: false,
    _lastSoundPlayedAt: {},
    _soundAssetBasePath: 'assets/sounds/',
    _soundAssetVariantGroups: {},
    _soundAssetFallbacks: {},
    _soundAssetNextVariantIndex: {},
    _soundAssetAvailablePaths: {},
    _soundAssetFailedPaths: {},
    _soundCooldowns: {
        shoot: 45,
        arrowHit: 30,
        arrowCrit: 70,
        enemyDeathSmall: 35,
        enemyDeathElite: 55,
        enemyDeathBoss: 140,
        chainLightning: 65,
        freezeBurst: 90,
        smokeDeploy: 110,
        explosiveImpact: 90,
        thunderStrikeImpact: 220,
        enemyHealCast: 180,
        enemySplit: 120,
        uiOpenModal: 70,
        uiCloseModal: 70,
        buttonClick: 35,
        click: 35,
        towerBuild: 120,
        bossWarningStinger: 280,
        waveRewardStinger: 180,
        traderArrival: 240
    },
    
     
     backgroundMusic: null,
     backgroundMusicVolume: 0.5,
     currentMusicTrack: 0,
     _musicAudioContext: null,
     _musicGainNode: null,
     _musicSourceNode: null,
     _musicTrackBuffers: {},
     _musicTrackLoadPromises: {},
     _musicCurrentTrackPath: '',
     _musicTrackStartedAt: 0,
     _musicTrackPauseOffset: 0,
     _musicIsPlaying: false,
     
     
     menuMusicTrack: 'assets/music/1.mp3',
     
     
     gameplayMusicTracks: [
         'assets/music/2.mp3',
         'assets/music/3.mp3',
         'assets/music/4.mp3'
     ],
     
     
     musicTracks: [
         'assets/music/1.mp3',
         'assets/music/2.mp3',
         'assets/music/3.mp3',
         'assets/music/4.mp3'
     ],
    
    
    soundEffects: {
        
        shoot: null,
        click: null,      
        success: null,
        error: null,
        waveStart: null,
        waveEnd: null,
        gameOver: null,
        victory: null,
        thunder: null,    
        collect: null,    
        crystal: null,    
        upgrade: null,    
        
        
        buttonClick: null,
        levelUp: null,
        achievement: 'assets/music/achievement.mp3',
        dailyBonus: 'assets/music/dally_bonus.mp3',
        moneyGain: null,
        healthLoss: null,
        towerBuild: null,
        towerUpgrade: null,

        
        arrowHit: null,
        arrowCrit: null,
        enemyDeathSmall: null,
        enemyDeathElite: null,
        enemyDeathBoss: null,
        bossWarningStinger: null,
        waveRewardStinger: null,
        traderArrival: null,

        
        chainLightning: null,
        freezeBurst: null,
        smokeDeploy: null,
        explosiveImpact: null,
        thunderStrikeImpact: null,
        enemyHealCast: null,
        enemySplit: null,

        
        uiOpenModal: null,
        uiCloseModal: null
    },
    
    
     audioCache: {},

     
     audioPool: {},
     audioPoolSize: 4,           
     audioPoolIndex: {},          

     


      init() {
          if (this._initialized) {
              return;
          }
          this._initialized = true;

          console.log('🔊 Инициализация системы управления звуком и музыкой');
          
          
          this.soundEnabled = true;
         
         
         this.createBackgroundMusic();
         
          
          this.generateStandardSounds();

          
          this.setupExternalSoundAssetMap();

          
          this.preloadFileSoundEffects();
         
          
          

           
           this.syncStateWithSDK();
           
            
             this.setupAudioUnlock();

            
            
            this.bindPreloaderMusicBridge();
          },

    isStartupPreloaderPending() {
        return window.__gpPreloaderDone === false;
    },

    bindPreloaderMusicBridge() {
        if (this._preloaderListenerBound) {
            return;
        }

        window.addEventListener('gp:preloader-finished', () => {
            if (!this._pendingMusicStartAfterPreloader) {
                return;
            }

            this._pendingMusicStartAfterPreloader = false;

            if (!this.soundEnabled || this.musicMutedBySDK || this._userMutedManually) {
                return;
            }

            if (this.backgroundMusic && this.backgroundMusic.paused) {
                this.startBackgroundMusic();
            }
        });

        this._preloaderListenerBound = true;
    },

    deferMusicUntilPreloaderFinished() {
        this._pendingMusicStartAfterPreloader = true;
        if (this.backgroundMusic && !this.backgroundMusic.paused) {
            this.pauseBackgroundMusic();
        }
    },

    
    _pooledSounds: ['shoot', 'arrowHit'],

    setupExternalSoundAssetMap() {
        const variantSpec = {
            shoot: { prefix: 'sfx_shoot', count: 5 },
            arrowHit: { prefix: 'sfx_arrow_hit', count: 5 },
            arrowCrit: { prefix: 'sfx_arrow_crit', count: 3 },
            explosiveImpact: { prefix: 'sfx_explosive_impact', count: 3 },
            smokeDeploy: { prefix: 'sfx_smoke_deploy', count: 2 },
            freezeBurst: { prefix: 'sfx_freeze_burst', count: 3 },
            chainLightning: { prefix: 'sfx_chain_lightning', count: 3 },
            enemyDeathSmall: { prefix: 'sfx_enemy_death_small', count: 4 },
            enemyDeathElite: { prefix: 'sfx_enemy_death_elite', count: 3 },
            enemyDeathBoss: { prefix: 'sfx_enemy_death_boss', count: 2 },
            enemyHealCast: { prefix: 'sfx_enemy_heal_cast', count: 2 },
            enemySplit: { prefix: 'sfx_enemy_split', count: 2 },
            thunderStrikeImpact: { prefix: 'sfx_thunder_strike_impact', count: 2 },
            bossWarningStinger: { prefix: 'sfx_boss_warning_stinger', count: 1 },
            waveRewardStinger: { prefix: 'sfx_wave_reward_stinger', count: 1 },
            buttonClick: { prefix: 'sfx_ui_click', count: 3 },
            click: { prefix: 'sfx_ui_click_soft', count: 2 },
            uiOpenModal: { prefix: 'sfx_open_modal', count: 0 },
            uiCloseModal: { prefix: 'sfx_close_modal', count: 0 }
        };

        this._soundAssetVariantGroups = {};
        this._soundAssetFallbacks = {};
        this._soundAssetNextVariantIndex = {};
        this._soundAssetAvailablePaths = {};

        Object.entries(variantSpec).forEach(([soundId, spec]) => {
            const groups = this.buildAssetVariantGroups(spec.prefix, spec.count ?? 1);
            if (!groups.length) {
                return;
            }

            this._soundAssetVariantGroups[soundId] = groups;
            this._soundAssetNextVariantIndex[soundId] = 0;
            this._soundAssetFallbacks[soundId] = this.soundEffects[soundId] || null;
        });
    },

    buildAssetVariantGroups(prefix, count = 1) {
        const safeCount = Math.max(0, Math.floor(Number(count) || 0));
        const groups = [];

        for (let i = 1; i <= safeCount; i++) {
            const index = String(i).padStart(2, '0');
            const basePath = `${this._soundAssetBasePath}${prefix}_${index}`;
            groups.push([
                `${basePath}.ogg`,
                `${basePath}.mp3`
            ]);
        }

        
        groups.push([
            `${this._soundAssetBasePath}${prefix}.ogg`,
            `${this._soundAssetBasePath}${prefix}.mp3`
        ]);

        return groups;
    },

    getRotatedVariantGroups(soundId) {
        const groups = this._soundAssetVariantGroups[soundId];
        if (!groups || !groups.length) {
            return [];
        }

        const startIndex = (this._soundAssetNextVariantIndex[soundId] || 0) % groups.length;
        this._soundAssetNextVariantIndex[soundId] = startIndex + 1;

        if (groups.length === 1) {
            return [groups[0]];
        }

        return groups.slice(startIndex).concat(groups.slice(0, startIndex));
    },

    tryPlayMappedSound(soundId) {
        const groups = this._soundAssetVariantGroups[soundId];
        if (!Array.isArray(groups) || groups.length === 0) {
            return false;
        }

        const availableGroups = [];
        const unknownGroups = [];

        for (let i = 0; i < groups.length; i++) {
            const group = Array.isArray(groups[i]) ? groups[i] : [];
            const candidates = group.filter((filePath) => filePath && !this._soundAssetFailedPaths[filePath]);
            if (!candidates.length) {
                continue;
            }

            const knownReady = candidates.filter((filePath) => Boolean(this._soundAssetAvailablePaths[filePath]));
            if (knownReady.length) {
                availableGroups.push(knownReady);
            } else {
                unknownGroups.push(candidates);
            }
        }

        const targetGroups = availableGroups.length > 0 ? availableGroups : unknownGroups;
        if (!targetGroups.length) {
            return false;
        }

        const idx = (this._soundAssetNextVariantIndex[soundId] || 0) % targetGroups.length;
        this._soundAssetNextVariantIndex[soundId] = idx + 1;

        this.playMappedPathCandidates(soundId, targetGroups[idx], 0, () => {
            this.playMappedFallback(soundId);
        });
        return true;
    },

    playMappedVariantGroups(soundId, groups, groupIndex) {
        if (!Array.isArray(groups) || groupIndex >= groups.length) {
            this.playMappedFallback(soundId);
            return;
        }

        const pathCandidates = Array.isArray(groups[groupIndex]) ? groups[groupIndex] : [];
        this.playMappedPathCandidates(soundId, pathCandidates, 0, () => {
            this.playMappedVariantGroups(soundId, groups, groupIndex + 1);
        });
    },

    playMappedPathCandidates(soundId, pathCandidates, pathIndex, onFail) {
        if (!Array.isArray(pathCandidates) || pathIndex >= pathCandidates.length) {
            if (typeof onFail === 'function') {
                onFail();
            }
            return;
        }

        const filePath = pathCandidates[pathIndex];
        if (!filePath) {
            this.playMappedPathCandidates(soundId, pathCandidates, pathIndex + 1, onFail);
            return;
        }

        if (this._soundAssetFailedPaths[filePath]) {
            this.playMappedPathCandidates(soundId, pathCandidates, pathIndex + 1, onFail);
            return;
        }

        const cacheKey = `${soundId}::${filePath}`;
        this.playAudioFile(filePath, soundId, true, cacheKey, (error) => {
            if (this.shouldMarkSoundAssetFailed(error)) {
                this._soundAssetFailedPaths[filePath] = true;
            }
            this._soundAssetAvailablePaths[filePath] = false;
            this.playMappedPathCandidates(soundId, pathCandidates, pathIndex + 1, onFail);
        });
    },

    shouldMarkSoundAssetFailed(error) {
        const errorName = error && error.name ? String(error.name) : '';
        if (errorName === 'NotAllowedError' || errorName === 'AbortError') {
            return false;
        }
        return true;
    },

    registerMappedAudioProbes(audio, filePath) {
        if (!audio || !filePath || audio._mappedProbeBound) {
            return;
        }

        const markAvailable = () => {
            this._soundAssetAvailablePaths[filePath] = true;
        };

        audio.addEventListener('canplay', markAvailable, { once: true });
        audio.addEventListener('loadeddata', markAvailable, { once: true });
        audio.addEventListener('error', () => {
            this._soundAssetFailedPaths[filePath] = true;
            this._soundAssetAvailablePaths[filePath] = false;
        }, { once: true });

        audio._mappedProbeBound = true;
    },

    playMappedFallback(soundId) {
        const fallback = this._soundAssetFallbacks[soundId];
        if (!fallback) {
            return;
        }

        if (typeof fallback === 'function') {
            fallback();
            return;
        }

        if (typeof fallback === 'string') {
            this.playAudioFile(fallback, soundId, true);
        }
    },

    preloadFileSoundEffects() {
        try {
            Object.entries(this.soundEffects).forEach(([soundId, value]) => {
                if (typeof value !== 'string' || !value) {
                    return;
                }

                
                if (this._pooledSounds.includes(soundId)) {
                    if (!this.audioPool[soundId]) {
                        this.audioPool[soundId] = [];
                        this.audioPoolIndex[soundId] = 0;
                        for (let i = 0; i < this.audioPoolSize; i++) {
                            const audio = document.createElement('audio');
                            audio.src = value;
                            audio.preload = 'auto';
                            audio.volume = this.masterVolume;
                            audio.setAttribute('playsinline', '');
                            if (typeof audio.load === 'function') {
                                audio.load();
                            }
                            this.audioPool[soundId].push(audio);
                        }
                    }
                    return;
                }

                if (this.audioCache[soundId]) {
                    return;
                }

                const audio = document.createElement('audio');
                audio.src = value;
                audio.preload = 'auto';
                audio.volume = this.masterVolume;
                audio.setAttribute('playsinline', '');
                this.audioCache[soundId] = audio;

                if (typeof audio.load === 'function') {
                    audio.load();
                }
            });

        } catch (error) {
            console.warn('⚠️ Не удалось предзагрузить SFX:', error);
        }
    },

    


     getGp() {
         return window.GP || window.__GP_SDK_INSTANCE || window.gp || null;
     },

     _readSdkFlag(target, key, fallback = null) {
         if (!target) {
             return fallback;
         }

         const value = target[key];

         if (typeof value === 'function') {
             try {
                 const result = value.call(target);
                 if (typeof result === 'boolean') {
                     return result;
                 }
                 if (typeof result === 'number') {
                     return result !== 0;
                 }
                 if (typeof result === 'string') {
                     const normalized = result.trim().toLowerCase();
                     if (normalized === 'true' || normalized === '1' || normalized === 'yes') {
                         return true;
                     }
                     if (normalized === 'false' || normalized === '0' || normalized === 'no') {
                         return false;
                     }
                 }
                 return fallback;
             } catch (error) {
                 console.warn('⚠️ Ошибка чтения SDK-флага ' + key + ':', error);
                 return fallback;
             }
         }

         if (value === undefined || value === null) {
             return fallback;
         }

         if (typeof value === 'boolean') {
             return value;
         }
         if (typeof value === 'number') {
             return value !== 0;
         }
         if (typeof value === 'string') {
             const normalized = value.trim().toLowerCase();
             if (normalized === 'true' || normalized === '1' || normalized === 'yes') {
                 return true;
             }
             if (normalized === 'false' || normalized === '0' || normalized === 'no') {
                 return false;
             }
         }

         return fallback;
     },

     syncStateWithSDK(attempt = 0) {
         const gp = this.getGp();
         if (!gp || !gp.sounds) {
             if (attempt < 20) {
                 setTimeout(() => this.syncStateWithSDK(attempt + 1), 250);
             }
             return;
         }

        const muted = this._readSdkFlag(gp.sounds, 'isMuted', null);
        const sfxMuted = this._readSdkFlag(gp.sounds, 'isSFXMuted', null);
        const musicMuted = this._readSdkFlag(gp.sounds, 'isMusicMuted', null);

        if (typeof muted === 'boolean') {
            this.setMutedBySDK(muted);
        }
        if (typeof sfxMuted === 'boolean') {
            this.setSFXMutedBySDK(sfxMuted);
        }
        if (typeof musicMuted === 'boolean') {
            this.setMusicMutedBySDK(musicMuted);
        }

        if (attempt < 8) {
            setTimeout(() => this.syncStateWithSDK(attempt + 1), 300);
        }
     },
     
     



     setupAudioUnlock() {
          if (this._audioUnlockHandlersBound) {
              return;
          }

          const unlockHandler = () => {
              this.unlockAudio();
              
              document.removeEventListener('click', unlockHandler, true);
              document.removeEventListener('touchstart', unlockHandler, true);
              document.removeEventListener('keydown', unlockHandler, true);
              this._audioUnlockHandlersBound = false;
              this._audioUnlockHandler = null;
          };

          this._audioUnlockHandler = unlockHandler;
         
          document.addEventListener('click', unlockHandler, true);
          document.addEventListener('touchstart', unlockHandler, true);
          document.addEventListener('keydown', unlockHandler, true);
          this._audioUnlockHandlersBound = true;
         
         console.log('🎧 Ожидание первого взаимодействия для разблокировки аудио');
     },
     
     




     unlockAudio() {
         if (this.audioUnlocked) {
             return;
         }
         
         console.log('🔓 Попытка разблокировки аудио...');
         
         
          try {
              const AudioContext = window.AudioContext || window.webkitAudioContext;
              if (AudioContext) {
                  const audioContext = new AudioContext();
                  if (audioContext.state === 'suspended' && typeof audioContext.resume === 'function') {
                      audioContext.resume().catch(() => {});
                  }
                  const oscillator = audioContext.createOscillator();
                  const gainNode = audioContext.createGain();
                 
                 oscillator.connect(gainNode);
                 gainNode.connect(audioContext.destination);
                 
                 gainNode.gain.value = 0.01; 
                 oscillator.frequency.value = 20; 
                 
                  oscillator.start(audioContext.currentTime);
                  oscillator.stop(audioContext.currentTime + 0.01); 

                   console.log('✅ Аудио разблокировано (Web Audio API)');
                   this.audioUnlocked = true;

                   
                    if (this._audioContext && this._audioContext.state === 'suspended') {
                        this._audioContext.resume().catch(() => {});
                    }

                    if (this._musicAudioContext && this._musicAudioContext.state === 'suspended') {
                        this._musicAudioContext.resume().catch(() => {});
                    }

                   if (this.soundEnabled && this.backgroundMusic && this.backgroundMusic.paused) {
                       this.startBackgroundMusic();
                   }

                   audioContext.close().catch(() => {});
              } else {
                  
                  console.warn('⚠️ Web Audio API не поддерживается, пробуем альтернативный метод');
                  this.audioUnlocked = true;
                 
                  if (this.soundEnabled && this.backgroundMusic && this.backgroundMusic.paused) {
                      this.startBackgroundMusic();
                  }
             }
         } catch (err) {
             console.warn('⚠️ Не удалось разблокировать аудио:', err);
             
             this.audioUnlocked = true;
             
             if (this.soundEnabled && this.backgroundMusic && this.backgroundMusic.paused) {
                 this.startBackgroundMusic();
             }
         }
     },
    
    
    _isMenuMusic: true,

    


    createBackgroundMusic() {
        const initialTrack = this.musicTracks[this.currentMusicTrack] || this.menuMusicTrack || '';

        this.backgroundMusic = {
            paused: true,
            currentTime: 0,
            src: initialTrack,
            volume: this.backgroundMusicVolume
        };

        this._musicCurrentTrackPath = initialTrack;
        this._musicTrackPauseOffset = 0;
        this._musicIsPlaying = false;

        this.ensureMusicAudioContext();
        console.log('🎵 Фоновая музыка создана (WebAudio)');
    },

    ensureMusicAudioContext() {
        const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextCtor) {
            return null;
        }

        if (!this._musicAudioContext || this._musicAudioContext.state === 'closed') {
            this._musicAudioContext = new AudioContextCtor();
            this._musicGainNode = null;
        }

        if (!this._musicGainNode) {
            this._musicGainNode = this._musicAudioContext.createGain();
            this._musicGainNode.gain.value = this.backgroundMusicVolume;
            this._musicGainNode.connect(this._musicAudioContext.destination);
        }

        return this._musicAudioContext;
    },

    async _decodeMusicAudioData(context, audioBuffer) {
        if (!context || !audioBuffer) {
            return null;
        }

        try {
            const decoded = context.decodeAudioData(audioBuffer.slice(0));
            if (decoded && typeof decoded.then === 'function') {
                return await decoded;
            }
        } catch (_) {
            
        }

        return await new Promise((resolve, reject) => {
            try {
                context.decodeAudioData(audioBuffer.slice(0), resolve, reject);
            } catch (error) {
                reject(error);
            }
        });
    },

    async loadMusicTrackBuffer(trackPath) {
        if (!trackPath) {
            return null;
        }

        if (this._musicTrackBuffers[trackPath]) {
            return this._musicTrackBuffers[trackPath];
        }

        if (this._musicTrackLoadPromises[trackPath]) {
            return this._musicTrackLoadPromises[trackPath];
        }

        const context = this.ensureMusicAudioContext();
        if (!context) {
            return null;
        }

        const loadPromise = (async () => {
            const response = await fetch(trackPath, { cache: 'force-cache' });
            if (!response.ok) {
                throw new Error(`Music asset load failed: ${trackPath} (${response.status})`);
            }

            const binary = await response.arrayBuffer();
            const decoded = await this._decodeMusicAudioData(context, binary);
            this._musicTrackBuffers[trackPath] = decoded;
            return decoded;
        })();

        this._musicTrackLoadPromises[trackPath] = loadPromise;

        try {
            return await loadPromise;
        } finally {
            delete this._musicTrackLoadPromises[trackPath];
        }
    },

    _getTrackDuration(trackPath) {
        const buffer = trackPath ? this._musicTrackBuffers[trackPath] : null;
        if (!buffer || !Number.isFinite(buffer.duration) || buffer.duration <= 0) {
            return 0;
        }

        return buffer.duration;
    },

    _stopMusicSource(resetOffset = false) {
        const source = this._musicSourceNode;
        this._musicSourceNode = null;
        this._musicIsPlaying = false;

        if (source) {
            try {
                source.onended = null;
            } catch (_) {
                
            }
            try {
                source.stop(0);
            } catch (_) {
                
            }
            try {
                source.disconnect();
            } catch (_) {
                
            }
        }

        this._musicTrackStartedAt = 0;

        if (resetOffset) {
            this._musicTrackPauseOffset = 0;
        }

        if (this.backgroundMusic) {
            this.backgroundMusic.paused = true;
            this.backgroundMusic.currentTime = this._musicTrackPauseOffset;
        }
    },

    async _startMusicTrack(trackPath, startOffset = 0) {
        const context = this.ensureMusicAudioContext();
        if (!context || !trackPath) {
            return false;
        }

        if (context.state === 'suspended') {
            try {
                await context.resume();
            } catch (_) {
                return false;
            }
        }

        const buffer = await this.loadMusicTrackBuffer(trackPath);
        if (!buffer) {
            return false;
        }

        this._stopMusicSource(false);

        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(this._musicGainNode);

        const maxOffset = Math.max(0, buffer.duration - 0.05);
        const safeOffset = Math.max(0, Math.min(Number(startOffset) || 0, maxOffset));

        this._musicCurrentTrackPath = trackPath;
        this._musicTrackPauseOffset = safeOffset;
        this._musicTrackStartedAt = context.currentTime - safeOffset;
        this._musicSourceNode = source;
        this._musicIsPlaying = true;

        if (this.backgroundMusic) {
            this.backgroundMusic.src = trackPath;
            this.backgroundMusic.currentTime = safeOffset;
            this.backgroundMusic.paused = false;
        }

        source.onended = () => {
            if (this._musicSourceNode !== source) {
                return;
            }

            this._musicSourceNode = null;
            this._musicIsPlaying = false;
            this._musicTrackStartedAt = 0;
            this._musicTrackPauseOffset = 0;

            if (this.backgroundMusic) {
                this.backgroundMusic.currentTime = 0;
                this.backgroundMusic.paused = true;
            }

            if (this._isMenuMusic) {
                this.startBackgroundMusic();
            } else {
                this.playRandomMusicTrack();
            }
        };

        source.start(0, safeOffset);
        return true;
    },
    
    


    generateStandardSounds() {
        if (!window.AudioContext && !window.webkitAudioContext) {
            console.warn('⚠️ Web Audio API не поддерживается');
            return;
        }
        
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        this._audioContext = audioContext;
        
        
        this.soundEffects.click = () => this.playBeep(audioContext, 400, 0.1);
        
        
        this.soundEffects.success = () => this.playSuccessSound(audioContext);
        
        
        this.soundEffects.error = () => this.playErrorSound(audioContext);
        
        
        this.soundEffects.waveStart = () => this.playBeep(audioContext, 500, 0.15, 0.3);
        
        
        this.soundEffects.waveEnd = () => this.playWaveRewardSound(audioContext);
        
        
        this.soundEffects.gameOver = () => this.playErrorSound(audioContext);
        
        
        this.soundEffects.victory = () => this.playVictorySound(audioContext);
        
        
        this.soundEffects.buttonClick = () => this.playBeep(audioContext, 350, 0.08);
        
        
        this.soundEffects.levelUp = () => this.playSuccessSound(audioContext);
        
        
        this.soundEffects.moneyGain = () => this.playBeep(audioContext, 600, 0.12);
        
        
        this.soundEffects.healthLoss = () => this.playErrorSound(audioContext);
        
        
        this.soundEffects.towerBuild = () => this.playBeep(audioContext, 450, 0.15, 0.4);
        
        
        this.soundEffects.towerUpgrade = () => this.playSuccessSound(audioContext);
        
        
        this.soundEffects.thunder = () => this.playBeep(audioContext, 80, 0.4, 0);
        
        
        this.soundEffects.collect = () => this.playBeep(audioContext, 700, 0.08);
        
        
        this.soundEffects.crystal = () => {
            this.playBeep(audioContext, 900, 0.1, 0);
            this.playBeep(audioContext, 1200, 0.1, 0.08);
        };
        
        
        this.soundEffects.upgrade = () => this.playSuccessSound(audioContext);

        
        this.soundEffects.arrowHit = () => this.playArrowHitSound(audioContext);

        
        this.soundEffects.arrowCrit = () => this.playArrowCritSound(audioContext);

        
        this.soundEffects.enemyDeathSmall = () => this.playEnemyDeathSound(audioContext, 'small');
        this.soundEffects.enemyDeathElite = () => this.playEnemyDeathSound(audioContext, 'elite');
        this.soundEffects.enemyDeathBoss = () => this.playEnemyDeathSound(audioContext, 'boss');

        
        this.soundEffects.bossWarningStinger = () => this.playBossWarningSound(audioContext);

        
        this.soundEffects.waveRewardStinger = () => this.playWaveRewardSound(audioContext);

        
        this.soundEffects.traderArrival = () => this.playTraderArrivalSound(audioContext);

        
        this.soundEffects.chainLightning = () => this.playChainLightningSound(audioContext);
        this.soundEffects.freezeBurst = () => this.playFreezeBurstSound(audioContext);
        this.soundEffects.smokeDeploy = () => this.playSmokeDeploySound(audioContext);
        this.soundEffects.explosiveImpact = () => this.playExplosiveImpactSound(audioContext);
        this.soundEffects.thunderStrikeImpact = () => this.playThunderStrikeImpactSound(audioContext);
        this.soundEffects.enemyHealCast = () => this.playEnemyHealCastSound(audioContext);
        this.soundEffects.enemySplit = () => this.playEnemySplitSound(audioContext);

        
        this.soundEffects.uiOpenModal = () => this.playOpenModalSound(audioContext);
        this.soundEffects.uiCloseModal = () => this.playCloseModalSound(audioContext);
        
        console.log('🎵 Стандартные звуки сгенерированы');
    },
    
    


    playBeep(audioContext, frequency = 440, duration = 0.1, delay = 0) {
        if (!this.soundEnabled) return;
        
        const now = audioContext.currentTime + delay;
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);
        
        oscillator.start(now);
        oscillator.stop(now + duration);
    },

    playTraderArrivalSound(audioContext) {
        if (!this.soundEnabled) return;
        this.playBeep(audioContext, 520, 0.08, 0);
        this.playBeep(audioContext, 780, 0.08, 0.07);
        this.playBeep(audioContext, 980, 0.1, 0.15);
    },
    
    


    playSuccessSound(audioContext) {
        if (!this.soundEnabled) return;
        
        const now = audioContext.currentTime;
        this.playBeep(audioContext, 600, 0.15, 0);
        this.playBeep(audioContext, 800, 0.15, 0.1);
    },
    
    


    playErrorSound(audioContext) {
        if (!this.soundEnabled) return;
        
        const now = audioContext.currentTime;
        this.playBeep(audioContext, 400, 0.15, 0);
        this.playBeep(audioContext, 250, 0.15, 0.1);
    },
    
    


    playVictorySound(audioContext) {
        if (!this.soundEnabled) return;
        
        this.playBeep(audioContext, 600, 0.15, 0);
        this.playBeep(audioContext, 800, 0.15, 0.15);
        this.playBeep(audioContext, 1000, 0.2, 0.3);
    },

    playArrowHitSound(audioContext) {
        if (!this.soundEnabled) return;

        const frequency = 320 + Math.random() * 140;
        this.playBeep(audioContext, frequency, 0.055, 0);
        this.playBeep(audioContext, frequency * 0.7, 0.04, 0.02);
    },

    playArrowCritSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 980, 0.06, 0);
        this.playBeep(audioContext, 1280, 0.08, 0.05);
    },

    playEnemyDeathSound(audioContext, tier = 'small') {
        if (!this.soundEnabled) return;

        if (tier === 'boss') {
            this.playBeep(audioContext, 115, 0.22, 0);
            this.playBeep(audioContext, 82, 0.26, 0.08);
            return;
        }

        if (tier === 'elite') {
            this.playBeep(audioContext, 160, 0.11, 0);
            this.playBeep(audioContext, 120, 0.1, 0.05);
            return;
        }

        this.playBeep(audioContext, 210, 0.07, 0);
    },

    playBossWarningSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 260, 0.14, 0);
        this.playBeep(audioContext, 190, 0.14, 0.12);
        this.playBeep(audioContext, 320, 0.16, 0.24);
    },

    playWaveRewardSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 620, 0.09, 0);
        this.playBeep(audioContext, 760, 0.1, 0.08);
        this.playBeep(audioContext, 920, 0.11, 0.18);
    },

    playChainLightningSound(audioContext) {
        if (!this.soundEnabled) return;

        const baseFreq = 760 + Math.random() * 150;
        this.playBeep(audioContext, baseFreq, 0.04, 0);
        this.playBeep(audioContext, baseFreq + 170, 0.03, 0.02);
    },

    playFreezeBurstSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 980, 0.045, 0);
        this.playBeep(audioContext, 650, 0.08, 0.03);
    },

    playSmokeDeploySound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 210, 0.08, 0);
        this.playBeep(audioContext, 170, 0.1, 0.04);
    },

    playExplosiveImpactSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 120, 0.11, 0);
        this.playBeep(audioContext, 180, 0.08, 0.02);
    },

    playThunderStrikeImpactSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 72, 0.26, 0);
        this.playBeep(audioContext, 140, 0.12, 0.04);
        this.playBeep(audioContext, 980, 0.05, 0.15);
    },

    playEnemyHealCastSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 430, 0.07, 0);
        this.playBeep(audioContext, 560, 0.08, 0.05);
    },

    playEnemySplitSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 300, 0.06, 0);
        this.playBeep(audioContext, 240, 0.07, 0.04);
    },

    playOpenModalSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 520, 0.05, 0);
        this.playBeep(audioContext, 680, 0.06, 0.03);
    },

    playCloseModalSound(audioContext) {
        if (!this.soundEnabled) return;

        this.playBeep(audioContext, 420, 0.05, 0);
        this.playBeep(audioContext, 320, 0.06, 0.03);
    },

     


     setupVolumeControl() {
         
         if (!document.body) {
             console.warn('⚠️ document.body не готов, контроль громкости будет создан позже');
             setTimeout(() => this.setupVolumeControl(), 100);
             return;
         }
         
         
         if (document.getElementById('volumeControl')) {
             return;
         }
         
         
         const volumeContainer = document.createElement('div');
         volumeContainer.id = 'volumeControl';
         volumeContainer.style.cssText = `
             position: fixed;
             top: 10px;
             left: 10px;
             z-index: 1000;
             display: flex;
             align-items: center;
             gap: 8px;
             background: rgba(0, 0, 0, 0.5);
             padding: 8px 12px;
             border-radius: 4px;
         `;

         
         const soundButton = document.createElement('button');
         soundButton.id = 'soundToggle';
         soundButton.className = 'sound-toggle';
         soundButton.textContent = this.soundEnabled ? '🔊' : '🔇';
         soundButton.style.cssText = `
             background: none;
             border: none;
             cursor: pointer;
             font-size: 18px;
             padding: 0;
             transition: all 0.3s ease;
         `;

         soundButton.addEventListener('click', () => {
             this.toggleSound();
             soundButton.textContent = this.soundEnabled ? '🔊' : '🔇';
         });

         volumeContainer.appendChild(soundButton);
         document.body.appendChild(volumeContainer);
     },

     


      enableSound() {
           
           if (this._userMutedManually) {
               console.log('🔇 enableSound() пропущен — пользователь выключил звук');
               return;
           }

            this.soundEnabled = true;
            this._shouldMuteSFX = false;

           if (!this.audioUnlocked) {
               this.unlockAudio();
           }

           console.log('🔊 Звук включен (SDK)');
           this.resumeAll();

           if (window.UI && UI.updateSoundButtons) {
               UI.updateSoundButtons();
           }
      },

     


      disableSound() {
          this.soundEnabled = false;
          console.log('🔇 Звук отключен (SDK)');
          this.pauseAll();

          if (window.UI && UI.updateSoundButtons) {
              UI.updateSoundButtons();
          }
     },

    


    toggleSound() {
        this.toggleMute();
    },

    


    toggleMute() {
        if (!this.audioUnlocked) {
            this.unlockAudio();
        }

        const gp = this.getGp();
        if (!gp || !gp.sounds) {
            const targetMuted = this.isSoundEnabled();
            this._userMutedManually = targetMuted;
            if (targetMuted) {
                this.disableSound();
                this.pauseBackgroundMusic();
            } else {
                this.enableSound();
                this.resumeBackgroundMusic();
            }
            return !targetMuted;
        }

        const targetMuted = this.isSoundEnabled();
        this._userMutedManually = targetMuted;

        if (targetMuted) {
            if (typeof gp.sounds.muteSFX === 'function') {
                gp.sounds.muteSFX();
            }
            if (typeof gp.sounds.muteMusic === 'function') {
                gp.sounds.muteMusic();
            }
        } else {
            if (typeof gp.sounds.unmuteSFX === 'function') {
                gp.sounds.unmuteSFX();
            }
            if (typeof gp.sounds.unmuteMusic === 'function') {
                gp.sounds.unmuteMusic();
            }
        }

        setTimeout(() => this.syncStateWithSDK(), 80);

        return !targetMuted;
    },

    



    setMutedBySDK(muted) {
        this._sdkMasterMuted = Boolean(muted);

        if (this._sdkMasterMuted) {
            this.disableSound();
        } else {
            if (!this._userMutedManually) {
                this.soundEnabled = !(this.sfxMutedBySDK || this.musicMutedBySDK);
                this.resumeAll();
            } else {
                console.log('🔇 SDK unmute пропущен — пользователь сам выключил звук');
            }
        }

        if (window.UI && UI.updateSoundButtons) {
            UI.updateSoundButtons();
        }
    },

    



    setSFXMutedBySDK(muted) {
        this.sfxMutedBySDK = Boolean(muted);
        this.soundEnabled = !(this._sdkMasterMuted || this.sfxMutedBySDK || this.musicMutedBySDK);

        if (this.sfxMutedBySDK) {
            this._shouldMuteSFX = true;
        } else if (!this._sdkMasterMuted) {
            this._shouldMuteSFX = false;
        }

        if (window.UI && UI.updateSoundButtons) {
            UI.updateSoundButtons();
        }
    },

    



    setMusicMutedBySDK(muted) {
        this.musicMutedBySDK = Boolean(muted);
        this.soundEnabled = !(this._sdkMasterMuted || this.sfxMutedBySDK || this.musicMutedBySDK);
        if (this.musicMutedBySDK) {
            this.pauseBackgroundMusic();
        } else if (!this._sdkMasterMuted) {
            this.resumeBackgroundMusic();
        }

        if (window.UI && UI.updateSoundButtons) {
            UI.updateSoundButtons();
        }
    },

    


    isSoundEnabled() {
        const gp = this.getGp();
        if (gp && gp.sounds) {
            const sfxMuted = this._readSdkFlag(gp.sounds, 'isSFXMuted', null);
            const musicMuted = this._readSdkFlag(gp.sounds, 'isMusicMuted', null);
            if (typeof sfxMuted === 'boolean' || typeof musicMuted === 'boolean') {
                return !(Boolean(sfxMuted) || Boolean(musicMuted));
            }
        }

        return !(this._sdkMasterMuted || this.sfxMutedBySDK || this.musicMutedBySDK || !this.soundEnabled);
    },

    



    isPlaybackBlocked(includeInternalFlag = true) {
        const gp = this.getGp();
        const ads = gp && gp.ads ? gp.ads : null;

        const adsPlayingByManager = Boolean(
            window.AdsManager
            && typeof AdsManager.isAnyAdPlaying === 'function'
            && AdsManager.isAnyAdPlaying()
        );

        const sdkAdPlaying = Boolean(
            this._readSdkFlag(ads, 'isFullscreenPlaying', false)
            || this._readSdkFlag(ads, 'isRewardedPlaying', false)
            || this._readSdkFlag(ads, 'isPreloaderPlaying', false)
        );

        const hasFocus = typeof document.hasFocus === 'function' ? document.hasFocus() : true;
        const lifecycleBlocked = Boolean(window.__gpLifecyclePaused) || document.hidden || !hasFocus;

        return Boolean(
            (includeInternalFlag && this._shouldMuteSFX) ||
            adsPlayingByManager ||
            sdkAdPlaying ||
            lifecycleBlocked
        );
    },

     



       pauseAll() {
           console.log('⏸️ Паузим аудио...');

           if (this._allPaused) {
               console.log('⏸️ Аудио уже на паузе, пропускаем');
               return;
           }

           this._allPaused = true;
           this._shouldMuteSFX = true;
           this.pausedAudioElements = [];

           this.pauseBackgroundMusic();

           Object.entries(this.audioCache).forEach(([, audio]) => {
               if (audio && !audio.paused) {
                   this.pausedAudioElements.push(audio);
                   audio.pause();
               }
           });

           if (this.audioPool) {
               Object.entries(this.audioPool).forEach(([, pool]) => {
                   pool.forEach((audio) => {
                       if (audio && !audio.paused) {
                           this.pausedAudioElements.push(audio);
                           audio.pause();
                       }
                   });
               });
           }

           const audioElements = document.querySelectorAll('audio');
           audioElements.forEach((audio) => {
               if (!audio.paused && !this.pausedAudioElements.includes(audio)) {
                   this.pausedAudioElements.push(audio);
                   audio.pause();
               }
           });

           if (this._audioContext && this._audioContext.state === 'running') {
               this._audioContext.suspend().catch(() => {});
           }

           console.log(`⏸️ ЗАБЛОКИРОВАНО ${this.pausedAudioElements.length} аудио элементов`);
      },

      


        resumeAll() {
            console.log('▶️ Возобновляем аудио...');

            const hasFocus = typeof document.hasFocus === 'function' ? document.hasFocus() : true;
            if (document.hidden || !hasFocus) {
                this._shouldMuteSFX = true;
                return;
            }

            if (this._userMutedManually) {
                console.log('🔇 Звук выключен пользователем, восстановление пропущено');
                this._allPaused = false;
                this.pausedAudioElements = [];
                return;
            }

            if (!this.soundEnabled) {
                console.log('🔇 Звук отключен, восстановление не требуется');
                this._allPaused = false;
                this.pausedAudioElements = [];
                return;
            }

            if (this.isPlaybackBlocked(false)) {
                this._shouldMuteSFX = true;
                console.log('⛔ Воспроизведение заблокировано (ads/lifecycle), resumeAll пропущен');
                return;
            }

            this._shouldMuteSFX = false;
            this._allPaused = false;

            if (this._audioContext) {
                if (this._audioContext.state === 'suspended' || this._audioContext.state === 'interrupted') {
                    this._audioContext.resume().then(() => {
                        console.log('✅ AudioContext возобновлен');
                    }).catch((e) => {
                        console.warn('⚠️ Не удалось возобновить AudioContext:', e);
                    });
                }
            }

            if (this.pausedAudioElements && this.pausedAudioElements.length > 0) {
                this.pausedAudioElements.forEach((audio) => {
                    if (audio && audio.paused) {
                        audio.play().catch((e) => {
                            console.warn('⚠️ Не удалось возобновить аудио:', e);
                        });
                    }
                });
                console.log(`▶️ Возобновлено ${this.pausedAudioElements.length} аудио элементов`);
                this.pausedAudioElements = [];
            }

            this.resumeBackgroundMusic();
       },

    


    setVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
        
        
        document.querySelectorAll('audio').forEach(audio => {
            audio.volume = this.masterVolume;
        });

        console.log(`🔊 Громкость установлена на ${Math.round(this.masterVolume * 100)}%`);
    },

    


    getVolume() {
        return this.masterVolume;
    },

    getSoundCooldown(soundId) {
        if (!soundId || !this._soundCooldowns) {
            return 0;
        }
        return Math.max(0, Number(this._soundCooldowns[soundId]) || 0);
    },

    canPlaySoundNow(soundId) {
        const cooldown = this.getSoundCooldown(soundId);
        if (cooldown <= 0) {
            return true;
        }

        const now = Date.now();
        const lastPlayedAt = this._lastSoundPlayedAt[soundId] || 0;
        if (now - lastPlayedAt < cooldown) {
            return false;
        }

        this._lastSoundPlayedAt[soundId] = now;
        return true;
    },

    getPlaybackConfig(soundId) {
        if (soundId === 'shoot') {
            return {
                volumeMultiplier: 0.85 + Math.random() * 0.2,
                playbackRate: 0.93 + Math.random() * 0.16
            };
        }

        return {
            volumeMultiplier: 1,
            playbackRate: 1
        };
    },

    


    playSound(soundId) {
        
        if (this._shouldMuteSFX && !this.isPlaybackBlocked(false)) {
            this._shouldMuteSFX = false;
        }

        
        
        
        
        if (!this.soundEnabled || this.sfxMutedBySDK || this.isPlaybackBlocked()) {
            if (this._shouldMuteSFX && soundId === 'shoot') {
                const adsPlayingByManager = Boolean(
                    window.AdsManager
                    && typeof AdsManager.isAnyAdPlaying === 'function'
                    && AdsManager.isAnyAdPlaying()
                );
                console.log(`🔇 Звук стрельбы заблокирован (shouldMuteSFX: ${this._shouldMuteSFX}, adPlaying: ${adsPlayingByManager})`);
            }
            return;
        }

        if (!this.canPlaySoundNow(soundId)) {
            return;
        }

        if (this.tryPlayMappedSound(soundId)) {
            return;
        }

        
        if (this.soundEffects[soundId]) {
            const sound = this.soundEffects[soundId];
            
            
            if (typeof sound === 'function') {
                sound();
                console.log(`▶️ Звуковой эффект: ${soundId}`);
                return;
            }
            
            
            if (typeof sound === 'string') {
                this.playAudioFile(sound, soundId, true);
                return;
            }
        }

        
        const audio = document.getElementById(soundId);
        if (audio && audio.tagName === 'AUDIO') {
            audio.currentTime = 0;
            audio.play().catch(e => {
                console.warn(`Не удалось воспроизвести звук ${soundId}:`, e);
            });
        }
    },
    
    


    playAudioFile(filePath, soundId, skipCooldownCheck = false, cacheKey = null, onError = null) {
        
        if (this._shouldMuteSFX && !this.isPlaybackBlocked(false)) {
            this._shouldMuteSFX = false;
        }

        
        if (!this.soundEnabled || this.sfxMutedBySDK || this.isPlaybackBlocked()) {
            return;
        }

        if (!skipCooldownCheck && soundId && !this.canPlaySoundNow(soundId)) {
            return;
        }

        const playbackConfig = this.getPlaybackConfig(soundId);

        const resolvedCacheKey = cacheKey || soundId || filePath;
        const isMappedAssetPath = typeof filePath === 'string' && filePath.indexOf(this._soundAssetBasePath) === 0;
        const hasExplicitCacheKey = typeof cacheKey === 'string' && cacheKey.length > 0;

        if (isMappedAssetPath && hasExplicitCacheKey && this._pooledSounds.includes(soundId) && !this.audioPool[resolvedCacheKey]) {
            this.audioPool[resolvedCacheKey] = [];
            this.audioPoolIndex[resolvedCacheKey] = 0;
            for (let i = 0; i < this.audioPoolSize; i++) {
                const poolAudio = document.createElement('audio');
                poolAudio.src = filePath;
                poolAudio.preload = 'auto';
                poolAudio.volume = this.masterVolume;
                poolAudio.setAttribute('playsinline', '');
                this.registerMappedAudioProbes(poolAudio, filePath);
                if (typeof poolAudio.load === 'function') {
                    poolAudio.load();
                }
                this.audioPool[resolvedCacheKey].push(poolAudio);
            }
        }

        const poolKey = hasExplicitCacheKey
            ? resolvedCacheKey
            : (this.audioPool[resolvedCacheKey] ? resolvedCacheKey : soundId);

        
        if (poolKey && this.audioPool[poolKey] && this.audioPool[poolKey].length > 0) {
            const pool = this.audioPool[poolKey];
            const idx = (this.audioPoolIndex[poolKey] || 0) % pool.length;
            this.audioPoolIndex[poolKey] = idx + 1;
            const audio = pool[idx];
            audio.currentTime = 0;
            audio.volume = Math.max(0, Math.min(1, this.masterVolume * playbackConfig.volumeMultiplier));
            audio.playbackRate = playbackConfig.playbackRate;
            const playPromise = audio.play();
            if (playPromise && typeof playPromise.then === 'function') {
                playPromise.then(() => {
                    if (isMappedAssetPath) {
                        this._soundAssetAvailablePaths[filePath] = true;
                    }
                }).catch(error => {
                    if (typeof onError === 'function') {
                        onError(error);
                    }
                });
            } else {
                if (isMappedAssetPath) {
                    this._soundAssetAvailablePaths[filePath] = true;
                }
            }

            return;
        }
        
        let audio = this.audioCache[resolvedCacheKey];
        
        if (!audio) {
            audio = document.createElement('audio');
            audio.src = filePath;
            audio.preload = 'auto';
            audio.volume = this.masterVolume;
            audio.setAttribute('playsinline', '');
            if (isMappedAssetPath) {
                this.registerMappedAudioProbes(audio, filePath);
            }
            this.audioCache[resolvedCacheKey] = audio;
            if (typeof audio.load === 'function') {
                audio.load();
            }
        }
        
        
        if (this.isPlaybackBlocked()) {
            return;
        }
        
        audio.currentTime = 0;
        audio.volume = Math.max(0, Math.min(1, this.masterVolume * playbackConfig.volumeMultiplier));
        audio.playbackRate = playbackConfig.playbackRate;
        const playPromise = audio.play();

        if (playPromise && typeof playPromise.then === 'function') {
            playPromise.then(() => {
                if (isMappedAssetPath) {
                    this._soundAssetAvailablePaths[filePath] = true;
                }
            }).catch(e => {
                if (typeof onError === 'function') {
                    onError(e);
                }
                if (isMappedAssetPath && this.shouldMarkSoundAssetFailed(e)) {
                    return;
                }
                if (!this._shouldMuteSFX) {
                    console.warn(`Не удалось воспроизвести ${filePath}:`, e);
                }
            });
            return;
        }

        if (isMappedAssetPath) {
            this._soundAssetAvailablePaths[filePath] = true;
        }
    },
    
     



     startBackgroundMusic() {
          if (this.isStartupPreloaderPending()) {
              this.deferMusicUntilPreloaderFinished();
              console.log('⏳ Музыка отложена до завершения startup preloader');
              return;
          }

          this._pendingMusicStartAfterPreloader = false;

          
          if (!this.audioUnlocked) {
              console.warn('⚠️ Аудио ещё не разблокировано. Ожидаем первого клика пользователя.');
              return;
          }

          if (!this.soundEnabled || this.musicMutedBySDK || this.isPlaybackBlocked()) {
              console.log('🔇 Звук отключен');
              return;
          }

          if (!this.backgroundMusic) {
              console.warn('⚠️ Фоновая музыка не инициализирована');
              return;
          }

          const trackPath = this._musicCurrentTrackPath
              || this.backgroundMusic.src
              || this.musicTracks[this.currentMusicTrack]
              || this.menuMusicTrack;

          if (!trackPath) {
              console.warn('⚠️ Не найден трек фоновой музыки для воспроизведения');
              return;
          }

          if (this._musicIsPlaying && this._musicCurrentTrackPath === trackPath) {
              return;
          }

          this._startMusicTrack(trackPath, this._musicTrackPauseOffset)
              .then((started) => {
                  if (started) {
                      console.log('🎵 Фоновая музыка запущена (WebAudio)');
                  } else {
                      console.warn('⚠️ Не удалось запустить фоновую музыку (WebAudio)');
                  }
              })
              .catch((error) => {
                  console.warn('⚠️ Ошибка запуска фоновой музыки (WebAudio):', error);
              });
     },
    
    


    stopBackgroundMusic() {
        if (!this.backgroundMusic) return;

        this._musicTrackPauseOffset = 0;
        this._stopMusicSource(true);
        this.backgroundMusic.currentTime = 0;
        this.backgroundMusic.paused = true;
        console.log('⏹️ Фоновая музыка остановлена');
    },
    
    


    pauseBackgroundMusic() {
        if (!this.backgroundMusic || this.backgroundMusic.paused || !this._musicIsPlaying) return;

        const context = this.ensureMusicAudioContext();
        const trackDuration = this._getTrackDuration(this._musicCurrentTrackPath);

        if (context && this._musicTrackStartedAt > 0) {
            const elapsed = Math.max(0, context.currentTime - this._musicTrackStartedAt);
            this._musicTrackPauseOffset = trackDuration > 0
                ? Math.min(elapsed, Math.max(0, trackDuration - 0.05))
                : elapsed;
        }

        this._stopMusicSource(false);
        this.backgroundMusic.currentTime = this._musicTrackPauseOffset;
        this.backgroundMusic.paused = true;
        console.log('⏸️ Фоновая музыка на паузе');
    },
    
     


     resumeBackgroundMusic() {
          if (!this.soundEnabled || this.musicMutedBySDK || this.isPlaybackBlocked()) {
               console.log('🔇 Звук отключен, музыка не восстанавливается');
               return;
           }

          if (!this.backgroundMusic) {
              console.warn('⚠️ Фоновая музыка не инициализирована');
              return;
          }

          if (this._musicIsPlaying && !this.backgroundMusic.paused) {
              console.log('▶️ Фоновая музыка уже играет');
              return;
          }

          this.startBackgroundMusic();
     },
    
    


    nextMusicTrack() {
        this.currentMusicTrack = (this.currentMusicTrack + 1) % this.musicTracks.length;
        if (this.backgroundMusic) {
            this._musicCurrentTrackPath = this.musicTracks[this.currentMusicTrack];
            this._musicTrackPauseOffset = 0;
            this.backgroundMusic.src = this._musicCurrentTrackPath;
            this.backgroundMusic.currentTime = 0;
            this._stopMusicSource(true);
            this.startBackgroundMusic();
            console.log(`🎵 Трек ${this.currentMusicTrack + 1}/${this.musicTracks.length}`);
        }
    },
    
     


     previousMusicTrack() {
         this.currentMusicTrack = (this.currentMusicTrack - 1 + this.musicTracks.length) % this.musicTracks.length;
         if (this.backgroundMusic) {
             this._musicCurrentTrackPath = this.musicTracks[this.currentMusicTrack];
             this._musicTrackPauseOffset = 0;
             this.backgroundMusic.src = this._musicCurrentTrackPath;
             this.backgroundMusic.currentTime = 0;
             this._stopMusicSource(true);
             this.startBackgroundMusic();
             console.log(`🎵 Трек ${this.currentMusicTrack + 1}/${this.musicTracks.length}`);
         }
     },
     
      


       playRandomMusicTrack() {
            
            const randomIndex = Math.floor(Math.random() * this.gameplayMusicTracks.length);
            const selectedTrack = this.gameplayMusicTracks[randomIndex];
            
            if (this.backgroundMusic) {
                this._isMenuMusic = false;
                this._musicCurrentTrackPath = selectedTrack;
                this._musicTrackPauseOffset = 0;
                this.backgroundMusic.src = selectedTrack;
                this.backgroundMusic.currentTime = 0;
                const normalizedIndex = this.musicTracks.indexOf(selectedTrack);
                if (normalizedIndex >= 0) {
                    this.currentMusicTrack = normalizedIndex;
                }
                this._stopMusicSource(true);
                this.startBackgroundMusic();
                console.log(`🎵 Игровая музыка: трек ${randomIndex + 1}/${this.gameplayMusicTracks.length} (${selectedTrack})`);
            }
        },
      
      


       playMenuMusic() {
           if (this.backgroundMusic) {
               this._isMenuMusic = true;
               this._musicCurrentTrackPath = this.menuMusicTrack;
               this._musicTrackPauseOffset = 0;
               this.backgroundMusic.src = this.menuMusicTrack;
               this.backgroundMusic.currentTime = 0;
               const normalizedIndex = this.musicTracks.indexOf(this.menuMusicTrack);
               if (normalizedIndex >= 0) {
                   this.currentMusicTrack = normalizedIndex;
               }
               this._stopMusicSource(true);
               this.startBackgroundMusic();
               console.log(`🎵 Музыка меню: ${this.menuMusicTrack}`);
           }
        },
     
     


    setMusicVolume(volume) {
        this.backgroundMusicVolume = Math.max(0, Math.min(1, volume));
        if (this.backgroundMusic) {
            this.backgroundMusic.volume = this.backgroundMusicVolume;
        }
        if (this._musicGainNode) {
            this._musicGainNode.gain.value = this.backgroundMusicVolume;
        }
        console.log(`🎵 Громкость музыки: ${Math.round(this.backgroundMusicVolume * 100)}%`);
    },
    
    


    getMusicVolume() {
        return this.backgroundMusicVolume;
    },

    


    getAvailableSounds() {
        return Object.keys(this.soundEffects);
    }
};


window.AudioManager = AudioManager;


window.addEventListener('load', () => {
    AudioManager.init();
});
