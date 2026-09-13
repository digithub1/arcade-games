/* ============================================================
 * icons.js — Starward Legacy UI icons
 *
 * Vector SVG (crisp at any size):
 *   credit  — gold coin as in hangar .mini.buy::before
 *   gem     — symmetric crystal
 *   gift    — present with bow (rewards)
 *   shop    — $ (EN) / ₽ (RU)
 *   gear    — settings cog
 *   campaign / pass — cinematic emblems (match img/gamepush1.png)
 *
 * Pixel 16×16 fallback set for secondary economy icons.
 * Icons.svg(key, size)
 * ========================================================== */
const Icons = (() => {
  const NS = 'http://www.w3.org/2000/svg';
  let uid = 0;
  const id = (p) => p + '-' + (++uid);

  function wrap(key, size, vb, body, extra = '') {
    const s = size || 16;
    return `<svg class="gi gi-${key}${extra}" width="${s}" height="${s}" viewBox="${vb}" ` +
      `xmlns="${NS}" aria-hidden="true" focusable="false" style="vertical-align:-0.16em">${body}</svg>`;
  }

  /* ── CREDIT: hangar coin (circle + diamond mint) ───────── */
  function creditSvg(size) {
    // Mirrors css .mini.buy::before data-URI coin
    return wrap('credit', size, '0 0 24 24',
      `<circle cx="12" cy="12" r="10" fill="#f0b41c" stroke="#7a4e04" stroke-width="1.4"/>` +
      `<circle cx="12" cy="12" r="7.4" fill="#ffd94a"/>` +
      `<polygon points="12,6.6 15.6,12 12,17.4 8.4,12" fill="#f0b41c" stroke="#7a4e04" stroke-width="0.8"/>` +
      `<polygon points="12,9 13.6,12 12,15 10.4,12" fill="#fff2b0"/>`);
  }

  /* ── GEM: perfectly bilateral crystal ──────────────────── */
  function gemSvg(size) {
    const a = id('gema'), l = id('geml'), r = id('gemr');
    return wrap('gem', size, '0 0 24 24',
      `<defs>` +
        `<linearGradient id="${a}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#ffffff"/>` +
          `<stop offset="28%" stop-color="#c8f8ff"/>` +
          `<stop offset="62%" stop-color="#48d8ff"/>` +
          `<stop offset="100%" stop-color="#0a5888"/>` +
        `</linearGradient>` +
        `<linearGradient id="${l}" x1="0" y1="0" x2="1" y2="1">` +
          `<stop offset="0%" stop-color="#e8ffff" stop-opacity=".9"/>` +
          `<stop offset="100%" stop-color="#1890c8" stop-opacity=".15"/>` +
        `</linearGradient>` +
        `<linearGradient id="${r}" x1="1" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#80e8ff" stop-opacity=".55"/>` +
          `<stop offset="100%" stop-color="#063858" stop-opacity=".5"/>` +
        `</linearGradient>` +
      `</defs>` +
      `<path d="M12 1.5 L19.2 9.2 L12 22.5 L4.8 9.2 Z" fill="#021018"/>` +
      `<path d="M12 2.6 L18 9.2 L12 21 L6 9.2 Z" fill="url(#${a})"/>` +
      `<path d="M12 2.6 L6 9.2 L12 11.2 Z" fill="url(#${l})"/>` +
      `<path d="M12 2.6 L18 9.2 L12 11.2 Z" fill="url(#${r})"/>` +
      `<path d="M9.2 9.2 L12 5.4 L14.8 9.2 Z" fill="#ffffff" opacity=".85"/>` +
      `<path d="M6 9.2 L18 9.2" stroke="#0a4068" stroke-width=".7" opacity=".55"/>`);
  }

  /* ── GIFT / rewards: box + bow (бант) ──────────────────── */
  function giftSvg(size) {
    const b = id('gfb'), t = id('gft');
    return wrap('gift', size, '0 0 24 24',
      `<defs>` +
        `<linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#ffb048"/>` +
          `<stop offset="100%" stop-color="#e07018"/>` +
        `</linearGradient>` +
        `<linearGradient id="${t}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#ffd878"/>` +
          `<stop offset="100%" stop-color="#f0a030"/>` +
        `</linearGradient>` +
      `</defs>` +
      `<rect x="4" y="10" width="16" height="11" rx="1.6" fill="url(#${b})" stroke="#5a2808" stroke-width="1"/>` +
      `<rect x="3.2" y="8.2" width="17.6" height="3.2" rx="1.2" fill="url(#${t})" stroke="#5a2808" stroke-width="1"/>` +
      `<rect x="10.6" y="8.2" width="2.8" height="12.8" fill="#ff4060"/>` +
      `<rect x="4" y="13.2" width="16" height="2.4" fill="#ff4060"/>` +
      `<path d="M12 8.4 C8.2 8.4 6.2 5.6 7.4 3.8 C8.4 2.4 10.4 2.8 12 5.2 C13.6 2.8 15.6 2.4 16.6 3.8 C17.8 5.6 15.8 8.4 12 8.4 Z" ` +
        `fill="#ff5a78" stroke="#8a1028" stroke-width=".85"/>` +
      `<circle cx="12" cy="7.6" r="1.55" fill="#ffd0a0" stroke="#8a1028" stroke-width=".7"/>`);
  }

  /* ── SHOP: basket ──────────────────────────────────────
   * A currency glyph, not a shop.
   *
   * This used to draw $ in English and ₽ in Russian. GamePush moderation asked
   * for a basket instead, and they are right for a reason beyond taste: a
   * currency sign says "money" and the screen behind it sells most of its
   * contents for in-game gems. It also had to guess a currency from the UI
   * language, which is wrong the moment a Russian speaker plays on a store that
   * charges in something else. A basket says "shop" in every language and
   * commits to no currency at all.
   */
  function shopSvg(size) {
    const g = id('sh');
    return wrap('shop', size, '0 0 24 24',
      `<defs>` +
        `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#7aecff"/>` +
          `<stop offset="100%" stop-color="#2a9ad0"/>` +
        `</linearGradient>` +
      `</defs>` +
      `<circle cx="12" cy="12" r="10" fill="url(#${g})" stroke="#0a3858" stroke-width="1.3"/>` +
      `<circle cx="12" cy="12" r="8.1" fill="none" stroke="#c8f8ff" stroke-width=".7" opacity=".55"/>` +
      // handle
      `<path d="M9.1 9.4 L10.9 5.9 M14.9 9.4 L13.1 5.9" fill="none" stroke="#061820" ` +
        `stroke-width="1.7" stroke-linecap="round"/>` +
      // rim + tapered body
      `<path d="M6.4 9.6 H17.6 L16.1 17.2 H7.9 Z" fill="none" stroke="#061820" ` +
        `stroke-width="1.9" stroke-linejoin="round"/>` +
      // weave, so the basket still reads as a basket at 16px
      `<path d="M10.2 11.6 V15.4 M13.8 11.6 V15.4" fill="none" stroke="#061820" ` +
        `stroke-width="1.4" stroke-linecap="round" opacity=".85"/>`);
  }

  /* ── GEAR: classic settings cog ────────────────────────── */
  function gearSvg(size) {
    const g = id('gr');
    let d = '';
    for (let i = 0; i < 8; i++) {
      const mid = (i / 8) * Math.PI * 2;
      const a0 = mid - 0.14;
      const a1 = mid + 0.14;
      const gap1 = mid + Math.PI / 8 - 0.12;
      const gap0 = mid + 0.20;
      const pt = (rad, ang) => `${(12 + rad * Math.cos(ang)).toFixed(2)},${(12 + rad * Math.sin(ang)).toFixed(2)}`;
      d += (i === 0 ? 'M' : 'L') + pt(7.2, a0) +
        'L' + pt(10.0, a0) + 'L' + pt(10.0, a1) + 'L' + pt(7.2, a1) +
        'L' + pt(7.2, gap0) + 'L' + pt(7.2, gap1);
    }
    d += 'Z';
    return wrap('gear', size, '0 0 24 24',
      `<defs>` +
        `<linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1">` +
          `<stop offset="0%" stop-color="#e8f0f8"/>` +
          `<stop offset="55%" stop-color="#90a0b4"/>` +
          `<stop offset="100%" stop-color="#4a5868"/>` +
        `</linearGradient>` +
      `</defs>` +
      `<path d="${d}" fill="url(#${g})" stroke="#0a1018" stroke-width="1" stroke-linejoin="round"/>` +
      `<circle cx="12" cy="12" r="4.1" fill="#0a1828" stroke="#4ad6ff" stroke-width="1.4"/>` +
      `<circle cx="12" cy="12" r="1.7" fill="#4ad6ff" opacity=".85"/>`);
  }

  /* ── Hangar stats: upgrades / weapons / hull ────────────── */
  function statUpgSvg(size) {
    // Cinematic chip + pips (ship tree / upgrades)
    const g = id('su'), h = id('suh');
    return wrap('statUpg', size, '0 0 24 24',
      `<defs>` +
        `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#9ae8ff"/>` +
          `<stop offset="100%" stop-color="#2a78b0"/>` +
        `</linearGradient>` +
        `<linearGradient id="${h}" x1="0" y1="0" x2="1" y2="1">` +
          `<stop offset="0%" stop-color="#ffffff"/>` +
          `<stop offset="100%" stop-color="#7ad0ff"/>` +
        `</linearGradient>` +
      `</defs>` +
      `<rect x="3.5" y="4" width="17" height="16" rx="3.2" fill="url(#${g})" stroke="#0a2840" stroke-width="1.1"/>` +
      `<rect x="5.5" y="6.2" width="13" height="3.2" rx="1" fill="url(#${h})" opacity=".9"/>` +
      `<circle cx="8" cy="13.5" r="1.55" fill="#e8fbff"/>` +
      `<circle cx="12" cy="13.5" r="1.55" fill="#e8fbff"/>` +
      `<circle cx="16" cy="13.5" r="1.55" fill="#7ab8d8" opacity=".75"/>` +
      `<circle cx="8" cy="17.2" r="1.55" fill="#e8fbff"/>` +
      `<circle cx="12" cy="17.2" r="1.55" fill="#7ab8d8" opacity=".75"/>` +
      `<circle cx="16" cy="17.2" r="1.55" fill="#3a6888" opacity=".7"/>`);
  }

  function statGunSvg(size) {
    // Sci-fi blaster / weapon stock
    const g = id('sg'), b = id('sgb');
    return wrap('statGun', size, '0 0 24 24',
      `<defs>` +
        `<linearGradient id="${g}" x1="0" y1="0" x2="1" y2="0">` +
          `<stop offset="0%" stop-color="#c8f4ff"/>` +
          `<stop offset="55%" stop-color="#4ad6ff"/>` +
          `<stop offset="100%" stop-color="#186890"/>` +
        `</linearGradient>` +
        `<linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#ff9a50"/>` +
          `<stop offset="100%" stop-color="#c04010"/>` +
        `</linearGradient>` +
      `</defs>` +
      // Barrel
      `<path d="M4 10.2 H16.5 L18.8 8.2 H21.2 V11.2 H18.8 L16.5 13.8 H4 Z" ` +
        `fill="url(#${g})" stroke="#0a2840" stroke-width="1" stroke-linejoin="round"/>` +
      // Grip
      `<path d="M7.2 13.5 L9.6 13.5 L11.2 19.2 L8.2 19.2 Z" fill="#3a5068" stroke="#0a1828" stroke-width=".9"/>` +
      // Energy cell
      `<rect x="11.2" y="9.4" width="3.4" height="4.2" rx="0.7" fill="url(#${b})" stroke="#401808" stroke-width=".7"/>` +
      // Muzzle glow
      `<circle cx="21.5" cy="9.7" r="1.3" fill="#fff0c0" opacity=".9"/>`);
  }

  function statHullSvg(size) {
    // Energy shield / hull plate
    const g = id('sh'), r = id('shr');
    return wrap('statHull', size, '0 0 24 24',
      `<defs>` +
        `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#d8fff0"/>` +
          `<stop offset="45%" stop-color="#40e0a8"/>` +
          `<stop offset="100%" stop-color="#0a6848"/>` +
        `</linearGradient>` +
        `<linearGradient id="${r}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#ffffff" stop-opacity=".7"/>` +
          `<stop offset="100%" stop-color="#40e0a8" stop-opacity="0"/>` +
        `</linearGradient>` +
      `</defs>` +
      `<path d="M12 2.8 L19.6 6.2 V12.4 C19.6 17.2 16.2 20.6 12 21.6 C7.8 20.6 4.4 17.2 4.4 12.4 V6.2 Z" ` +
        `fill="url(#${g})" stroke="#042818" stroke-width="1.15" stroke-linejoin="round"/>` +
      `<path d="M12 5.2 L17.2 7.6 V12.2 C17.2 15.6 14.8 18.2 12 19 C9.2 18.2 6.8 15.6 6.8 12.2 V7.6 Z" ` +
        `fill="none" stroke="url(#${r})" stroke-width="1.2"/>` +
      `<path d="M12 8.4 V15.6 M9 12 H15" stroke="#e8fff6" stroke-width="1.35" stroke-linecap="round" opacity=".85"/>`);
  }

  function chevronSvg(size) {
    // Bright cyan chevron for hangar CTA (taller viewBox)
    const g = id('ch');
    const w = size || 22;
    const h = Math.round(w * (32 / 24));
    return `<svg class="gi gi-chevron" width="${w}" height="${h}" viewBox="0 0 24 32" ` +
      `xmlns="${NS}" aria-hidden="true" focusable="false">` +
      `<defs>` +
        `<linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1">` +
          `<stop offset="0%" stop-color="#ffffff"/>` +
          `<stop offset="40%" stop-color="#9eecff"/>` +
          `<stop offset="100%" stop-color="#3ab8ff"/>` +
        `</linearGradient>` +
      `</defs>` +
      `<path d="M7 4 L18 16 L7 28" fill="none" stroke="url(#${g})" ` +
        `stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>` +
      `<path d="M7 4 L18 16 L7 28" fill="none" stroke="#ffffff" ` +
        `stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>` +
      `</svg>`;
  }

  /* ── CAMPAIGN: cinematic compass (gamepush1) ───────────── */
  function campaignSvg(size) {
    const glow = id('cg'), disc = id('cd'), rim = id('cr');
    const n = id('cn'), s = id('cs'), e = id('ce'), bl = id('cb');
    return wrap('campaign', size || 48, '0 0 64 64',
      `<defs>` +
        `<radialGradient id="${glow}" cx="50%" cy="50%" r="50%">` +
          `<stop offset="55%" stop-color="#4ad6ff" stop-opacity="0"/>` +
          `<stop offset="78%" stop-color="#4ad6ff" stop-opacity=".35"/>` +
          `<stop offset="100%" stop-color="#4ad6ff" stop-opacity="0"/>` +
        `</radialGradient>` +
        `<radialGradient id="${disc}" cx="38%" cy="32%" r="68%">` +
          `<stop offset="0%" stop-color="#1a4a78"/>` +
          `<stop offset="55%" stop-color="#0a2848"/>` +
          `<stop offset="100%" stop-color="#041020"/>` +
        `</radialGradient>` +
        `<linearGradient id="${rim}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#c8f4ff"/>` +
          `<stop offset="40%" stop-color="#5ec8ff"/>` +
          `<stop offset="100%" stop-color="#1860a0"/>` +
        `</linearGradient>` +
        `<linearGradient id="${n}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#fff8d0"/>` +
          `<stop offset="100%" stop-color="#ffc020"/>` +
        `</linearGradient>` +
        `<linearGradient id="${s}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#ff9880"/>` +
          `<stop offset="100%" stop-color="#c02828"/>` +
        `</linearGradient>` +
        `<linearGradient id="${e}" x1="0" y1="0" x2="1" y2="0">` +
          `<stop offset="0%" stop-color="#a8f0ff"/>` +
          `<stop offset="100%" stop-color="#20a0e0"/>` +
        `</linearGradient>` +
        `<filter id="${bl}" x="-40%" y="-40%" width="180%" height="180%">` +
          `<feGaussianBlur stdDeviation="1.6" result="b"/>` +
          `<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>` +
        `</filter>` +
      `</defs>` +
      `<circle cx="32" cy="32" r="31" fill="url(#${glow})"/>` +
      `<circle cx="32" cy="32" r="26" fill="url(#${disc})" stroke="url(#${rim})" stroke-width="2.4"/>` +
      `<circle cx="32" cy="32" r="22.5" fill="none" stroke="#5ec8ff" stroke-width=".9" opacity=".45" stroke-dasharray="2.2 3.4"/>` +
      `<circle cx="32" cy="32" r="18" fill="none" stroke="#8ad8ff" stroke-width=".7" opacity=".35"/>` +
      `<polygon points="32,8 36.2,32 32,28.5 27.8,32" fill="url(#${n})" filter="url(#${bl})"/>` +
      `<polygon points="32,56 36.2,32 32,35.5 27.8,32" fill="url(#${s})"/>` +
      `<polygon points="56,32 32,27.8 35.5,32 32,36.2" fill="url(#${e})"/>` +
      `<polygon points="8,32 32,27.8 28.5,32 32,36.2" fill="url(#${e})" opacity=".9"/>` +
      `<circle cx="32" cy="32" r="4.2" fill="#e8fbff" stroke="#4ad6ff" stroke-width="1.2"/>` +
      `<circle cx="32" cy="32" r="1.8" fill="#ffffff"/>` +
      `<circle cx="32" cy="7.2" r="1.3" fill="#ffe24a"/>` +
      `<circle cx="32" cy="56.8" r="1.1" fill="#ff6a5a"/>` +
      `<circle cx="56.8" cy="32" r="1.1" fill="#7ae0ff"/>` +
      `<circle cx="7.2" cy="32" r="1.1" fill="#7ae0ff"/>`,
      ' gi-emblem');
  }

  /* ── PASS: cinematic gold rank emblem (gamepush1) ──────── */
  function passSvg(size) {
    const glow = id('pg'), disc = id('pd'), rim = id('pr');
    const star = id('ps'), wing = id('pw'), bl = id('pb');
    const clip = id('pc'), sh = id('psh');
    const wingL = 'M18 38 C10 34 8 24 14 16 C16 22 18 28 22 32 C20 34 18 36 18 38 Z';
    const wingR = 'M46 38 C54 34 56 24 50 16 C48 22 46 28 42 32 C44 34 46 36 46 38 Z';
    const chev = 'M22 46 L32 52 L42 46 L38 44 L32 48 L26 44 Z';
    // Soft outer halo (no shine) + metal body; shine clipped strictly to solid metal.
    return wrap('pass', size || 48, '0 0 64 64',
      `<defs>` +
        `<radialGradient id="${glow}" cx="50%" cy="50%" r="50%">` +
          `<stop offset="50%" stop-color="#ffc84a" stop-opacity="0"/>` +
          `<stop offset="78%" stop-color="#ffc84a" stop-opacity=".4"/>` +
          `<stop offset="100%" stop-color="#ffc84a" stop-opacity="0"/>` +
        `</radialGradient>` +
        `<radialGradient id="${disc}" cx="36%" cy="30%" r="70%">` +
          `<stop offset="0%" stop-color="#ffe9a0"/>` +
          `<stop offset="45%" stop-color="#ffc84a"/>` +
          `<stop offset="100%" stop-color="#8a5810"/>` +
        `</radialGradient>` +
        `<linearGradient id="${rim}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#fff6d0"/>` +
          `<stop offset="55%" stop-color="#e8a820"/>` +
          `<stop offset="100%" stop-color="#6a4010"/>` +
        `</linearGradient>` +
        `<linearGradient id="${star}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#ffffff"/>` +
          `<stop offset="55%" stop-color="#fff0b0"/>` +
          `<stop offset="100%" stop-color="#e0a020"/>` +
        `</linearGradient>` +
        `<linearGradient id="${wing}" x1="0" y1="0" x2="0" y2="1">` +
          `<stop offset="0%" stop-color="#ffe080"/>` +
          `<stop offset="100%" stop-color="#b07010"/>` +
        `</linearGradient>` +
        `<linearGradient id="${sh}" x1="0" y1="0" x2="1" y2="0">` +
          `<stop offset="0%" stop-color="#fff" stop-opacity="0"/>` +
          `<stop offset="38%" stop-color="#fff" stop-opacity="0"/>` +
          `<stop offset="48%" stop-color="#ffffff" stop-opacity=".55"/>` +
          `<stop offset="50%" stop-color="#fffef8" stop-opacity="1"/>` +
          `<stop offset="52%" stop-color="#ffffff" stop-opacity=".55"/>` +
          `<stop offset="62%" stop-color="#fff" stop-opacity="0"/>` +
          `<stop offset="100%" stop-color="#fff" stop-opacity="0"/>` +
        `</linearGradient>` +
        `<filter id="${bl}" x="-40%" y="-40%" width="180%" height="180%">` +
          `<feGaussianBlur stdDeviation="1.4" result="b"/>` +
          `<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>` +
        `</filter>` +
        // Clip shine to the solid emblem only (not the soft glow disc)
        `<clipPath id="${clip}">` +
          `<path d="${wingL}"/>` +
          `<path d="${wingR}"/>` +
          `<circle cx="32" cy="30" r="19.4"/>` +
          `<path d="${chev}"/>` +
        `</clipPath>` +
      `</defs>` +
      `<circle cx="32" cy="32" r="31" fill="url(#${glow})"/>` +
      `<path d="${wingL}" fill="url(#${wing})" stroke="#6a4010" stroke-width=".8" opacity=".95"/>` +
      `<path d="${wingR}" fill="url(#${wing})" stroke="#6a4010" stroke-width=".8" opacity=".95"/>` +
      `<circle cx="32" cy="30" r="18" fill="url(#${disc})" stroke="url(#${rim})" stroke-width="2.6"/>` +
      `<circle cx="32" cy="30" r="14.2" fill="none" stroke="#fff6c8" stroke-width="1.1" opacity=".55"/>` +
      `<polygon points="32,16.5 35.1,25.4 44.5,25.6 37.1,31.4 39.8,40.5 32,35.2 24.2,40.5 26.9,31.4 19.5,25.6 28.9,25.4" ` +
        `fill="url(#${star})" stroke="#8a5810" stroke-width=".9" filter="url(#${bl})"/>` +
      `<path d="${chev}" fill="url(#${wing})" stroke="#6a4010" stroke-width=".8"/>` +
      `<circle cx="26" cy="22" r="2.2" fill="#ffffff" opacity=".55"/>` +
      // Specular sweep — only over metal silhouette
      `<g clip-path="url(#${clip})" class="gi-pass-shine-layer" pointer-events="none">` +
        `<rect class="gi-pass-shine" x="-28" y="0" width="28" height="64" fill="url(#${sh})" ` +
          `transform="skewX(-16)"/>` +
      `</g>`,
      ' gi-emblem');
  }

  /* ── Secondary pixel icons (economy / map / feats) ─────── */
  const P = {
    ink: '#061018',
    goldD: '#8a5808', goldM: '#e8a818', goldL: '#ffd24a', goldH: '#fff6c0',
    cyanD: '#0a4870', cyanM: '#1a90c8', cyanL: '#4ad6ff', cyanH: '#d8f8ff',
    magL: '#ff4adf', magH: '#ffc0f0',
    grnL: '#40e8a0', grnH: '#c0ffe8', grnM: '#18a868', grnD: '#084828',
    redL: '#ff5050', redH: '#ffb0a0',
    bluD: '#143868', bluM: '#3070c0', bluH: '#c8e0ff',
  };

  const ART = {
    warp: {
      pal: { l: P.cyanH, m: P.cyanL, d: P.cyanM },
      rows: [
        '................',
        '................',
        '.ll.......ll....',
        '.lmm......lmm...',
        '..lmm......lmm..',
        '...lmm......lmm.',
        '....lmm......lmm',
        '....ldd......ldd',
        '...ldd......ldd.',
        '..ldd......ldd..',
        '.ldd......ldd...',
        '.dd.......dd....',
        '................',
        '................',
        '................',
        '................',
      ],
    },
    sat: {
      pal: { o: P.ink, p: P.grnL, l: P.grnH, b: P.grnM, d: P.grnD, a: P.cyanL },
      rows: [
        '................',
        '................',
        '.......aa.......',
        '.......ll.......',
        '.......ll.......',
        'ooooooobbbbooooo',
        'oppppoobddbooppp',
        'ooooooobbbbooooo',
        '.......ll.......',
        '.......ll.......',
        '.......aa.......',
        '................',
        '................',
        '................',
        '................',
        '................',
      ],
    },
    fuel: {
      pal: { o: P.ink, m: '#ff8020', l: '#ffb040', h: '#fff0b0', d: '#c04008' },
      rows: [
        '................',
        '.......oo.......',
        '......ommo......',
        '......ommo......',
        '.....omllmo.....',
        '.....omllmo.....',
        '....omlhhlmo....',
        '....omlhhlmo....',
        '....omlllllmo...',
        '....ommmmmdmo...',
        '.....ommmmo.....',
        '......oooo......',
        '................',
        '................',
        '................',
        '................',
      ],
    },
    ship: {
      pal: { o: P.ink, c: P.cyanL, l: P.cyanH, d: P.cyanD, m: P.magL, f: '#ffb030', e: '#ff4010' },
      rows: [
        '................',
        '.......cc.......',
        '......cllc......',
        '......cllc......',
        '.....clddlc.....',
        '.....clddlc.....',
        '.....cllllc.....',
        '....ccllllcc....',
        '..mmccllllccmm..',
        '..m.ccllllcc.m..',
        '.....cllllc.....',
        '......feef......',
        '.......ee.......',
        '................',
        '................',
        '................',
      ],
    },
    map: {
      pal: { o: P.ink, b: P.bluD, l: P.bluH, c: P.cyanL, s: P.goldL, m: P.bluM },
      rows: [
        '................',
        '..oooooooooooo..',
        '.obbbbbbbbbbbbo.',
        '.oblllblllbllbo.',
        '.oblssslblbblbo.',
        '.oblllccllbllbo.',
        '.obbmmccmmbbbbo.',
        '.obbmmccmmbbbbo.',
        '.oblllccllbllbo.',
        '.oblssslblbbbo..',
        '.oblllbllbbbbo..',
        '.obbbbbbbbbbbo..',
        '..oooooooooooo..',
        '................',
        '................',
        '................',
      ],
    },
    boss: {
      pal: { o: P.ink, w: '#f0e8f0', e: P.magL },
      rows: [
        '................',
        '.....oooooo.....',
        '....owwwwwwo....',
        '...owwwwwwwo....',
        '..owwewwewwo....',
        '..owweeeewwo....',
        '..owwewwewwo....',
        '..owwwwwwwwo....',
        '...owwooowwo....',
        '...owo....owo...',
        '....owo..owo....',
        '.....oooooo.....',
        '................',
        '................',
        '................',
        '................',
      ],
    },
    friends: {
      pal: { o: P.ink, a: P.cyanL, A: P.cyanH, b: P.magL, B: P.magH },
      rows: [
        '................',
        '....oo....oo....',
        '...oAAo..oBBo...',
        '...oAAo..oBBo...',
        '....oo....oo....',
        '...oaaao.obbbo..',
        '..oaaaaaobbbbo..',
        '..oaaaaaobbbbo..',
        '..oaaaaaobbbbo..',
        '..oaaaaaobbbbo..',
        '...oaaao.obbbo..',
        '....ooo...ooo...',
        '................',
        '................',
        '................',
        '................',
      ],
    },
    // Pixel fallbacks if vector path fails
    credit: {
      pal: { o: P.ink, d: P.goldD, m: P.goldM, l: P.goldL, h: P.goldH },
      rows: [
        '................',
        '....oooooooo....',
        '..oodmmmmmmdoo..',
        '.odmllllllllmdo.',
        '.omllhhhhhhllmo.',
        'odmlhhhhhhhhllmdo'.slice(0, 16),
        'odmlhhhllhhhllmdo'.slice(0, 16),
        'odmlhhllllhhllmdo'.slice(0, 16),
        'odmlhhhllhhhllmdo'.slice(0, 16),
        '.omllhhhhhhllmo.',
        '.odmllllllllmdo.',
        '..oodmmmmmmdoo..',
        '....oooooooo....',
        '................',
        '................',
        '................',
      ],
    },
    barrier: {
      pal: { o: P.ink, c: P.cyanM, l: P.cyanL, h: P.cyanH },
      rows: [
        '................',
        '.......oo.......',
        '.....oolloo.....',
        '...oohh..hhoo...',
        '..olh......hlo..',
        '..oc........co..',
        '..oc........co..',
        '..oc........co..',
        '..oc........co..',
        '..oc........co..',
        '..olh......hlo..',
        '...oohh..hhoo...',
        '.....oolloo.....',
        '.......oo.......',
        '................',
        '................',
      ],
    },
    bomb: {
      pal: { o: P.ink, d: '#2a3448', m: '#4a5a78', l: '#8a9ab8', h: '#d8e4f4', f: P.goldL, s: '#fff0b0' },
      rows: [
        '................',
        '............s...',
        '...........sfs..',
        '............s...',
        '..........f.....',
        '.......ooof.....',
        '.....oommoo.....',
        '....omllllmo....',
        '...omlhhhllmo...',
        '..omlhhhhhllmo..',
        '..omlhhhhhllmo..',
        '..omllhhhlllmo..',
        '...ommlllllmo...',
        '....ommmmmmo....',
        '.....oooooo.....',
        '................',
      ],
    },
    bubble: {
      pal: { o: P.ink, c: P.cyanM, l: P.cyanL, h: P.cyanH, m: P.magL },
      rows: [
        '................',
        '.....oolloo.....',
        '...oolhhhhloo...',
        '..olh......hlo..',
        '..ol........lo..',
        '.ol...mmmm...lo.',
        '.oh..mm..mm..ho.',
        '.ol..m....m..lo.',
        '.ol..m....m..lo.',
        '.oh..mm..mm..ho.',
        '.ol...mmmm...lo.',
        '..ol........lo..',
        '..olh......hlo..',
        '...oolhhhhloo...',
        '.....oolloo.....',
        '................',
      ],
    },
    eye: {
      pal: { o: P.ink, d: '#8a1830', m: '#d02a48', l: '#ff5a78', h: '#ffc0cc', w: '#fff0f4' },
      rows: [
        '................',
        '................',
        '.....oooooo.....',
        '...oomllllmoo...',
        '..omlhhwwhhlmo..',
        '.omlhw.oo.whlmo.',
        '.olhw.oddo.whlo.',
        '.olhw.oddo.whlo.',
        '.omlhw.oo.whlmo.',
        '..omlhhwwhhlmo..',
        '...oomllllmoo...',
        '.....oooooo.....',
        '................',
        '................',
        '................',
        '................',
      ],
    },
    lock: {
      pal: { o: P.ink, d: '#8a5808', m: P.goldM, l: P.goldL, h: P.goldH },
      rows: [
        '................',
        '......oooo......',
        '.....omllmo.....',
        '....oml..lmo....',
        '....oml..lmo....',
        '....om....mo....',
        '..oooooooooooo..',
        '..omllllllllmo..',
        '..omlhhhhhhlmo..',
        '..omlhhoohhlmo..',
        '..omlhhoohhlmo..',
        '..omlhhhohhlmo..',
        '..omllllllllmo..',
        '..oddddddddddo..',
        '..oooooooooooo..',
        '................',
      ],
    },
    magma: {
      pal: { o: P.ink, d: '#7a2408', m: '#c04008', l: '#ff8020', h: '#ffd060' },
      rows: [
        '................',
        '.......hh.......',
        '......ohho......',
        '......olho......',
        '.....ollllo.....',
        '.....olllho.....',
        '....ollhhllo....',
        '....olhhhhlo....',
        '...ollhhhhllo...',
        '...olmhhhhmlo...',
        '..olmmlhhlmmlo..',
        '..ommdlllldmmo..',
        '.odmmddddddmmdo.',
        '.oddddddddddddo.',
        '..oooooooooooo..',
        '................',
      ],
    },
    module: {
      pal: { o: P.ink, d: P.cyanD, m: P.cyanM, l: P.cyanL, h: P.cyanH },
      rows: [
        '................',
        '....o......o....',
        '....o......o....',
        '..oooooooooooo..',
        '..omllllllllmo..',
        'ooomlhhhhhhlmooo',
        '..omlhhhhhhlmo..',
        '..omlhhddhhlmo..',
        '..omlhhddhhlmo..',
        '..omlhhhhhhlmo..',
        'ooomlhhhhhhlmooo',
        '..omllllllllmo..',
        '..oooooooooooo..',
        '....o......o....',
        '....o......o....',
        '................',
      ],
    },
    radiation: {
      pal: { o: P.ink, d: '#8a6a08', m: P.goldM, l: P.goldL, h: P.goldH },
      rows: [
        '................',
        '.....oooooo.....',
        '...oomllllmoo...',
        '..omlho..ohlmo..',
        '..omlho..ohlmo..',
        '.omlhho..ohhlmo.',
        '.omlhhoooohhlmo.',
        '.omlhhhooohhlmo.',
        '.omlhhoddohhlmo.',
        '.omlhooddoohlmo.',
        '.omlhod..dohlmo.',
        '..omloo..oolmo..',
        '..omlho..ohlmo..',
        '...oomllllmoo...',
        '.....oooooo.....',
        '................',
      ],
    },
    relay: {
      pal: { o: P.ink, d: P.grnD, m: P.grnM, l: P.grnL, h: P.grnH, c: P.cyanL },
      rows: [
        '................',
        '............occ.',
        '...........oc.c.',
        '.....oooo..oc...',
        '...oolllloo.oc..',
        '..olhhhhhhlo.c..',
        '..olhhhhhhlo....',
        '..omlhhhhlmo....',
        '...ommllmmo.....',
        '....ommmmo......',
        '.....odmo.......',
        '.....odo........',
        '....oddddo......',
        '...odddddddo....',
        '....ooooooo.....',
        '................',
      ],
    },
    rock: {
      pal: { o: P.ink, d: '#5a4a3a', m: '#8a7358', l: '#b09878', h: '#d8c8a8' },
      rows: [
        '................',
        '.......ooo......',
        '.....oomllmo....',
        '....omlhhhlmo...',
        '...omlhhhhhlmo..',
        '..omlhhhllhhlmo.',
        '..omlhhlddlhlmo.',
        '..omllhldddlmmo.',
        '..odmllhlddlmmo.',
        '...odmmllllmmo..',
        '....oddmmmmdo...',
        '.....oodddoo....',
        '.......ooo......',
        '................',
        '................',
        '................',
      ],
    },
    shield: {
      pal: { o: P.ink, c: P.grnM, l: P.grnL, h: P.grnH },
      rows: [
        '................',
        '....oooooooo....',
        '...ohhhhhhhho...',
        '..ohllllllllho..',
        '..ocllllllllco..',
        '..ocllllllllco..',
        '..ocllllllllco..',
        '..ocllllllllco..',
        '...oclllllllco..',
        '...ocllllllco...',
        '....oclllco.....',
        '.....ocllco.....',
        '......oclo......',
        '.......oo.......',
        '................',
        '................',
      ],
    },
    skull: {
      pal: { o: P.ink, d: '#6a6a78', m: '#9a9aa8', l: '#d0d0dc', h: '#f4f4fa' },
      rows: [
        '................',
        '.....oooooo.....',
        '...oomllllmoo...',
        '..omlhhhhhhlmo..',
        '..olhhhhhhhhlo..',
        '..olhoohhoohlo..',
        '..olooohhooolo..',
        '..oldooddoodlo..',
        '..olhhhoohhhlo..',
        '..omlhhddhhlmo..',
        '...oomllllmoo...',
        '....olhohohlo...',
        '....olooooolo...',
        '....oomllmoo....',
        '......oooo......',
        '................',
      ],
    },
    sphere: {
      pal: { o: P.ink, c: P.magL, l: P.magH, h: '#fff0fc' },
      rows: [
        '................',
        '.....oooooo.....',
        '...ooccccccoo...',
        '..occ......cco..',
        '..oc..llll..co..',
        '.oc..lo..ol..co.',
        '.oc.ll....ll.co.',
        '.oc.lo.hh.ol.co.',
        '.oc.lo.hh.ol.co.',
        '.oc.ll....ll.co.',
        '.oc..lo..ol..co.',
        '..oc..llll..co..',
        '..occ......cco..',
        '...ooccccccoo...',
        '.....oooooo.....',
        '................',
      ],
    },
    target: {
      pal: { o: P.ink, c: P.cyanM, l: P.cyanL, h: P.cyanH, m: P.magL },
      rows: [
        '................',
        '.......oo.......',
        '.......ll.......',
        '.....oohhoo.....',
        '....olo..olo....',
        '...ol......lo...',
        '..oh........ho..',
        'olh...mmmm...hlo',
        'olh...mmmm...hlo',
        '..oh........ho..',
        '...ol......lo...',
        '....olo..olo....',
        '.....oohhoo.....',
        '.......ll.......',
        '.......oo.......',
        '................',
      ],
    },
    unlock: {
      pal: { o: P.ink, d: '#8a5808', m: P.goldM, l: P.goldL, h: P.goldH },
      rows: [
        '................',
        '.........oooo...',
        '........omllmo..',
        '.......oml..lmo.',
        '.......oml..lmo.',
        '.......om....mo.',
        '..oooooooo......',
        '..omllllllmo....',
        '..omlhhhhhlmo...',
        '..omlhhoohlmo...',
        '..omlhhoohlmo...',
        '..omlhhhohlmo...',
        '..omllllllmo....',
        '..oddddddddo....',
        '..oooooooooo....',
        '................',
      ],
    },
    wind: {
      pal: { o: P.ink, c: P.cyanM, l: P.cyanL, h: P.cyanH },
      rows: [
        '................',
        '................',
        '...ohhhhhhho....',
        '..ol.......lho..',
        '..o.........lo..',
        '............ho..',
        '...........olo..',
        '..ohhhhhhhhho...',
        '.ol..........o..',
        '................',
        '..ohhhhhhho.....',
        '.ol........lo...',
        '...........lho..',
        '...........olo..',
        '................',
        '................',
      ],
    },
    wrench: {
      pal: { o: P.ink, d: '#4a5a70', m: '#7a8ca8', l: '#b8c8dc', h: '#eaf2fa' },
      rows: [
        '................',
        '..........ooo...',
        '.........ohlho..',
        '........ohl.lho.',
        '........ol...lo.',
        '........olh.hlo.',
        '.......ohlhhlho.',
        '......ohlllllo..',
        '.....ohlllllo...',
        '....ohlllllo....',
        '...ohlllllo.....',
        '..ohlllllo......',
        '..olllllo.......',
        '..omllmo........',
        '...oooo.........',
        '................',
      ],
    },
    crown: {
      pal: { o: P.ink, d: '#8a5808', m: P.goldM, l: P.goldL, h: P.goldH, r: '#ff4a6a' },
      rows: [
        '................',
        '.o............o.',
        'ohlo........olho',
        'ohhlo......olhho',
        'ohhhlo....olhhho',
        'ohhhhlo..olhhhho',
        'ohhhhhlooolhhhho',
        'ohhhhhhlllhhhhho',
        'ohhhrhhlllhhrhho',
        'ohhhhhhhhhhhhhho',
        'omlllllllllllllo',
        'ommmmmmmmmmmmmmo',
        'odddddddddddddo.',
        '.oooooooooooooo.',
        '................',
        '................',
      ],
    },
    home: {
      pal: { o: P.ink, d: P.bluD, m: P.bluM, l: P.bluH, c: P.cyanL },
      rows: [
        '................',
        '.......oo.......',
        '......ollo......',
        '.....ollllo.....',
        '....ollllllo....',
        '...ollllllllo...',
        '..ollllllllllo..',
        '.ollllllllllllo.',
        'oomllllllllllmoo',
        '..omlllllllllmo.',
        '..omllocccollmo.',
        '..omllocccollmo.',
        '..omllocccollmo.',
        '..ommmocccommmo.',
        '..ooooooooooooo.',
        '................',
      ],
    },
    research: {
      pal: { o: P.ink, d: P.cyanD, m: P.cyanM, l: P.cyanL, h: P.cyanH, g: P.grnL },
      rows: [
        '................',
        '.........oooo...',
        '........ohhhho..',
        '........ohllho..',
        '.......oohllhoo.',
        '......ohhllhho..',
        '.....ohhllhho...',
        '....ohhllhho....',
        '...ohhllhho.....',
        '...ohllhho......',
        '...ollhho.......',
        '...oggo.........',
        '..ogggggo.......',
        '.oggggggggo.....',
        '.oooooooooo.....',
        '................',
      ],
    },
    swords: {
      pal: { o: P.ink, d: '#4a5a70', m: '#8a9ab8', l: '#d0dcec', h: '#f4f8ff', g: P.goldL },
      rows: [
        '................',
        '.oo..........oo.',
        'ohlo........olho',
        '.olho......ohlo.',
        '..olho....ohlo..',
        '...olho..ohlo...',
        '....olhoohlo....',
        '.....olhhlo.....',
        '.....olhhlo.....',
        '....olhoohlo....',
        '...ogho..ohgo...',
        '..oggo....oggo..',
        '..ogo......ogo..',
        '..oo........oo..',
        '................',
        '................',
      ],
    },
    meteor: {
      pal: { o: P.ink, d: '#6a3a18', m: '#a85a28', l: '#e08a40', h: '#ffc070', f: P.goldL, s: '#fff0b0' },
      rows: [
        '................',
        '..............ss',
        '.............sfs',
        '...........sff..',
        '..........sf....',
        '.......ooof.....',
        '.....oomlmoo....',
        '....omlhhhlmo...',
        '...omlhhdhhlmo..',
        '...omlhdddhlmo..',
        '...omllhdhllmo..',
        '....ommlllmmo...',
        '.....oommmoo....',
        '.......ooo......',
        '................',
        '................',
      ],
    },
    missile: {
      pal: { o: P.ink, d: '#4a5a70', m: '#8a9ab8', l: '#d0dcec', h: '#f4f8ff', r: '#ff5a3a', f: P.goldL },
      rows: [
        '................',
        '.......oo.......',
        '......ohho......',
        '......ohho......',
        '.....olhhlo.....',
        '.....olhhlo.....',
        '....oolhhloo....',
        '...ordlhhldro...',
        '...ordlhhldro...',
        '...orrmllmrro...',
        '....ommllmmo....',
        '.....offffo.....',
        '.....offfo......',
        '......ofo.......',
        '.......o........',
        '................',
      ],
    },
  };

  // Fix credit fallback rows to exact 16
  ART.credit.rows = [
    '................',
    '....oooooooo....',
    '..oodmmmmmmdoo..',
    '.odmllllllllmdo.',
    '.omllhhhhhhllmo.',
    'odmlhhhhhhhhlmdo',
    'odmlhhhllhhhlmdo',
    'odmlhhllllhhlmdo',
    'odmlhhhllhhhlmdo',
    '.omllhhhhhhllmo.',
    '.odmllllllllmdo.',
    '..oodmmmmmmdoo..',
    '....oooooooo....',
    '................',
    '................',
    '................',
  ];

  function buildPixel(icon) {
    const { pal, rows } = icon;
    let out = '';
    for (let y = 0; y < 16; y++) {
      const row = (rows[y] || '').padEnd(16, '.').slice(0, 16);
      let x = 0;
      while (x < 16) {
        const ch = row[x];
        if (ch === '.' || !pal[ch]) { x++; continue; }
        let w = 1;
        while (x + w < 16 && row[x + w] === ch) w++;
        out += `<rect x="${x}" y="${y}" width="${w}" height="1" fill="${pal[ch]}"/>`;
        x += w;
      }
    }
    return out;
  }

  const pixelCache = {};
  function pixelSvg(key, size) {
    const s = size || 16;
    if (!pixelCache[key] && ART[key]) pixelCache[key] = buildPixel(ART[key]);
    const body = pixelCache[key] || '';
    return `<svg class="gi gi-${key}" width="${s}" height="${s}" viewBox="0 0 16 16" ` +
      `xmlns="${NS}" shape-rendering="crispEdges" style="vertical-align:-0.16em" aria-hidden="true">${body}</svg>`;
  }

  /* ── Hangar system / weapon-train icons (same language as hub) ── */
  function upAimSvg(size) {
    const g = id('ua');
    return wrap('upAim', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1">` +
        `<stop offset="0%" stop-color="#e8fbff"/><stop offset="100%" stop-color="#3ab8ff"/></linearGradient></defs>` +
      `<circle cx="12" cy="12" r="7.2" fill="none" stroke="url(#${g})" stroke-width="1.6"/>` +
      `<circle cx="12" cy="12" r="2.2" fill="#4ad6ff"/>` +
      `<path d="M12 3.2 V6.2 M12 17.8 V20.8 M3.2 12 H6.2 M17.8 12 H20.8" stroke="url(#${g})" stroke-width="1.5" stroke-linecap="round"/>`);
  }
  function upBombSvg(size) {
    const g = id('ub'), f = id('ubf');
    return wrap('upBomb', size, '0 0 24 24',
      `<defs>` +
        `<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d0e8ff"/><stop offset="100%" stop-color="#3a5878"/></linearGradient>` +
        `<linearGradient id="${f}" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#ff6a20"/><stop offset="100%" stop-color="#ffe080"/></linearGradient>` +
      `</defs>` +
      `<circle cx="12" cy="14" r="6.2" fill="url(#${g})" stroke="#0a1828" stroke-width="1.1"/>` +
      `<path d="M12 7.8 V5.2 M10.2 5.6 L13.8 4.4" stroke="#cfeaff" stroke-width="1.3" stroke-linecap="round"/>` +
      `<path d="M13.5 4.2 Q15 2.2 16.8 3.4" fill="none" stroke="url(#${f})" stroke-width="1.6" stroke-linecap="round"/>`);
  }
  function upMagnetSvg(size) {
    const g = id('um');
    return wrap('upMagnet', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff8a8a"/><stop offset="100%" stop-color="#4ad6ff"/></linearGradient></defs>` +
      `<path d="M7 6 H10 V13 A2 2 0 0 0 14 13 V6 H17 V13 A5 5 0 0 1 7 13 Z" fill="url(#${g})" stroke="#0a1828" stroke-width="1.1" stroke-linejoin="round"/>` +
      `<rect x="7" y="6" width="3" height="3.2" rx="0.6" fill="#ff5b5b"/><rect x="14" y="6" width="3" height="3.2" rx="0.6" fill="#4ad6ff"/>`);
  }
  function upFlameSvg(size) {
    const g = id('uf');
    return wrap('upFlame', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#ff4a20"/><stop offset="55%" stop-color="#ffb040"/><stop offset="100%" stop-color="#fff2a0"/></linearGradient></defs>` +
      `<path d="M12 3.5 C12 3.5 7.2 9 7.2 13.2 A4.8 4.8 0 0 0 16.8 13.2 C16.8 9 12 3.5 12 3.5 Z" fill="url(#${g})" stroke="#401808" stroke-width="1"/>` +
      `<path d="M12 10.5 C12 10.5 9.8 13 9.8 14.8 A2.2 2.2 0 0 0 14.2 14.8 C14.2 13 12 10.5 12 10.5 Z" fill="#fff6c8" opacity=".85"/>`);
  }
  function upRegenSvg(size) {
    const g = id('ur');
    return wrap('upRegen', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8ffe8"/><stop offset="100%" stop-color="#20c890"/></linearGradient></defs>` +
      `<circle cx="12" cy="12" r="8" fill="none" stroke="url(#${g})" stroke-width="1.5" stroke-dasharray="4 2.5"/>` +
      `<path d="M12 7.2 V16.8 M7.2 12 H16.8" stroke="url(#${g})" stroke-width="2" stroke-linecap="round"/>`);
  }
  function upLuckSvg(size) {
    const g = id('ul');
    return wrap('upLuck', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d8ffb0"/><stop offset="100%" stop-color="#38a848"/></linearGradient></defs>` +
      `<circle cx="9" cy="9.5" r="3.1" fill="url(#${g})" stroke="#0a2810" stroke-width=".9"/>` +
      `<circle cx="15" cy="9.5" r="3.1" fill="url(#${g})" stroke="#0a2810" stroke-width=".9"/>` +
      `<circle cx="9" cy="14.8" r="3.1" fill="url(#${g})" stroke="#0a2810" stroke-width=".9"/>` +
      `<circle cx="15" cy="14.8" r="3.1" fill="url(#${g})" stroke="#0a2810" stroke-width=".9"/>` +
      `<circle cx="12" cy="12" r="1.6" fill="#e8ffc8"/>`);
  }
  function upHeartSvg(size) {
    const g = id('uh');
    return wrap('upHeart', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffb0d8"/><stop offset="100%" stop-color="#e03080"/></linearGradient></defs>` +
      `<path d="M12 20 S4.5 14.5 4.5 9.5 A3.6 3.6 0 0 1 12 8.2 A3.6 3.6 0 0 1 19.5 9.5 C19.5 14.5 12 20 12 20 Z" fill="url(#${g})" stroke="#401028" stroke-width="1.1"/>`);
  }
  function upPierceSvg(size) {
    const g = id('up');
    return wrap('upPierce', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e8f4ff"/><stop offset="100%" stop-color="#6a90b8"/></linearGradient></defs>` +
      `<path d="M4 14.5 L16 6.5 L18.5 7.8 L6.5 15.8 Z" fill="url(#${g})" stroke="#0a1828" stroke-width="1"/>` +
      `<path d="M16 6.5 L20.5 4.2 L19 8.2 Z" fill="#cfeaff" stroke="#0a1828" stroke-width=".8"/>` +
      `<path d="M5.5 16.2 L3.8 19.5" stroke="#8ab0d0" stroke-width="1.4" stroke-linecap="round"/>`);
  }
  function upCritSvg(size) {
    const g = id('uc');
    return wrap('upCrit', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fff2a0"/><stop offset="100%" stop-color="#ff6a20"/></linearGradient></defs>` +
      `<path d="M12 3.5 L13.8 9.2 L19.8 9.5 L15 13.2 L16.5 19.2 L12 15.8 L7.5 19.2 L9 13.2 L4.2 9.5 L10.2 9.2 Z" fill="url(#${g})" stroke="#401808" stroke-width="1" stroke-linejoin="round"/>`);
  }
  function upGuardSvg(size) {
    const g = id('ug');
    return wrap('upGuard', size, '0 0 24 24',
      `<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d0e8ff"/><stop offset="100%" stop-color="#3a6a98"/></linearGradient></defs>` +
      `<path d="M12 3.2 L19 6.2 V12 C19 16.5 15.8 19.8 12 20.8 C8.2 19.8 5 16.5 5 12 V6.2 Z" fill="url(#${g})" stroke="#0a1828" stroke-width="1.1"/>` +
      `<path d="M9 12 L11.2 14.2 L15.5 9.5" fill="none" stroke="#e8fbff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`);
  }


  /* Radiation + wind as VECTOR, not pixel art. Both failed as 16x16 sprites for
     the same reason: their shape is defined by thin negative space (the three
     gaps of a trefoil, the gaps between gusts), and at that grid the gaps close
     up — the trefoil came out a solid ring, the gusts came out noise. Paths keep
     the gaps at any size. svg() already prefers VECTOR over the pixel table. */
  function radiationSvg(size) {
    // Trefoil: three 60-degree blades around a hub, cut from a filled disc.
    const blade = a => {
      const r0 = 4.6, r1 = 10.2, w = 26;
      const p = (rad, deg) => [12 + rad * Math.cos((deg - 90) * Math.PI / 180),
                               12 + rad * Math.sin((deg - 90) * Math.PI / 180)];
      const [x1, y1] = p(r0, a - w), [x2, y2] = p(r1, a - w);
      const [x3, y3] = p(r1, a + w), [x4, y4] = p(r0, a + w);
      return `M${x1.toFixed(2)} ${y1.toFixed(2)} L${x2.toFixed(2)} ${y2.toFixed(2)} ` +
             `A10.2 10.2 0 0 1 ${x3.toFixed(2)} ${y3.toFixed(2)} L${x4.toFixed(2)} ${y4.toFixed(2)} ` +
             `A4.6 4.6 0 0 0 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`;
    };
    return wrap('radiation', size, '0 0 24 24',
      `<circle cx="12" cy="12" r="11" fill="#1a1206"/>` +
      `<path d="${blade(0)}${blade(120)}${blade(240)}" fill="#ffd24a"/>` +
      `<circle cx="12" cy="12" r="2.6" fill="#ffd24a"/>` +
      `<circle cx="12" cy="12" r="11" fill="none" stroke="#8a6a08" stroke-width="1.4"/>`);
  }
  function windSvg(size) {
    const g = 'M3 8 H14 a3 3 0 1 0 -3 -3';
    return wrap('wind', size, '0 0 24 24',
      `<g fill="none" stroke="#9fe9ff" stroke-width="2" stroke-linecap="round">` +
        `<path d="${g}"/>` +
        `<path d="M2 13 H17 a3.2 3.2 0 1 1 -3.2 3.2" opacity="0.95"/>` +
        `<path d="M4 19 H11 a2.4 2.4 0 1 0 -2.4 -2.4" opacity="0.7"/>` +
      `</g>`);
  }

  /* ── Public API ────────────────────────────────────────── */
  const VECTOR = {
    credit: creditSvg,
    gem: gemSvg,
    gift: giftSvg,
    shop: shopSvg,
    gear: gearSvg,
    campaign: campaignSvg,
    pass: passSvg,
    statUpg: statUpgSvg,
    statGun: statGunSvg,
    statHull: statHullSvg,
    chevron: chevronSvg,
    upAim: upAimSvg,
    upBomb: upBombSvg,
    upMagnet: upMagnetSvg,
    upFlame: upFlameSvg,
    upRegen: upRegenSvg,
    upLuck: upLuckSvg,
    upHeart: upHeartSvg,
    upPierce: upPierceSvg,
    upCrit: upCritSvg,
    upGuard: upGuardSvg,
    radiation: radiationSvg,
    wind: windSvg,
    pause: pauseSvg,
  };

  /**
   * Fill every <span data-ico="key"> in `root` with its drawn icon.
   *
   * index.html cannot call Icons.svg() inline, and the HUD's static markup is
   * where the last emoji lived (shield / bomb / nuke / barrier / sphere). The
   * markup declares the MEANING and this hydrates it once at boot, so the HTML
   * never carries a glyph that a phone font might not have.
   */
  function pauseSvg(size) {
    return wrap('pause', size, '0 0 24 24',
      `<rect x="6" y="4" width="4.4" height="16" rx="1.4" fill="#eaf6ff"/>` +
      `<rect x="13.6" y="4" width="4.4" height="16" rx="1.4" fill="#eaf6ff"/>`);
  }

  function hydrate(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-ico]').forEach(el => {
      const k = el.getAttribute('data-ico');
      if (!k || el.firstElementChild) return;         // already filled
      const px = parseInt(el.getAttribute('data-ico-size'), 10) || 18;
      el.innerHTML = svg(k, px);
    });
  }

  function svg(key, size) {
    if (VECTOR[key]) return VECTOR[key](size);
    return pixelSvg(key, size);
  }

  /* ── Canvas draw (combat drops / HUD) — same art as DOM Icons.svg ── */
  const pixelCanvasCache = {};
  /** Draw 16×16 pixel ART scaled with crisp edges (fuel / credit / sat / warp…). */
  function drawPixel(ctx, key, x, y, size) {
    const art = ART[key];
    if (!art) return false;
    const s = size || 16;
    const ck = key + '@' + s;
    let c = pixelCanvasCache[ck];
    if (!c) {
      c = document.createElement('canvas');
      c.width = c.height = s;
      const g = c.getContext('2d');
      g.imageSmoothingEnabled = false;
      const cell = s / 16;
      const { pal, rows } = art;
      for (let py = 0; py < 16; py++) {
        const row = (rows[py] || '').padEnd(16, '.').slice(0, 16);
        for (let px = 0; px < 16; px++) {
          const ch = row[px];
          if (ch === '.' || !pal[ch]) continue;
          g.fillStyle = pal[ch];
          g.fillRect(Math.floor(px * cell), Math.floor(py * cell), Math.ceil(cell), Math.ceil(cell));
        }
      }
      pixelCanvasCache[ck] = c;
    }
    ctx.drawImage(c, x - s / 2, y - s / 2, s, s);
    return true;
  }

  const vectorImgCache = {};
  /** Rasterize vector SVG once, then drawImage (gem, statGun, upBomb…). */
  function drawVector(ctx, key, x, y, size) {
    if (!VECTOR[key]) return false;
    const s = size || 24;
    const ck = key + '@' + s;
    let ent = vectorImgCache[ck];
    if (!ent) {
      ent = vectorImgCache[ck] = { img: new Image(), ready: false };
      const markup = VECTOR[key](s);
      // Strip CSS class noise — data URL of raw SVG
      ent.img.onload = () => { ent.ready = true; };
      ent.img.onerror = () => { ent.ready = false; ent.failed = true; };
      ent.img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(markup);
    }
    if (ent.failed) return false;
    if (!ent.ready) return false;
    ctx.drawImage(ent.img, x - s / 2, y - s / 2, s, s);
    return true;
  }

  /**
   * Draw UI icon at (x,y) center. Prefer pixel ART (map fuel/credit), else vector.
   * Returns true if painted.
   */
  function draw(ctx, key, x, y, size) {
    if (!key || !ctx) return false;
    const s = size || 16;
    if (ART[key]) return drawPixel(ctx, key, x, y, s);
    if (VECTOR[key]) return drawVector(ctx, key, x, y, s);
    return false;
  }

  /** Kick off raster loads so first combat frames are ready. */
  function preload(keys, size) {
    const s = size || 28;
    (keys || []).forEach(k => {
      if (ART[k]) drawPixel(document.createElement('canvas').getContext('2d'), k, 0, 0, s);
      else if (VECTOR[k]) {
        const ck = k + '@' + s;
        if (!vectorImgCache[ck]) {
          const ent = vectorImgCache[ck] = { img: new Image(), ready: false };
          ent.img.onload = () => { ent.ready = true; };
          ent.img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(VECTOR[k](s));
        }
      }
    });
  }

  // Warm economy + hangar icons used in combat drops
  try {
    preload(['fuel', 'credit', 'gem', 'statHull', 'statGun', 'upBomb', 'upFlame', 'upGuard', 'upAim', 'warp'], 32);
  } catch (e) {}

  return { svg, hydrate, ART, draw, drawPixel, preload };
})();
