/* ============================================================
 * player.js — the player ship: movement, auto-fire, shield, hitbox.
 * ========================================================== */
class Player {
  constructor() { this.reset(); }

  reset() {
    this.x = Engine.W / 2;
    this.y = Engine.H - 140;
    this.r = 5;                 // tiny central hitbox (classic shmup)
    this.bank = 0;             // visual roll based on horizontal movement
    this.weapon = 'cannon';
    // Per-weapon power levels (0 = not acquired). `level` mirrors the active one.
    this.weaponLevels = { cannon: 1, spread: 0, laser: 0, missile: 0, railgun: 0, pulse: 0 };
    this.level = 1;            // active weapon power 1..8
    this.overcharge = 0;       // maxed-weapon pickups → stacking dmg bonus this stage (cap 5 = +40%)
    this.overdriveT = 0;       // ⚡ pickup: fire-rate boost timer (seconds)
    this.fusePartner = null;   // temporary fusion partner weapon key (loadout pickup)
    this.fuseT = 0;            // fusion remaining seconds
    this.weaponLocked = false; // when true, pickups don't switch the active weapon
    this.nukes = 1;            // nuclear rockets (bomb-like, straight heavy shot)
    this.barriers = 0;         // active-barrier super charges
    this.barrierT = 0;         // active barrier shell remaining (seconds)
    this.spheres = 0;          // Sphere super charges
    this.sphereT = 0;          // Sphere remaining seconds
    this.sphereR = 0;          // Sphere radius (px)
    this.sphereBurn = 0;       // 0..1 — how hard the shell is currently burning
    this.superWeapon = 'bomb'; // equipped super this run (from hangar)
    this.fireT = 0;
    this.shield = 3;           // hits absorbed
    this.maxShield = 3;
    this.bombs = 2;
    this.invuln = 0;           // i-frames after a hit
    this._cineSafe = false;    // story / cinematic: never blink-hide the hull
    this.alive = true;
    this.score = 0;
    this.thrust = 0;           // engine flame flicker
    this.dmgMult = 1;          // from meta upgrades / ship
    this.magnetMult = 1;       // pickup magnet range scale
    this.fireRateMult = 1;     // <1 = faster auto-fire (Overclock)
    this.regenInterval = 0;    // seconds per regenerated shield (0 = off, Nanobots)
    this.regenT = 0;
    this.luckMult = 1;         // power-up drop rate (Fortune)
    this.revives = 0;          // auto-revive charges (Revive Core)
    this.pierceBonus = 0;      // extra pierce on all shots (Piercer)
    this.critChance = 0;       // double-damage chance (Crit Matrix)
    this.guardChance = 0;      // chance a hit costs no shield (Bulwark)
    this.jamT = 0;             // jammer bubble: guns + passives + supers offline
    this.jamColor = '';        // tint of the bubble that jammed us (HUD/FX)
    this.helmT = 0;            // null bubble: steering is gone too
    this.helmDrift = 0;        // wandering heading while the helm is out
    this.helmX = null;         // ship-owned drift target (overrides input)
    this.helmY = null;
    this.shipColors = { hull: '#cfeaff', accent: '#4ad6ff' };
    this.hullPaint = '';           // cosmetic retint hex ('' = the model's own colours)
    this.hullGlow = '';            // cosmetic running-lights hex ('' = the model's own)
    this.hullFx = [];              // cosmetic animated overlays (max 2)
    this.shipShape = 'arrow';
    this.sprite = 'ship_vanguard';  // AI sprite key (falls back to vector art)
    this.moduleKeys = [];          // equipped hangar modules (visual décor)
  }

  // A weapon pickup always raises THAT weapon's own level (cap 8) and equips it.
  // Per-weapon memory means switching never loses progress.
  upgradeWeapon(type) {
    Engine.audio.power();
    this.weaponLevels[type] = Engine.clamp((this.weaponLevels[type] || 0) + 1, 1, 8);
    if (!this.weaponLocked || type === this.weapon) this.weapon = type;   // lock keeps active weapon
    this.level = this.weaponLevels[this.weapon];
  }

  // The owned weapon with the highest level (for the "you have a better weapon" hint).
  strongestWeapon() {
    return this.ownedWeapons().reduce((best, w) => (this.weaponLevels[w] > this.weaponLevels[best] ? w : best), this.weapon);
  }
  toggleLock() { this.weaponLocked = !this.weaponLocked; Engine.audio.blip(this.weaponLocked ? 440 : 660, 0.05, 'square', 0.1); return this.weaponLocked; }

  // Manual switch to an already-acquired weapon (no level change).
  equip(type) {
    if (!this.weaponLevels[type]) return false;
    if (type === this.weapon) return false;
    const prev = this.weapon;
    this.weapon = type;
    this.level = this.weaponLevels[type];
    // Fusion FOLLOWS the switch. Equipping the current fusion partner used to
    // collapse the pair into weapon+weapon, which fires as if unfused — the
    // fusion looked broken the moment the player touched the weapon dock.
    // Swapping the sides keeps the same pair alive with the roles reversed.
    if (this.fuseT > 0 && this.fusePartner === type) this.fusePartner = prev;
    Engine.audio.blip(680, 0.05, 'square', 0.09);
    return true;
  }
  ownedWeapons() { return Weapons.order.filter(w => this.weaponLevels[w] > 0); }   // ALL weapons incl. railgun/pulse
  cycleWeapon() {
    const owned = this.ownedWeapons();
    if (owned.length < 2) return;
    this.equip(owned[(owned.indexOf(this.weapon) + 1) % owned.length]);
  }

