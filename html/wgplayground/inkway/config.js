/**
 * INKWAY — Master Configuration
 * ==============================
 * All buyer-customizable settings in one file.
 * Change these values to reskin, rebrand, or configure the game.
 * No code changes needed anywhere else.
 */

const INKWAY_CONFIG = {
    // ─── BRANDING ───
    GAME_NAME: 'INKWAY',
    TAGLINE: 'Every stroke counts.',
    VERSION: '2.0.0',

    // ─── GAMEPLAY ───
    INK_COST_PER_PIXEL: 0.1,
    ERASE_REFUND_PERCENT: 0.5,
    MIN_STROKE_LENGTH: 10,
    STUCK_TIMEOUT_MS: 3000,
    CAMERA_LERP: 0.05,
    CAMERA_LEAD: 20,

    // ─── STAR THRESHOLDS (ink % used) ───
    STAR_3_MAX_INK: 0.30,
    STAR_2_MAX_INK: 0.60,

    // ─── MONETIZATION & REWARDED ADS ───
    AD_ENABLED: false,                /* Default: false (free instant hints). Set to true to enable Rewarded Video Ad popup! */
    AD_REWARDED_UNIT_ID: 'ca-pub-3940256099942544/5224354917', /* Google AdMob / AdSense / Adsterra Rewarded Placement ID */
    AD_POPUP_TITLE: 'Unlock Level Hint',
    AD_POPUP_MESSAGE: 'Watch a short video ad to reveal the solution path hint for this level!',

    // ─── PHYSICS DEFAULTS ───
    PHYSICS: {
        gravity: { x: 0, y: 1.2 },
        vehicleMotorForce: 0.05,
        vehicleFriction: 0.8,
        drawnLineFriction: 0.7,
        drawnLineRestitution: 0.05,
        springImpulse: { min: 0.08, max: 0.20 },
        boosterForce: { min: 0.06, max: 0.15 },
        timestep: 1000 / 60,
        velocityIterations: 6,
        positionIterations: 4
    },

    // ─── CANVAS ───
    BASE_WIDTH: 1280,
    BASE_HEIGHT: 720,
    MIN_ZOOM: 0.5,
    MAX_ZOOM: 1.5,

    // ─── TOGGLES ───
    HAPTIC_FEEDBACK: true,
    DEBUG_PHYSICS: false
};

// Freeze config to prevent accidental mutation
Object.freeze(INKWAY_CONFIG);
Object.freeze(INKWAY_CONFIG.PHYSICS);
