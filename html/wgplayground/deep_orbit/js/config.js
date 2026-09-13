/**
 * Orbit Deep — locked feel constants (ported verbatim from Orbit Drift's shipping
 * app.js/worldgen.js) plus the deep-sea theme. See PARAMETERS.md — do not re-tune
 * FEEL values without sign-off.
 */

export const FEEL = {
  // ── Corridor (fixed logical width, measured & locked — PARAMETERS §7) ──
  corridorWidth: 554.4,          // world px; = (393 css − 16) / 0.68
  cameraZoom: 0.68,              // world→screen zoom-out (physics unaffected)
  craftScreenYFraction: 0.78,    // locked legacy anchor; downward view mirrors it to 0.22

  // ── Craft geometry / collision body ──
  craftWidth: 26,
  craftHeight: 40,
  craftRadius: 13,               // collision circle

  // ── Underwater steering (PARAMETERS §12/§13/§14 — full replace of the old tilt-slew
  //    model, ported from Neon Deep, then user-tuned live via the debug sliders) ──
  maxTiltDeg: 60,                // degrees, max bank angle
  turnAcceleration: 13,          // rad/s², spring pull of lean toward the requested angle
  maxTurnSpeed: 8.0,             // rad/s, max hull rotation speed
  turnDrag: 8.0,                 // damping on angular velocity
  lateralInertia: 0.18,          // s, time constant for lateral velocity to chase target
  inputReleaseDelay: 0.055,      // s, brief steering continuation after release
  reverseDirectionPenalty: 0.68, // lateral response multiplier while shedding opposite momentum
  directionChangePenalty: 0.08,  // s, neutralizing time before a direct reversal engages

  // ── Water forces (off by default) ──
  waterBuoyancy: 0,              // signed world px/s added to downward travel
  waterCurrent: 0,               // signed world px/s constant lateral force

  // ── Edge behavior (PARAMETERS §11) ──
  edgeBehavior: 'death',         // 'death' (default) | 'clamp' (legacy, no collision)

  // ── Scroll-speed ramp (canonical curve — PARAMETERS §1a) ──
  baseScrollSpeed: 470,
  maxScrollSpeed: 700,
  rampReferenceDistance: 12000,
  progressCap: 0.9,              // caps effective top speed at ≈656 px/s
  idleDriftFactor: 0.12,         // menu/idle scroll = base * this

  // ── Score ──
  metersPerPx: 0.12,

  // ── Hit-stop / shake (juice) ──
  hitStopMinScale: 0.22,
  hitStopRecoverPerSecond: 3.2,
  restartDelay: 0.75,
  shakeDuration: 0.32,
  shakeMagnitude: 9,

  // ── Bubble trail (ported trail) ──
  trailPoolSize: 40,
  trailSpawnInterval: 0.045,
  trailMaxLife: 0.6,
  trailDriftSpeed: 160,          // magnitude; downward dive applies it upward/astern
  trailStartRadius: 5,
  trailEndRadius: 14,

  // ── Impact burst (ported explosion) ──
  explosionCount: 22,
  explosionSpeed: 240,
  explosionLife: 0.55,

  // ── Loop ──
  maxFrameDt: 0.05,              // clamp on a single frame's dt
};

/**
 * One explicit source of truth for every direction-dependent dive transform.
 * World progress increases downward; screen projection follows it; the original
 * upward-pointing craft art is rotated 180° and its visual bank is mirrored.
 */
export const DIVE_ORIENTATION = Object.freeze({
  forwardWorldSign: 1,
  worldToScreenSign: 1,
  craftArtRotation: Math.PI,
  bankVisualSign: -1,
  craftScreenYFraction: 1 - FEEL.craftScreenYFraction,
});

/** Effective scroll speed at a given distance — the ported canonical ramp. */
export function scrollSpeedAt(distance, ramp) {
  const base = ramp?.baseScrollSpeed ?? FEEL.baseScrollSpeed;
  const top = ramp?.maxScrollSpeed ?? FEEL.maxScrollSpeed;
  const ref = ramp?.rampReferenceDistance ?? FEEL.rampReferenceDistance;
  let p = 1 - 1 / (1 + Math.max(0, distance) / ref);
  if (p > FEEL.progressCap) p = FEEL.progressCap;
  if (p < 0) p = 0;
  const t = p * p;
  return base + (top - base) * t;
}