  update(dt) {
    const inp = Engine.input;
    const speed = inp.focus ? 240 : 560;

    // Keyboard target drift (adds to pointer target so both work).
    let kx = 0, ky = 0;
    if (inp.keys['KeyA'] || inp.keys['ArrowLeft']) kx -= 1;
    if (inp.keys['KeyD'] || inp.keys['ArrowRight']) kx += 1;
    if (inp.keys['KeyW'] || inp.keys['ArrowUp']) ky -= 1;
    if (inp.keys['KeyS'] || inp.keys['ArrowDown']) ky += 1;
    if (kx || ky) { inp.px = Engine.clamp(inp.px + kx * speed * dt, 0, Engine.W); inp.py = Engine.clamp(inp.py + ky * speed * dt, 0, Engine.H); }

    // HELM LOST (null bubble): the stick is dead and the hull coasts on its own
    // wandering heading. Input is not merely ignored — it is overwritten, so the
    // moment control returns the ship is where it drifted to, not where the
    // player's finger has been sitting.
    if (this.helmT > 0) {
      this.helmT -= dt;
      // The drift target is the ship's OWN, and px/py are assigned from it
      // absolutely. Input is relative and event-driven, so merely adding drift
      // on top would let a player who keeps swiping steer their way out — which
      // is not "the helm is gone", it is "the helm is heavy".
      if (this.helmX == null) { this.helmX = this.x; this.helmY = this.y; }
      this.helmDrift = (this.helmDrift || 0) + Engine.rand(-1.4, 1.4) * dt;
      const a = this.helmDrift * 1.6;
      this.helmX = Engine.clamp(this.helmX + Math.sin(a) * 210 * dt, 20, Engine.W - 20);
      this.helmY = Engine.clamp(this.helmY + Math.cos(a * 0.7) * 140 * dt, 70, Engine.H - 50);
      inp.px = this.helmX;
      inp.py = this.helmY;
      if (this.helmT <= 0) { this.helmT = 0; this.helmX = null; this.helmY = null; }
    }

    // Ease ship toward target (snappy but smooth). Mild dead-zone margins.
    const tx = Engine.clamp(inp.px, 14, Engine.W - 14);
    const ty = Engine.clamp(inp.py, 40, Engine.H - 30);
    const ease = inp.focus ? 0.25 : 0.4;
    const prevX = this.x;
    this.x = Engine.lerp(this.x, tx, ease);
    this.y = Engine.lerp(this.y, ty, ease);
    this.bank = Engine.clamp((this.x - prevX) * 0.12, -1, 1) * 0.6 + this.bank * 0.4;
    this.thrust = (this.thrust + dt * 30) % 1;

    if (this.invuln > 0) this.invuln -= dt;
    if (this.barrierT > 0) {
      this.barrierT -= dt;
      if (this.barrierT < 0) this.barrierT = 0;
      // Keep invuln locked to the shell while it lasts
      if (this.barrierT > 0) this.invuln = Math.max(this.invuln, this.barrierT);
    }
    if (this.sphereT > 0) {
      this.sphereT -= dt;
      if (this.sphereT < 0) this.sphereT = 0;
      if (this.sphereT > 0) this.invuln = Math.max(this.invuln, this.sphereT);
    }
    if (this.overdriveT > 0) this.overdriveT -= dt;   // ⚡ fire-rate boost countdown
    if (this.fuseT > 0) {
      this.fuseT -= dt;
      if (this.fuseT <= 0) { this.fuseT = 0; this.fusePartner = null; }
    }

    // Jammer bubble: everything automatic goes dark, movement is untouched.
    if (this.jamT > 0) {
      this.jamT -= dt;
      if (this.jamT <= 0) {
        this.jamT = 0; this.jamColor = '';
        try { Engine.audio.unjam(); } catch (e) {}   // relief should be audible
      }
    }
    const jammed = this.jamT > 0;

    // Shield regeneration (Nanobots) — a passive system, so the jam kills it.
    if (!jammed && this.regenInterval > 0 && this.shield < this.maxShield) {
      this.regenT -= dt;
      if (this.regenT <= 0) {
        this.regenT = this.regenInterval;
        this.shield++;
        Engine.burst(this.x, this.y, '#6effc0', 8, 2, 2);
      }
    }

    // Auto-fire (rate scaled by Overclock; ⚡ Overdrive = temporary +35% rate).
    // Jammed: the cooldown still runs down, so the guns come back the instant
    // the lockout ends rather than owing a full reload on top of it.
    this.fireT -= dt;
    const w = Weapons.defs[this.weapon];
    if (jammed) return;
    if (this.fireT <= 0) {
      const wRate = Meta.weaponRateMult(Profile.get(), this.weapon);   // per-weapon Rapid training
      let cdMul = 1;
      if (this.fusePartner && this.fuseT > 0 && Weapons.fusionCdMul) {
        cdMul = Weapons.fusionCdMul(this.weapon, this.fusePartner) || 1;
      }
      this.fireT = w.cooldown * this.fireRateMult * wRate * cdMul * (this.overdriveT > 0 ? 0.65 : 1);
      let specs;
      if (this.fusePartner && this.fuseT > 0 && Weapons.fuseFire) {
        const pLv = this.weaponLevels[this.fusePartner] || 1;
        specs = Weapons.fuseFire(this.weapon, this.fusePartner, this, this.level, pLv);
      } else {
        specs = w.fire(this, this.level);
      }
      Game.spawnPlayerBullets(specs);
      Engine.audio.shoot();
    }
  }

  /**
   * Temporary fusion: active weapon + partner from loadout (not currently equipped).
   * Refreshes duration if same partner; swaps partner if different.
   * Priority module: while fused with the hangar-marked weapon, a new pickup
   * only refreshes the timer — it does not steal the fusion pair.
   */
  applyFusion(partnerKey) {
    if (!partnerKey || partnerKey === this.weapon) return false;
    if (!(this.weaponLevels[partnerKey] > 0)) return false;
    let dur = (typeof Weapons !== 'undefined' && Weapons.FUSE_DUR) ? Weapons.FUSE_DUR : 8;
    const ship = (this.sprite || '').replace('ship_', '');
    if (ship === 'aegis') dur = 3.5;
    let prio = '';
    try {
      const prof = Profile.get();
      if (typeof Meta !== 'undefined' && Meta.hasModuleEquipped && Meta.hasModuleEquipped(prof, 'priority')) {
        prio = Meta.priorityWeapon ? Meta.priorityWeapon(prof) : (prof.priorityWeapon || '');
      }
    } catch (e) {}
    // Priority protects the PARTNER side only. If the marked gun is the one the
    // player is actively firing it is in every pair by definition, so locking
    // there would freeze the build forever — in that case the module is just its
    // flat damage bonus (see Game.spawnPlayerBullets) and pickups swap freely.
    const fusedNow = this.fusePartner && this.fuseT > 0;
    const prioLive = fusedNow && prio && this.fusePartner === prio && this.weapon !== prio;
    if (prioLive && partnerKey !== this.fusePartner) {
      this.fuseT = dur;
      return 'refresh';
    }
    // Engine.audio.fusion() existed but nothing ever called it — the single most
    // dramatic thing a pickup can do had no sound of its own.
    const wasFused = this.fusePartner && this.fuseT > 0;
    this.fusePartner = partnerKey;
    this.fuseT = dur;
    if (!wasFused) { try { Engine.audio.fusion(); } catch (e) {} }
    return true;
  }

