/**
 * Infinite Madness sequencer — replaces procedural row generation. Stitches together the
 * level-derived blocks (assets/levels/) and standalone blocks (assets/blocks/) into an
 * endless, randomized, non-repeating run. No obstacle is ever generated, moved, resized, or
 * regenerated here — content is only divided at authored gaps and shifted in world-Y.
 */
import { loadManifest, loadLevel, isInfiniteEligibleEntry, validateLevel } from './level.js';
import { loadBlockManifest, loadBlock, isActiveBlockEntry } from './blocks.js';
import { expandShapePaths } from './shape-paths.js';
import { makeObstacle, obstacleBounds, normalizeMotion } from './entities.js';

/** Desired maximum size of a level-derived block before another authored gap is selected. */
export const LEVEL_BLOCK_TARGET_LENGTH = 2000;

/**
 * The REAL distance from a section's start line (y=0) to its first obstacle. `startGap` in
 * the level file is only a validated MINIMUM (no obstacle may sit above it) — hand-authored
 * levels routinely leave more empty run-up than that floor, so the connection-gap math must
 * measure the actual nearest obstacle, not read the startGap field.
 */
function firstObstacleY(content) {
  let min = Infinity;
  for (const e of content.entities) if (e.y < min) min = e.y;
  for (const s of expandShapePaths(content.paths)) if (s.y < min) min = s.y;
  return min === Infinity ? content.startGap : min;
}

function obstacleTop(entity) {
  const bounds = obstacleBounds(makeObstacle(entity));
  const motion = normalizeMotion(entity.motion);
  return entity.y + bounds.minY - (motion?.axis === 'y' ? motion.range : 0);
}

function shiftPath(path, delta) {
  return { ...path, points: path.points.map((point) => ({ ...point, y: point.y + delta })) };
}

/**
 * Turn a Story level into independently shuffleable Infinite Madness blocks. Cuts are made
 * only between authored units: an editor group and an authored path are indivisible, while
 * ungrouped entities are individual units. The largest vertical gaps become the transitions.
 */
export function splitLevelIntoBlocks(content, entry = {}) {
  const unitsByKey = new Map();
  for (let i = 0; i < content.entities.length; i++) {
    const entity = content.entities[i];
    const key = entity.groupId ? `group:${entity.groupId}` : `entity:${i}`;
    if (!unitsByKey.has(key)) unitsByKey.set(key, { entities: [], paths: [], minY: Infinity, maxY: -Infinity });
    const unit = unitsByKey.get(key);
    unit.entities.push(entity);
    unit.minY = Math.min(unit.minY, obstacleTop(entity));
    const bounds = obstacleBounds(makeObstacle(entity));
    const motion = normalizeMotion(entity.motion);
    unit.maxY = Math.max(unit.maxY, entity.y + bounds.maxY + (motion?.axis === 'y' ? motion.range : 0));
  }
  for (let i = 0; i < content.paths.length; i++) {
    const path = content.paths[i];
    const stamps = expandShapePaths([path]);
    if (!stamps.length) continue;
    unitsByKey.set(`path:${path.id || i}`, {
      entities: [], paths: [path],
      minY: Math.min(...stamps.map(obstacleTop)),
      maxY: Math.max(...stamps.map((stamp) => {
        const bounds = obstacleBounds(makeObstacle(stamp));
        return stamp.y + bounds.maxY;
      })),
    });
  }

  const units = [...unitsByKey.values()].sort((a, b) => a.minY - b.minY);
  if (!units.length) return [];
  const desiredCount = Math.min(
    units.length,
    Math.max(2, Math.ceil(content.corridorLength / LEVEL_BLOCK_TARGET_LENGTH)),
  );
  const candidates = [];
  for (let i = 1; i < units.length; i++) {
    candidates.push({ index: i, gap: units[i].minY - units[i - 1].maxY });
  }
  const cuts = new Set(
    candidates.sort((a, b) => b.gap - a.gap).slice(0, desiredCount - 1).map((candidate) => candidate.index),
  );
  const chunks = [];
  let chunk = [];
  for (let i = 0; i < units.length; i++) {
    if (cuts.has(i)) { chunks.push(chunk); chunk = []; }
    chunk.push(units[i]);
  }
  chunks.push(chunk);

  const chunkCenters = chunks.map((items) => {
    const min = Math.min(...items.map((item) => item.minY));
    const max = Math.max(...items.map((item) => item.maxY));
    return (min + max) / 2;
  });
  const chunkPearls = chunks.map(() => []);
  for (const pearl of content.pearls || []) {
    let nearest = 0;
    for (let i = 1; i < chunkCenters.length; i++) {
      if (Math.abs(pearl.y - chunkCenters[i]) < Math.abs(pearl.y - chunkCenters[nearest])) nearest = i;
    }
    chunkPearls[nearest].push(pearl);
  }

  return chunks.map((items, index) => {
    const entities = items.flatMap((item) => item.entities);
    const paths = items.flatMap((item) => item.paths);
    const pearls = chunkPearls[index];
    const firstContentY = Math.min(...items.map((item) => item.minY), ...pearls.map((pearl) => pearl.y));
    const delta = content.startGap - firstContentY;
    const part = index + 1;
    const id = `${content.id}-infinite-${part}`;
    const blockContent = validateLevel({
      ...content,
      id,
      name: `${entry.name || content.name} · Block ${part}`,
      order: 0,
      entities: entities.map((entity) => ({ ...entity, y: entity.y + delta })),
      paths: paths.map((path) => shiftPath(path, delta)),
      pearls: pearls.map((pearl) => ({ ...pearl, y: pearl.y + delta })),
    });
    return {
      kind: 'level-block', id, sourceLevelId: content.id,
      name: blockContent.name, content: blockContent,
      firstObstacleY: firstObstacleY(blockContent),
    };
  });
}

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Load every Infinite-eligible level and active block ONCE, fully validated, up front — so
 * the sequencer itself never has to await mid-run. Small hand-authored JSON, cheap in
 * parallel. Call once per app session; main.js caches the result across runs.
 */
