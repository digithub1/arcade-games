/* ============================================================
 * powerups.js — drop definitions + behavior. Pooled by Game.
 *
 * Visuals: cinematic 2D icons using Icons.draw — SAME art as map/hangar
 * (fuel pixel, credit coin, gem crystal, …). No double labels on economy
 * drops. Weapons keep letter plates matching the combat weapon dock.
 * ========================================================== */
const PowerUps = (() => {
  // icon: Icons key (map/hangar). letter: weapon-dock glyph only.
  // No emoji labels for economy — the Icons glyph IS the identity.
  const kinds = {
    cannon:  { letter: 'C', color: '#9fe9ff', weapon: 'cannon' },
    spread:  { letter: 'S', color: '#ffd24a', weapon: 'spread' },
    laser:   { letter: 'L', color: '#ff5bd0', weapon: 'laser' },
    missile: { letter: 'M', color: '#7dffa0', weapon: 'missile' },
    railgun: { letter: 'R', color: '#7de0ff', weapon: 'railgun' },
    pulse:   { letter: 'U', color: '#ff8adf', weapon: 'pulse' },
    shield:    { icon: 'statHull', color: '#6effc0' },
    bomb:      { icon: 'upBomb',   color: '#ff4adf' },
    nuke:      { letter: '☢', color: '#ffe24a', plate: true },
    barrier:   { icon: 'upGuard',  color: '#6effc0' },
    score:     { icon: 'credit',   color: '#ffe24a' },
    fuel:      { icon: 'fuel',     color: '#ffd86b' },
    scrap:     { icon: 'credit',   color: '#ffd24a' },
    gem:       { icon: 'gem',      color: '#8ad2ff' },
    overdrive: { icon: 'upFlame',  color: '#ffe24a' },
    sphere:    { letter: '◉', color: '#c86cff', plate: true },
    modxp:     { icon: 'statUpg',  color: '#c8a0ff' },
  };

  // Back-compat for HUD / fusion that read .label
  Object.keys(kinds).forEach(k => {
    const d = kinds[k];
    if (d.letter) d.label = d.letter;
    else d.label = ''; // icon-only kinds: no text under drop
  });

  /** Any module bought in the hangar? (module XP has nothing to feed otherwise) */
  function ownsAnyModule() {
    try {
      if (typeof Meta === 'undefined' || !Meta.MODULE_ROSTER) return false;
      const p = Profile.get();
      return Meta.MODULE_ROSTER.some(m => Meta.moduleOwned(p, m.key));
    } catch (e) { return false; }
  }

  const SUPER_KINDS = ['bomb', 'nuke', 'barrier', 'sphere'];

  /**
   * Arsenal Beacon: a super already rolled — decide WHICH super it is.
   * Called after the fact precisely so the module cannot change how often supers
   * drop, only their mix. If the beacon's pick IS the equipped super, the two
   * shares add up (asked for explicitly), which is what makes tuning it to your
   * own super the "stockpile" build rather than a wasted slot.
   */
  function biasSuper(rolled) {
    let b = null;
    try { b = Meta.beaconSplit(Profile.get()); } catch (e) {}
    if (!b) return rolled;
    const s = b.split;
    const r = Math.random();
    if (b.priority === b.active) {
      // Same target: priority + active shares merge into one bucket.
      if (r < s.prio + s.act) return b.priority;
      return b.pool[(Math.random() * b.pool.length) | 0];
    }
    if (r < s.prio) return b.priority;
    if (r < s.prio + s.act) return b.active;
    return b.pool[(Math.random() * b.pool.length) | 0];
  }

  function rollKind() {
    const table = [
      ['cannon', 12], ['spread', 10], ['laser', 9], ['missile', 7], ['railgun', 5], ['pulse', 5],
      ['shield', 8], ['score', 8], ['bomb', 3], ['nuke', 2.5], ['barrier', 3], ['sphere', 2],
      ['scrap', 8], ['gem', 1.5], ['overdrive', 4], ['modxp', 7],
    ];
    // Fuel was weight 12 → ~16% of every drop, ~3.9 fuel a node against an
    // average edge cost of ~2.0. Income at double the spend is why the reserve
    // only ever went up. 7 lands it near ~2.3/node: a mild surplus, so routing
    // still matters but a bad turn never strands you.
    if (Game.isCampaignStage && Game.isCampaignStage()) table.push(['fuel', 7]);
    let avail = table.filter(([k]) => {
      if (kinds[k].weapon) return Game.isWeaponUnlocked(k);
      // Module XP is a dud with an empty bay — don't waste a drop slot on it.
      if (k === 'modxp') return ownsAnyModule();
      return true;
    });
    // Salvage Sorter: reweight the families INSIDE the same table, so the total
    // number of drops is unchanged — only their composition shifts.
    let bias = null;
    try { bias = Meta.sorterBias(Profile.get()); } catch (e) {}
    if (bias && bias.kinds.length) {
      const want = new Set(bias.kinds);
      avail = avail.map(([k, w]) => [k, want.has(k) ? w * bias.mult : w]);
    }
    let total = 0; for (const [, w] of avail) total += w;
    let r = Math.random() * total;
    for (const [k, w] of avail) {
      if ((r -= w) <= 0) return SUPER_KINDS.includes(k) ? biasSuper(k) : k;
    }
    return 'cannon';
  }

  function update(p, dt) {
    p.t += dt;
    const pl = Game.player;
    const range = 130 * (pl.magnetMult || 1);
    const d2 = Engine.dist2(p.x, p.y, pl.x, pl.y);
    if (d2 < range * range) {
      const a = Math.atan2(pl.y - p.y, pl.x - p.x);
      const pull = Engine.clamp(220 - Math.sqrt(d2), 0, 200);
      p.x += Math.cos(a) * pull * dt; p.y += Math.sin(a) * pull * dt;
    } else {
      p.y += 60 * dt;
    }
    p.bob = Math.sin(p.t * 4) * 3.5;
  }

  /** Soft elliptical contact shadow under the pickup (aligned to shell). */
  function drawShadow(ctx, r) {
    ctx.save();
    const g = ctx.createRadialGradient(0, r * 0.55, r * 0.05, 0, r * 0.55, r * 0.85);
    g.addColorStop(0, 'rgba(0,0,0,0.5)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(0, r * 0.55, r * 0.78, r * 0.28, 0, 0, Engine.TAU);
    ctx.fill();
    ctx.restore();
  }

  /**
   * Cinematic shell: bloom → glass disc → energy rings → centered icon core.
   * Identity from Icons (or weapon letter) only — no duplicate glyphs.
   * Layout is circular and centered so icon never clips the rim.
   */
  function drawCinematic(ctx, p, k) {
    const t = p.t;
    const r = p.r;
    const col = k.color;
    const pulse = 0.62 + 0.38 * Math.sin(t * 4.6);
    const spin = t * 1.55;
    const spinB = -t * 1.05;

    // Outer bloom (soft, even)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const bloom = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 1.48);
    bloom.addColorStop(0, col);
    bloom.addColorStop(0.4, col);
    bloom.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.globalAlpha = 0.18 + 0.1 * pulse;
    ctx.fillStyle = bloom;
    ctx.beginPath(); ctx.arc(0, 0, r * 1.48, 0, Engine.TAU); ctx.fill();
    ctx.restore();

    // Glass body — dark rim, bright center
    ctx.save();
    const plate = ctx.createRadialGradient(-r * 0.22, -r * 0.28, r * 0.08, 0, 0, r);
    plate.addColorStop(0, 'rgba(255,255,255,0.28)');
    plate.addColorStop(0.35, 'rgba(28,48,78,0.72)');
    plate.addColorStop(0.85, 'rgba(6,12,24,0.88)');
    plate.addColorStop(1, 'rgba(2,6,14,0.92)');
    ctx.fillStyle = plate;
    ctx.beginPath(); ctx.arc(0, 0, r * 0.96, 0, Engine.TAU); ctx.fill();
    // Colored rim
    ctx.strokeStyle = col;
    ctx.globalAlpha = 0.5 + 0.22 * pulse;
    ctx.lineWidth = 2.2;
    ctx.beginPath(); ctx.arc(0, 0, r * 0.96, 0, Engine.TAU); ctx.stroke();
    // Inner hairline for depth
    ctx.globalAlpha = 0.22;
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255,255,255,0.55)';
    ctx.beginPath(); ctx.arc(0, 0, r * 0.78, 0, Engine.TAU); ctx.stroke();
    ctx.restore();

    // Dual spinning energy rings (counter-rotate for polish)
    ctx.save();
    ctx.rotate(spin);
    ctx.strokeStyle = col;
    ctx.globalAlpha = 0.32 + 0.16 * pulse;
    ctx.lineWidth = 1.4;
    ctx.setLineDash([5, 6]);
    ctx.lineDashOffset = -t * 12;
    ctx.beginPath(); ctx.arc(0, 0, r * 1.14, 0, Engine.TAU); ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.rotate(spinB);
    ctx.strokeStyle = col;
    ctx.globalAlpha = 0.18 + 0.1 * pulse;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 8]);
    ctx.beginPath(); ctx.arc(0, 0, r * 1.28, 0, Engine.TAU); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // Specular arc (top-left glint)
    ctx.save();
    ctx.globalAlpha = 0.28 + 0.12 * Math.sin(t * 2.8);
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = 1.6;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.72, -2.45, -1.05);
    ctx.stroke();
    ctx.restore();

    // Core well — keeps icon/letter visually centered inside glass
    ctx.save();
    const well = ctx.createRadialGradient(0, 0, r * 0.08, 0, 0, r * 0.55);
    well.addColorStop(0, 'rgba(255,255,255,0.1)');
    well.addColorStop(0.55, 'rgba(0,0,0,0.18)');
    well.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = well;
    ctx.beginPath(); ctx.arc(0, 0, r * 0.55, 0, Engine.TAU); ctx.fill();
    ctx.restore();

    // Core identity — fit inside well (no overflow past glass rim)
    const iconSize = Math.round(r * 1.35);
    let painted = false;
    if (k.icon && typeof Icons !== 'undefined' && Icons.draw) {
      ctx.save();
      // Gentle breath scale only (no shear — keeps art level)
      const sc = 1 + 0.03 * Math.sin(t * 3.6);
      ctx.scale(sc, sc);
      painted = Icons.draw(ctx, k.icon, 0, 0, iconSize);
      ctx.restore();
    }
    if (!painted && (k.letter || k.plate)) {
      drawLetterPlate(ctx, k.letter || '?', col, r, t);
      painted = true;
    }
    if (!painted) {
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.arc(0, 0, r * 0.32, 0, Engine.TAU); ctx.fill();
    }
  }

  function drawLetterPlate(ctx, letter, col, r, t) {
    const pulse = 0.65 + 0.35 * Math.sin(t * 5.2);
    ctx.save();
    // Soft diamond badge — stays inside glass
    ctx.fillStyle = col;
    ctx.globalAlpha = 0.28 + 0.12 * pulse;
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.42); ctx.lineTo(r * 0.38, 0); ctx.lineTo(0, r * 0.42); ctx.lineTo(-r * 0.38, 0);
    ctx.closePath(); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.shadowColor = col;
    ctx.shadowBlur = 8;
    ctx.fillStyle = '#fff';
    ctx.font = 'bold ' + Math.round(r * 0.95) + 'px Trebuchet MS, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Optical vertical center for capital glyphs
    ctx.fillText(letter, 0, 0.5);
    ctx.shadowBlur = 0;
    ctx.restore();
  }

  function draw(p, ctx) {
    const k = kinds[p.kind] || kinds.cannon;
    ctx.save();
    ctx.translate(p.x, p.y + (p.bob || 0));
    drawShadow(ctx, p.r);
    drawCinematic(ctx, p, k);
    ctx.restore();
  }

  /**
   * Super pickup: equipped type → +1 charge + XP.
   * Unequipped → instant fire of that super (level from hangar training) + XP.
   */
  function collectSuper(kind, p, k) {
    const pl = Game.player;
    const equipped = (pl.superWeapon || 'bomb') === kind;
    if (typeof Meta !== 'undefined' && Meta.addSuperXp) {
      // The equipped super used to train SLOWER than one you cannot even use
      // (5 vs 11), so mastering your main was the slowest path in the game.
      // The unequipped pickup still pays a little more, because it fires for
      // free instead of banking a charge.
      Meta.addSuperXp(Profile.get(), kind, equipped ? 9 : 11);
      Profile.save();
    }
    if (equipped) {
      if (kind === 'bomb') pl.bombs++;
      else if (kind === 'nuke') pl.nukes++;
      else if (kind === 'sphere') pl.spheres = (pl.spheres || 0) + 1;
      else pl.barriers = (pl.barriers || 0) + 1;
      Engine.audio.power();
      const label = kind === 'barrier' ? T('pu.barrier')
        : kind === 'nuke' ? T('ann.nuke')
        : kind === 'sphere' ? T('pu.sphere')
        : T('pu.bomb');
      Game.floatText(p.x, p.y, label, k.color);
      if (Game.updateHud) Game.updateHud();
      return 50;
    }
    if (Game.fireSuperInstant) Game.fireSuperInstant(kind);
    else Engine.audio.power();
    Game.floatText(p.x, p.y, T('pu.superFire'), k.color);
    if (Game.updateHud) Game.updateHud();
    return 60;
  }

  function tryAdmitWeaponToRun(pl, weaponKey) {
    const max = (typeof Meta !== 'undefined' && Meta.LOADOUT_MAX) || 4;
    const owned = typeof pl.ownedWeapons === 'function'
      ? pl.ownedWeapons()
      : Object.keys(pl.weaponLevels || {}).filter(w => pl.weaponLevels[w] > 0);
    if (owned.includes(weaponKey)) return false;
    if (owned.length >= max) return false;
    pl.weaponLevels[weaponKey] = Math.max(1, pl.weaponLevels[weaponKey] || 0);
    if (!pl.weaponLocked) pl.weapon = weaponKey;
    pl.level = pl.weaponLevels[pl.weapon] || 1;
    try {
      const prof = Profile.get();
      if (typeof Meta !== 'undefined' && Meta.toggleLoadout && !Meta.isInLoadout(prof, weaponKey)) {
        if ((Meta.battleLoadout(prof) || []).length < max) Meta.toggleLoadout(prof, weaponKey);
      }
    } catch (e) {}
    return true;
  }

  function collect(p) {
    const k = kinds[p.kind] || kinds.cannon;
    const pl = Game.player;
    if (k.weapon) {
      const same = pl.weapon === k.weapon;
      const lv = pl.weaponLevels[k.weapon] || 0;
      if (lv <= 0) {
        if (tryAdmitWeaponToRun(pl, k.weapon)) {
          Engine.audio.power();
          Game.floatText(p.x, p.y, T('weapon.' + k.weapon), k.color);
          if (Game.updateHud) Game.updateHud();
          return 50;
        }
        // Out of loadout slots → XP only
        if (typeof Meta !== 'undefined' && Meta.addWeaponXp) {
          Meta.addWeaponXp(Profile.get(), k.weapon, 18);
          Profile.save();
        }
        Engine.audio.power();
        Game.floatText(p.x, p.y, T('pu.xp'), k.color);
        return 30;
      }
      const maxed = lv >= 8;
      if (maxed) {
        const amt = 40;
        Profile.addCredits(amt);
        Analytics.earnCurrency({ currency: 'credits', amount: amt, src: 'maxed_weapon' });
        if (pl.overcharge < 5) {
          pl.overcharge++;
          Game.floatText(p.x, p.y, `+◈${amt} · 🔥+${pl.overcharge * 8}%`, '#ffd24a');
        } else {
          Game.floatText(p.x, p.y, '+◈' + amt, '#ffd24a');
        }
        Engine.audio.coin();
        return 100;
      }
      // Partner weapon while different active → fusion
      if (!same && pl.weaponLevels[pl.weapon] > 0 && pl.applyFusion) {
        if (pl.applyFusion(k.weapon)) {
          Engine.audio.power();
          Game.floatText(p.x, p.y, T('pu.fuse'), k.color);
          if (Game.updateHud) Game.updateHud();
          try {
            if (typeof Onboarding !== 'undefined' && Onboarding.tip) {
              Onboarding.tip('fusion', 'tip.fusion', {
                icon: '✦', ms: 5600, pos: 'side', scope: 'combat',
              });
            }
          } catch (e) {}
          return 55;
        }
      }
      pl.upgradeWeapon(k.weapon);
      Game.floatText(p.x, p.y, same ? T('pu.pwrUp') : T('weapon.' + k.weapon), k.color);
      if (Game.updateHud) Game.updateHud();
      return 50;
    }
    switch (p.kind) {
      case 'shield': pl.addShield(1); Game.floatText(p.x, p.y, T('pu.shield'), k.color); return 50;
      case 'bomb':
      case 'nuke':
      case 'barrier':
      case 'sphere':
        return collectSuper(p.kind, p, k);
      case 'modxp': {
        let gained = 0;
        if (typeof Meta !== 'undefined' && Meta.addModuleXpToLoadout) {
          gained = Meta.addModuleXpToLoadout(Profile.get(), 22) || 0;
          if (gained) Profile.save();
        }
        Engine.audio.power();
        // Show the amount — otherwise the drop reads as a mystery blob.
        Game.floatText(p.x, p.y, gained ? T('pu.modxp') + ' +' + gained : T('pu.modxp'), k.color);
        return 30;
      }
      case 'score':  Engine.audio.coin(); Game.floatText(p.x, p.y, '+250', k.color); return 250;
      case 'fuel':   Campaign.addFuel(2); Engine.audio.power(); Game.floatText(p.x, p.y, T('pu.fuelPlus') || '+2', k.color); return 20;
      case 'scrap': {
        const amt = 25 + Math.floor(Math.random() * 51);
        Profile.addCredits(amt);
        Analytics.earnCurrency({ currency: 'credits', amount: amt, src: 'scrap' });
        Engine.audio.coin(); Game.floatText(p.x, p.y, '+◈' + amt, k.color); return 40;
      }
      case 'gem': {
        const pr = Profile.get(); pr.gems = (pr.gems || 0) + 1; Profile.save();
        Analytics.earnCurrency({ currency: 'gems', amount: 1, src: 'drop' });
        Engine.audio.gem(); Game.floatText(p.x, p.y, '+1 💎', k.color); return 100;
      }
      case 'overdrive':
        pl.overdriveT = Math.max(pl.overdriveT || 0, 6);
        Engine.audio.power();
        Game.floatText(p.x, p.y, T('pu.overdrive') || '⚡', k.color);
        if (Game.updateHud) Game.updateHud();
        return 40;
      default:
        return 10;
    }
  }

  return { kinds, rollKind, update, draw, collect };
})();