  // Returns true if the hit "lands" (shield depleted / damage taken).
  takeHit(dmg = 1) {
    if (this.invuln > 0 || this.barrierT > 0 || this.sphereT > 0) return false;
    // Bulwark: chance to fully block a hit (no shield lost). Offline while
    // jammed — a jammer bubble takes ALL the passive systems down, not just the
    // guns, which is what makes being caught in one actually dangerous.
    if (this.jamT <= 0 && this.guardChance && Math.random() < this.guardChance) {
      this.invuln = 0.5;
      Engine.audio.hit();
      Engine.burst(this.x, this.y, '#a8ff6e', 14, 3, 3);
      return false;
    }
    Engine.shake(8);
    if (this.shield > 0) {
      this.shield -= dmg;
      this.invuln = 0.6;
      Engine.audio.hit();
      Engine.burst(this.x, this.y, '#6effc0', 18, 4, 3);
      if (this.shield <= 0) { this.shield = 0; }
      return false; // survived
    }
    // No shield → destroyed.
    this.alive = false;
    Engine.audio.explode();
    Engine.shake(22);
    Engine.burst(this.x, this.y, '#ffffff', 40, 6, 5);
    Engine.burst(this.x, this.y, '#4ad6ff', 30, 4, 4);
    return true;
  }

  addShield(n = 1) { this.shield = Engine.clamp(this.shield + n, 0, this.maxShield); Engine.audio.power(); }