/**
 * "Abyss Stage" theme. All colors are code-drawn; nothing from Orbit Drift.
 *
 * Readability is enforced by a 3-layer VALUE + CHROMA ladder, not by taste. The metric
 * that matters is absolute chroma (max−min channel), which is what actually makes a color
 * "shout" — the previous theme failed because the BACKGROUND had the highest chroma (176)
 * and the highest luminance on screen, so it out-shouted the gameplay and nothing read.
 *
 *   layer          luminance    chroma     hue
 *   ------------------------------------------------------------------
 *   hazard mass    ~20          <= 30      cool dark (silhouette body)
 *   background     14 - 51      <= 55      desaturated blue-teal (recedes)
 *   hazard rim     157 - 204    >= 165     WARM only (amber/coral) — the loudest edge
 *   player hull    ~208 - 236   <= 60      WARM ivory/gold — the brightest thing, the anchor
 *
 * Blue still covers ~70-80% of screen AREA (all water), so the theme stays a blue deep-sea
 * game. Warm is reserved for exactly two things that must never be missed: the player, and
 * what kills them. See PARAMETERS.md for the standing rule.
 */
const PALETTE = {
  // Background family — low chroma so it recedes behind gameplay.
  shallowTeal: '#17394C',
  midTeal: '#133043',
  deepTeal: '#0F2637',
  abyssTeal: '#0B1D2B',
  abyssBlack: '#060F18',
  // Player — warm, brightest on screen.
  hullIvory: '#F5EBD6',
  hullWarmMid: '#E0CFA8',
  hullWarmShade: '#8A7A5C',
  // Hazard warning family — warm, highest chroma on screen.
  coralOrange: '#FF8A3D',
  amberRim: '#FFB74D',
  goldenAmber: '#FFC857',
  // Player signature light only.
  cyanGlow: '#69E8FF',
};

export const THEME = {
  palette: PALETTE,

  // Vertical background gradient per depth zone. `top` is the screen top (toward the
  // surface, so lighter) and `bottom` is ahead/deeper (darker). This is both physically
  // right AND the readability fix: obstacles approach from the BOTTOM of the screen, so
  // the darkest band sits exactly where hazards first appear, maximising warm-rim pop.
  // (The previous theme had this inverted — brightest, highest-chroma band at the bottom.)
  // Deeper zones are uniformly darker and lower-chroma.
  // `tint` is the MID gradient stop and must sit between `top` and `bottom` in luminance.
  zones: [
    { top: PALETTE.shallowTeal, bottom: '#0C2030', tint: '#132E3D' }, // shallow
    { top: PALETTE.midTeal,     bottom: '#0A1B29', tint: '#0E2634' }, // mid
    { top: PALETTE.deepTeal,    bottom: '#081521', tint: '#0A1A26' }, // deep
    { top: PALETTE.abyssTeal,   bottom: PALETTE.abyssBlack, tint: '#091823' }, // abyssal
  ],
  zoneLengthPx: 6000,            // corridor px per depth zone before crossfading
  zoneFadePx: 1400,

  // Accent discipline — one job per hue. Cyan is PLAYER-ONLY; warm is HAZARD-ONLY.
  neon: PALETTE.cyanGlow,        // player signature light (headlight, window, trail) ONLY
  neonWarm: PALETTE.coralOrange, // hazard danger accent ONLY
  neonGold: PALETTE.goldenAmber, // hazard core + UI rewards
  ambient: 'rgba(150, 190, 210, 0.10)', // all background particles/streaks — muted, never cyan
  bubble: 'rgba(190, 236, 250, 0.75)',  // player trail (player light family)
  shaft: 'rgba(150, 190, 210, 0.055)',  // caustic light shafts — muted, low alpha

  sub: {
    hull: PALETTE.hullIvory,     // bright warm ivory — the brightest object on screen
    hullDark: PALETTE.hullWarmShade, // warm shade side (still bright vs. the water)
    hullMid: PALETTE.hullWarmMid,    // warm brushed-metal midtone
    outline: 'rgba(4,10,18,0.85)',   // dark contour separating a bright hull from dark water
    trim: PALETTE.coralOrange,   // coral nose light
    glass: PALETTE.cyanGlow,     // cyan cockpit glow — the player's signature hue
    fin: PALETTE.hullWarmShade,
  },

  // Hazards: dark silhouette mass + a HOT WARM RIM. The rim is the primary read.
  hazard: {
    rock: {
      fill: '#0A1622',                       // dark stone mass (lum ~20)
      fillLit: '#1B3247',                    // lit side for the interior volume gradient
      edge: 'rgba(255,183,77,0.9)',          // hot amber rim — loudest edge on screen
      outline: 'rgba(2,8,16,0.85)',          // dark contour for silhouette definition
    },
    wreckage: {
      fill: '#0D1A26',
      fillLit: '#20364A',
      edge: 'rgba(255,200,87,0.9)',          // golden-amber rim
      outline: 'rgba(2,8,16,0.85)',
      glow: 'rgba(255,183,77,0.28)',         // warm glow in recessed panel gaps
    },
    mine: {
      fill: '#0C151F',
      fillLit: '#1E2E3E',
      edge: 'rgba(255,138,61,0.95)',         // hottest coral rim — most lethal-looking
      outline: 'rgba(2,8,16,0.9)',
      spike: PALETTE.coralOrange,
      core: PALETTE.goldenAmber,             // pulsing golden-amber core
    },
  },

  // Non-interactive side decoration (wide screens) — stays in the muted background band.
  wall: { near: '#12293A', far: PALETTE.abyssBlack, edge: 'rgba(150,190,210,0.14)' },
};

