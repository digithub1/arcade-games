/* ============================================================
 * campaign.js — FTL-style campaign map (big, free-roam version).
 *
 * 3 PARTS, each a procedurally-generated node graph (seeded → stable).
 * You FREELY move between any nodes you've already cleared (cleared
 * paths never lock, so dead ends are fine — just backtrack). You may
 * ENGAGE any FRONTIER node (an uncleared node touching a cleared one).
 *
 * Every stage is a real match ending in a BOSS:
 *   • combat / elite nodes → sub-waves then a mini-boss,
 *   • base nodes           → sub-waves then a DOCKING cinematic (free
 *                            ship upgrade, no boss),
 *   • warlord node (top)   → the part's ULTRA-boss; clearing it jumps
 *                            to the next part (part 3 = campaign win).
 *
 * Fog of war: you only see nodes touching a cleared node. State lives
 * in profile.campaign; maps regenerate from a stored seed.
 * ========================================================== */
const Campaign = (() => {
  // Warlord boss keys are FIXED per bible (display names in i18n boss.*).
  // Mini-bosses still roll from `bosses` pool.
  const PARTS = [
    { n: 1, palettes: ['nebula', 'asteroid', 'hive', 'void'],
      pool: ['kamikaze', 'shooter', 'weaver', 'strafer', 'cruiser', 'asteroid'],
      bosses: ['asteroid', 'warden', 'void', 'frost'], boss: 'nebula' },       // gate: Crimson Warden (not in node pool)
    { n: 2, palettes: ['ember', 'frost', 'void', 'asteroid'],
      pool: ['shooter', 'weaver', 'strafer', 'cruiser', 'asteroid', 'destroyer'],
      bosses: ['asteroid', 'frost', 'leviathan', 'reaper', 'void'], boss: 'hive' }, // gate: Hive Voice
    { n: 3, palettes: ['nexus', 'core', 'void', 'ember'],
      pool: ['cruiser', 'strafer', 'destroyer', 'carrier', 'asteroid', 'weaver'],
      bosses: ['ember', 'dreadnought', 'nexus', 'reaper', 'core'], boss: 'privateer' },
    { n: 4, palettes: ['ember', 'rift', 'core', 'singular'],
      pool: ['destroyer', 'carrier', 'strafer', 'cruiser', 'tank', 'asteroid', 'interceptor'],
      bosses: ['ember', 'dreadnought', 'leviathan', 'singularity'], boss: 'heliot',
      mechanics: ['magma', 'rocks'] },
    { n: 5, palettes: ['singular', 'abyss', 'void', 'core'],
      pool: ['destroyer', 'carrier', 'strafer', 'cruiser', 'tank', 'asteroid', 'interceptor', 'weaver'],
      bosses: ['core', 'dreadnought', 'nexus', 'singularity', 'overmind'], boss: 'silo',
      mechanics: ['rocks', 'homing', 'wind'] },
  ];
  const LAST_PART = PARTS.length;                    // campaign finishes after clearing this part
  // Big pannable coordinate space. Nodes are SCATTERED across the whole map
  // (min-distance sampling), connected via MST + extra short links → natural
  // branches, webs and dead ends. Start = most central node.
  const MAPW = 1360, MAPH = 1360;

  // ---------- procedural generation (deterministic from seed) ----------
  function genMap(part, seed) {
    const R = Engine.makeRng((seed ^ (part * 0x9e37)) >>> 0);
    const rnd = (a, b) => a + R() * (b - a);
    const rint = (a, b) => Math.floor(rnd(a, b + 1));
    const pick = arr => arr[Math.floor(R() * arr.length)];
    const P = PARTS[part - 1];
    // Maps are stored per difficulty (see diffKey), so branching on it here does
    // not desync anything — an ULTRA map is only ever read by an ULTRA campaign.
    const ULTRA = (() => {
      try { return Profile.get().difficulty === 'brutal'; } catch (e) { return false; }
    })();

    // ~10% fewer nodes than 19–23. MIN_D keeps local hops readable (fuel 1–2);
    // long 3–4 fuel routes are added explicitly later (not by inflating every edge).
    const N = 17 + rint(0, 4), MARGIN = 90, MIN_D = 155;
    const pts = [];
    let guard = 0;
    while (pts.length < N && guard++ < 9000) {
      const x = MARGIN + R() * (MAPW - 2 * MARGIN), y = MARGIN + R() * (MAPH - 2 * MARGIN);
      if (pts.every(p => Math.hypot(p.x - x, p.y - y) >= MIN_D)) pts.push({ x: Math.round(x), y: Math.round(y) });
    }
    const nodes = pts.map((p, i) => ({ id: i, x: p.x, y: p.y, edges: [] }));
    const byId = {}; nodes.forEach(n => byId[n.id] = n);
    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
    const link = (a, b) => { if (a === b) return; if (!a.edges.includes(b.id)) a.edges.push(b.id); if (!b.edges.includes(a.id)) b.edges.push(a.id); };
    const unlink = (a, b) => {
      a.edges = a.edges.filter(id => id !== b.id);
      b.edges = b.edges.filter(id => id !== a.id);
    };

    // start = node closest to the map center (viewport opens centered on it)
    const cd = n => Math.hypot(n.x - MAPW / 2, n.y - MAPH / 2);
    const start = nodes.reduce((b, n) => (cd(n) < cd(b) ? n : b));

    // Prim MST → guaranteed connectivity; leaves become genuine dead ends
    const inTree = new Set([start.id]);
    while (inTree.size < nodes.length) {
      let ba = null, bb = null, bd = Infinity;
      for (const a of nodes) if (inTree.has(a.id))
        for (const b of nodes) if (!inTree.has(b.id)) { const d = dist(a, b); if (d < bd) { bd = d; ba = a; bb = b; } }
      link(ba, bb); inTree.add(bb.id);
    }

    // depth on MST (before extra links) — used for warlord leaf pick
    const depth0 = { [start.id]: 0 };
    {
      const bq0 = [start.id];
      while (bq0.length) {
        const id = bq0.shift();
        byId[id].edges.forEach(e => {
          if (depth0[e] == null) { depth0[e] = depth0[id] + 1; bq0.push(e); }
        });
      }
    }

    // Warlord MUST be a dead-end (degree 1). Prefer deepest leaf, far from start.
    let leaves0 = nodes.filter(n => n !== start && n.edges.length === 1);
    if (!leaves0.length) leaves0 = nodes.filter(n => n !== start);
    leaves0.sort((a, b) => {
      const da = depth0[a.id] || 0, db = depth0[b.id] || 0;
      if (db !== da) return db - da;
      return dist(b, start) - dist(a, start);
    });
    const warlord = leaves0[0];

    // Extra short links — local mesh (fuel 1–2). Never attach to warlord.
    for (const n of nodes) {
      if (n === warlord) continue;
      if (R() < 0.32) {
        const near = nodes.filter(o => o !== n && o !== warlord && !n.edges.includes(o.id))
          .sort((a, b) => dist(a, n) - dist(b, n))[0];
        if (near && dist(near, n) < MIN_D * 2.15) link(n, near);
      }
    }

    // Long-range bridges (~20% of current edges): visually long hops at fuel 3,
    // and a smaller share even longer at fuel 4. Cost comes only from distance.
    {
      const countEdges = () => {
        let e = 0;
        nodes.forEach(n => { n.edges.forEach(id => { if (n.id < id) e++; }); });
        return e;
      };
      const baseE = countEdges();
      const wantLong = Math.max(2, Math.round(baseE * 0.20)); // ~20% long routes
      const wantVery = Math.max(1, Math.round(wantLong * 0.35)); // of those, ~⅓ are 4-fuel
      // Distance bands match edgeCost thresholds (see edgeCost below)
      const BAND3 = { lo: 330, hi: 440 }; // fuel 3
      const BAND4 = { lo: 455, hi: 620 }; // fuel 4
      let added3 = 0, added4 = 0;
      const tryBridge = (band, cap, counter) => {
        const cands = [];
        for (const a of nodes) {
          if (a === warlord) continue;
          for (const b of nodes) {
            if (b === warlord || b.id <= a.id || a.edges.includes(b.id)) continue;
            const d = dist(a, b);
            if (d >= band.lo && d <= band.hi) cands.push([a, b, d]);
          }
        }
        // Prefer farther first so bridges read as intentional long routes
        cands.sort((x, y) => y[2] - x[2]);
        for (const [a, b] of cands) {
          if (counter.count >= cap) break;
          // Cap degree so we don't star-link one hub
          if (a.edges.length >= 5 || b.edges.length >= 5) continue;
          link(a, b);
          counter.count++;
        }
      };
      const c4 = { count: 0 }, c3 = { count: 0 };
      tryBridge(BAND4, wantVery, c4);
      added4 = c4.count;
      tryBridge(BAND3, wantLong - added4, c3);
      added3 = c3.count;
      // Soft fallback: if map is too compact for band4, allow slightly shorter 4-band
      if (added4 < wantVery) {
        tryBridge({ lo: 420, hi: 700 }, wantVery - added4, c4);
        added4 = c4.count;
      }
    }

    // Safety: if warlord somehow has degree > 1, strip extras keeping the parent edge
    if (warlord.edges.length > 1) {
      const parent = warlord.edges.slice().sort((a, b) =>
        (depth0[a] || 0) - (depth0[b] || 0))[0];
      warlord.edges.slice().forEach(eid => {
        if (eid !== parent) unlink(warlord, byId[eid]);
      });
    }

    // depth = graph hops from start → difficulty tier
    const depth = { [start.id]: 0 };
    const bq = [start.id];
    while (bq.length) { const id = bq.shift(); byId[id].edges.forEach(e => { if (depth[e] == null) { depth[e] = depth[id] + 1; bq.push(e); } }); }
    nodes.forEach(n => { n.ring = Math.min(depth[n.id] || 0, 6); });

    // Key nodes must not sit next to start, and should spread across map
    const assignable = nodes.filter(n => n !== start && n !== warlord && !start.edges.includes(n.id));
    // Fallback if start is a hub with few distant nodes
    const pool = assignable.length ? assignable : nodes.filter(n => n !== start && n !== warlord);

    // Spread bases/research by quadrant preference (avoid all keys in one corner)
    function quadrant(n) {
      return (n.x < MAPW / 2 ? 0 : 1) + (n.y < MAPH / 2 ? 0 : 2);
    }
    function pickSpread(cands, avoidIds, preferFar) {
      const avoid = new Set(avoidIds || []);
      let list = cands.filter(n => !avoid.has(n.id));
      if (!list.length) list = cands.slice();
      // Score: distance from start + distance from already picked + rare quadrant bonus
      const usedQ = {};
      avoidIds && avoidIds.forEach(id => { if (byId[id]) usedQ[quadrant(byId[id])] = true; });
      list = list.slice().sort((a, b) => {
        const sa = dist(a, start) * (preferFar ? 1 : 0.4)
          + (avoidIds || []).reduce((s, id) => s + (byId[id] ? dist(a, byId[id]) : 0), 0)
          + (usedQ[quadrant(a)] ? 0 : 220);
        const sb = dist(b, start) * (preferFar ? 1 : 0.4)
          + (avoidIds || []).reduce((s, id) => s + (byId[id] ? dist(b, byId[id]) : 0), 0)
          + (usedQ[quadrant(b)] ? 0 : 220);
        return sb - sa;
      });
      // Seeded jitter among top half
      const top = list.slice(0, Math.max(1, Math.ceil(list.length * 0.45)));
      return top[Math.floor(R() * top.length)];
    }

    // ~3 supply bases per part (spread across map), not a single hub
    const baseCount = Math.min(3, Math.max(2, pool.length >= 8 ? 3 : 2));
    const eliteCount = Math.max(2, Math.floor(pool.length / 4));
    const baseIds = [];
    for (let i = 0; i < baseCount; i++) {
      const b = pickSpread(pool, baseIds.concat([warlord.id]), true);
      if (b) baseIds.push(b.id);
    }
    const baseSet = new Set(baseIds);

    // Research stations: two per part — one universe log, one pilot disk
    const researchIds = [];
    const researchRoles = {}; // id → 'universe' | 'pilot'
    {
      let cand = pool.filter(n => !baseSet.has(n.id));
      const r1 = pickSpread(cand, baseIds.concat([warlord.id]), true);
      if (r1) {
        researchIds.push(r1.id);
        // Prefer opposite-ish placement for the second lab
        cand = cand.filter(n => n.id !== r1.id);
        const r2 = pickSpread(cand, baseIds.concat([warlord.id, r1.id]), true);
        if (r2) researchIds.push(r2.id);
      }
      // Seeded role assign: first pick = universe note, second = pilot disk (swap 40%)
      if (researchIds.length) {
        let uni = researchIds[0], pil = researchIds[1];
        if (researchIds.length >= 2 && R() < 0.4) { uni = researchIds[1]; pil = researchIds[0]; }
        researchRoles[uni] = 'universe';
        if (pil != null) researchRoles[pil] = 'pilot';
        else researchRoles[uni] = 'universe'; // single-lab fallback still grants universe
      }
    }
    const researchSet = new Set(researchIds);

    // Elites among remaining
    const elitePool = pool.filter(n => !baseSet.has(n.id) && !researchSet.has(n.id))
      .slice().sort(() => R() - 0.5);
    const eliteSet = new Set(elitePool.slice(0, eliteCount).map(n => n.id));

    nodes.forEach(n => {
      const tier = (part - 1) * 3 + n.ring;
      n.tier = tier;
      n.palette = P.palettes[n.ring % P.palettes.length];
      n.startWave = 4 + tier * 4;
      if (n === start) { n.type = 'start'; n.hazards = {}; n.waves = 0; return; }

      if (n === warlord) {
        n.type = 'boss'; n.warlord = true; n.boss = P.boss; n.waves = 2 + (part - 1);
        n.pool = P.pool.slice();
        n.hazards = { radiation: R() < 0.7 ? part : 0, asteroids: R() < 0.4 };
        n.diff = 5;
      } else if (baseSet.has(n.id)) {
        n.type = 'base'; n.dock = true; n.waves = Math.min(5, 2 + Math.floor(n.ring / 3) + (part - 1));
        n.pool = P.pool.slice();
        n.hazards = { asteroids: R() < 0.3, radiation: R() < (part - 1) * 0.2 ? part - 1 : 0 };
        n.diff = Math.min(4, 1 + Math.floor(tier / 2));
      } else if (researchSet.has(n.id)) {
        n.type = 'research';
        n.researchRole = researchRoles[n.id] || 'universe';
        n.dock = true; // vertical combat then the same docking cine as a supply base
        n.waves = Math.min(7, 3 + Math.floor(n.ring / 2) + (part - 1));
        n.boss = null;
        n.midBoss = null;
        n.pool = P.pool.slice();
        n.hazards = { radiation: R() < 0.35 ? 1 : 0 };
        n.diff = Math.min(5, 2 + Math.floor(n.ring / 2) + (part - 1));
      } else {
        const elite = eliteSet.has(n.id);
        n.type = elite ? 'elite' : 'combat';
        n.pool = elite ? P.pool.concat(['destroyer', 'carrier']) : P.pool.slice();
        n.waves = Math.min(9, 3 + Math.floor(n.ring / 2) + (part - 1) * 2 + (elite ? 1 : 0));
        // Keep pick() here so the main RNG stream (relays / story leaves) stays
        // seed-stable; unique deal at the end overwrites these keys.
        n.boss = pick(P.bosses);
        if (n.waves >= 6 || (n.waves === 5 && R() < 0.5)) {
          n.midBoss = pick(P.bosses);
          if (n.midBoss === n.boss) n.midBoss = pick(P.bosses);
        }
        let astChance = 0.22 + part * 0.08 + (elite ? 0.15 : 0);
        let radChance = (part === 1 ? 0.14 : part === 2 ? 0.34 : 0.52) + (elite ? 0.12 : 0);
        // ULTRA: an empty node is a rest stop, and on this difficulty there
        // should not be any. Every combat node gets rock or radiation, most get both.
        if (ULTRA) { astChance += 0.55; radChance += 0.55; }
        n.hazards = { asteroids: R() < astChance, radiation: R() < radChance ? Math.min(3, part + (elite ? 1 : 0)) : 0 };
        if (ULTRA && !n.hazards.asteroids && !n.hazards.radiation) {
          n.hazards.asteroids = true;                    // never a bare node
        }
        n.diff = Math.min(5, 1 + Math.floor(tier / 2) + (elite ? 1 : 0));
      }
    });

    /* JAMMER BUBBLES — from part 2 on, getting commoner and nastier with depth.
     * Tuned to be a recurring complication, not wallpaper: roughly a third of
     * combat nodes in mid-campaign and most of them by part 5, so you meet one
     * every couple of nodes rather than every wave or once a chapter.
     * `bubbleTier` picks how long the lockout can get (Hazards.BUBBLE_KINDS). */
    if (part >= 2) {
      const baseChance = 0.16 + (part - 2) * 0.13;      // p2 .16 → p5 .55
      nodes.forEach(n => {
        if (n.type === 'start' || n.type === 'base' || n.type === 'research') return;
        let c = baseChance + (n.type === 'elite' ? 0.14 : 0) + (n.warlord ? 0.2 : 0);
        if (ULTRA) c += 0.22;
        if (R() < Math.min(0.85, c)) {
          n.hazards.bubbles = true;
          // p2->1 p3->2 p4->3 p5->4, +1 for ULTRA / warlord. The old /1.6 curve
          // topped out at 3 for a normal part-5 node, which put the nastiest
          // grade out of reach for anyone not playing ULTRA.
          n.hazards.bubbleTier = Math.max(1, Math.min(4,
            1 + Math.floor((part - 1) / 1.2) + (ULTRA ? 1 : 0) + (n.warlord ? 1 : 0)));
        }
      });
    }

    // Late-chapter MECHANICS (parts 4-5 only)
    if (P.mechanics && P.mechanics.length) {
      nodes.forEach(n => {
        if (n.type === 'start' || n.type === 'base' || n.type === 'research') return;
        P.mechanics.forEach((mech, i) => {
          let chance = n.warlord ? (i === 0 ? 1 : 0.6) : (n.type === 'elite' ? 0.6 : 0.42);
          if (ULTRA) chance = Math.min(1, chance + 0.38);
          if (R() < chance) n.hazards[mech] = true;
        });
      });
    }

    // STORY-SHIP PART on a far combat/elite leaf (not research/relay)
    let leaves = nodes.filter(n => (n.type === 'combat' || n.type === 'elite') && n.edges.length === 1);
    if (!leaves.length) leaves = nodes.filter(n => n.type === 'combat' || n.type === 'elite');
    if (leaves.length) {
      leaves.sort((a, b) => dist(b, start) - dist(a, start));
      const farthest = leaves.slice(0, Math.min(3, leaves.length));
      farthest[Math.floor(R() * farthest.length)].part = part;
    }

    // ── RELAY (jammer): mid-path combat/elite → assault; jam cut edges ──
    {
      const parent = { [start.id]: null };
      const bq2 = [start.id];
      while (bq2.length) {
        const id = bq2.shift();
        byId[id].edges.forEach(e => {
          if (parent[e] === undefined) { parent[e] = id; bq2.push(e); }
        });
      }
      const chain = [];
      for (let c = warlord.id; c != null; c = parent[c]) chain.push(c);
      chain.reverse();
      let cands = chain.filter(id => {
        const n = byId[id];
        return n !== start && n !== warlord
          && n.type !== 'base' && n.type !== 'start' && n.type !== 'research' && n.type !== 'relay';
      });
      if (!cands.length) {
        cands = nodes.filter(n => (n.type === 'combat' || n.type === 'elite')
          && n !== warlord && !start.edges.includes(n.id)).map(n => n.id);
      }
      if (cands.length) {
        // Prefer mid-depth of chain (paths of different lengths remain via branches)
        const mid = cands[Math.min(cands.length - 1, Math.max(0, Math.floor(cands.length * 0.55)))];
        const relayId = mid;
        const rn = byId[relayId];
        rn.type = 'relay';
        rn.dock = false;
        rn.waves = Math.min(7, 3 + Math.floor((rn.ring || 0) / 2) + (part - 1));
        rn.boss = 'relayCore';
        rn.midBoss = null;
        rn.pool = P.pool.slice();
        rn.hazards = rn.hazards || {};
        rn.diff = Math.min(5, 2 + Math.floor((rn.ring || 0) / 2) + (part - 1));
        if (rn.part) {
          const partN = rn.part;
          delete rn.part;
          let alt = nodes.filter(n => (n.type === 'combat' || n.type === 'elite') && n !== rn && n !== warlord);
          if (alt.length) {
            alt.sort((a, b) => dist(b, start) - dist(a, start));
            alt[0].part = partN;
          }
        }

        const markJam = (a, b, rid) => {
          if (!byId[a].jamEdges) byId[a].jamEdges = {};
          if (!byId[b].jamEdges) byId[b].jamEdges = {};
          byId[a].jamEdges[b] = rid;
          byId[b].jamEdges[a] = rid;
        };
        const reach = new Set();
        const rq = [start.id];
        reach.add(start.id);
        while (rq.length) {
          const id = rq.shift();
          byId[id].edges.forEach(e => {
            if (e === relayId) return;
            if (reach.has(e)) return;
            reach.add(e);
            rq.push(e);
          });
        }
        nodes.forEach(n => {
          n.edges.forEach(eid => {
            if (n.id > eid) return;
            if (n.id === relayId || eid === relayId) return;
            const aIn = reach.has(n.id), bIn = reach.has(eid);
            if (aIn !== bIn) markJam(n.id, eid, relayId);
          });
        });
        warlord.edges.forEach(eid => {
          if (eid === relayId) return;
          markJam(warlord.id, eid, relayId);
        });
      }
    }

    // Bases stay dock=true with their computed waves (vertical combat → docking cine).
    // 360° orbit is post-release DLC — do not zero waves or set n.orbit.

    // Unique mini-bosses (side RNG — does not shift relays / story leaves).
    // Independent pick(P.bosses) repeats the same archetype on neighboring
    // nodes; the gate warlord must never also sit on a combat node.
    dealUniqueMiniBosses(nodes, byId, start, P, seed, part);

    return { part, seed, nodes, byId, start };
  }

  // Voxel silhouette per mini-boss — neighbors prefer a different shape, not
  // only a different tint of the same rock/orb/star.
  const BOSS_SIL = {
    nebula: 'warden', asteroid: 'rock', hive: 'hive', void: 'star',
    ember: 'rock', frost: 'orb', nexus: 'cross', core: 'orb',
    warden: 'orb', leviathan: 'rock', reaper: 'ship', dreadnought: 'cross',
    overmind: 'round', singularity: 'star', titan: 'star',
  };

  function dealUniqueMiniBosses(nodes, byId, start, P, seed, part) {
    const Rb = Engine.makeRng((seed ^ (part * 0x51ed) ^ 0xb055) >>> 0);
    const shuffle = arr => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Rb() * (i + 1));
        const t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    };
    // Gate ultra-boss is a leaf — keep it off combat/elite so the chapter
    // does not replay Crimson Warden / Hive Voice as a "random" node fight.
    const pool = (P.bosses || []).filter(b => b && b !== P.boss);
    const roster = shuffle(pool.length ? pool : (P.bosses || []).slice());
    if (!roster.length) return;
    const combat = nodes.filter(n => n.type === 'combat' || n.type === 'elite');
    combat.forEach(n => { n.boss = null; });

    // Walk from the start so the path the player actually takes gets variety first.
    const order = [];
    const seen = new Set();
    const q = start ? [start.id] : [];
    if (start) seen.add(start.id);
    while (q.length) {
      const id = q.shift();
      const n = byId[id];
      if (n && (n.type === 'combat' || n.type === 'elite')) order.push(n);
      (n && n.edges || []).forEach(eid => {
        if (!seen.has(eid)) { seen.add(eid); q.push(eid); }
      });
    }
    combat.forEach(n => { if (!order.includes(n)) order.push(n); });

    const used = {};
    roster.forEach(b => { used[b] = 0; });
    const neighBosses = n => {
      const out = [];
      (n.edges || []).forEach(id => {
        const o = byId[id];
        if (o && o.boss && (o.type === 'combat' || o.type === 'elite')) out.push(o.boss);
      });
      return out;
    };
    const pickOne = forbidden => {
      const forbid = new Set(forbidden || []);
      const neighSil = new Set((forbidden || []).map(b => BOSS_SIL[b] || b));
      let best = null, bestScore = Infinity;
      const consider = (allowSil) => {
        roster.forEach(b => {
          if (forbid.has(b)) return;
          if (!allowSil && neighSil.has(BOSS_SIL[b] || b)) return;
          const sc = used[b] || 0;
          if (sc < bestScore) { bestScore = sc; best = b; }
        });
      };
      consider(false);
      if (best == null) { bestScore = Infinity; consider(true); }
      if (best == null) {
        roster.forEach(b => {
          const sc = used[b] || 0;
          if (sc < bestScore) { bestScore = sc; best = b; }
        });
      }
      return best || roster[0];
    };

    order.forEach(n => {
      const b = pickOne(neighBosses(n));
      n.boss = b;
      used[b] = (used[b] || 0) + 1;
      if (n.midBoss) {
        let m = pickOne(neighBosses(n).concat([n.boss]));
        if (m === n.boss) {
          const alt = roster.filter(k => k !== n.boss);
          m = alt.length ? alt[Math.floor(Rb() * alt.length)] : m;
        }
        n.midBoss = m;
      }
    });

    // Second pass: a node processed early can still collide with a later neighbor.
    order.forEach(n => {
      const forbid = neighBosses(n);
      if (forbid.indexOf(n.boss) >= 0) {
        const nboss = pickOne(forbid);
        if (nboss && forbid.indexOf(nboss) < 0) {
          used[n.boss] = Math.max(0, (used[n.boss] || 1) - 1);
          n.boss = nboss;
          used[nboss] = (used[nboss] || 0) + 1;
        }
      }
      if (n.midBoss && (n.midBoss === n.boss || forbid.indexOf(n.midBoss) >= 0)) {
        let m = pickOne(forbid.concat([n.boss]));
        if (m === n.boss) {
          const alt = roster.filter(k => k !== n.boss);
          m = alt.length ? alt[0] : m;
        }
        n.midBoss = m;
      }
    });
  }

  /**
   * Fuel cost from geometric length only (must match on-map edge length).
   * Bands ≈ old round(d/130) for 1–3, plus a 4-fuel tier for very long bridges:
   *   1:  d < 195   (short hop)
   *   2:  d < 325   (medium)
   *   3:  d < 455   (long — was max before)
   *   4:  d ≥ 455   (extra-long bridges from genMap)
   * No random bumps: a short line never costs 3–4.
   */
  function edgeCost(m, aId, bId) {
    const a = m.byId[aId], b = m.byId[bId];
    if (!a || !b) return 1;
    if (a.edgeFuel && a.edgeFuel[bId] != null) return a.edgeFuel[bId];
    if (b.edgeFuel && b.edgeFuel[aId] != null) return b.edgeFuel[aId];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    if (d < 195) return 1;
    if (d < 325) return 2;
    if (d < 455) return 3;
    return 4;
  }

  /** Edge is open if not jammed by an uncleared relay. */
  function edgeOpen(m, aId, bId) {
    const a = m.byId[aId], b = m.byId[bId];
    if (!a || !b) return false;
    const jamA = a.jamEdges && a.jamEdges[bId];
    const jamB = b.jamEdges && b.jamEdges[aId];
    const jam = jamA != null ? jamA : jamB;
    if (jam != null && !isVisited(jam)) return false;
    return true;
  }
  function edgeJamRelay(m, aId, bId) {
    const a = m.byId[aId], b = m.byId[bId];
    if (!a || !b) return null;
    return (a.jamEdges && a.jamEdges[bId]) || (b.jamEdges && b.jamEdges[aId]) || null;
  }

  function baseStates() {
    const s = st();
    if (!s.baseStates) s.baseStates = {};
    return s.baseStates;
  }
  function baseState(id) { return baseStates()[id] || 'ok'; }
  function isBaseDamaged(id) { return baseState(id) === 'damaged'; }
  function isBaseDestroyed(id) { return baseState(id) === 'destroyed'; }
  /** How many of the 4 defense hardpoints were lost (0–4). */
  function baseNodeLossMap() {
    const s = st();
    if (!s.baseNodeLoss) s.baseNodeLoss = {};
    return s.baseNodeLoss;
  }
  function baseNodeLoss(id) { return baseNodeLossMap()[id] || 0; }
  function setBaseNodeLoss(id, n) {
    baseNodeLossMap()[id] = Math.max(0, Math.min(4, n | 0));
    Profile.save();
  }
  /**
   * Hard base fail (bible destroy) — off by default.
   * Toggle: Profile.settings.hardBaseFail === true  OR  Campaign.HARD_BASE_FAIL.
   */
  const HARD_BASE_FAIL = false;
  function hardBaseFailEnabled() {
    if (HARD_BASE_FAIL) return true;
    const s = Profile.get().settings;
    return !!(s && s.hardBaseFail);
  }
  /**
   * Defense fail (all 4 nodes down): soft → damaged warehouse (gift locked);
   * hard → destroyed (no depot). Soft is default so softlocks stay rare.
   * nodesLost recorded for shop slot locks (3 lost → 3 random slots locked).
   */
  function onBaseFailed(id, nodesLost) {
    if (nodesLost != null) setBaseNodeLoss(id, nodesLost);
    else setBaseNodeLoss(id, 4);
    if (hardBaseFailEnabled()) {
      baseStates()[id] = 'destroyed';
      onCleared(id);
      const s = st();
      if (s.claimed && !s.claimed.includes(id)) s.claimed.push(id);
    } else {
      baseStates()[id] = 'damaged';
      onCleared(id);
    }
    // Wipe stock so warehouse regenerates with damage locks
    const s = st();
    if (s.baseStock) delete s.baseStock[id];
    Profile.save();
    return baseState(id);
  }
  /** After a successful hold — record partial damage for warehouse assortment. */
  function onBaseHeld(id, nodesLost) {
    setBaseNodeLoss(id, nodesLost || 0);
    onCleared(id);
    const s = st();
    if (s.baseStock) delete s.baseStock[id]; // rebuild stock with new locks
    Profile.save();
  }

  // ---------- persistent state — SEPARATE campaign per difficulty ----------
  const FUEL_START = 14;                 // starting reserve (edge costs are 1–3 now)
  const FUEL_BUY_AMOUNT = 5, FUEL_BUY_GEMS = 5;   // refuel: +5 fuel for 5 💎 (gems only)
  const SAT_PRICE_GEMS = 10;             // recon satellite price in the SHOP (gems)
  // Battle gear at a supply base is bought with GOLD (credits); the shop sells the
  // same gear for gems. Gold price = the gem price × this conversion.
  const GEM_TO_CREDITS = 300;
  const WARP_SECS = 10;                                              // seconds per ⏩ buy (matches shop)
  const WARP_GEMS = 2, WARP_CREDITS = WARP_GEMS * GEM_TO_CREDITS;    // 600 gold
  const SAT_CREDITS = SAT_PRICE_GEMS * GEM_TO_CREDITS;              // 3000 gold
  /** Supply-base intel: reveal one hidden research station on the map. */
  const RESEARCH_INTEL_CREDITS = 1500;
  const BASE_GOLD_REWARD = 1500;         // gold given when the free base upgrade is already maxed

  function root() { const p = Profile.get(); if (!p.campaigns) p.campaigns = {}; return p.campaigns; }
  function diffKey() { return Profile.get().difficulty || 'normal'; }
  function cState() {
    const r = root(), k = diffKey();
    if (!r[k]) r[k] = { part: 1, maps: {}, done: false, fuel: FUEL_START };
    if (r[k].fuel == null) r[k].fuel = FUEL_START;
    return r[k];
  }
  function ensure() {
    const c = cState();
    if (!c.maps[c.part]) initPart(c.part);
    return c;
  }
  function initPart(part) {
    const c = cState();
    const seed = (Date.now() ^ (Math.random() * 1e9)) >>> 0;
    const m = genMap(part, seed);
    c.part = part;
    c.maps[part] = {
      seed, current: m.start.id, visited: [m.start.id], claimed: [],
      baseStates: {},   // id → 'ok' | 'damaged'
    };
    Profile.save();
  }

  function map() { const c = ensure(); return genMap(c.part, c.maps[c.part].seed); }
  function st() { const c = ensure(); return c.maps[c.part]; }
  function part() { return ensure().part; }
  function currentId() { return st().current; }
  function isVisited(id) { return st().visited.includes(id); }

  // Revealed = visited or neighbouring a visited node (the frontier).
  function isFrontier(m, id) {
    if (isVisited(id)) return false;
    const vis = st().visited;
    return m.nodes.some(n => vis.includes(n.id) && n.edges.includes(id));
  }
  // 🛰 recon: a scouted node exposes its connections — its neighbours become
  // visible ("seen" through the fog) even before you clear a path to them.
  function scoutedIds() { const s = st(); return s.scouted || (s.scouted = []); }
  function isScouted(id) { return scoutedIds().includes(id); }
  function scoutVisible(m, id) {
    return scoutedIds().some(sid => sid === id || (m.byId[sid] && m.byId[sid].edges.includes(id)));
  }
  // Research intel (bought at supply base) — reveals lab beacons without pathing.
  function researchIntelIds() {
    const s = st();
    if (!s.researchIntel) s.researchIntel = [];
    return s.researchIntel;
  }
  function isResearchIntel(id) { return researchIntelIds().includes(id); }
  /** Research still hidden on the map (no path/scout/visit/intel). */
  function hiddenResearchNodes(m) {
    m = m || map();
    return m.nodes.filter(n => {
      if (n.type !== 'research') return false;
      if (isVisited(n.id) || isResearchIntel(n.id)) return false;
      if (isFrontier(m, n.id) || scoutVisible(m, n.id)) return false;
      return true;
    });
  }
  /** Mark research node as intel-revealed. Returns true if newly added. */
  function revealResearchIntel(id) {
    const list = researchIntelIds();
    if (list.includes(id)) return false;
    list.push(id);
    Profile.save();
    return true;
  }

  // Relay jammers are always map beacons. Research labs are NOT — buy intel
  // at a supply base (or discover via frontier / scout / visit).
  function isRevealed(m, id) {
    if (isVisited(id) || isFrontier(m, id) || scoutVisible(m, id)) return true;
    const n = m.byId[id];
    if (!n) return false;
    if (n.type === 'relay') return true;
    if (n.type === 'research' && isResearchIntel(id)) return true;
    return false;
  }

  function satellites() { const p = Profile.get(); return p.satellites == null ? 1 : p.satellites; }
  function useSatellite(id) {
    const p = Profile.get();
    if (satellites() <= 0 || isScouted(id)) return false;
    p.satellites = satellites() - 1;
    scoutedIds().push(id);
    Profile.save();
    return true;
  }
  function buySatellite() {
    const p = Profile.get();
    if ((p.gems || 0) < SAT_PRICE_GEMS) return false;
    p.gems -= SAT_PRICE_GEMS; p.satellites = satellites() + 1; Profile.save(); return true;
  }
  // Supply-base purchases (GOLD): ⏩ time-warp seconds + 🛰 recon satellites.
  function buyWarpCredits() {
    const p = Profile.get(); if (p.credits < WARP_CREDITS) return false;
    p.credits -= WARP_CREDITS; p.warp = (p.warp || 0) + WARP_SECS; Profile.save(); return true;
  }
  function buySatelliteCredits() {
    const p = Profile.get(); if (p.credits < SAT_CREDITS) return false;
    p.credits -= SAT_CREDITS; p.satellites = satellites() + 1; Profile.save(); return true;
  }
  // Supply trader SELL rates (player dumps gear for gold at a base).
  const SELL_WARP_SECS = 10, SELL_WARP_CREDITS = 350;
  const SELL_SAT_CREDITS = 900;
  function sellWarp() {
    const p = Profile.get();
    if ((p.warp || 0) < SELL_WARP_SECS) return false;
    p.warp -= SELL_WARP_SECS; p.credits += SELL_WARP_CREDITS; Profile.save(); return true;
  }
  function sellSatellite() {
    const p = Profile.get();
    if (satellites() < 1) return false;
    p.satellites = satellites() - 1; p.credits += SELL_SAT_CREDITS; Profile.save(); return true;
  }
  /** Stable product serial for a supply node. Series 10 = service droids.
   *  Display: «Изделие #10-922» / «Unit #10-922». */
  function traderCode(nodeId) {
    const pn = part();
    const serial = 100 + ((Math.abs(nodeId | 0) * 73 + pn * 17) % 900);
    return '10-' + serial;
  }
  /** Stable serial for a research lab. Series 20 = science cores. */
  function labCode(nodeId) {
    const pn = part();
    const serial = 100 + ((Math.abs(nodeId | 0) * 91 + pn * 23) % 900);
    return '20-' + serial;
  }
  function isAdjacent(m, id) { const cur = m.byId[currentId()]; return !!(cur && cur.edges.includes(id)); }

  function move(id) { if (!isVisited(id)) return false; st().current = id; Profile.save(); return true; }

  function onCleared(id) {
    const s = st(), p = Profile.get();
    // stagesCleared is GLOBAL + permanent → drives weapon-drop unlocks (survives a wipe).
    if (!s.visited.includes(id)) { s.visited.push(id); p.stagesCleared = (p.stagesCleared || 0) + 1; }
    s.current = id; Profile.save();
  }
  function onBossCleared(id) {
    onCleared(id);
    const c = cState();
    if (c.part >= LAST_PART) {
      // done now so hub shows replay if the tab dies mid-cine.
      // campaignEverCleared is set later in Game.victory so first-clear story can play.
      c.done = true;
      Profile.save();
      return { finished: true };
    }
    initPart(c.part + 1);
    return { finished: false, part: c.part };
  }

  // ---- fuel (per difficulty). Jumps cost 1. Refuel only for GEMS at a base. ----
  function fuel() { return cState().fuel; }
  function spendFuel(n) { const c = cState(); if (c.fuel < n) return false; c.fuel -= n; Profile.save(); return true; }
  function addFuel(n) { const c = cState(); c.fuel += n; Profile.save(); }
  function canRefuel() { return (Profile.get().gems || 0) >= FUEL_BUY_GEMS; }
  function buyFuel() { const p = Profile.get(); if ((p.gems || 0) < FUEL_BUY_GEMS) return false; p.gems -= FUEL_BUY_GEMS; cState().fuel += FUEL_BUY_AMOUNT; Profile.save(); return true; }
  /** Fuel an edge actually costs, including the fuelTank discount the map shows. */
  function travelCost(m, aId, bId) {
    let c = edgeCost(m, aId, bId);
    try {
      if (typeof Meta !== 'undefined' && Meta.fuelDiscount) {
        c = Math.max(1, c - (Meta.fuelDiscount(Profile.get()) || 0));
      }
    } catch (e) {}
    return c;
  }
  /**
   * Cheapest open jump out of the current node, or null if there is none at all.
   * This is what "stranded" has to be measured against — see stranded().
   */
  function cheapestExit() {
    const m = map(), cur = m.byId[currentId()];
    if (!cur) return null;
    let best = null;
    (cur.edges || []).forEach(eid => {
      if (!edgeOpen(m, cur.id, eid)) return;
      const c = travelCost(m, cur.id, eid);
      if (best == null || c < best) best = c;
    });
    return best;
  }
  /**
   * Stranded = cannot make ANY move from here and cannot refuel on the spot.
   *
   * This used to test `fuel() > 0`, which is the wrong question: sitting on 1
   * fuel with every neighbour 2 jumps away is exactly as stuck as sitting on 0,
   * and the game happily let the player stare at a map they could not use. The
   * test is affordability of the cheapest open edge, not an empty tank.
   */
  function stranded() {
    const m = map(), cur = m.byId[currentId()];
    if (!cur) return false;
    const cheapest = cheapestExit();
    if (cheapest != null && fuel() >= cheapest) return false;   // a move exists
    // Stuck. A working base underfoot is a way out; a destroyed one is not.
    if (cur.type === 'base' && !isBaseDestroyed(cur.id)) return false;
    return true;
  }
  // Out of fuel → wipe THIS difficulty's campaign (progress only; ships/credits/gems kept).
  function failCampaign() { delete root()[diffKey()]; ensure(); Profile.save(); }

  // ---- base bonus: one free upgrade per base, tracked per map ----
  function isBaseClaimed(id) { const s = st(); return !!(s.claimed && s.claimed.includes(id)); }
  function claimBase(id) { const s = st(); if (!s.claimed) s.claimed = []; if (!s.claimed.includes(id)) s.claimed.push(id); Profile.save(); }

  // Which upgrade a base WILL give — deterministic per node so the player can be
  // told IN ADVANCE (node info + base modal), and the claim grants exactly it.
  // Gift unavailable only when all 4 defense points fell (or hard-destroyed).
  // 3 points lost → random shop slots locked, gift still available.
  function baseReward(nodeId) {
    if (isBaseDestroyed(nodeId)) return null;
    if (baseNodeLoss(nodeId) >= 4 || isBaseDamaged(nodeId)) return null;
    const prof = Profile.get();
    const tree = Meta.shipTree(prof.ship);
    const sl = Meta.shipUpgrades(prof);
    // A base never gifts the FINAL level of a system: the last rung of every
    // branch is the expensive one the player is meant to save toward, and handing
    // it over free made maxing a ship a matter of docking often enough.
    const avail = tree.filter(({ def, max }) => (sl[def.key] || 0) < max - 1);
    // Nothing left that a base may gift → pay GOLD instead of a dead upgrade.
    if (!avail.length) return { key: 'gold', gold: BASE_GOLD_REWARD, maxed: true };
    const seed = ((st().seed || 1) ^ (nodeId * 0x9e37) ^ 0xBA5E) >>> 0;
    const def = avail[Math.floor(Engine.makeRng(seed)() * avail.length)].def;
    return { key: def.key, icon: def.icon, level: (sl[def.key] || 0) + 1 };
  }

  // ── Per-base limited warehouse stock (seeded, finite buys) ──
  const SELL_FUEL_AMOUNT = 3, SELL_FUEL_CREDITS = 180;
  const CRYSTAL_BUY_CREDITS = 900, CRYSTAL_BUY_GEMS = 2;
  const CRYSTAL_SELL_CREDITS = 450; // sell 1 gem for credits (secondary market)

  function baseStockMap() {
    const s = st();
    if (!s.baseStock) s.baseStock = {};
    return s.baseStock;
  }
  /**
   * Build finite assortment for a supply base.
   * Damage: if ≥3 nodes lost, lock 3 random buy slots (not the gift row).
   */
  function ensureBaseStock(nodeId) {
    const map = baseStockMap();
    if (map[nodeId]) {
      // Migrate older saves that predate the research-intel shelf
      if (map[nodeId].intel == null) map[nodeId].intel = 1;
      return map[nodeId];
    }
    const seed = ((st().seed || 1) ^ (nodeId * 0xC0FF) ^ 0x57A6) >>> 0;
    const R = Engine.makeRng(seed);
    const pick = (a, b) => a + Math.floor(R() * (b - a + 1));
    const chapterMul = Math.pow(2, Math.max(0, (part() | 0) - 1));
    const stock = {
      fuel: pick(1, 3) * chapterMul,
      warp: pick(0, 2) * chapterMul,
      sat: pick(0, 2) * chapterMul,
      // Research-lab intel: one dossier per depot (if any labs still hidden)
      intel: R() < 0.78 ? 1 : 0,
      // Crystal deal: buy gems for credits OR sell a gem for credits
      crystal: R() < 0.55
        ? { mode: 'buy', stock: pick(1, 2), price: CRYSTAL_BUY_CREDITS, gems: CRYSTAL_BUY_GEMS }
        : { mode: 'sell', stock: pick(1, 3), price: CRYSTAL_SELL_CREDITS, gems: 1 },
      // Fuel sell slot (player dumps fuel for credits)
      // The depot is the only sink for a fuel surplus, so a 30% chance of no
      // slot at all (and a 1-unit quota when there was one) meant the player
      // just carried the excess forever.
      fuelSell: R() < 0.85,
      fuelSellStock: pick(2, 4) * chapterMul,
      locked: {}, // slot → true when damaged
    };
    // Varied empty shelves: some bases simply lack warp or sat
    if (R() < 0.22) stock.warp = 0;
    if (R() < 0.18) stock.sat = 0;
    if (R() < 0.15) stock.crystal.stock = 0;
    if (R() < 0.12) stock.intel = 0;

    const lost = baseNodeLoss(nodeId);
    if (lost >= 3) {
      // Prefer locking warp/sat/crystal/intel first — keep fuel available (anti-softlock)
      const slots = ['warp', 'sat', 'crystal', 'intel', 'fuel'];
      for (let i = slots.length - 1; i > 0; i--) {
        const j = Math.floor(R() * (i + 1));
        const tmp = slots[i]; slots[i] = slots[j]; slots[j] = tmp;
      }
      // Sort so fuel is never among the first 2 locks when possible
      slots.sort((a, b) => (a === 'fuel' ? 1 : 0) - (b === 'fuel' ? 1 : 0));
      slots.slice(0, 3).forEach(k => { stock.locked[k] = true; });
      // Guarantee at least 1 fuel unit if fuel not locked
      if (!stock.locked.fuel && stock.fuel < 1) stock.fuel = 1;
    }
    map[nodeId] = stock;
    Profile.save();
    return stock;
  }
  function consumeBaseStock(nodeId, slot, n) {
    const stck = ensureBaseStock(nodeId);
    n = n || 1;
    if (stck.locked[slot]) return false;
    if (slot === 'fuel') {
      if (stck.fuel < n) return false;
      stck.fuel -= n; Profile.save(); return true;
    }
    if (slot === 'warp') {
      if (stck.warp < n) return false;
      stck.warp -= n; Profile.save(); return true;
    }
    if (slot === 'sat') {
      if (stck.sat < n) return false;
      stck.sat -= n; Profile.save(); return true;
    }
    if (slot === 'intel') {
      if ((stck.intel || 0) < n) return false;
      stck.intel -= n; Profile.save(); return true;
    }
    if (slot === 'crystal') {
      if (!stck.crystal || stck.crystal.stock < n) return false;
      stck.crystal.stock -= n; Profile.save(); return true;
    }
    if (slot === 'fuelSell') {
      if (!stck.fuelSell || stck.fuelSellStock < n) return false;
      stck.fuelSellStock -= n; Profile.save(); return true;
    }
    return false;
  }
  function buyFuelAtBase(nodeId) {
    const stck = ensureBaseStock(nodeId);
    if (stck.locked.fuel || stck.fuel <= 0) return false;
    if (!canRefuel()) return false;
    if (!consumeBaseStock(nodeId, 'fuel', 1)) return false;
    return buyFuel();
  }
  function buyWarpAtBase(nodeId, price) {
    const stck = ensureBaseStock(nodeId);
    if (stck.locked.warp || stck.warp <= 0) return false;
    const p = Profile.get();
    const cost = price != null ? price : WARP_CREDITS;
    if (p.credits < cost) return false;
    if (!consumeBaseStock(nodeId, 'warp', 1)) return false;
    p.credits -= cost;
    p.warp = (p.warp || 0) + WARP_SECS;
    Profile.save();
    return true;
  }
  function buySatAtBase(nodeId, price) {
    const stck = ensureBaseStock(nodeId);
    if (stck.locked.sat || stck.sat <= 0) return false;
    const p = Profile.get();
    const cost = price != null ? price : SAT_CREDITS;
    if (p.credits < cost) return false;
    if (!consumeBaseStock(nodeId, 'sat', 1)) return false;
    p.credits -= cost;
    p.satellites = satellites() + 1;
    Profile.save();
    return true;
  }
  /**
   * Buy research-lab coordinates at a supply base.
   * Reveals one random still-hidden research node. Returns node id or null.
   */
  function buyResearchIntelAtBase(nodeId, price) {
    const stck = ensureBaseStock(nodeId);
    if (stck.locked && stck.locked.intel) return null;
    if ((stck.intel || 0) <= 0) return null;
    const hidden = hiddenResearchNodes();
    if (!hidden.length) return null;
    const p = Profile.get();
    const cost = price != null ? price : RESEARCH_INTEL_CREDITS;
    if (p.credits < cost) return null;
    if (!consumeBaseStock(nodeId, 'intel', 1)) return null;
    p.credits -= cost;
    // Seeded pick among hidden labs (stable per buy attempt order)
    const seed = ((st().seed || 1) ^ (nodeId * 0x1E11) ^ (hidden.length * 0x9e37) ^ researchIntelIds().length) >>> 0;
    const pick = hidden[Math.floor(Engine.makeRng(seed)() * hidden.length)];
    revealResearchIntel(pick.id);
    Profile.save();
    return pick.id;
  }
  function buyCrystalAtBase(nodeId) {
    const stck = ensureBaseStock(nodeId);
    if (stck.locked.crystal || !stck.crystal || stck.crystal.mode !== 'buy' || stck.crystal.stock <= 0) return false;
    const p = Profile.get();
    if (p.credits < stck.crystal.price) return false;
    if (!consumeBaseStock(nodeId, 'crystal', 1)) return false;
    p.credits -= stck.crystal.price;
    p.gems = (p.gems || 0) + (stck.crystal.gems || 1);
    Profile.save();
    return true;
  }
  function sellCrystalAtBase(nodeId) {
    const stck = ensureBaseStock(nodeId);
    if (stck.locked.crystal || !stck.crystal || stck.crystal.mode !== 'sell' || stck.crystal.stock <= 0) return false;
    const p = Profile.get();
    const need = stck.crystal.gems || 1;
    if ((p.gems || 0) < need) return false;
    if (!consumeBaseStock(nodeId, 'crystal', 1)) return false;
    p.gems -= need;
    p.credits += stck.crystal.price;
    Profile.save();
    return true;
  }
  function sellFuelAtBase(nodeId) {
    const stck = ensureBaseStock(nodeId);
    if (!stck.fuelSell || stck.fuelSellStock <= 0) return false;
    if (fuel() < SELL_FUEL_AMOUNT) return false;
    if (!consumeBaseStock(nodeId, 'fuelSell', 1)) return false;
    const c = cState();
    c.fuel -= SELL_FUEL_AMOUNT;
    Profile.get().credits += SELL_FUEL_CREDITS;
    Profile.save();
    return true;
  }

  // ── Research station logs (1 per campaign part, lore of the universe) ──
  function researchLogs() {
    const p = Profile.get();
    if (!p.researchLogs || typeof p.researchLogs !== 'object') p.researchLogs = {};
    return p.researchLogs;
  }
  function hasResearchLog(id) {
    const key = String(id).padStart(2, '0');
    return !!researchLogs()[key];
  }
  /** Grant research log for part 1..5 ('01'..'05'). Returns id if newly unlocked, else null. */
  function grantResearchLog(partN) {
    const n = Math.max(1, Math.min(5, partN | 0 || 1));
    const key = String(n).padStart(2, '0');
    const d = researchLogs();
    if (d[key]) return null;
    d[key] = true;
    Profile.save();
    return key;
  }

  /**
   * Research station win rewards.
   * role 'universe' → research log (rlog.01–05); role 'pilot' → pilot disk.
   * grade 0..3 (from assault performance) scales sat/warp/scrap.
   */
  function grantResearchRewards(node, partN, grade) {
    const p = Profile.get();
    const g = Math.max(0, Math.min(3, grade == null ? 2 : grade | 0));
    const role = (node && node.researchRole) || 'universe';
    const out = {
      sat: 0, warp: 0, disk: null, log: null, logNew: false,
      credits: 0, gems: 0, role, grade: g, freeUpg: null,
      nodeId: node && node.id, gifts: [],
    };
    // Performance-scaled recon: grade 3 → 2 sat + 20s; grade 0 → 1 sat + 10s
    const satN = g >= 2 ? 2 : 1;
    const warpN = g >= 3 ? 20 : g >= 2 ? 15 : 10;
    p.satellites = satellites() + satN;
    p.warp = (p.warp || 0) + warpN;
    out.sat = satN;
    out.warp = warpN;

    const seed = ((st().seed || 1) ^ ((node && node.id) || 0) * 0x51ed ^ (partN * 0x9e37) ^ 0x1AB0) >>> 0;
    if (role === 'pilot') {
      // Pilot station: archive disk (previous pilot), no universe log
      const pick = pickDisk(seed ^ 0xD15C, partN);
      if (pick && grantDisk(pick)) {
        out.disk = pick;
        if (pick !== '01') markPartOptionalDisk(partN);
      } else if (!partHadOptionalDisk(partN)) {
        // Soft guarantee one disk attempt if pool empty already handled by pickDisk
        const pick2 = pickDisk(seed ^ 0xD15D, partN);
        if (pick2 && grantDisk(pick2)) {
          out.disk = pick2;
          if (pick2 !== '01') markPartOptionalDisk(partN);
        }
      }
    } else {
      // Universe station: research log for this chapter
      const logId = grantResearchLog(partN);
      out.log = logId || String(Math.max(1, Math.min(5, partN | 0 || 1))).padStart(2, '0');
      out.logNew = !!logId;
    }
    // Research scrap (slightly better on high grade)
    out.credits = 350 + partN * 110 + g * 80 + Math.floor(Engine.makeRng(seed ^ 1)() * 180);
    out.gems = (partN >= 3 ? 2 : 1) + (g >= 3 ? 1 : 0);
    p.credits += out.credits;
    p.gems = (p.gems || 0) + out.gems;
    // Gift is chosen in the lab terminal (not auto-applied).
    out.gifts = g >= 1 ? pickResearchGifts(node && node.id, partN) : [];
    Profile.save();
    return out;
  }

  /** Up to 2 distinct trains + a scrap-gold out. Player picks one in the lab UI. */
  function pickResearchGifts(nodeId, partN) {
    const prof = Profile.get();
    const seed = ((st().seed || 1) ^ ((nodeId || 0) * 0xA55A) ^ ((partN || 1) * 0x9e37) ^ 0xF2EE) >>> 0;
    const R = Engine.makeRng(seed);
    const opts = [];
    const tree = Meta.shipTree(prof.ship);
    const sl = Meta.shipUpgrades(prof);
    tree.forEach(({ def, max }) => {
      const lv = sl[def.key] || 0;
      if (lv >= max) return;
      const info = Meta.shipBuyInfo(def.key, lv);
      if (info.currency === 'gems') return;
      opts.push({ kind: 'ship', key: def.key, level: lv + 1, icon: def.icon });
    });
    const load = (typeof Meta.battleLoadout === 'function')
      ? Meta.battleLoadout(prof) : (prof.battleLoadout || [Meta.startWeapon(prof)]);
    (load || []).forEach(wkey => {
      if (!Meta.weaponUnlocked || !Meta.weaponUnlocked(wkey, prof)) return;
      Meta.WEAPON_UPG_ORDER.forEach(stat => {
        const d = Meta.WEAPON_UPGRADES[stat];
        const lv = Meta.weaponUpgLv(prof, wkey, stat);
        if (lv >= d.max) return;
        const info = Meta.weaponBuyInfo(stat, lv);
        if (info.currency === 'gems') return;
        opts.push({ kind: 'weapon', wkey, stat, level: lv + 1 });
      });
    });
    const gifts = [];
    while (opts.length && gifts.length < 2) {
      gifts.push(opts.splice(Math.floor(R() * opts.length), 1)[0]);
    }
    gifts.push({ kind: 'gold', gold: BASE_GOLD_REWARD, scrap: true });
    return gifts;
  }

  /**
   * Free assault/relay reward: ship system OR loadout weapon train.
   * Never the last (gem) tier; if everything maxed → gold.
   */
  function pickAssaultFreeUpgrade(nodeId, partN) {
    const prof = Profile.get();
    const seed = ((st().seed || 1) ^ ((nodeId || 0) * 0xA55A) ^ ((partN || 1) * 0x9e37) ^ 0xF2EE) >>> 0;
    const R = Engine.makeRng(seed);
    const opts = [];

    // Ship systems — skip gem-tier final level
    const tree = Meta.shipTree(prof.ship);
    const sl = Meta.shipUpgrades(prof);
    tree.forEach(({ def, max }) => {
      const lv = sl[def.key] || 0;
      if (lv >= max) return;
      const info = Meta.shipBuyInfo(def.key, lv);
      if (info.currency === 'gems') return;
      opts.push({ kind: 'ship', key: def.key, level: lv + 1, icon: def.icon });
    });

    // Weapons in battle loadout only
    const load = (typeof Meta.battleLoadout === 'function')
      ? Meta.battleLoadout(prof) : (prof.battleLoadout || [Meta.startWeapon(prof)]);
    (load || []).forEach(wkey => {
      if (!Meta.weaponUnlocked || !Meta.weaponUnlocked(wkey, prof)) return;
      Meta.WEAPON_UPG_ORDER.forEach(stat => {
        const d = Meta.WEAPON_UPGRADES[stat];
        const lv = Meta.weaponUpgLv(prof, wkey, stat);
        if (lv >= d.max) return;
        // Free gift ignores mastery XP gate; still never grants gem-tier final
        const info = Meta.weaponBuyInfo(stat, lv);
        if (info.currency === 'gems') return;
        opts.push({ kind: 'weapon', wkey, stat, level: lv + 1 });
      });
    });

    if (!opts.length) return { kind: 'gold', gold: BASE_GOLD_REWARD, maxed: true };
    return opts[Math.floor(R() * opts.length)];
  }

  function applyAssaultFreeUpgrade(up) {
    if (!up) return null;
    const prof = Profile.get();
    if (up.kind === 'gold' || up.maxed) {
      prof.credits += up.gold || BASE_GOLD_REWARD;
      Profile.save();
      return up;
    }
    if (up.kind === 'ship') {
      const sl = Meta.shipUpgrades(prof);
      sl[up.key] = (sl[up.key] || 0) + 1;
      Profile.save();
      return up;
    }
    if (up.kind === 'weapon') {
      Meta.weaponUpg(prof, up.wkey)[up.stat] = up.level;
      Profile.save();
      return up;
    }
    return null;
  }
  function revertAssaultFreeUpgrade(up) {
    if (!up) return;
    const prof = Profile.get();
    if (up.kind === 'gold' || up.maxed) {
      prof.credits = Math.max(0, (prof.credits || 0) - (up.gold || BASE_GOLD_REWARD));
      Profile.save();
      return;
    }
    if (up.kind === 'ship') {
      const sl = Meta.shipUpgrades(prof);
      sl[up.key] = Math.max(0, (sl[up.key] || 0) - 1);
      Profile.save();
      return;
    }
    if (up.kind === 'weapon') {
      const row = Meta.weaponUpg(prof, up.wkey);
      row[up.stat] = Math.max(0, (up.level | 0) - 1);
      Profile.save();
    }
  }

  /**
   * Relay assault rewards by performance grade (0..3).
   * grade 3: 2 sat + 20s warp + free upg
   * grade 2: 2 sat + 15s + free upg
   * grade 1: 1 sat + 10s + free upg
   * grade 0: 1 sat + 10s, NO free upg (finished only in last stage)
   */
  function grantAssaultRewards(node, partN, grade) {
    const p = Profile.get();
    const g = Math.max(0, Math.min(3, grade == null ? 2 : grade | 0));
    const out = { sat: 0, warp: 0, credits: 0, freeUpg: null, grade: g, disk: null };
    const satN = g >= 2 ? 2 : 1;
    const warpN = g >= 3 ? 20 : g >= 2 ? 15 : 10;
    p.satellites = satellites() + satN;
    p.warp = (p.warp || 0) + warpN;
    out.sat = satN;
    out.warp = warpN;
    out.credits = 280 + partN * 90 + g * 70;
    p.credits += out.credits;
    if (g >= 1) {
      const up = pickAssaultFreeUpgrade(node && node.id, partN);
      if (up) {
        applyAssaultFreeUpgrade(up);
        out.freeUpg = up;
      }
    }
    // Optional pilot disk (seeded chance inside tryGrantDiskForStage)
    const disks = tryGrantDiskForStage(node, partN) || [];
    if (disks.length) out.disk = disks[0];
    Profile.save();
    return out;
  }
  // Clearing a part-node awards this chapter's story-ship part. Collect all 5
  // (from ANY difficulty) → the AEGIS unlocks. A duplicate part → coin+gem bonus.
  function awardShipPart(part) {
    const p = Profile.get();
    if (!p.shipParts) p.shipParts = [];
    if (p.shipParts.includes(part)) {
      p.credits += 1500; p.gems = (p.gems || 0) + 10; Profile.save();
      return { dup: true, credits: 1500, gems: 10 };
    }
    p.shipParts.push(part);
    let assembled = false;
    if (p.shipParts.length >= Meta.SHIP_PARTS && !p.ownedShips.includes(Meta.STORY_SHIP)) {
      p.ownedShips.push(Meta.STORY_SHIP); assembled = true;
    }
    Profile.save();
    return { dup: false, part, count: p.shipParts.length, assembled };
  }

  // ── Story log disks (hangar archive) ──
  function disks() {
    const p = Profile.get();
    if (!p.disks || typeof p.disks !== 'object') p.disks = {};
    return p.disks;
  }
  function hasDisk(id) { return !!disks()[id]; }
  /** Grant a disk id ('01'..'10'). Returns true if newly unlocked. */
  function grantDisk(id) {
    const d = disks();
    const key = String(id).padStart(2, '0');
    if (d[key]) return false;
    d[key] = true;
    Profile.save();
    return true;
  }
  /** Part-1 guarantee + rare optional drops on stage clear. */
  /**
   * Disk drops (PR3 tuned):
   *  - 01 guaranteed once in part 1 (any clear)
   *  - Prefer unowned disks; bias toward low ids early, high late
   *  - Rates: part-node high, elite ~20%, boss/warlord ~40%, combat ~10%, relay ~15%
   *  - Warlord clear: if this part granted zero optional disks yet, guarantee one
   */
  function unownedDisks() {
    const pool = [];
    for (let i = 1; i <= 10; i++) {
      const k = String(i).padStart(2, '0');
      if (!hasDisk(k)) pool.push(k);
    }
    return pool;
  }
  function pickDisk(seed, partN) {
    const pool = unownedDisks();
    if (!pool.length) return null;
    // Weight: earlier parts prefer lower numbers
    const preferLow = partN <= 3;
    const sorted = pool.slice().sort((a, b) => preferLow
      ? parseInt(a, 10) - parseInt(b, 10)
      : parseInt(b, 10) - parseInt(a, 10));
    // Top half of sorted list gets 70% of rolls
    const R = Engine.makeRng(seed);
    const top = sorted.slice(0, Math.max(1, Math.ceil(sorted.length * 0.55)));
    const useTop = R() < 0.7;
    const bag = useTop ? top : sorted;
    return bag[Math.floor(R() * bag.length)];
  }
  /**
   * Per-part disk flag on campaign difficulty root (NOT st()/current map).
   * Critical: after warlord clear, st() is already the NEXT part's map.
   */
  function partHadOptionalDisk(partN) {
    const c = cState();
    if (!c.diskGrantedByPart) c.diskGrantedByPart = {};
    return !!c.diskGrantedByPart[partN];
  }
  function markPartOptionalDisk(partN) {
    const c = cState();
    if (!c.diskGrantedByPart) c.diskGrantedByPart = {};
    c.diskGrantedByPart[partN] = true;
  }
  function tryGrantDiskForStage(node, partN) {
    const granted = [];
    if (partN === 1 && grantDisk('01')) granted.push('01');

    // Prefer seed from the part's map if still current; else c.maps[partN]
    const c = cState();
    const mapSt = (c.maps && c.maps[partN]) || st();
    const seed = ((mapSt.seed || 1) ^ ((node && node.id) || 0) * 0x51ed ^ (partN * 0x9e37)) >>> 0;
    const r = Engine.makeRng(seed)();
    const t = node && node.type;
    const hasPart = !!(node && node.part);
    let chance = 0.10;
    if (hasPart) chance = 0.72;
    else if (t === 'elite') chance = 0.22;
    else if (t === 'boss' || (node && node.warlord)) chance = 0.42;
    else if (t === 'relay') chance = 0.16;
    else if (t === 'research') chance = 0.05; // disks primarily via grantResearchRewards
    else if (t === 'base') chance = 0.14;
    else if (t === 'combat') chance = 0.10;

    if (r < chance) {
      const pick = pickDisk(seed ^ 0xD15C, partN);
      if (pick && grantDisk(pick)) {
        granted.push(pick);
        if (pick !== '01') markPartOptionalDisk(partN);
      }
    }

    // Warlord: guarantee ≥1 optional disk this part if none yet (anti-dry campaign)
    if (node && (node.warlord || node.type === 'boss') && !partHadOptionalDisk(partN)) {
      const pick = pickDisk(seed ^ 0xB055, partN);
      if (pick && grantDisk(pick)) {
        granted.push(pick);
        markPartOptionalDisk(partN);
      }
    }
    if (granted.length) Profile.save();
    return granted;
  }

  function grantBaseUpgrade(nodeId) {
    const prof = Profile.get();
    const r = baseReward(nodeId);       // grant the SAME reward that was advertised
    if (!r) return null;
    if (r.maxed) { prof.credits += r.gold; Profile.save(); return { maxed: true, gold: r.gold }; }
    const sl = Meta.shipUpgrades(prof);
    sl[r.key] = (sl[r.key] || 0) + 1; Profile.save();
    return { key: r.key, level: sl[r.key] };
  }

  function themeFor(node) {
    const pal = Worlds.PAL[node.palette] || Worlds.PAL.nebula;
    const theme = { key: node.palette, star: pal.star, bgTop: pal.bgTop, bgBot: pal.bgBot, neb: pal.neb,
      pool: node.pool || PARTS[part() - 1].pool, _blobs: [], _debris: null,
      bgDebris: !!(node.hazards && node.hazards.asteroids) };
    for (let i = 0; i < 3; i++) theme._blobs.push({
      x: Engine.rand(40, Engine.W - 40), y: Engine.rand(40, Engine.H - 120),
      r: Engine.rand(140, 260), color: pal.neb[i % pal.neb.length] });
    if (theme.bgDebris) theme._debris = Array.from({ length: 6 }, () => ({
      x: Engine.rand(0, Engine.W), y: Engine.rand(0, Engine.H), r: Engine.rand(9, 26),
      vx: Engine.rand(-14, 14), vy: Engine.rand(8, 26), spin: Engine.rand(-0.5, 0.5),
      verts: Array.from({ length: 8 }, () => 0.7 + Math.random() * 0.4) }));
    return theme;
  }

  function resetProgress() { delete root()[diffKey()]; ensure(); }

  const CHAPTER_GEMS = [0, 15, 20, 25, 30, 40]; // index = part 1..5
  function chapterGemCost(n) { return CHAPTER_GEMS[n] || 25; }

  /** Open a specific chapter on this difficulty (completed-campaign replay). */
  function jumpToPart(n) {
    n = Math.max(1, Math.min(LAST_PART, n | 0));
    const c = cState();
    c.done = false;
    if (c.maps && c.maps[n]) {
      c.part = n;
    } else {
      initPart(n);
    }
    Profile.save();
    return c.part;
  }

  function bestScore() { return cState().bestScore || 0; }
  function setBestScore(score) {
    const c = cState();
    const s = score | 0;
    if (s > (c.bestScore || 0)) { c.bestScore = s; Profile.save(); }
    return c.bestScore || 0;
  }

  return {
    PARTS, MAPW, MAPH, FUEL_BUY_AMOUNT, FUEL_BUY_GEMS, SAT_PRICE_GEMS,
    WARP_SECS, WARP_CREDITS, SAT_CREDITS, RESEARCH_INTEL_CREDITS, BASE_GOLD_REWARD,
    SELL_WARP_SECS, SELL_WARP_CREDITS, SELL_SAT_CREDITS,
    SELL_FUEL_AMOUNT, SELL_FUEL_CREDITS, CRYSTAL_BUY_CREDITS, CRYSTAL_BUY_GEMS, CRYSTAL_SELL_CREDITS,
    ensure, initPart, genMap, map, part, currentId, isVisited, isFrontier, isRevealed, isAdjacent, edgeCost,
    edgeOpen, edgeJamRelay,
    move, onCleared, onBossCleared, grantBaseUpgrade, baseReward, awardShipPart, themeFor, resetProgress,
    jumpToPart, chapterGemCost, bestScore, setBestScore, LAST_PART, st,
    fuel, spendFuel, addFuel, buyFuel, canRefuel, isBaseClaimed, claimBase, stranded, cheapestExit, travelCost, failCampaign,
    satellites, useSatellite, buySatellite, buyWarpCredits, buySatelliteCredits, isScouted,
    researchIntelIds, isResearchIntel, hiddenResearchNodes, revealResearchIntel, buyResearchIntelAtBase,
    sellWarp, sellSatellite, traderCode, labCode, pickResearchGifts,
    disks, hasDisk, grantDisk, tryGrantDiskForStage, grantResearchRewards,
    grantAssaultRewards, pickAssaultFreeUpgrade, applyAssaultFreeUpgrade, revertAssaultFreeUpgrade,
    researchLogs, hasResearchLog, grantResearchLog,
    baseState, isBaseDamaged, isBaseDestroyed, onBaseFailed, onBaseHeld, baseStates,
    baseNodeLoss, setBaseNodeLoss,
    ensureBaseStock, buyFuelAtBase, buyWarpAtBase, buySatAtBase,
    buyCrystalAtBase, sellCrystalAtBase, sellFuelAtBase,
    hardBaseFailEnabled, HARD_BASE_FAIL,
  };
})();