export async function loadSectionPool() {
  const [levelManifest, blockManifest] = await Promise.all([loadManifest(), loadBlockManifest()]);
  const levelEntries = levelManifest.filter(isInfiniteEligibleEntry);
  const blockEntries = blockManifest.filter(isActiveBlockEntry);
  const sections = await Promise.all([
    ...levelEntries.map(async (e) => {
      const content = await loadLevel(e.id);
      return splitLevelIntoBlocks(content, e);
    }),
    ...blockEntries.map(async (e) => {
      const content = await loadBlock(e.id);
      return { kind: 'block', id: e.id, name: e.name, content, firstObstacleY: firstObstacleY(content) };
    }),
  ]).then((loaded) => loaded.flat());
  if (!sections.length) throw new Error('no active levels or blocks available for Infinite Madness');
  return sections;
}

/**
 * Shuffle-bag over the section pool: every section is dealt exactly once per lap (fair
 * distribution — no long-run bias toward any one section), the bag reshuffles when it empties
 * for the next lap, and the boundary between laps is nudged so the same section never plays
 * twice in a row.
 */
class SectionBag {
  constructor(sections, rng) {
    this.all = sections;
    this.rng = rng;
    this.bag = [];
    this.lastKey = null;
  }
  _key(section) { return `${section.kind}:${section.id}`; }
  _refill() {
    const arr = this.all.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (arr.length > 1 && this.lastKey && this._key(arr[0]) === this.lastKey) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    this.bag = arr;
  }
  next() {
    if (!this.bag.length) this._refill();
    const section = this.bag.shift();
    this.lastKey = this._key(section);
    return section;
  }
}

/**
 * Places sections end-to-end in world-Y. Connection rule: the empty gap between one
 * section's end and the next section's first obstacle is HALF of that next section's own
 * REAL start-line-to-first-obstacle distance (see firstObstacleY() above — not the
 * `startGap` field, which is only a validated minimum floor, not the actual measured
 * distance) — not the section's full natural run-up (which would recreate a full
 * standalone-level empty opening on every transition) and not zero (which would erase the
 * "new section" beat entirely). The very first section of a run keeps its full natural
 * run-up, same as starting any normal level.
 */
export class Sequencer {
  constructor(sections, seed) {
    this.bag = new SectionBag(sections, mulberry32(seed >>> 0));
    this.placed = [];      // { section, offset, y0, y1, materialized }
    this.nextY = 0;        // world Y already covered by placed sections
    this._first = true;
  }

  ensureAhead(playerY, lookAhead) {
    const needUntil = playerY + lookAhead;
    let guard = 0;
    while (this.nextY < needUntil && guard < 200) {
      const section = this.bag.next();
      const c = section.content;
      const gap = this._first ? 0 : section.firstObstacleY / 2;
      this._first = false;
      const offset = this.nextY - gap;
      const y0 = offset;
      const y1 = offset + c.corridorLength;
      this.placed.push({ section, offset, y0, y1, materialized: false });
      this.nextY = y1;
      guard++;
    }
    // Drop sections well behind the camera (bounded memory over an indefinite run) — but
    // never drop the section the player is currently inside of.
    const dropBefore = playerY - 1500;
    while (this.placed.length > 1 && this.placed[0].y1 < dropBefore) this.placed.shift();
  }

  /** The placed section whose span currently contains `y`, or null between sections. */
  sectionAt(y) {
    for (let i = 0; i < this.placed.length; i++) {
      const p = this.placed[i];
      if (y >= p.y0 && y < p.y1) return p;
    }
    return null;
  }
}
