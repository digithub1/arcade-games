/**
 * Inline icon set — no external icon font/library, no network request, no bitmap asset.
 * Consistent with the rest of the project (README: "everything generated in code").
 * Every icon shares the same 20x20 viewBox, stroke-only line style, and `currentColor`,
 * so a single CSS `color` on the containing button recolors the icon with it.
 */
const ICONS = {
  settings: `<path d="M10 6.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/><path d="M10 1.6v2.1M10 16.3v2.1M4.3 4.3l1.5 1.5M14.2 14.2l1.5 1.5M1.6 10h2.1M16.3 10h2.1M4.3 15.7l1.5-1.5M14.2 5.8l1.5-1.5"/>`,
  help: `<circle cx="10" cy="10" r="8"/><path d="M7.7 7.4a2.5 2.5 0 0 1 4.8.9c0 1.9-2.5 2.2-2.5 4"/><path d="M10 15.2h.01" stroke-width="2.2"/>`,
  back: `<path d="M12.5 4.5 6 10l6.5 5.5"/>`,
  pause: `<path d="M7 4.5v11M13 4.5v11" stroke-width="2.4"/>`,
  music: `<path d="M7.5 15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M15 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M9.5 15.5V4.8L17 3.5v8.7"/>`,
  sfx: `<path d="M3.5 8.5h2.8l4-3.2v9.4l-4-3.2H3.5z"/><path d="M12.5 7a3 3 0 0 1 0 6"/>`,
  lock: `<rect x="4.5" y="9" width="11" height="8" rx="1.6"/><path d="M6.8 9V6.8a3.2 3.2 0 0 1 6.4 0V9"/>`,
  shuffle: `<path d="M3 6h3.2c1.6 0 2.6.7 3.6 2.2M17 6h-2.4c-1.6 0-2.6.7-3.6 2.2M3 14h3.2c1.6 0 2.6-.7 3.6-2.2M17 14h-2.4c-1.6 0-2.6-.7-3.6-2.2"/><path d="M14.5 3.8 17 6l-2.5 2.2M14.5 16.2 17 14l-2.5-2.2"/>`,
  play: `<path d="M6.5 4.2v11.6a1 1 0 0 0 1.53.85l9.2-5.8a1 1 0 0 0 0-1.7l-9.2-5.8a1 1 0 0 0-1.53.85Z"/>`,
  levels: `<rect x="2.6" y="2.6" width="6" height="6" rx="1.4"/><rect x="11.4" y="2.6" width="6" height="6" rx="1.4"/><rect x="2.6" y="11.4" width="6" height="6" rx="1.4"/><rect x="11.4" y="11.4" width="6" height="6" rx="1.4"/>`,
  check: `<path d="M4 10.5 8.2 14.5 16 5.5"/>`,
};

/**
 * @param {string} name key into ICONS
 * @param {object} [opts]
 * @param {number} [opts.size=20] square pixel size
 * @param {string} [opts.strokeWidth='1.7']
 * @param {boolean} [opts.filled=false] solid fill (e.g. the play triangle) instead of the
 *   default stroke-only line style
 */
export function icon(name, opts = {}) {
  const body = ICONS[name];
  if (!body) return '';
  const size = opts.size ?? 20;
  const sw = opts.strokeWidth ?? '1.7';
  const filled = !!opts.filled;
  const fill = filled ? 'currentColor' : 'none';
  const stroke = filled ? 'none' : 'currentColor';
  return `<svg viewBox="0 0 20 20" width="${size}" height="${size}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