/**
 * Effect constants for behavior that did NOT exist in the ported build: the death
 * burst, struck-obstacle flash, steering-driven trail modulation, and obstacle motion.
 *
 * Deliberately NOT part of `FEEL` — `FEEL` mirrors PARAMETERS.md one-for-one and stays
 * byte-identical. Everything here is additive and may be tuned freely; where an effect
 * modulates a locked value (the bubble trail), the locked value remains the maximum-
 * density endpoint and these constants only ever make it sparser.
 */
export const FX = {
  // ── Death sequence (short enough that Retry still feels instant) ──
  deathFlashDuration: 0.14,    // s, white flash at the craft position
  deathFlashRadius: 30,        // world px at scale 1
  craftHideDelay: 0.06,        // s, craft stays drawn until the burst has visibly started

  // ── Craft break-up (simple hull shards on crash — fixed pool, no alloc) ──
  debrisCount: 8,              // how many pieces spawn per crash
  debrisPoolSize: 8,           // fixed pool (== debrisCount; one crash at a time)
  debrisLife: 0.72,            // s, shards fade out
  debrisSpeed: 95,             // world px/s initial scatter
  debrisSink: 140,             // world px/s² drift deeper (down the corridor)
  debrisDrag: 1.6,             // velocity damping

  // ── Struck obstacle ──
  hitFlashDuration: 0.22,      // s, tint on the obstacle that was actually hit

  // ── Impact burst: hard cap on simultaneously active debris/bubble particles ──
  sparkPoolSize: 48,           // >= FEEL.explosionCount, pooled and reused

  // ── Trail modulation (steering-driven, replaces constant-rate emission) ──
  trailIdleInterval: 0.16,     // s between bubbles when gliding straight (sparse end)
  trailLateralReference: 260,  // world px/s of lateral velocity treated as full effort
  trailIdleScale: 0.55,        // bubble size multiplier when gliding straight
};

export const STORAGE_KEY = 'orbitDeep.progress.v1';
export const CORRIDOR_WIDTH = FEEL.corridorWidth;

/** Pearl collectibles — pickup radius and reward-family color (see THEME accent discipline). */
export const PEARL_RADIUS = 12;
THEME.pearl = {
  fill: THEME.palette.goldenAmber,
  glow: 'rgba(255,200,87,0.45)',
  highlight: '#FFFDF0',
  collectedGlow: 'rgba(255,232,170,0.9)',
};
