/* Chroma Echo — Costume table
 * Each costume couples a synth voice + loop pattern (audio) with a colour,
 * name and face accessory (visuals). Patterns: 0/null = rest, 1 = drum hit,
 * {n,v} = melodic note (n = pentatonic-safe semitone offset, v = velocity).
 * Categories are colour-coded so the stage reads at a glance.
 */
window.CE = window.CE || {};
(function (CE) {
  'use strict';

  // pattern builders -----------------------------------------------------------
  const R = (len) => new Array(len).fill(0);
  function hits(len, idxs, val) { const a = R(len); idxs.forEach(i => a[i] = (val === undefined ? 1 : val)); return a; }
  function notes(len, map) { const a = R(len); for (const k in map) a[+k] = map[k]; return a; }
  const N = (n, v) => ({ n, v: v === undefined ? 1 : v }); // melodic cell

  // categories (cute pastel, but saturated enough to read on stage) -----------
  const CAT = {
    drums: { label: 'Beats', color: 0xff9776, glow: 0xffc4ad },
    bass: { label: 'Bass', color: 0xb39cf7, glow: 0xd9cffb },
    chords: { label: 'Chords', color: 0x6fd6b6, glow: 0xb6efdd },
    melody: { label: 'Melody', color: 0x5cc8ff, glow: 0xb6e6ff },
    voice: { label: 'Voices', color: 0xff90c6, glow: 0xffc4e2 },
    fx: { label: 'Sparkle', color: 0xffd25c, glow: 0xffeab0 },
  };

  // costumes ------------------------------------------------------------------
  const COSTUMES = [
    // --- BEATS ---
    {
      id: 'kick', name: 'Boom', cat: 'drums', synth: 'kick', acc: 'cap',
      pattern: hits(16, [0, 4, 8, 12]),
    },
    {
      id: 'clap', name: 'Clap', cat: 'drums', synth: 'clap', acc: 'bowtie',
      pattern: hits(16, [4, 12]),
    },
    {
      id: 'hat', name: 'Tssk', cat: 'drums', synth: 'hat', acc: 'antenna',
      pattern: hits(16, [0, 2, 4, 6, 8, 10, 12, 14]),
    },
    {
      id: 'perc', name: 'Tok', cat: 'drums', synth: 'perc', acc: 'horns',
      pattern: notes(16, { 3: N(0, .9), 7: N(7, .8), 10: N(0, .7), 11: N(4, .9), 15: N(7, .8) }),
    },
    // --- BASS ---
    {
      id: 'sub', name: 'Wub', cat: 'bass', synth: 'subBass', acc: 'mustache',
      pattern: notes(32,
        { 0: N(0), 3: N(0, .8), 6: N(7, .9), 8: N(0), 11: N(0, .8), 14: N(4, .9),
          16: N(0), 19: N(0, .8), 22: N(7, .9), 24: N(9), 27: N(7, .8), 30: N(4, .9) }),
    },
    {
      id: 'pluck', name: 'Hop', cat: 'bass', synth: 'pluck', acc: 'shades',
      pattern: notes(16,
        { 0: N(0), 2: N(7), 4: N(0), 6: N(9), 8: N(7), 10: N(4), 12: N(7), 14: N(2) }),
    },
    // --- CHORDS ---
    {
      id: 'pad', name: 'Dream', cat: 'chords', synth: 'pad', acc: 'cloud',
      pattern: notes(32, { 0: N(0, 1), 16: N(0, 1) }),
    },
    {
      id: 'stab', name: 'Pop', cat: 'chords', synth: 'stab', acc: 'star',
      pattern: notes(16, { 2: N(0), 6: N(9), 10: N(0), 14: N(9) }),
    },
    // --- MELODY ---
    {
      id: 'arp', name: 'Sprinkle', cat: 'melody', synth: 'arp', acc: 'beanie',
      pattern: notes(16, {
        0: N(0), 1: N(4), 2: N(7), 3: N(12), 4: N(9), 5: N(7), 6: N(4), 7: N(7),
        8: N(0), 9: N(4), 10: N(7), 11: N(12), 12: N(14), 13: N(12), 14: N(9), 15: N(7),
      }),
    },
    {
      id: 'bell', name: 'Twinkle', cat: 'melody', synth: 'bell', acc: 'crown',
      pattern: notes(32, { 0: N(12), 6: N(9), 10: N(7), 16: N(14), 22: N(12), 26: N(9), 28: N(7) }),
    },
    // --- VOICES ---
    {
      id: 'la', name: 'La-la', cat: 'voice', synth: 'vocalLa', acc: 'hairbow',
      pattern: notes(32, { 0: N(0), 4: N(4), 8: N(7), 12: N(4), 16: N(9), 20: N(7), 24: N(4), 28: N(2) }),
    },
    {
      id: 'ooh', name: 'Oooh', cat: 'voice', synth: 'vocalOoh', acc: 'lashes',
      pattern: notes(32, { 0: N(7), 16: N(9) }),
    },
    {
      id: 'whistle', name: 'Tweet', cat: 'voice', synth: 'whistle', acc: 'beak',
      pattern: notes(32, { 2: N(12), 6: N(9), 14: N(7), 18: N(12), 22: N(14), 30: N(9) }),
    },
    // --- SPARKLE ---
    {
      id: 'shimmer', name: 'Shimmer', cat: 'fx', synth: 'sparkle', acc: 'halo',
      pattern: notes(32, { 1: N(0, .8), 7: N(7, .7), 12: N(12, .8), 19: N(9, .7), 24: N(4, .8), 29: N(7, .7) }),
    },
  ];

  CE.CAT = CAT;
  CE.COSTUMES = COSTUMES;
  CE.costumeById = (id) => COSTUMES.find(c => c.id === id);
})(window.CE);
