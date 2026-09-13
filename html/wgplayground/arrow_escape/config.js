const GameConfig = {
    // Grid
    cellSize: 0.9,
    cellGap: 0.1,
    gridPadding: 0.5,

    // Arrow colors (vibrant palette)
    arrowColors: [
        '#FF4D8D', // Pink
        '#4DA6FF', // Blue
        '#4DFF88', // Green
        '#FF8C4D', // Orange
        '#B84DFF', // Purple
        '#4DFFF2', // Cyan
        '#FFD94D', // Yellow
        '#FF4D4D', // Red
    ],

    // Arrow rendering
    arrowBodyWidth: 0.14,
    arrowHeadWidth: 0.34,
    arrowHeadLength: 0.32,
    arrowGlowIntensity: 0.05,
    arrowBlockedAlpha: 0.4,
    arrowFreeAlpha: 1.0,

    // Animations
    spawnStagger: 0.12,
    spawnDuration: 0.5,
    spawnEase: 'back.out(1.7)',

    escapeSqueezeDuration: 0.15,
    escapeFlashDuration: 0.1,
    escapeFlyDuration: 0.45,
    escapeFlyEase: 'power3.in',
    escapeFlyDistance: 15,

    shakeDuration: 0.4,
    shakeIntensity: 0.12,
    shakeEase: 'elastic.out(1, 0.3)',

    screenShakeDuration: 0.3,
    screenShakeIntensity: 0.08,

    // Particles
    escapeParticleCount: 40,
    escapeParticleLifetime: 0.6,
    escapeParticleSpeed: 4,
    escapeParticleSize: 0.15,

    wrongTapParticleCount: 15,
    wrongTapParticleLifetime: 0.4,

    // Scoring
    baseScore: 100,
    comboMultiplier: 1.5,
    perfectBonus: 500,

    // Arrow length
    maxArrowCells: 8,

    // Hearts
    maxHearts: 6,
    heartBreakDuration: 0.5,

    // UI
    levelTransitionDuration: 0.6,
    overlayFadeDuration: 0.3,
    floatingTextDuration: 1.2,
    floatingTextRise: 60,
    confettiCount: 80,
    confettiDuration: 2.5,
    starPopDelay: 0.25,
    starPopDuration: 0.4,

    // Colors (UI)
    bgGradientTop: '#1a0a2e',
    bgGradientBottom: '#16213e',
    panelBg: 'rgba(255,255,255,0.08)',
    panelBorder: 'rgba(255,255,255,0.15)',
    accentGold: '#FFD700',
    accentPink: '#FF4D8D',
    accentBlue: '#4DA6FF',
    accentGreen: '#4DFF88',
    heartColor: '#FF4D6D',
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255,255,255,0.7)',

    // Grid background
    gridBgColor: 'rgba(255,255,255,0.03)',
    gridLineColor: 'rgba(255,255,255,0.06)',

    // Background music
    bgMusicFile: 'bg.webm',
    bgMusicVolume: 0.3,

    // Direction vectors
    directions: {
        UP:    { x:  0, y: -1 },
        DOWN:  { x:  0, y:  1 },
        LEFT:  { x: -1, y:  0 },
        RIGHT: { x:  1, y:  0 },
    },
};