  /**
   * Lightweight hull décor for equipped modules (visual only).
   * Drones are drawn separately as orbit companions; fuel tank / point-def / bay cues here.
   */
  _drawModuleDecor(ctx, accent) {
    const keys = this.moduleKeys;
    if (!keys || !keys.length) return;
    const bank = this.bank || 0;
    const t = performance.now() / 1000;
    ctx.save();
    // Bank with ship slightly
    const ox = bank * 6;
    keys.forEach((k, i) => {
      if (k === 'droneAtk') {
        // Wing hardpoint nub (drone undocks and orbits in combat)
        const side = -1;
        const px = this.x + side * (16 + ox * 0.3);
        const py = this.y + 4;
        ctx.fillStyle = '#ff9a4a';
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.moveTo(px, py - 3);
        ctx.lineTo(px + side * 4, py);
        ctx.lineTo(px, py + 3);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if (k === 'fuelTank') {
        // Dorsal aux tank — amber cylinder behind cockpit
        const px = this.x - ox * 0.2;
        const py = this.y + 10;
        ctx.globalAlpha = 0.9;
        const g = ctx.createLinearGradient(px - 5, py, px + 5, py);
        g.addColorStop(0, '#906018');
        g.addColorStop(0.45, '#ffe080');
        g.addColorStop(1, '#c06018');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(px - 5, py - 4, 10, 9, 2) : ctx.rect(px - 5, py - 4, 10, 9);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,240,180,0.7)';
        ctx.fillRect(px - 2, py - 2, 4, 5);
      } else if (k === 'pointDef') {
        // Small CIWS dish on nose
        const px = this.x + ox * 0.15;
        const py = this.y - 14;
        const pulse = 0.55 + 0.45 * Math.sin(t * 6 + i);
        ctx.globalAlpha = 0.75 + pulse * 0.2;
        ctx.fillStyle = '#7de0ff';
        ctx.beginPath();
        ctx.arc(px, py, 3.2, 0, Engine.TAU);
        ctx.fill();
        ctx.strokeStyle = `rgba(200,240,255,${0.5 + pulse * 0.3})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(px, py, 5.5, 0, Engine.TAU);
        ctx.stroke();
      }
    });
    ctx.restore();
  }

  draw(ctx) {
    // Combat i-frame blink only. Never for cinematic invuln (story / spawn / victory
    // use invuln ≥ 3 or _cineSafe) or active barrier shell.
    // Wall-clock so a frozen invuln timer can't stick on a blank frame.
    if (!this._cineSafe && this.barrierT <= 0 && this.sphereT <= 0 && this.invuln > 0 && this.invuln < 3) {
      if (((performance.now() / 50) | 0) % 2 === 0) return;
    }

    const accent = (this.shipColors && this.shipColors.accent) || '#4ad6ff';

    // animated engine: exhaust particle plume + a pulsing twin-thruster glow
    // below the hull (in addition to the model's own voxel flame).
    const ex = this.y + 20;
    if (Math.random() < 0.85) Engine.burst(this.x + Engine.rand(-4, 4), ex + Engine.rand(0, 6), accent, 1, 1.3, 2);
    const fl = 0.55 + 0.45 * Math.sin(performance.now() / 45);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.5 + 0.35 * fl;
    for (const gx of [this.x - 5, this.x + 5]) {
      const g = ctx.createRadialGradient(gx, ex, 0, gx, ex, 9 + fl * 5);
      g.addColorStop(0, '#ffffff'); g.addColorStop(0.4, accent); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(gx, ex, 9 + fl * 5, 0, Engine.TAU); ctx.fill();
    }
    ctx.restore();

    // LIVE 3D voxel render: banking is a real roll of the model, the engine
    // flame is the model's own animated voxel exhaust.
    const key = (this.sprite || 'ship_vanguard').replace('ship_', '');
    const model = Player.paintedModel(key, this.hullPaint, this.hullGlow);
    Vox.groundShadow(ctx, this.x, this.y, 20, { a: 0.52 });

    // Cosmetic hull FX (bought on the Observation Deck) — visual only. Drawn in
    // two passes around the hull so exhaust cones, orbital rings and motion
    // ghosts can pass BEHIND the ship; everything on top reads as a decal.
    const fx = (this.hullFx && this.hullFx.length) ? this.hullFx : null;
    const fxOpt = { accent, thrust: this.thrust, bank: this.bank };
    if (fx) { fxOpt.pass = 'under'; Player.drawHullFx(ctx, fx, this.x, this.y, fxOpt); }

    Vox.draw(ctx, model, this.x, this.y, {
      s: 3.5, roll: this.bank * 1.5, pitch: 1.05, t: performance.now() / 1000,
      thrust: 0.8 + this.thrust * 0.4, flameColor: accent,
      // Full grid on every quality tier. At 3.5px per voxel the lower tiers
      // merge 2x2x2, which turns a 13-voxel hull into seven blocks — and this
      // is the one hull the player actually looks at. One ship's worth of extra
      // work against a screenful of enemies that still merge.
      noLod: true,
    });

    if (fx) { fxOpt.pass = 'over'; Player.drawHullFx(ctx, fx, this.x, this.y, fxOpt); }

    // Module hardpoints — small décor so loadout reads on the hull (no hitbox change)
    this._drawModuleDecor(ctx, accent);

    // JAMMED: crackling cage around the hull. The player must be able to tell at
    // a glance why nothing is firing, without looking away from the ship.
    if (this.jamT > 0) {
      const jc = this.jamColor || '#ff4a6a';
      const now = performance.now() / 1000;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = jc;
      ctx.globalAlpha = 0.55 + 0.35 * Math.sin(now * 14);
      ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(this.x, this.y, 21, 0, Engine.TAU); ctx.stroke();
      ctx.globalAlpha = 0.4;
      for (let i = 0; i < 3; i++) {
        const a = now * 5 + i * (Engine.TAU / 3);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15 + i * 4, a, a + 1.5);
        ctx.stroke();
      }
      ctx.restore();
    }

    // Fusion aura (loadout dual-fire) — soft ring while partner is active
    if (this.fusePartner && this.fuseT > 0) {
      const pc = (Weapons.defs[this.fusePartner] && Weapons.defs[this.fusePartner].color) || '#ffe24a';
      const ac = accent;
      const mix = (Weapons.blendHex && Weapons.blendHex(ac, pc)) || pc;
      const pulse = 0.35 + 0.25 * Math.sin(performance.now() / 90);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = pulse;
      ctx.strokeStyle = mix;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 22 + pulse * 4, 0, Engine.TAU);
      ctx.stroke();
      ctx.restore();
    }

    // Active barrier shell (super weapon) — solid invuln bubble, no blink hide
    if (this.barrierT > 0) {
      const t = performance.now() / 1000;
      const pulse = 0.72 + 0.28 * Math.sin(t * 8);
      const R = 28 + Math.sin(t * 5) * 2;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `rgba(110, 255, 192, ${0.55 * pulse})`;
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(this.x, this.y, R, 0, Engine.TAU); ctx.stroke();
      ctx.strokeStyle = `rgba(180, 255, 230, ${0.35 * pulse})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(this.x, this.y, R * 0.78, 0, Engine.TAU); ctx.stroke();
      // soft fill
      const g = ctx.createRadialGradient(this.x, this.y, 4, this.x, this.y, R);
      g.addColorStop(0, `rgba(140, 255, 210, ${0.18 * pulse})`);
      g.addColorStop(0.7, `rgba(80, 220, 170, ${0.08 * pulse})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(this.x, this.y, R, 0, Engine.TAU); ctx.fill();
      ctx.restore();
    }

    // Sphere super — violet/green neon shell (blocks hits, burns anything inside).
    if (this.sphereT > 0 && this.sphereR > 0) {
      const t = performance.now() / 1000;
      // While the shell has something inside it, it spins up: faster pulse,
      // brighter rim, and an inner rotor. A shell that looked identical whether
      // it was burning a cruiser or hanging in empty space was the reason the
      // Sphere read as doing nothing.
      const burn = Engine.clamp(this.sphereBurn || 0, 0, 1);
      const pulse = (0.7 + 0.3 * Math.sin(t * (7.2 + burn * 9))) * (1 + burn * 0.35);
      const R = this.sphereR + Math.sin(t * 4.4) * 3;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      if (burn > 0.02) {
        // rotor: two counter-spinning arcs that read as the field "working"
        for (let i = 0; i < 2; i++) {
          const dir = i ? -1 : 1;
          const a0 = t * dir * (2.2 + burn * 5) + i * 2.1;
          ctx.strokeStyle = `rgba(255,235,255,${0.30 * burn})`;
          ctx.lineWidth = 1.6 + burn * 2.4;
          ctx.beginPath();
          ctx.arc(this.x, this.y, R * (0.62 + i * 0.16), a0, a0 + 1.5 + burn);
          ctx.stroke();
        }
        // hot core flare
        const cg = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, R * 0.5);
        cg.addColorStop(0, `rgba(255,255,255,${0.16 * burn})`);
        cg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = cg;
        ctx.beginPath(); ctx.arc(this.x, this.y, R * 0.5, 0, Engine.TAU); ctx.fill();
      }
      ctx.strokeStyle = `rgba(200, 108, 255, ${Math.min(1, 0.62 * pulse)})`;
      ctx.lineWidth = 2.8 + burn * 2;
      ctx.beginPath(); ctx.arc(this.x, this.y, R, 0, Engine.TAU); ctx.stroke();
      ctx.strokeStyle = `rgba(110, 255, 160, ${0.5 * pulse})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(this.x, this.y, R * 0.86, 0, Engine.TAU); ctx.stroke();
      ctx.strokeStyle = `rgba(230, 180, 255, ${0.28 * pulse})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(this.x, this.y, R * 1.08, 0, Engine.TAU); ctx.stroke();
      const g = ctx.createRadialGradient(this.x, this.y, 6, this.x, this.y, R);
      g.addColorStop(0, `rgba(180, 90, 255, ${0.12 * pulse})`);
      g.addColorStop(0.55, `rgba(80, 255, 170, ${0.10 * pulse})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(this.x, this.y, R, 0, Engine.TAU); ctx.fill();
      ctx.restore();
    }
  }
}

/**
 * Hull FX overlays — the cosmetics sold on the Observation Deck. One shared
 * function so the deck turntable and live combat can never drift apart.
 *
 * These are LIGHT, not geometry. An earlier pass built them out of hard voxel
 * cells to match the ships; it matched and it looked cheap, because a hull is a
 * solid object and these are glows, plumes and afterimages around it. The rule
 * here is the opposite of the rule for the ships: soft falloff, layered
 * gradients, colour that blooms toward white at the core.
 *
 * TWO PASSES. `o.pass` is 'under' (before the hull is drawn) or 'over' (after);
 * omit it and everything draws in one go. Depth is the whole trick: a ring that
 * disappears behind the ship and comes back out the other side reads as an
 * object in space, and the same ring drawn entirely on top reads as a sticker.
 * Every caller that can afford two calls should make them.
 *
 * `o.accent` is the ship's trail colour, `o.scale` is deck turntable size,
 * `o.thrust` feeds the engine-driven ones, `o.bank` the motion-driven ones.
 */
Player.drawHullFx = function drawHullFx(ctx, keys, x, y, o) {
  if (!keys || !keys.length) return;
  const t = (o && o.t != null) ? o.t : performance.now() / 1000;
  const s = (o && o.scale) || 1;
  const accent = (o && o.accent) || '#4ad6ff';
  const phase = (o && o.pass) || 'both';
  const under = phase === 'under' || phase === 'both';
  const over = phase === 'over' || phase === 'both';
  const R = 22 * s;
  const TAU = Engine.TAU;

  // Sizes are fractions of R, never pixel counts multiplied by scale: the old
  // code did the latter and on the deck turntable the exhaust came out more
  // than twice as long as the ship it was attached to.
  const rgb = Player._fxRgb(accent);
  // `a` alpha, `w` white-mix 0..1 — the core of a light source is never its hue.
  const tint = (a, w) => 'rgba('
    + Math.round(rgb[0] + (255 - rgb[0]) * (w || 0)) + ','
    + Math.round(rgb[1] + (255 - rgb[1]) * (w || 0)) + ','
    + Math.round(rgb[2] + (255 - rgb[2]) * (w || 0)) + ',' + a.toFixed(3) + ')';
  /** Soft round light. The single most useful primitive here. */
  const glow = (px, py, rad, a, w) => {
    if (a <= 0.004 || rad <= 0.5) return;
    const g = ctx.createRadialGradient(px, py, 0, px, py, rad);
    g.addColorStop(0, tint(a, w == null ? 0.85 : w));
    g.addColorStop(0.35, tint(a * 0.55, (w || 0) * 0.4));
    g.addColorStop(1, tint(0, 0));
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(px, py, rad, 0, TAU); ctx.fill();
  };

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  ctx.lineCap = 'round';

  for (const k of keys) {
    switch (k) {
      /* GLOSS — a rake of light travels down the hull: a wide soft wash, a
         hard specular core, an anamorphic streak that flares wide as the band
         crosses the middle, and a chromatic fringe trailing behind it. The
         flare is what makes it cinematic; the bar on its own is just a wipe. */
      case 'shine': {
        const cyc = 2.4;
        const u = (t % cyc) / cyc;
        if (u > 0.5) break;                          // long dark gap between passes
        const k2 = u / 0.5;
        const ease = k2 * k2 * (3 - 2 * k2);
        const gy = y - R * 0.95 + ease * R * 1.9;
        // Strength peaks as it crosses the widest part of the hull, but never
        // drops to nothing: a pure sine spent the ends of every pass invisible,
        // which made the whole effect look like it was barely there.
        const cross = 0.35 + 0.65 * Math.sin(ease * Math.PI);
        // Chord of the hull at this height — the band narrows toward the poles.
        const half = Math.sqrt(Math.max(0, R * R - (gy - y) * (gy - y))) * 1.05;

        // A highlight on a rounded hull is not a horizontal bar, which is all
        // this used to be (four fillRects) and exactly why it read flat. Three
        // things give it form, and all three are needed:
        //   BOW   — the band arcs, and the arc INVERTS as it crosses the middle,
        //           the way a highlight wraps over a curved surface
        //   RAKE  — the band tilts through the pass, as if the light source is
        //           fixed while the hull turns under it
        //   HOT SPOT — one travelling bright point instead of uniform brightness,
        //           so the eye reads a specular reflection rather than a wipe
        const bow = R * 0.42 * (1 - 2 * ease);
        const rake = (ease - 0.5) * 0.5;
        const hx = Math.sin(t * 1.15 + 1.1) * half * 0.42;

        // Lens shape around a bowed centreline: two arcs meeting at the tips.
        const band = (hw, hh, bw) => {
          ctx.beginPath();
          ctx.moveTo(-hw, 0);
          ctx.quadraticCurveTo(0, bw - hh, hw, 0);
          ctx.quadraticCurveTo(0, bw + hh, -hw, 0);
          ctx.closePath();
        };

        if (under) {
          // Backlight: a wide, dim wash behind the hull so the ship separates
          // from the dark instead of the highlight floating on top of it.
          glow(x, gy - R * 0.15, R * 1.6, 0.11 * cross, 0.2);
          break;
        }

        ctx.save();
        ctx.translate(x, gy);
        ctx.rotate(rake);

        // 1. broad wash over the plating, fading along the band as well as
        //    across it — the tips of a real highlight die out
        const wash = ctx.createRadialGradient(hx, bow * 0.5, 0, hx, bow * 0.5, half * 1.1);
        wash.addColorStop(0, tint(0.38 * cross, 0.55));
        wash.addColorStop(0.55, tint(0.16 * cross, 0.3));
        wash.addColorStop(1, tint(0, 0));
        ctx.fillStyle = wash;
        band(half, R * 0.42, bow);
        ctx.fill();

        // 2. specular core — thin, white, and brightest only at the hot spot
        const core = ctx.createRadialGradient(hx, bow * 0.5, 0, hx, bow * 0.5, half * 0.85);
        core.addColorStop(0, 'rgba(255,255,255,' + (0.95 * cross).toFixed(3) + ')');
        core.addColorStop(0.4, 'rgba(255,255,255,' + (0.34 * cross).toFixed(3) + ')');
        core.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = core;
        band(half * 0.96, R * 0.1, bow);
        ctx.fill();

        // 3. trailing glint: a second, dimmer band a little behind the first,
        //    as though a lower panel catches the light a moment later
        const lag = ctx.createRadialGradient(hx * 0.6, bow * 0.5 + R * 0.2, 0, hx * 0.6, bow * 0.5 + R * 0.2, half * 0.7);
        lag.addColorStop(0, tint(0.34 * cross, 0.1));
        lag.addColorStop(1, tint(0, 0));
        ctx.fillStyle = lag;
        band(half * 0.8, R * 0.05, bow + R * 0.2);
        ctx.fill();
        ctx.restore();

        // 4. lens artefacts, in SCREEN space — a camera sees these level, not
        //    raked with the hull, and keeping them unrotated is what separates
        //    "light on the ship" from "light hitting the lens".
        const hotX = x + hx * Math.cos(rake), hotY = gy + hx * Math.sin(rake) + bow * 0.5;
        const flare = ctx.createLinearGradient(hotX - R * 2.3, 0, hotX + R * 2.3, 0);
        flare.addColorStop(0, tint(0, 0));
        flare.addColorStop(0.34, tint(0.16 * cross, 0.1));
        flare.addColorStop(0.5, tint(0.62 * cross, 0.8));
        flare.addColorStop(0.66, tint(0.16 * cross, 0.1));
        flare.addColorStop(1, tint(0, 0));
        ctx.fillStyle = flare;
        ctx.fillRect(hotX - R * 2.3, hotY - R * 0.03, R * 4.6, R * 0.06);

        // vertical spike of the star, much shorter than the anamorphic streak
        const spike = ctx.createLinearGradient(0, hotY - R * 0.6, 0, hotY + R * 0.6);
        spike.addColorStop(0, tint(0, 0));
        spike.addColorStop(0.5, tint(0.4 * cross, 0.8));
        spike.addColorStop(1, tint(0, 0));
        ctx.fillStyle = spike;
        ctx.fillRect(hotX - R * 0.022, hotY - R * 0.6, R * 0.044, R * 1.2);

        // Chromatic tips: warm one side, cool the other. Both fade at BOTH
        // ends — as flat rects they ended in two hard little coloured bars,
        // which is a swatch, not a fringe.
        const tipsA = 0.5 * cross;
        const tip = (x0, x1, col) => {
          const g = ctx.createLinearGradient(x0, 0, x1, 0);
          g.addColorStop(0, 'rgba(' + col + ',0)');
          g.addColorStop(0.45, 'rgba(' + col + ',' + tipsA.toFixed(3) + ')');
          g.addColorStop(1, 'rgba(' + col + ',0)');
          ctx.fillStyle = g;
          ctx.fillRect(Math.min(x0, x1), hotY - R * 0.018, Math.abs(x1 - x0), R * 0.036);
        };
        tip(hotX + R * 0.8, hotX + R * 2.3, '255,150,90');
        tip(hotX - R * 2.3, hotX - R * 0.8, '90,180,255');

        // Core bloom grows with the pass: full size from the first frame made
        // the nose vanish under a white blob before the sweep had even started.
        glow(hotX, hotY, R * (0.28 + 0.26 * cross), 0.85 * cross, 1);
        glow(hotX, hotY, R * (0.7 + 0.6 * cross), 0.3 * cross, 0.5);
        break;
      }

      /* AFTERBURN — a plume with a shape: a wide translucent cone of hot gas,
         a tight white throat, shock diamonds that pulse down the core, and
         embers shedding off the end. The cone goes UNDER the hull so the
         nozzle looks like it is inside the ship. */
      case 'afterburn': {
        const th = (o && o.thrust != null) ? o.thrust : 1;
        const flick = 1 + 0.09 * Math.sin(t * 37) + 0.05 * Math.sin(t * 23.3);
        const len = R * (0.85 + 0.5 * th) * flick;
        const y0 = y + R * 0.42;
        const w0 = R * 0.34;

        if (under) {
          // hot gas cone, soft-edged: built as stacked ellipses so the edge
          // fades sideways as well as along the length
          const steps = 9;
          for (let i = 0; i < steps; i++) {
            const f = i / (steps - 1);
            const yy = y0 + len * f;
            const rx = w0 * (1.35 - f * 0.75) * (1 + 0.12 * Math.sin(t * 19 + i));
            const a = (1 - f) * (1 - f) * 0.30;
            const g = ctx.createRadialGradient(x, yy, 0, x, yy, rx * 2.2);
            g.addColorStop(0, 'rgba(255,190,110,' + (a * 1.2).toFixed(3) + ')');
            g.addColorStop(0.5, 'rgba(255,120,40,' + (a * 0.6).toFixed(3) + ')');
            g.addColorStop(1, 'rgba(255,60,10,0)');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.ellipse(x, yy, rx * 2.2, rx * 1.5, 0, 0, TAU); ctx.fill();
          }
        }
        if (over) {
          // throat: white-hot, narrow, with a sharp taper
          const body = ctx.createLinearGradient(0, y0 - R * 0.1, 0, y0 + len);
          body.addColorStop(0, 'rgba(255,255,250,0.95)');
          body.addColorStop(0.18, 'rgba(255,238,190,0.8)');
          body.addColorStop(0.45, 'rgba(255,170,70,0.42)');
          body.addColorStop(1, 'rgba(255,90,30,0)');
          ctx.fillStyle = body;
          ctx.beginPath();
          ctx.moveTo(x - w0 * 0.62, y0 - R * 0.1);
          ctx.quadraticCurveTo(x - w0 * 0.5, y0 + len * 0.55, x, y0 + len);
          ctx.quadraticCurveTo(x + w0 * 0.5, y0 + len * 0.55, x + w0 * 0.62, y0 - R * 0.1);
          ctx.closePath(); ctx.fill();

          // shock diamonds — bright lenses stacked down the throat
          for (let i = 0; i < 3; i++) {
            const f = 0.16 + i * 0.2;
            const dy = y0 + len * f;
            const pop = 0.55 + 0.45 * Math.sin(t * 26 - i * 1.3);
            const dw = w0 * (0.5 - i * 0.11) * (0.75 + 0.4 * pop);
            const g = ctx.createRadialGradient(x, dy, 0, x, dy, dw * 2.4);
            g.addColorStop(0, 'rgba(255,255,255,' + (0.85 * pop).toFixed(3) + ')');
            g.addColorStop(0.45, 'rgba(255,220,150,' + (0.3 * pop).toFixed(3) + ')');
            g.addColorStop(1, 'rgba(255,160,60,0)');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.ellipse(x, dy, dw * 2.4, dw * 1.5, 0, 0, TAU); ctx.fill();
          }
          // nozzle bloom
          glow(x, y0, R * 0.5, 0.5, 0.8);
          // embers shedding off the tail
          for (let i = 0; i < 7; i++) {
            const sd = i * 7.13;
            const ph = ((t * 0.75 + (Math.sin(sd) * 0.5 + 0.5)) % 1);
            const ex = x + Math.sin(sd * 3.1) * w0 * 0.7 * (0.4 + ph);
            const ey = y0 + len * (0.55 + ph * 0.9);
            const ea = (1 - ph) * (1 - ph) * 0.75;
            const g = ctx.createRadialGradient(ex, ey, 0, ex, ey, R * 0.09);
            g.addColorStop(0, 'rgba(255,240,200,' + ea.toFixed(3) + ')');
            g.addColorStop(1, 'rgba(255,120,40,0)');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(ex, ey, R * 0.09, 0, TAU); ctx.fill();
          }
        }
        break;
      }

      /* HALO — orbital rings that actually orbit: the far half of each ring is
         drawn UNDER the hull and the near half OVER it, so the ship sits inside
         the rig instead of under a decal. A light node rides each ring with a
         comet tail, and blooms when it swings to the front. */
      case 'halo': {
        for (let i = 0; i < 3; i++) {
          const a = t * (0.85 + i * 0.4) + i * 2.0;
          const tilt = Math.sin(t * 0.5 + i * 1.3) * 0.5;
          const rx = R * (1.34 - i * 0.15);
          const ry = rx * (0.24 + 0.2 * Math.abs(Math.sin(t * 0.42 + i)));
          ctx.save();
          ctx.translate(x, y + R * 0.06); ctx.rotate(tilt);
          // sin(angle) > 0 is the near half in screen space after the tilt
          const wantNear = over, wantFar = under;
          const drawArc = (a0, a1, alpha, width) => {
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = tint(1, 0.25);
            ctx.lineWidth = width;
            ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, a0, a1); ctx.stroke();
          };
          const base = 0.5 - i * 0.1;
          if (wantFar) drawArc(Math.PI, TAU, base * 0.45, 1.6 * s);
          if (wantNear) drawArc(0, Math.PI, base, 2.6 * s);
          // the light node, plus a short comet tail behind it
          const near = Math.sin(a) > 0;
          if ((near && wantNear) || (!near && wantFar)) {
            const depth = near ? 1 : 0.4;
            for (let w2 = 5; w2 >= 0; w2--) {
              const na = a - w2 * 0.1;
              const nx = Math.cos(na) * rx, ny = Math.sin(na) * ry;
              glow(nx, ny, R * (0.22 - w2 * 0.025), depth * (0.7 - i * 0.12) / (1 + w2 * 0.9), w2 ? 0.4 : 1);
            }
          }
          ctx.globalAlpha = 1;
          ctx.restore();
        }
        break;
      }

      /* EMBERS — motes with depth: half of them stream behind the hull, half in
         front, each a soft light that cools from white through amber as it
         falls away. Sizes and speeds vary so it never reads as one particle
         system firing on a loop. */
      case 'sparks': {
        for (let i = 0; i < 18; i++) {
          const sd = i * 12.9898;
          const behind = (i % 2) === 0;
          if (behind ? !under : !over) continue;
          const rate = 0.55 + (Math.sin(sd * 1.7) * 0.5 + 0.5) * 0.6;
          const ph = ((t * rate + (Math.sin(sd) * 0.5 + 0.5)) % 1);
          const ang = Math.sin(sd * 2.3) * Math.PI * 2;
          const spread = (Math.sin(sd * 5.1) * 0.5 + 0.5);
          const px = x + Math.cos(ang) * R * 0.5 + Math.sin(sd * 3.3 + t * 1.6) * R * 0.22;
          const py = y + Math.sin(ang) * R * 0.24 + ph * R * (1.15 + spread * 0.9);
          const life = 1 - ph;
          const a = life * life * (behind ? 0.5 : 0.95);
          const rad = R * (0.055 + spread * 0.055) * (0.5 + life * 0.8);
          // white at birth, amber as it cools
          const g = ctx.createRadialGradient(px, py, 0, px, py, rad * 2.6);
          const hot = ph < 0.25 ? '255,255,255' : ph < 0.6 ? '255,224,150' : '255,150,60';
          g.addColorStop(0, 'rgba(' + hot + ',' + a.toFixed(3) + ')');
          g.addColorStop(0.4, 'rgba(255,180,90,' + (a * 0.4).toFixed(3) + ')');
          g.addColorStop(1, 'rgba(255,110,40,0)');
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(px, py, rad * 2.6, 0, TAU); ctx.fill();
        }
        break;
      }

      /* PULSE — a shockwave, not a circle: a bright leading edge with a soft
         wide falloff behind it, a faint echo ring chasing, and a flash at
         ignition. The ring is drawn as a thick stroke whose width and alpha
         both collapse as it expands, which is what gives it force. */
      case 'pulse': {
        for (let i = 0; i < 2; i++) {
          const u = ((t * 0.8 + i * 0.5) % 1);
          const ease = 1 - Math.pow(1 - u, 3);
          const rad = R * (0.45 + ease * 1.25);
          const fade = Math.pow(1 - u, 1.5) * (i ? 0.4 : 1);
          if (over) {
            // soft body of the wave — a ring gradient, wide when young
            const wide = R * (0.45 - u * 0.3);
            const g = ctx.createRadialGradient(x, y, Math.max(0, rad - wide), x, y, rad + wide * 0.35);
            g.addColorStop(0, tint(0, 0));
            g.addColorStop(0.65, tint(0.4 * fade, 0.15));
            g.addColorStop(0.88, tint(1.0 * fade, 0.7));
            g.addColorStop(1, tint(0, 0));
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(x, y, rad + wide * 0.35, 0, TAU); ctx.fill();
            // hard leading edge
            ctx.globalAlpha = fade;
            ctx.strokeStyle = tint(1, 0.85);
            ctx.lineWidth = Math.max(0.8, (3.4 - u * 2.6) * s);
            ctx.beginPath(); ctx.arc(x, y, rad, 0, TAU); ctx.stroke();
            ctx.globalAlpha = 1;
          }
          if (under && u < 0.22) glow(x, y, R * 1.1, (0.22 - u) * 3.4, 0.9);
        }
        break;
      }

      /* ECHO — motion afterimages: soft coloured ghosts lagging the hull and
         smearing sideways into the bank, each one split into a warm and a cool
         copy a couple of pixels apart. That chromatic split is the whole look —
         it is what a trailing frame does on film. Always under the hull. */
      case 'echo': {
        if (!under) break;
        const bank = (o && o.bank) || 0;
        for (let i = 4; i >= 1; i--) {
          const lead = 1 - i * 0.16;
          const gx = x - bank * R * 0.5 * i;
          const gy = y + R * 0.3 * i;
          const rx = R * (0.92 - i * 0.1), ry = R * (0.6 - i * 0.06);
          const a = 0.52 * lead / i;
          const rot = -bank * 0.45;
          // cool copy, then warm copy offset the other way
          const pair = [[-2.2 * s, '150,90,255'], [2.2 * s, '235,150,255']];
          for (const [dx, col] of pair) {
            const g = ctx.createRadialGradient(gx + dx, gy, 0, gx + dx, gy, rx);
            g.addColorStop(0, 'rgba(' + col + ',' + a.toFixed(3) + ')');
            g.addColorStop(0.6, 'rgba(' + col + ',' + (a * 0.45).toFixed(3) + ')');
            g.addColorStop(1, 'rgba(' + col + ',0)');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.ellipse(gx + dx, gy, rx, ry, rot, 0, TAU); ctx.fill();
          }
          // a thin bright edge keeps each ghost from melting into the next
          ctx.globalAlpha = a * 0.9;
          ctx.strokeStyle = 'rgba(230,190,255,0.8)';
          ctx.lineWidth = 1.1 * s;
          ctx.beginPath(); ctx.ellipse(gx, gy, rx * 0.92, ry * 0.92, rot, 0, TAU); ctx.stroke();
          ctx.globalAlpha = 1;
        }
        break;
      }

      /* AURORA — volumetric curtains that FRAME the ship rather than cover it:
         the sheets live behind the hull, drifting and shearing, hue cycling
         slowly; only a couple of thin wisps pass in front. Vertical falloff at
         both ends is what makes a sheet read as light rather than as paint. */
      default: {
        const hue = (t * 22) % 360;
        const sheets = under ? 4 : 2;
        for (let i = 0; i < sheets; i++) {
          const idx = under ? i : i + 4;
          const a2 = t * (0.3 + idx * 0.14) + idx * 1.7;
          // Pushed out sideways and biased away from centre: stacked on the
          // middle they veil the ship, spread apart they frame it.
          const side = (idx % 2 ? 1 : -1) * (0.55 + (idx % 3) * 0.2);
          const cx = x + (side + Math.sin(a2) * 0.5) * R * (under ? 1.15 : 0.7);
          const w = R * (under ? 0.5 + 0.22 * Math.sin(a2 * 1.3) : 0.16);
          const h = R * (under ? 1.55 + 0.35 * Math.sin(t * 0.7 + idx) : 1.25);
          const hh = (hue + idx * 46) % 360;
          const peak = under ? 0.26 : 0.16;
          ctx.save();
          ctx.translate(cx, y);
          ctx.rotate(side * 0.22 + Math.sin(a2 * 0.6) * 0.35);
          const g = ctx.createLinearGradient(0, -h, 0, h);
          g.addColorStop(0, `hsla(${hh}, 95%, 62%, 0)`);
          g.addColorStop(0.35, `hsla(${hh}, 95%, 66%, ${peak})`);
          g.addColorStop(0.62, `hsla(${(hh + 40) % 360}, 95%, 70%, ${peak * 0.8})`);
          g.addColorStop(1, `hsla(${(hh + 80) % 360}, 95%, 60%, 0)`);
          ctx.fillStyle = g;
          // A LEAF, not a rectangle. Filling a rect left two dead-straight
          // vertical edges cutting across the frame — the one thing that
          // instantly reads as a texture pasted on rather than light in the air.
          // The gradient fades the ends; the curve has to soften the sides.
          ctx.beginPath();
          ctx.moveTo(0, -h);
          ctx.bezierCurveTo(w, -h * 0.45, w, h * 0.45, 0, h);
          ctx.bezierCurveTo(-w, h * 0.45, -w, -h * 0.45, 0, -h);
          ctx.closePath();
          ctx.fill();
          // a brighter filament running up the middle of the sheet
          const core = ctx.createLinearGradient(0, -h, 0, h);
          core.addColorStop(0, 'rgba(0,0,0,0)');
          core.addColorStop(0.5, `hsla(${(hh + 20) % 360}, 98%, 82%, ${peak * 0.7})`);
          core.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = core;
          ctx.beginPath();
          ctx.moveTo(0, -h * 0.9);
          ctx.bezierCurveTo(w * 0.22, -h * 0.4, w * 0.22, h * 0.4, 0, h * 0.9);
          ctx.bezierCurveTo(-w * 0.22, h * 0.4, -w * 0.22, -h * 0.4, 0, -h * 0.9);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
        break;
      }
    }
  }
  ctx.globalAlpha = 1;
  ctx.restore();
};

/** Cached hex -> [r,g,b]; the FX call this every frame for their tints. */
Player._fxRgb = (function () {
  const cache = new Map();
  return function fxRgb(hex) {
    let v = cache.get(hex);
    if (v) return v;
    const h = (hex || '#4ad6ff').replace('#', '');
    v = [parseInt(h.slice(0, 2), 16) || 0, parseInt(h.slice(2, 4), 16) || 0, parseInt(h.slice(4, 6), 16) || 0];
    cache.set(hex, v);
    return v;
  };
})();

/**
 * Cosmetic hull skin. Vox.retint()/reglow() each walk every voxel and return a
 * NEW model, far too heavy to run per frame — so skinned hulls are cached by
 * (ship, paint, glow). The cache is tiny (one entry per combination the player
 * actually wears) and empty hexes return the untouched stock model, so the
 * default costs nothing at all.
 *
 * The two layers are independent by construction: retint skips emissive voxels,
 * reglow only touches them. Order therefore does not matter.
 */
Player.paintedModel = (function () {
  const cache = new Map();
  return function paintedModel(key, hex, glow) {
    const base = Vox.MODELS[key] || Vox.MODELS.vanguard;
    if (!hex && !glow) return base;
    const id = key + '|' + (hex || '-') + '|' + (glow || '-');
    let m = cache.get(id);
    if (!m) {
      m = base;
      if (hex) m = Vox.retint(m, hex);
      if (glow) m = Vox.reglow(m, glow);
      cache.set(id, m);
    }
    return m;
  };
})();
