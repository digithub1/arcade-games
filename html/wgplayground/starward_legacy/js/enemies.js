/* ============================================================
 * enemies.js — enemy archetypes + boss. Behaviors are data-driven:
 * each type has {hp, r, score, color, update(e,dt), draw(e,ctx)}.
 * Enemies are pooled objects owned by Game.
 * ========================================================== */
const Enemies = (() => {

  // Fire an enemy bullet toward the player (or a fixed angle).
  function shootAt(e, speed, spread = 0) {
    const a = Math.atan2(Game.player.y - e.y, Game.player.x - e.x) + spread;
    Engine.burst(e.x, e.y + e.r * 0.5, '#ff9a5a', 2, 1.6, 2);   // muzzle flash
    Game.spawnEnemyBullet(e.x, e.y, Math.cos(a) * speed, Math.sin(a) * speed);
  }

  // LIVE 3D voxel draw for an enemy. Scale ties the model's real width to the
  // gameplay hitbox (e.r) with a chunky visual bonus so ships feel substantial.
  const nowS = () => performance.now() / 1000;
  /**
   * Faux-3D rock LOD when voxel budget is tight.
   * Keeps the chunky asteroid silhouette: contact shadow, darker side wedges,
   * lit top facets, rim bevel — reads as volume without Vox.draw.
   */
  function simpleRock(ctx, e, col, k) {
    const r = e.r * (k || 1);
    const rot = e.rot || 0;
    const roll = (e.rot || 0) * 0.55;
    // Palette: top (lit) / mid / side (shade) from base hue
    const top = col || '#9a8a74';
    const mid = '#6e6254';
    const side = '#3e3830';
    const rim = '#c8b89a';
    ctx.save();
    // Soft ground contact (same spirit as Vox.groundShadow)
    ctx.fillStyle = 'rgba(0,0,0,0.38)';
    ctx.beginPath();
    ctx.ellipse(e.x, e.y + r * 0.42, r * 0.85, r * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(e.x, e.y);
    ctx.rotate(rot * 0.85);
    // Mild squash from pitch/roll so it feels tilted like live voxel
    ctx.scale(1 + Math.sin(roll) * 0.06, 0.88 + Math.cos(roll) * 0.08);

    const n = 8;
    const verts = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      // Irregular rock outline (stable per-index, rotates with body)
      const rr = r * (0.78 + 0.22 * Math.sin(i * 2.1 + 0.4) + 0.08 * Math.cos(i * 3.3));
      verts.push({ x: Math.cos(a) * rr, y: Math.sin(a) * rr * 0.92, a, i });
    }

    // Side wedges (dark) — lower half / shadow side of light KEY from top-left
    for (let i = 0; i < n; i++) {
      const v0 = verts[i], v1 = verts[(i + 1) % n];
      const midA = (v0.a + v1.a) * 0.5;
      // Fake light: faces pointing down-right are darker
      const lit = 0.55 + 0.45 * Math.cos(midA - 0.9);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(v0.x, v0.y);
      ctx.lineTo(v1.x, v1.y);
      ctx.closePath();
      if (lit < 0.55) {
        ctx.fillStyle = side;
        ctx.globalAlpha = 0.92;
      } else if (lit < 0.78) {
        ctx.fillStyle = mid;
        ctx.globalAlpha = 0.95;
      } else {
        ctx.fillStyle = top;
        ctx.globalAlpha = 1;
      }
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Raised top plate (lighter, inset) — sells the voxel "top face"
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const v = verts[i];
      const s = 0.52;
      const x = v.x * s, y = v.y * s - r * 0.06;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = rim;
    ctx.globalAlpha = 0.55;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = top;
    ctx.globalAlpha = 0.88;
    ctx.fill();
    ctx.globalAlpha = 1;

    // Bevel edge stroke
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const v = verts[i];
      if (i === 0) ctx.moveTo(v.x, v.y); else ctx.lineTo(v.x, v.y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(20,16,12,0.55)';
    ctx.lineWidth = 1.6;
    ctx.stroke();
    // Cool rim glint on lit edge
    ctx.strokeStyle = 'rgba(230,220,200,0.28)';
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.arc(0, -r * 0.1, r * 0.55, -2.6, -0.5);
    ctx.stroke();

    // Small crater / voxel divot
    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    ctx.beginPath();
    ctx.ellipse(r * 0.12, -r * 0.08, r * 0.16, r * 0.1, rot * 0.2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
  function vox(e, ctx, key, o = {}) {
    const m = Vox.MODELS[key];
    // Stronger contact shadow so the body lifts off the starfield (reads 3D).
    Vox.groundShadow(ctx, e.x, e.y, e.r * 1.1, o.shadow || { a: 0.5 });
    Vox.draw(ctx, m, e.x, e.y, {
      s: (e.r * 2.7 / m.w) * (o.k || 1.4),
      yaw: o.yaw != null ? o.yaw : Math.PI,
      roll: o.roll || 0,
      pitch: o.pitch != null ? o.pitch : 1.05,
      // Frozen per-enemy time offset (not x/y) so motion doesn't rephase the glow.
      t: nowS() + phase(e) * 0.15,
      thrust: o.thrust || 0, flameColor: o.flame,
    });
  }
  // Stable per-enemy phase — frozen on first use. Using live x/y made sin-yaw
  // "twitch" every frame as the ship moved.
  const phase = e => (e._animPh != null ? e._animPh : (e._animPh = Math.random() * Engine.TAU));

  const types = {
    /* Dives straight at the player, no shots. Cheap, swarms. */
    kamikaze: {
      hp: 8, r: 12, score: 100, color: '#e89850',
      init(e) { e.vx = 0; e.vy = 130; e.lockX = Game.player.x; e.bank = 0; },
      update(e, dt) {
        // gentle horizontal homing in the upper half, then commit
        if (e.y < Engine.H * 0.45) e.vx = Engine.lerp(e.vx, (Game.player.x - e.x) * 1.4, 0.04);
        e.x += e.vx * dt; e.y += e.vy * dt;
        // smooth visual bank toward current vx (no snap when homing flips)
        e.bank = Engine.lerp(e.bank || 0, Engine.clamp((e.vx || 0) * 0.0022, -0.22, 0.22), Math.min(1, dt * 8));
      },
      draw(e, ctx) {
        if (Math.random() < 0.4) Engine.burst(e.x + Engine.rand(-2, 2), e.y - e.r, '#ff9a3d', 1, 0.8, 2);   // exhaust trail
        vox(e, ctx, 'kamikaze', { thrust: 1, flame: '#ff9a3d', roll: e.bank || 0 });
      },
    },

    /* Drifts down slowly, fires aimed shots. */
    shooter: {
      hp: 14, r: 14, score: 150, color: '#b090e0',
      init(e) {
        e.vx = Engine.rand(-30, 30); e.vy = 55; e.fireT = Engine.rand(0.6, 1.4);
        e.stopY = Engine.rand(120, 280); e.baseX = e.x; e.hoverPh = phase(e);
      },
      update(e, dt) {
        if (e.y < e.stopY) { e.x += e.vx * dt; e.y += e.vy * dt; e.baseX = e.x; }
        else {
          // Orbit a fixed anchor (not integrated sin-velocity) → no wall drift.
          e.x = e.baseX + Math.sin(nowS() * 1.15 + e.hoverPh) * 20;
        }
        e.fireT -= dt;
        if (e.fireT <= 0 && e.y > 10) { e.fireT = Engine.rand(1.2, 2.0); shootAt(e, 220); Engine.audio.blip(330, 0.04, 'square', 0.04); }
      },
      draw(e, ctx) {
        const s = Math.sin(nowS() * 0.55 + phase(e));   // slow turret scan
        vox(e, ctx, 'shooter', { thrust: 0.6, flame: '#e08aff', yaw: Math.PI + s * 0.16, roll: s * 0.05 });
      },
    },

    /* Slow, tanky, sprays a radial burst when killed. */
    tank: {
      hp: 60, r: 22, score: 400, color: '#6090d0',
      init(e) { e.vx = 0; e.vy = 38; e.fireT = 1.5; e.baseX = e.x; e.hoverPh = phase(e); },
      update(e, dt) {
        e.y += e.vy * dt;
        e.x = e.baseX + Math.sin(e.y / 85 + e.hoverPh) * 16;
        e.fireT -= dt;
        if (e.fireT <= 0 && e.y > 10) { e.fireT = 1.8; for (let i = 0; i < 5; i++) shootAt(e, 170, (i - 2) * 0.22); }
      },
      onDeath(e) { for (let i = 0; i < 8; i++) { const a = i / 8 * Engine.TAU; Game.spawnEnemyBullet(e.x, e.y, Math.cos(a) * 160, Math.sin(a) * 160); } },
      draw(e, ctx) {
        const s = Math.sin(nowS() * 0.4 + phase(e));
        vox(e, ctx, 'tank', { k: 1.3, thrust: 0.5, flame: '#9fd0ff', yaw: Math.PI + s * 0.18, roll: s * 0.04 });
      },
    },

    /* Weaves across in a sine path, fires occasional triple. */
    weaver: {
      hp: 18, r: 13, score: 200, color: '#50d8b0',
      init(e) {
        e.amp = Engine.rand(50, 120);
        const m = e.amp + e.r + 4;                 // keep the full sine swing on-screen
        e.baseX = Engine.clamp(e.x, m, Engine.W - m);
        e.phase = Engine.rand(0, Engine.TAU); e.vy = 70; e.fireT = 1;
      },
      update(e, dt) {
        e.y += e.vy * dt;
        e.x = e.baseX + Math.sin(e.y / 50 + e.phase) * e.amp;
        e.fireT -= dt;
        if (e.fireT <= 0 && e.y > 10 && e.y < Engine.H * 0.7) { e.fireT = 1.6; for (let i = -1; i <= 1; i++) shootAt(e, 200, i * 0.18); }
      },
      draw(e, ctx) {
        const w = Math.cos(e.y / 50 + (e.phase || 0));   // horizontal weave velocity
        // Bank into the weave — readable, not a full body roll.
        vox(e, ctx, 'weaver', { thrust: 0.7, flame: '#8dffd6', yaw: Math.PI + w * 0.18, roll: w * 0.28 });
      },
    },

    /* ---- Heavy escorts: tanky, descend all the way (never hover), fire rarely,
       so some reach mid-screen and then exit off the bottom. ---- */

    /* Armored gunship — reaches mid-screen, occasional aimed shot. */
    cruiser: {
      hp: 170, r: 19, score: 350, color: '#ff9a3d',
      init(e) { e.vx = Engine.rand(-14, 14); e.vy = 70; e.fireT = Engine.rand(1.6, 2.6); e.bank = 0; },
      update(e, dt) {
        e.y += e.vy * dt; e.x += e.vx * dt;
        e.bank = Engine.lerp(e.bank || 0, Engine.clamp((e.vx || 0) * 0.004, -0.16, 0.16), Math.min(1, dt * 6));
        e.fireT -= dt;
        if (e.fireT <= 0 && e.y > 20 && e.y < Engine.H * 0.72) { e.fireT = Engine.rand(2.4, 3.4); shootAt(e, 190); }
      },
      draw(e, ctx) {
        const s = Math.sin(nowS() * 0.45 + phase(e));
        vox(e, ctx, 'cruiser', { thrust: 0.8, flame: '#9fe0ff',
          yaw: Math.PI + s * 0.05, roll: (e.bank || 0) + s * 0.04 });
      },
    },

    /* Carrier — very tanky, slow, launches interceptors, barely fires itself. */
    carrier: {
      hp: 260, r: 27, score: 650, color: '#6a7cff',
      init(e) { e.vy = 38; e.spawnT = 2.8; e.baseX = e.x; e.hoverPh = phase(e); },
      update(e, dt) {
        e.y += e.vy * dt;
        e.x = e.baseX + Math.sin(e.y / 95 + e.hoverPh) * 12;
        e.spawnT -= dt;
        if (e.spawnT <= 0 && e.y > 20 && e.y < Engine.H * 0.55 && Game.enemyCount() < 10) {
          e.spawnT = 4.2;
          Game.spawnEnemy('interceptor', e.x - 16, e.y + 24);
          Game.spawnEnemy('interceptor', e.x + 16, e.y + 24);
          Engine.audio.blip(200, 0.1, 'sawtooth', 0.05);
        }
      },
      draw(e, ctx) {
        const s = Math.sin(nowS() * 0.35 + phase(e));
        vox(e, ctx, 'carrier', { k: 1.3, thrust: 0.6, flame: '#9fb8ff', yaw: Math.PI + s * 0.06, roll: s * 0.03 });
      },
    },

    /* Destroyer — heaviest, slow, a lazy 3-wide spread now and then. */
    destroyer: {
      hp: 380, r: 29, score: 850, color: '#9a6aff',
      init(e) { e.vy = 34; e.fireT = 2.2; e.baseX = e.x; e.hoverPh = phase(e); },
      update(e, dt) {
        e.y += e.vy * dt;
        e.x = e.baseX + Math.sin(e.y / 110 + e.hoverPh) * 10;
        e.fireT -= dt;
        if (e.fireT <= 0 && e.y > 20 && e.y < Engine.H * 0.7) { e.fireT = 3.4; for (let i = -1; i <= 1; i++) shootAt(e, 165, i * 0.24); }
      },
      onDeath(e) { for (let i = 0; i < 6; i++) { const a = i / 6 * Engine.TAU; Game.spawnEnemyBullet(e.x, e.y, Math.cos(a) * 150, Math.sin(a) * 150); } },
      draw(e, ctx) {
        const s = Math.sin(nowS() * 0.4 + phase(e));
        vox(e, ctx, 'destroyer', { k: 1.3, thrust: 0.75, flame: '#ff9a6a', yaw: Math.PI + s * 0.05, roll: s * 0.04 });
      },
    },

    /* Interceptor — light, fast straight dive, no fire (pure body threat, filler). */
    interceptor: {
      hp: 22, r: 12, score: 150, color: '#ff5a5a',
      init(e) {
        e.vx = Engine.clamp((Game.player.x - e.x) * 0.4, -60, 60); e.vy = 145;
        e.bank = Engine.clamp(e.vx * 0.0025, -0.2, 0.2);
      },
      update(e, dt) { e.y += e.vy * dt; e.x += e.vx * dt; },
      draw(e, ctx) {
        if (Math.random() < 0.45) Engine.burst(e.x + Engine.rand(-2, 2), e.y - e.r, '#ff6a5a', 1, 0.8, 1.8);   // exhaust trail
        vox(e, ctx, 'interceptor', { thrust: 1, flame: '#ff6a5a', roll: e.bank || 0 });
      },
    },

    /* ---- Horizontal hazards: cross the screen sideways (freeX: no x-clamp,
       retire on side exit). Enter from the side nearest the spawn x. ---- */

    /* Asteroid — tumbling rock, no fire, contact hazard; splits into debris. */
    asteroid: {
      hp: 95, r: 22, score: 220, color: '#8a7a66', freeX: true,
      init(e) {
        const fromLeft = e.x < Engine.W / 2;
        e.x = fromLeft ? -e.r : Engine.W + e.r;
        e.y = Engine.rand(50, Engine.H * 0.45);
        e.vx = (fromLeft ? 1 : -1) * Engine.rand(55, 95);
        e.vy = Engine.rand(18, 45);
        e.spin = Engine.rand(-1.8, 1.8); e.rot = Engine.rand(0, Engine.TAU);
        e.verts = Array.from({ length: 9 }, () => 0.7 + Math.random() * 0.4);
      },
      update(e, dt) { e.x += e.vx * dt; e.y += e.vy * dt; e.rot += e.spin * dt; },
      onDeath(e) { for (let i = 0; i < 2; i++) Game.spawnEnemy('debris', e.x, e.y); },
      // TRUE 3D tumble: yaw AND roll from the spin — the rock visibly rotates in space.
      // Under heavy model load (Game._voxBudgetTight) fall back to cheap rock blob.
      draw(e, ctx) {
        // LOD is snapped at spawn (e.simpleRock) — never flip a live rock mid-flight.
        if (e.simpleRock) {
          simpleRock(ctx, e, '#8a7a66', 1);
          return;
        }
        vox(e, ctx, 'asteroid', { k: 1.15, yaw: e.rot, roll: e.rot * 0.6 });
      },
    },

    /* Debris — small rock chunk; drifts from where it spawned (no reposition). */
    debris: {
      hp: 16, r: 10, score: 60, color: '#9c8c78', freeX: true,
      init(e) { e.vx = Engine.rand(-70, 70); e.vy = Engine.rand(40, 90); e.spin = Engine.rand(-3, 3); e.rot = Engine.rand(0, Engine.TAU); },
      update(e, dt) { e.x += e.vx * dt; e.y += e.vy * dt; e.rot += e.spin * dt; },
      draw(e, ctx) {
        if (e.simpleRock) {
          simpleRock(ctx, e, '#9c8c78', 0.85);
          return;
        }
        vox(e, ctx, 'debris', { k: 1.1, yaw: e.rot, roll: e.rot * 0.8 });
      },
    },

    /* Strafer — flies straight across horizontally, firing aimed shots. */
    strafer: {
      hp: 46, r: 15, score: 250, color: '#ffb14a', freeX: true,
      init(e) {
        e.fromLeft = e.x < Engine.W / 2;
        e.x = e.fromLeft ? -e.r : Engine.W + e.r;
        e.baseY = Engine.rand(70, Engine.H * 0.4);
        e.y = e.baseY;
        e.vx = (e.fromLeft ? 1 : -1) * Engine.rand(95, 140);
        e.fireT = Engine.rand(0.5, 1.1); e.t = 0;
      },
      update(e, dt) {
        e.t += dt; e.x += e.vx * dt; e.y = e.baseY + Math.sin(e.t * 3) * 14;
        e.fireT -= dt;
        if (e.fireT <= 0 && e.x > 0 && e.x < Engine.W) { e.fireT = Engine.rand(0.9, 1.5); shootAt(e, 210); }
      },
      draw(e, ctx) {
        // Nose points +x in model space → yaw 0 / π by travel direction.
        // Gentle bank from the vertical bob only — no extra yaw wobble.
        const base = e.vx >= 0 ? 0 : Math.PI;
        const bank = Math.sin((e.t || 0) * 3) * 0.55;   // matches path frequency
        vox(e, ctx, 'strafer', {
          yaw: base + bank * 0.06,
          roll: bank * 0.22,
          pitch: 0.95,
        });
      },
    },
  };

  /* ---------------- BOSSES ---------------- */
  // One unique boss per campaign world. Each defines size, HP scaling, a
  // phase-based attack(e, phase) (called when the fire timer elapses), an
  // optional per-frame tick(e, dt, phase) for summons, and a draw(e, ctx).
  const aim = e => Math.atan2(Game.player.y - e.y, Game.player.x - e.x);
  const shot = (e, ang, speed, ox = 0, oy = 0, r = 5) =>
    Game.spawnEnemyBullet(e.x + ox, e.y + oy, Math.cos(ang) * speed, Math.sin(ang) * speed, r);
  // weak-point core shared by all bosses (glows red when enraged)
  function drawCore(e, ctx) {
    const ratio = e.hp / e.maxHp;
    ctx.fillStyle = ratio < 0.33 ? '#ff4a4a' : '#ffe24a';
    ctx.beginPath(); ctx.arc(0, 6, 15 + Math.sin(e.t * 6) * 2, 0, Engine.TAU); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(0, 6, 6, 0, Engine.TAU); ctx.fill();
  }

  const BOSSES = {
    /* CRIMSON WARDEN — watch lances → timed veil seal ↔ open → eclipse walls */
    nebula: {
      nameKey: 'boss.nebula.name', sprite: 'boss_nebula',
      r: 64, baseHp: 1800, hpPerWave: 680, strafe: 0, voxScale: 1.28,
      quietPhase: true,
      motion(e, dt) {
        const band = e._band == null ? nebulaBand(e) : e._band;
        const sealed = e._cycle === 'shell' || e._cycle === 'warn';
        const want = band >= 2 ? (sealed ? 16 : 24) : band === 1 ? (sealed ? 22 : 38) : 70;
        if (e._amp == null) e._amp = 70;
        const k = 1 - Math.exp(-(dt || 0.016) / 0.55);
        e._amp += (want - e._amp) * k;
        e.x = Engine.W / 2 + Math.sin((e.t - (e.strafeT0 || 0)) * 0.52) * e._amp;
        e.y = 126;
      },
      attack(e) {
        const r = e.hp / e.maxHp;
        const b = aim(e);
        if (r > 0.66) {
          e.fireT = 0.7;
          shot(e, b, 220, -26, 18, 6);
          shot(e, b, 220, 26, 18, 6);
          shot(e, b, 240, 0, 26, 5);
        } else if (r > 0.33) {
          e.fireT = 0.52;
          shot(e, b, 245, -22, 16, 6);
          shot(e, b, 245, 22, 16, 6);
        } else {
          e.fireT = 0.16;
          const off = e.t * 1.7;
          for (let i = 0; i < 8; i++) shot(e, off + i / 8 * Engine.TAU, 178);
        }
      },
      tick(e, dt) {
        nebulaTick(e, dt);
      },
      hitRedirect(e, dmg, hx, hy) {
        // Hull seal is a timed window. Old HP-band + 34px "eye" never received
        // hits: bullets collide at r≈64, so the fight soft-locked.
        if (e._cycle !== 'shell') return false;
        Engine.burst(hx, hy, '#ff6a8a', 5, 2.4, 2);
        Engine.burst(hx, hy, '#ffd080', 3, 1.8, 1.6);
        e._shellFlash = 0.18;
        return true;
      },
      drawExtra(e, ctx) { nebulaDraw(e, ctx); },
    },

    /* ASTEROID BELT — heavy slow shells → sweeping stream → ring bursts */
    asteroid: {
      nameKey: 'boss.asteroid.name', sprite: 'boss_asteroid',
      r: 66, baseHp: 1150, hpPerWave: 400, strafe: 0.45,
      attack(e, phase) {
        if (phase === 0) {
          e.fireT = 0.9; const b = aim(e);
          shot(e, b, 150, 0, 30, 9);
          shot(e, b - 0.25, 150, 0, 30, 7); shot(e, b + 0.25, 150, 0, 30, 7);
        } else if (phase === 1) {
          e.fireT = 0.08; // sweeping stream that pans left↔right
          const a = Math.PI / 2 + Math.sin(e.t * 1.6) * 0.7;
          shot(e, a, 210, 0, 20, 6);
        } else {
          e.fireT = 0.55;
          for (let i = 0; i < 14; i++) shot(e, i / 14 * Engine.TAU, 165, 0, 0, 6);
          const b = aim(e);
          for (let i = -1; i <= 1; i++) shot(e, b + i * 0.16, 220, 0, 30, 7);
        }
      },
      draw(e, ctx, flash) {
        // chunky rock hexagon
        ctx.fillStyle = flash ? '#fff' : '#565d6a';
        ctx.beginPath();
        for (let i = 0; i < 6; i++) { const a = i / 6 * Engine.TAU + 0.2; const r = 60 + (i % 2) * 6; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r * 0.7); }
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#3c4250';
        ctx.fillRect(-44, -22, 88, 16);
        ctx.fillStyle = flash ? '#fff' : '#6f7888';
        ctx.beginPath(); ctx.arc(-30, 18, 9, 0, Engine.TAU); ctx.arc(28, 16, 7, 0, Engine.TAU); ctx.fill();
        drawCore(e, ctx);
      },
    },

    /* HIVE VOICE — sonic fans → HP-gated brood sacs → scream rings */
    hive: {
      nameKey: 'boss.hive.name', sprite: 'boss_hive',
      r: 62, baseHp: 1740, hpPerWave: 680, strafe: 0, voxScale: 1.22,
      quietPhase: true,
      motion(e) {
        e.x = Engine.W / 2 + Math.sin((e.t - (e.strafeT0 || 0)) * 0.58) * 64;
        e.y = 124 + Math.sin(e.t * 1.6) * 4;
      },
      attack(e) {
        const r = e.hp / e.maxHp;
        const b = aim(e);
        if (r > 0.66) {
          e.fireT = 0.78;
          for (let i = -2; i <= 2; i++) shot(e, b + i * 0.15, 198, 0, 18);
        } else if (r > 0.33) {
          e.fireT = 0.5;
          for (let i = -2; i <= 2; i++) shot(e, b + i * 0.18, 212, 0, 18);
        } else {
          e.fireT = 0.2;
          const off = e.t * 2.2;
          for (let i = 0; i < 8; i++) shot(e, off + i / 8 * Engine.TAU, 172, 0, 0, 5);
        }
      },
      tick(e, dt) { hiveTick(e, dt); },
      hitRedirect(e, dmg, hx, hy) {
        hiveEnsure(e);
        // Spores eat shots: clearing them IS the counterplay to the bloom.
        for (const sp of e.spores || []) {
          if (sp.burst > 0) continue;
          if (Engine.dist2(hx, hy, sp.x, sp.y) < (sp.r + 5) * (sp.r + 5)) {
            sp.hp -= dmg;
            Engine.burst(hx, hy, '#c8ff80', 3, 2, 1.8);
            if (sp.hp <= 0) hiveBurstSpore(e, sp);
            return true;
          }
        }
        let best = null, bd = 1e9;
        e.sacs.forEach(s => {
          if (s.hp <= 0 || !s.open) return;
          const d = Engine.dist2(hx, hy, e.x + s.ox, e.y + s.oy);
          if (d < bd) { bd = d; best = s; }
        });
        if (best && bd < 32 * 32) {
          hiveHurtSac(e, best, dmg, hx, hy);
          return true;
        }
        // Resonance web: the hull is armoured while any tether pair is live, so
        // the final phase cannot be brute-forced through the middle.
        if (hiveWebUp(e)) {
          Engine.burst(hx, hy, '#9bff7d', 4, 2.2, 1.8);
          return true;
        }
        return false;
      },
      drawExtra(e, ctx) { hiveDraw(e, ctx); },
    },

    /* THE VOID GATE — counter-rotating spirals → rings → dense 4-arm spiral */
    void: {
      nameKey: 'boss.void.name', sprite: 'boss_void',
      r: 60, baseHp: 1020, hpPerWave: 370, strafe: 0.6,
      attack(e, phase) {
        if (phase === 0) {
          e.fireT = 0.12; const s = e.t * 2.2;
          shot(e, s, 175); shot(e, s + Math.PI, 175);
          shot(e, -s, 175); shot(e, -s + Math.PI, 175);
        } else if (phase === 1) {
          e.fireT = 0.7;
          for (let i = 0; i < 16; i++) shot(e, i / 16 * Engine.TAU, 150);
          const b = aim(e); for (let i = -1; i <= 1; i++) shot(e, b + i * 0.18, 240, 0, 20);
        } else {
          e.fireT = 0.1; const s = e.t * 2.6;
          for (let k = 0; k < 4; k++) shot(e, s + k / 4 * Engine.TAU, 200);
        }
      },
      draw(e, ctx, flash) {
        ctx.save(); ctx.rotate(e.t * 0.6);
        ctx.fillStyle = flash ? '#fff' : '#3a2a6e';
        for (let i = 0; i < 6; i++) { ctx.rotate(Engine.TAU / 6); ctx.fillRect(-8, -58, 16, 30); }
        ctx.restore();
        ctx.fillStyle = flash ? '#fff' : '#5a3aa8';
        ctx.beginPath(); ctx.arc(0, 0, 40, 0, Engine.TAU); ctx.fill();
        ctx.strokeStyle = flash ? '#fff' : '#b58cff'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.arc(0, 0, 50, e.t, e.t + 4); ctx.stroke();
        drawCore(e, ctx);
      },
    },

    /* EMBER EXPANSE — heavy aimed shells → expanding fire rings → both */
    ember: {
      nameKey: 'boss.ember.name', sprite: 'boss_ember',
      r: 62, baseHp: 1300, hpPerWave: 420, strafe: 0.55,
      attack(e, phase) {
        if (phase === 0) { e.fireT = 0.8; const b = aim(e); for (let i = -1; i <= 1; i++) shot(e, b + i * 0.16, 210, 0, 30, 8); }
        else if (phase === 1) { e.fireT = 0.5; const off = e.t * 1.1; for (let i = 0; i < 12; i++) shot(e, off + i / 12 * Engine.TAU, 160, 0, 0, 6); }
        else { e.fireT = 0.4; const b = aim(e); for (let i = -2; i <= 2; i++) shot(e, b + i * 0.13, 240, 0, 30); for (let i = 0; i < 8; i++) shot(e, e.t * 2 + i / 8 * Engine.TAU, 150); }
      },
      draw(e, ctx, flash) {
        ctx.fillStyle = flash ? '#fff' : '#7a2a10';
        ctx.beginPath(); for (let i = 0; i < 8; i++) { const a = i / 8 * Engine.TAU; const r = 58 + (i % 2) * 8; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r * 0.9); } ctx.closePath(); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#ff7a2a'; ctx.beginPath(); ctx.arc(0, 0, 34 + Math.sin(e.t * 5) * 3, 0, Engine.TAU); ctx.fill();
        drawCore(e, ctx);
      },
    },

    /* FROSTBITE RIM — slow sweeping walls of shots → aimed → dense sweep */
    frost: {
      nameKey: 'boss.frost.name', sprite: 'boss_frost',
      r: 60, baseHp: 1500, hpPerWave: 460, strafe: 0.5,
      attack(e, phase) {
        if (phase === 0) { e.fireT = 0.09; const a = Math.PI / 2 + Math.sin(e.t * 1.3) * 0.8; shot(e, a, 190, 0, 20, 6); }
        else if (phase === 1) { e.fireT = 0.6; const b = aim(e); for (let i = -2; i <= 2; i++) shot(e, b + i * 0.14, 220, 0, 20); }
        else { e.fireT = 0.06; const a = Math.PI / 2 + Math.sin(e.t * 2.0) * 0.9; shot(e, a, 230, -20, 20, 6); shot(e, a, 230, 20, 20, 6); }
      },
      draw(e, ctx, flash) {
        ctx.fillStyle = flash ? '#fff' : '#2a5f8a';
        ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Engine.TAU + e.t * 0.2; ctx.lineTo(Math.cos(a) * 58, Math.sin(a) * 58); } ctx.closePath(); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#9fe0ff'; ctx.beginPath(); ctx.arc(0, 0, 30, 0, Engine.TAU); ctx.fill();
        drawCore(e, ctx);
      },
    },

    /* MACHINE NEXUS — summons drones + rotating radial → aimed bursts */
    nexus: {
      nameKey: 'boss.nexus.name', sprite: 'boss_nexus',
      r: 60, baseHp: 1700, hpPerWave: 500, strafe: 0.7,
      attack(e, phase) {
        if (phase === 0) { e.fireT = 0.16; const off = e.t * 1.6; for (let i = 0; i < 8; i++) shot(e, off + i / 8 * Engine.TAU, 175); }
        else if (phase === 1) { e.fireT = 0.5; const b = aim(e); for (let i = -2; i <= 2; i++) shot(e, b + i * 0.15, 230, 0, 20); }
        else { e.fireT = 0.12; const off = e.t * 2.2; for (let i = 0; i < 12; i++) shot(e, off + i / 12 * Engine.TAU, 200); }
      },
      tick(e, dt, phase) {
        if (phase < 1) return;
        e.summonT = (e.summonT || 3) - dt;
        if (e.summonT <= 0 && Game.enemyCount() < 8) { e.summonT = 3.5; Game.spawnEnemy('interceptor', e.x - 20, e.y + 30); Game.spawnEnemy('interceptor', e.x + 20, e.y + 30); Engine.audio.blip(200, 0.1, 'sawtooth', 0.06); }
      },
      draw(e, ctx, flash) {
        ctx.save(); ctx.rotate(e.t * 0.5);
        ctx.fillStyle = flash ? '#fff' : '#2f6a52';
        for (let i = 0; i < 4; i++) { ctx.rotate(Engine.TAU / 4); ctx.fillRect(-10, -60, 20, 34); }
        ctx.restore();
        ctx.fillStyle = flash ? '#fff' : '#3f8a68'; ctx.beginPath(); ctx.arc(0, 0, 38, 0, Engine.TAU); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#9bffcf'; for (let i = 0; i < 3; i++) { const a = e.t + i / 3 * Engine.TAU; ctx.fillRect(Math.cos(a) * 24 - 3, Math.sin(a) * 24 - 3, 6, 6); }
        drawCore(e, ctx);
      },
    },

    /* GALACTIC CORE — final boss: dense spirals + aimed spread + rings */
    core: {
      nameKey: 'boss.core.name', sprite: 'boss_core',
      r: 66, baseHp: 2200, hpPerWave: 560, strafe: 0.65,
      attack(e, phase) {
        if (phase === 0) { e.fireT = 0.1; const s = e.t * 2.4; for (let k = 0; k < 3; k++) shot(e, s + k / 3 * Engine.TAU, 190); }
        else if (phase === 1) { e.fireT = 0.4; const b = aim(e); for (let i = -3; i <= 3; i++) shot(e, b + i * 0.12, 250, 0, 30); for (let i = 0; i < 10; i++) shot(e, e.t * 1.5 + i / 10 * Engine.TAU, 160); }
        else { e.fireT = 0.08; const s = e.t * 3; for (let k = 0; k < 5; k++) shot(e, s + k / 5 * Engine.TAU, 210); const b = aim(e); shot(e, b, 280, 0, 30, 7); }
      },
      draw(e, ctx, flash) {
        ctx.save(); ctx.rotate(e.t * 0.4);
        ctx.fillStyle = flash ? '#fff' : '#8a6a1a';
        for (let i = 0; i < 8; i++) { ctx.rotate(Engine.TAU / 8); ctx.fillRect(-7, -64, 14, 26); }
        ctx.restore();
        ctx.fillStyle = flash ? '#fff' : '#c8a840'; ctx.beginPath(); ctx.arc(0, 0, 44, 0, Engine.TAU); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#fff0b0'; ctx.beginPath(); ctx.arc(0, 0, 22 + Math.sin(e.t * 6) * 3, 0, Engine.TAU); ctx.fill();
        drawCore(e, ctx);
      },
    },

    /* ---- NEW ARCHETYPES (Chapters I–III) ---- */

    /* SENTINEL — rotating bullet-shield → aimed lances → ring pulses */
    warden: {
      nameKey: 'boss.warden.name', sprite: 'boss_warden',
      r: 60, baseHp: 1600, hpPerWave: 480, strafe: 0.5,
      attack(e, phase) {
        if (phase === 0) { e.fireT = 0.14; const s = e.t * 1.8; for (let i = 0; i < 6; i++) shot(e, s + i / 6 * Engine.TAU, 165); }
        else if (phase === 1) { e.fireT = 0.5; const b = aim(e); for (let i = -2; i <= 2; i++) shot(e, b + i * 0.1, 275, 0, 20, 7); }
        else { e.fireT = 0.6; for (let i = 0; i < 18; i++) shot(e, i / 18 * Engine.TAU, 150); const b = aim(e); shot(e, b, 260, 0, 20, 8); }
      },
      draw(e, ctx, flash) {
        ctx.save(); ctx.rotate(e.t * 0.8);
        ctx.strokeStyle = flash ? '#fff' : '#7fd0ff'; ctx.lineWidth = 5;
        for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(0, 0, 48 - i * 6, i, i + 2.2); ctx.stroke(); }
        ctx.restore();
        ctx.fillStyle = flash ? '#fff' : '#2a5a8a'; ctx.beginPath(); ctx.arc(0, 0, 40, 0, Engine.TAU); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#bfe8ff'; for (let i = 0; i < 4; i++) { const a = e.t + i / 4 * Engine.TAU; ctx.fillRect(Math.cos(a) * 30 - 4, Math.sin(a) * 30 - 4, 8, 8); }
        drawCore(e, ctx);
      },
    },

    /* LEVIATHAN — colossal rock: heavy shells, sweeping stream, spawns rubble */
    leviathan: {
      nameKey: 'boss.leviathan.name', sprite: 'boss_leviathan',
      r: 68, baseHp: 2000, hpPerWave: 520, strafe: 0.35,
      attack(e, phase) {
        if (phase === 0) { e.fireT = 0.9; const b = aim(e); shot(e, b, 150, 0, 30, 10); shot(e, b - 0.22, 150, 0, 30, 7); shot(e, b + 0.22, 150, 0, 30, 7); }
        else if (phase === 1) { e.fireT = 0.08; const a = Math.PI / 2 + Math.sin(e.t * 1.5) * 0.8; shot(e, a, 205, 0, 20, 6); }
        else { e.fireT = 0.5; for (let i = 0; i < 16; i++) shot(e, i / 16 * Engine.TAU, 160, 0, 0, 6); }
      },
      tick(e, dt, phase) {
        if (phase < 1) return;
        e.summonT = (e.summonT || 3) - dt;
        if (e.summonT <= 0 && Game.enemyCount() < 9) { e.summonT = phase === 2 ? 2.4 : 3.4; Game.spawnEnemy('debris', e.x - 30, e.y + 30); Game.spawnEnemy('debris', e.x + 30, e.y + 30); }
      },
      draw(e, ctx, flash) {
        ctx.fillStyle = flash ? '#fff' : '#4a4740';
        ctx.beginPath(); for (let i = 0; i < 9; i++) { const a = i / 9 * Engine.TAU + 0.15; const r = 64 + (i % 3) * 8; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r * 0.8); } ctx.closePath(); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#2c2a25'; ctx.fillRect(-50, -24, 100, 18);
        ctx.fillStyle = flash ? '#fff' : '#6a655a'; ctx.beginPath(); ctx.arc(-34, 20, 11, 0, Engine.TAU); ctx.arc(32, 16, 8, 0, Engine.TAU); ctx.fill();
        drawCore(e, ctx);
      },
    },

    /* REAPER — fast phantom: dense aimed bursts + counter-rotating spirals */
    reaper: {
      nameKey: 'boss.reaper.name', sprite: 'boss_reaper',
      r: 56, baseHp: 1500, hpPerWave: 500, strafe: 1.05,
      attack(e, phase) {
        if (phase === 0) { e.fireT = 0.45; const b = aim(e); for (let i = -2; i <= 2; i++) shot(e, b + i * 0.12, 250); }
        else if (phase === 1) { e.fireT = 0.1; const s = e.t * 2.6; shot(e, s, 190); shot(e, s + Math.PI, 190); shot(e, -s, 190); shot(e, -s + Math.PI, 190); }
        else { e.fireT = 0.3; const b = aim(e); for (let i = -3; i <= 3; i++) shot(e, b + i * 0.1, 265); for (let k = 0; k < 3; k++) shot(e, e.t * 3 + k / 3 * Engine.TAU, 175); }
      },
      draw(e, ctx, flash) {
        ctx.fillStyle = flash ? '#fff' : '#3a2050';
        ctx.beginPath(); ctx.moveTo(0, -54); ctx.lineTo(46, 6); ctx.lineTo(20, 46); ctx.lineTo(-20, 46); ctx.lineTo(-46, 6); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = flash ? '#fff' : '#c46bff'; ctx.lineWidth = 4; ctx.lineCap = 'round';
        for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(i * 22, 40); ctx.quadraticCurveTo(i * 30, 56 + Math.sin(e.t * 4 + i) * 6, i * 24, 64); ctx.stroke(); }
        ctx.fillStyle = flash ? '#fff' : '#ff5bd0'; ctx.beginPath(); ctx.arc(-16, -10, 5, 0, Engine.TAU); ctx.arc(16, -10, 5, 0, Engine.TAU); ctx.fill();
        drawCore(e, ctx);
      },
    },

    /* DREADNOUGHT — armored battleship: heavy triple cannons, spread walls, launches interceptors */
    dreadnought: {
      nameKey: 'boss.dreadnought.name', sprite: 'boss_dreadnought',
      r: 66, baseHp: 2200, hpPerWave: 560, strafe: 0.4,
      attack(e, phase) {
        if (phase === 0) { e.fireT = 0.7; const b = aim(e); shot(e, b, 230, -40, 20, 7); shot(e, b, 230, 40, 20, 7); shot(e, b, 230, 0, 30, 8); }
        else if (phase === 1) { e.fireT = 0.4; const b = aim(e); for (let i = -3; i <= 3; i++) shot(e, b + i * 0.11, 240, 0, 20); }
        else { e.fireT = 0.3; const b = aim(e); for (let i = -3; i <= 3; i++) shot(e, b + i * 0.1, 250, 0, 20); for (let i = 0; i < 8; i++) shot(e, e.t * 2 + i / 8 * Engine.TAU, 155); }
      },
      tick(e, dt, phase) {
        if (phase < 1) return;
        e.summonT = (e.summonT || 3.5) - dt;
        if (e.summonT <= 0 && Game.enemyCount() < 8) { e.summonT = 4; Game.spawnEnemy('interceptor', e.x - 24, e.y + 24); Game.spawnEnemy('interceptor', e.x + 24, e.y + 24); Engine.audio.blip(190, 0.1, 'sawtooth', 0.06); }
      },
      draw(e, ctx, flash) {
        ctx.fillStyle = flash ? '#fff' : '#3a3350';
        ctx.beginPath(); ctx.moveTo(0, 58); ctx.lineTo(-62, 20); ctx.lineTo(-52, -30); ctx.lineTo(52, -30); ctx.lineTo(62, 20); ctx.closePath(); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#5a5378'; ctx.fillRect(-56, -22, 112, 16);
        ctx.fillStyle = flash ? '#fff' : '#1a1730'; for (let i = -2; i <= 2; i++) ctx.fillRect(i * 22 - 4, -8, 8, 22);
        ctx.fillStyle = flash ? '#fff' : '#9fd0ff'; ctx.fillRect(-60, 24, 10, 10); ctx.fillRect(50, 24, 10, 10);
        drawCore(e, ctx);
      },
    },

    /* ============ ULTRA-BOSSES (between chapters, 4 phases) ============ */

    /* THE RIFT WARLORD — after Chapter I */
    titan: {
      nameKey: 'boss.titan.name', sprite: 'boss_titan', ultra: true, phases: 4,
      r: 74, baseHp: 6000, hpPerWave: 300, strafe: 0.55,
      attack(e, phase) {
        const b = aim(e);
        if (phase === 0) { e.fireT = 0.6; for (let i = -2; i <= 2; i++) shot(e, b + i * 0.14, 240, 0, 30); }
        else if (phase === 1) { e.fireT = 0.12; const s = e.t * 1.8; for (let i = 0; i < 10; i++) shot(e, s + i / 10 * Engine.TAU, 180); }
        else if (phase === 2) { e.fireT = 0.09; const a = Math.PI / 2 + Math.sin(e.t * 1.7) * 0.9; shot(e, a, 220, -30, 20, 6); shot(e, a, 220, 30, 20, 6); }
        else { e.fireT = 0.3; for (let i = -3; i <= 3; i++) shot(e, b + i * 0.12, 260, 0, 30); for (let i = 0; i < 8; i++) shot(e, e.t * 2.4 + i / 8 * Engine.TAU, 175); }
      },
      tick(e, dt, phase) {
        if (phase < 2) return;
        e.summonT = (e.summonT || 4) - dt;
        if (e.summonT <= 0 && Game.enemyCount() < 7) { e.summonT = 4.5; Game.spawnEnemy('strafer', e.x - 60, 60); Game.spawnEnemy('strafer', e.x + 60, 60); }
      },
      draw(e, ctx, flash) {
        ctx.save(); ctx.rotate(e.t * 0.4);
        ctx.fillStyle = flash ? '#fff' : '#5a2a8a';
        for (let i = 0; i < 8; i++) { ctx.rotate(Engine.TAU / 8); ctx.fillRect(-9, -72, 18, 30); }
        ctx.restore();
        ctx.fillStyle = flash ? '#fff' : '#7a3ac0'; ctx.beginPath(); ctx.arc(0, 0, 50, 0, Engine.TAU); ctx.fill();
        ctx.strokeStyle = flash ? '#fff' : '#e0a0ff'; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0, 0, 60, e.t, e.t + 4.4); ctx.stroke();
        ctx.fillStyle = flash ? '#fff' : '#ffd0ff'; ctx.beginPath(); ctx.arc(0, 0, 26 + Math.sin(e.t * 5) * 3, 0, Engine.TAU); ctx.fill();
        drawCore(e, ctx);
      },
    },

    /* THE OVERMIND — after Chapter II (swarm ultra) */
    overmind: {
      nameKey: 'boss.overmind.name', sprite: 'boss_overmind', ultra: true, phases: 4,
      r: 76, baseHp: 8500, hpPerWave: 340, strafe: 0.7,
      attack(e, phase) {
        const b = aim(e);
        if (phase === 0) { e.fireT = 0.5; for (let i = -3; i <= 3; i++) shot(e, b + i * 0.13, 210, 0, 20); }
        else if (phase === 1) { e.fireT = 0.13; const s = e.t * 2.0; for (let i = 0; i < 12; i++) shot(e, s + i / 12 * Engine.TAU, 175); }
        else if (phase === 2) { e.fireT = 0.4; for (let i = -4; i <= 4; i++) shot(e, b + i * 0.11, 230, 0, 20); }
        else { e.fireT = 0.1; const s = e.t * 2.6; for (let k = 0; k < 4; k++) shot(e, s + k / 4 * Engine.TAU, 200); for (let i = -2; i <= 2; i++) shot(e, b + i * 0.16, 250, 0, 20); }
      },
      tick(e, dt, phase) {
        e.summonT = (e.summonT || 2.6) - dt;
        const cap = phase >= 2 ? 9 : 6;
        if (e.summonT <= 0 && Game.enemyCount() < cap) {
          e.summonT = phase >= 2 ? 2.2 : 3.2;
          const n = phase >= 2 ? 3 : 2;
          for (let i = 0; i < n; i++) Game.spawnEnemy(Math.random() < 0.5 ? 'kamikaze' : 'weaver', e.x + Engine.rand(-50, 50), e.y + 40);
          Engine.audio.blip(170, 0.12, 'sawtooth', 0.07);
        }
      },
      draw(e, ctx, flash) {
        ctx.fillStyle = flash ? '#fff' : '#1f6a4a';
        ctx.beginPath(); ctx.ellipse(0, 0, 72, 52, 0, 0, Engine.TAU); ctx.fill();
        ctx.strokeStyle = flash ? '#fff' : '#39d87a'; ctx.lineWidth = 7; ctx.lineCap = 'round';
        for (let i = -3; i <= 3; i++) { ctx.beginPath(); ctx.moveTo(i * 18, 34); ctx.quadraticCurveTo(i * 24, 60 + Math.sin(e.t * 3 + i) * 8, i * 20, 76 + Math.sin(e.t * 3 + i) * 10); ctx.stroke(); }
        ctx.fillStyle = flash ? '#fff' : '#9bff7d'; ctx.beginPath(); ctx.ellipse(0, -8, 40, 30, 0, 0, Engine.TAU); ctx.fill();
        ctx.fillStyle = flash ? '#fff' : '#0a3020'; for (let i = 0; i < 5; i++) { const a = e.t * 0.6 + i / 5 * Engine.TAU; ctx.beginPath(); ctx.arc(Math.cos(a) * 26, -8 + Math.sin(a) * 18, 5, 0, Engine.TAU); ctx.fill(); }
        drawCore(e, ctx);
      },
    },

    /* THE SINGULARITY — final ultra-boss (bullet hell) */
    singularity: {
      nameKey: 'boss.singularity.name', sprite: 'boss_singularity', ultra: true, phases: 4,
      r: 80, baseHp: 12000, hpPerWave: 380, strafe: 0.6,
      attack(e, phase) {
        const b = aim(e);
        if (phase === 0) { e.fireT = 0.1; const s = e.t * 2.4; for (let k = 0; k < 3; k++) shot(e, s + k / 3 * Engine.TAU, 195); }
        else if (phase === 1) { e.fireT = 0.34; for (let i = -4; i <= 4; i++) shot(e, b + i * 0.1, 255, 0, 30); for (let i = 0; i < 12; i++) shot(e, e.t * 1.6 + i / 12 * Engine.TAU, 165); }
        else if (phase === 2) { e.fireT = 0.09; const s = e.t * 3; for (let k = 0; k < 5; k++) shot(e, s + k / 5 * Engine.TAU, 210); }
        else { e.fireT = 0.07; const s = e.t * 3.4; for (let k = 0; k < 6; k++) shot(e, s + k / 6 * Engine.TAU, 215); const c = -e.t * 2.2; for (let k = 0; k < 4; k++) shot(e, c + k / 4 * Engine.TAU, 175); shot(e, b, 285, 0, 30, 7); }
      },
      tick(e, dt, phase) {
        if (phase < 1) return;
        e.summonT = (e.summonT || 5) - dt;
        if (e.summonT <= 0 && Game.enemyCount() < 8) { e.summonT = phase >= 3 ? 4 : 5.5; Game.spawnEnemy('interceptor', e.x - 40, 60); Game.spawnEnemy('interceptor', e.x + 40, 60); if (phase >= 3) Game.spawnEnemy('strafer', e.x, 50); }
      },
      draw(e, ctx, flash) {
        ctx.save(); ctx.rotate(e.t * 0.5);
        ctx.fillStyle = flash ? '#fff' : '#8a5a10';
        for (let i = 0; i < 10; i++) { ctx.rotate(Engine.TAU / 10); ctx.fillRect(-7, -78, 14, 30); }
        ctx.restore();
        ctx.save(); ctx.rotate(-e.t * 0.7);
        ctx.strokeStyle = flash ? '#fff' : '#ffcf60'; ctx.lineWidth = 5;
        for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(0, 0, 58 - i * 8, i * 2, i * 2 + 3); ctx.stroke(); }
        ctx.restore();
        ctx.fillStyle = flash ? '#fff' : '#c89020'; ctx.beginPath(); ctx.arc(0, 0, 46, 0, Engine.TAU); ctx.fill();
        const g = ctx.createRadialGradient(0, 0, 4, 0, 0, 34);
        g.addColorStop(0, '#fff'); g.addColorStop(0.5, flash ? '#fff' : '#ffe680'); g.addColorStop(1, 'rgba(0,0,0,0.6)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 30 + Math.sin(e.t * 7) * 3, 0, Engine.TAU); ctx.fill();
        drawCore(e, ctx);
      },
    },

    /* ── Unique gate bosses (parts 3–5) + relay node ── */

    privateer: {
      nameKey: 'boss.privateer.name', sprite: 'boss_privateer',
      r: 102, baseHp: 4800, hpPerWave: 840, strafe: 0, voxScale: 1.48,
      enter(e, dt) {
        if (!e._rush) {
          const fromL = Math.random() < 0.5;
          e._fromL = fromL;
          e.x = fromL ? -140 : Engine.W + 140;
          e.y = Engine.H * 0.18;
          e._rush = 1;
          e._rushT = 0;
          try { Engine.shake(6); Engine.audio.boss(); } catch (err) {}
        }
        e._rushT += dt;
        const dest = Engine.W / 2;
        if (e._rushT < 2.2) {
          e.x += (dest - e.x) * 0.035 + (e._fromL ? 220 : -220) * dt;
          e.y = Engine.H * 0.18 + Math.sin(e._rushT * 14) * 3;
        } else {
          e.x = Engine.lerp(e.x, dest, 0.08);
          if (Math.abs(e.x - dest) < 8 || e._rushT > 3.6) {
            e.x = dest; e.entered = true; e.strafeT0 = e.t;
            privateerEnsure(e);
            privateerSay(e, 'boss.privateer.guns', '#ffe08a');
          }
        }
      },
      motion(e) {
        const heel = e._windOn > 0 ? (e._windDir || 1) * 20
          : e._windWarn > 0 ? (e._windDir || 1) * 10 : 0;
        e._lurch = (e._lurch || 0) * 0.90;
        e.y = Engine.H * 0.18 + Math.sin(e.t * 1.35) * 3.2;
        e.x = Engine.W / 2
          + Math.sin((e.t - (e.strafeT0 || 0)) * 0.48) * 14
          + heel + (e._lurch || 0);
      },
      attack(e, phase) {
        if (privateerSealed(e)) { e.fireT = 0.35; return; }
        e.fireT = phase >= 2 ? 1.15 : 1.55;
        if (phase >= 1 || e._coreOpen) privateerProwShot(e, phase);
      },
      tick(e, dt, phase) {
        privateerEnsure(e);
        privateerTickGuns(e, dt, phase);
        privateerTickWind(e, dt, phase);
        if (e.entered && !e._allOpen && !privateerSealed(e) && e.t - (e.strafeT0 || 0) > 5.5) {
          e._allOpen = true;
          e.guns.forEach(g => {
            if (g.hp > 0) { g.open = true; g.hideT = 0; g.charge = 0; }
          });
          privateerSay(e, 'boss.privateer.ports', '#ffd24a');
          try { Engine.audio.power(); Engine.shake(5); } catch (err) {}
        }
        if (!e._coreOpen && privateerGunsExhausted(e)) privateerOpenCore(e);
        if (e._coreOpen) {
          e.statusKey = 'boss.privateer.st.core'; e.statusColor = '#ff9a4a';
        } else if (e._windOn > 0) {
          e.statusKey = 'boss.privateer.st.gale'; e.statusColor = '#ffe08a';
        } else if (e._windWarn > 0) {
          e.statusKey = 'boss.privateer.st.warn'; e.statusColor = '#ffe8a0';
        } else {
          e.statusKey = 'boss.privateer.st.guns'; e.statusColor = '#ffe8b0';
        }
      },
      hitRedirect(e, dmg, hx, hy) {
        privateerEnsure(e);
        if (e._coreOpen) return false;
        if (privateerSealed(e)) {
          Engine.burst(hx, hy, '#ffe8a0', 5, 2.4, 2);
          return true;
        }
        const g = privateerPickGun(e, hx, hy, 52);
        if (!g) {
          Engine.burst(hx, hy, '#c8b090', 3, 1.6, 2);
          return true;
        }
        privateerHurtGun(e, g, dmg, hx, hy);
        return true;
      },
      strikeExtras(e, b) {
        return privateerStrikeAt(e, b.dmg || 8, b.x, b.y, (b.r || 3) + 20);
      },
      splashExtras(e, x, y, R, dmg) {
        privateerSplash(e, x, y, R, dmg);
      },
      drawExtra(e, ctx) { privateerDraw(e, ctx); },
    },

    heliot: {
      nameKey: 'boss.heliot.name', sprite: 'boss_heliot',
      r: 72, baseHp: 5600, hpPerWave: 920, strafe: 0, voxScale: 1.32,
      enter(e, dt) {
        e.y = Engine.lerp(e.y, 122, 0.04);
        if (e.y > 116) {
          e.entered = true; e.strafeT0 = e.t;
          if (typeof Hazards !== 'undefined' && Hazards.setMagma) Hazards.setMagma(false);
        }
      },
      motion(e) { heliotMotion(e); },
      attack(e, phase) { heliotAttack(e, phase); },
      tick(e, dt, phase) { heliotTick(e, dt, phase); },
      hitRedirect(e, dmg, hx, hy) { return heliotHit(e, dmg, hx, hy); },
      drawExtra(e, ctx) { heliotDraw(e, ctx); },
    },

    silo: {
      nameKey: 'boss.silo.name', sprite: 'boss_silo',
      r: 74, baseHp: 6800, hpPerWave: 760, strafe: 0, stationary: true, parkY: 128, ultra: true, phases: 4, voxScale: 1.22,
      attack(e, phase) { siloAttack(e, phase); },
      tick(e, dt, phase) { siloTick(e, dt, phase); },
      hitRedirect(e, dmg, hx, hy) {
        if (siloStrikeAt(e, dmg, hx, hy, 22)) return true;
        if ((e._shutterT || 0) > 0) {            // blast shutter is up — hull sealed
          e._shutHit = 0.12;
          Engine.burst(hx, hy, '#ff8a5a', 4, 2.2, 2);
          return true;
        }
        return false;
      },
      strikeExtras(e, b) {
        return siloStrikeAt(e, b.dmg || 8, b.x, b.y, (b.r || 3) + 16);
      },
      splashExtras(e, x, y, R, dmg) {
        // Rockets only — bombs survive AoE too, or a single bomb clears the bay.
        const r2 = R * R;
        (e.missiles || []).forEach(m => {
          if (!m.dead && Engine.dist2(x, y, m.x, m.y) < r2) siloHurtMissile(e, m, dmg, x, y);
        });
      },
      drawExtra(e, ctx) { siloDraw(e, ctx); },
    },

    relayCore: {
      nameKey: 'boss.relayCore.name', sprite: 'boss_relay',
      r: 64, baseHp: 1600, hpPerWave: 360, strafe: 0, stationary: true, parkY: 128, voxScale: 1.2,
      attack(e, phase) {
        e.fireT = phase >= 2 ? 0.42 : 0.62;
        const b = aim(e);
        const ext = 0.55 + 0.45 * Math.abs(Math.sin(e.t * 2.2));
        for (const side of [-1, 1]) {
          shot({ x: e.x + side * e.r * ext, y: e.y + 8, r: 10 }, b + side * 0.08, 220, 0, 16, 5);
        }
        if (phase >= 1) {
          for (let i = -1; i <= 1; i++) shot(e, b + i * 0.14, 200, 0, 12);
        }
      },
      tick(e, dt, phase) {
        e.summonT = (e.summonT || 3.2) - dt;
        if (e.summonT <= 0 && Game.enemyCount() < 6) {
          e.summonT = phase >= 2 ? 2.4 : 3.4;
          Game.spawnEnemy(Math.random() < 0.5 ? 'kamikaze' : 'shooter', e.x + Engine.rand(-40, 40), e.y + 36);
        }
      },
      drawExtra(e, ctx) {
        const ext = 0.55 + 0.45 * Math.abs(Math.sin(e.t * 2.2));
        const tur = Vox.MODELS && Vox.MODELS.enemyTurret;
        if (!tur) return;
        for (const side of [-1, 1]) {
          Vox.draw(ctx, tur, e.x + side * e.r * ext, e.y + 6, {
            s: 2.1, yaw: side > 0 ? 0 : Math.PI, pitch: 0.9, t: e.t, thrust: 0,
          });
        }
      },
    },
  };

  function privateerSay(e, key, color) {
    try {
      if (typeof Game !== 'undefined' && Game.announce) Game.announce(T(key), color);
    } catch (err) {}
  }
  function privateerSealed(e) {
    return !!(e && (e._windOn > 0 || e._windWarn > 0));
  }
  function privateerEnsure(e) {
    if (e.guns) return;
    const diff = (typeof Profile !== 'undefined' && Profile.get().difficulty) || 'normal';
    const n = diff === 'brutal' ? 16 : diff === 'hard' ? 13 : diff === 'casual' ? 8 : 10;
    e._gunTotal = n;
    e._gunsLeft = n - 4;
    e._coreOpen = false;
    e._windOn = 0; e._windWarn = 0; e._lurch = 0;
    e._galeUsed = 0; e._galeId = 0;
    // Casemates sit on the bow gun-deck (toward the player after yaw π).
    const slots = [
      { ox: -84, oy: 20 }, { ox: -42, oy: 28 }, { ox: 42, oy: 28 }, { ox: 84, oy: 20 },
    ];
    e.guns = slots.map((s, i) => ({
      ox: s.ox, oy: s.oy,
      hp: 640, maxHp: 640,
      open: i < 2,
      hideT: 0, flash: 0, burst: 0, burstT: 0, respawn: 0, left: 1,
      charge: 0, cd: 0.35 + i * 0.38, recoil: 0, muzzle: 0,
      aim: Math.PI / 2,
    }));
  }
  function privateerGunsExhausted(e) {
    return e._gunsLeft <= 0 && (e.guns || []).every(g => g.hp <= 0);
  }
  function privateerOpenCore(e) {
    if (e._coreOpen) return;
    e._coreOpen = true;
    e._gunsLeft = 0;
    e.hp = Math.max(e.hp, e.maxHp * 0.10);
    if (e._galeId || privateerSealed(e)) privateerEndGale(e);
    Engine.burst(e.x, e.y + 8, '#ffe080', 28, 8, 6);
    Engine.burst(e.x, e.y + 8, '#ff4a30', 20, 6, 5);
    try { Engine.audio.boss(); Engine.shake(14); } catch (err) {}
    privateerSay(e, 'boss.privateer.core', '#ff9a4a');
  }
  function privateerGunOpen(e, g) {
    return !!(g && g.hp > 0 && g.open && g.hideT <= 0 && !privateerSealed(e));
  }
  function privateerPickGun(e, hx, hy, rad) {
    let best = null, bd = 1e9;
    const r2 = rad * rad;
    (e.guns || []).forEach(g => {
      if (!privateerGunOpen(e, g)) return;
      const d = Engine.dist2(hx, hy, e.x + g.ox, e.y + g.oy);
      if (d < bd && d <= r2) { bd = d; best = g; }
    });
    return best;
  }
  function privateerStrikeAt(e, dmg, hx, hy, rad) {
    privateerEnsure(e);
    if (e._coreOpen) return false;
    let near = null, bd = 1e9;
    const r2 = rad * rad;
    (e.guns || []).forEach(g => {
      if (g.hp <= 0) return;
      const d = Engine.dist2(hx, hy, e.x + g.ox, e.y + g.oy);
      if (d < bd && d <= r2) { bd = d; near = g; }
    });
    if (!near) return false;
    if (privateerSealed(e) || !near.open || near.hideT > 0) {
      Engine.burst(hx, hy, privateerSealed(e) ? '#ffe8a0' : '#c8b090', 4, 1.8, 2);
      return true;
    }
    privateerHurtGun(e, near, dmg, hx, hy);
    return true;
  }
  function privateerSplash(e, x, y, R, dmg) {
    privateerEnsure(e);
    if (e._coreOpen || privateerSealed(e)) return;
    const r2 = R * R;
    (e.guns || []).forEach(g => {
      if (!privateerGunOpen(e, g)) return;
      if (Engine.dist2(x, y, e.x + g.ox, e.y + g.oy) < r2) {
        privateerHurtGun(e, g, dmg, e.x + g.ox, e.y + g.oy);
      }
    });
  }
  function privateerHurtGun(e, g, dmg, hx, hy) {
    g.hp -= dmg;
    g.flash = 0.12;
    g.burst = (g.burst || 0) + dmg;
    g.burstT = 1.2;
    if (g.burst > g.maxHp * 0.35 && g.hp > 0) {
      g.hideT = 2.2; g.burst = 0; g.charge = 0;
    }
    if (g.hp <= 0) {
      g.hp = 0; g.open = false; g.respawn = 5; g.charge = 0; g.hideT = 0;
      e.hp -= e.maxHp * 0.90 / Math.max(1, e._gunTotal);
      e._lurch = g.ox > 0 ? -24 : 24;
      Engine.burst(e.x + g.ox, e.y + g.oy, '#ffd24a', 22, 6, 5);
      Engine.burst(e.x + g.ox, e.y + g.oy, '#ff6a30', 14, 4, 4);
      try { Engine.audio.explode(); Engine.shake(8); } catch (err) {}
      if (privateerGunsExhausted(e)) privateerOpenCore(e);
    } else {
      Engine.burst(hx, hy, '#ff9a4a', 5, 2.2, 2);
    }
    e.flash = 0.06;
  }
  function privateerFireGun(e, g, phase) {
    const rec = (g.recoil || 0) * 8;
    const ax = Math.cos(g.aim || Math.PI / 2), ay = Math.sin(g.aim || Math.PI / 2);
    const gx = e.x + g.ox - ax * rec + ax * 16;
    const gy = e.y + g.oy - ay * rec + ay * 16;
    const a = aim({ x: gx, y: gy });
    const spd = 195 + phase * 14;
    shot({ x: gx, y: gy, r: 8 }, a, spd, 0, 0, 6);
    if (phase >= 1) {
      shot({ x: gx, y: gy, r: 8 }, a - 0.17, spd * 0.9, 0, 0, 4);
      shot({ x: gx, y: gy, r: 8 }, a + 0.17, spd * 0.9, 0, 0, 4);
    }
    g.muzzle = 0.16; g.recoil = 1;
    Engine.burst(gx, gy + 8, '#ffd080', 7, 2.8, 2);
    try { Engine.audio.shoot(); } catch (err) {}
  }
  function privateerProwShot(e, phase) {
    const sx = e.x, sy = e.y + 40;
    const a = aim({ x: sx, y: sy });
    shot({ x: sx, y: sy, r: 10 }, a, 188, 0, 0, 8);
    if (phase >= 2 || e._coreOpen) {
      shot({ x: sx, y: sy, r: 10 }, a - 0.14, 172, 0, 0, 6);
      shot({ x: sx, y: sy, r: 10 }, a + 0.14, 172, 0, 0, 6);
    }
    e._prowFlash = 0.2;
    Engine.burst(sx, sy, '#ffd080', 10, 3.2, 3);
  }
  function privateerTickGuns(e, dt, phase) {
    const p = Game.player;
    (e.guns || []).forEach(g => {
      g.hideT = Math.max(0, (g.hideT || 0) - dt);
      g.burstT = Math.max(0, (g.burstT || 0) - dt);
      g.flash = Math.max(0, (g.flash || 0) - dt);
      g.muzzle = Math.max(0, (g.muzzle || 0) - dt);
      g.recoil = Math.max(0, (g.recoil || 0) - dt * 3.2);
      if (p) g.aim = Math.atan2(p.y - (e.y + g.oy), p.x - (e.x + g.ox));
      if (g.hp <= 0) {
        g.charge = 0;
        if (g.left > 0 && !e._coreOpen) {
          g.respawn = (g.respawn || 0) - dt;
          if (g.respawn <= 0 && e._gunsLeft > 0) {
            g.hp = g.maxHp; g.open = true; g.hideT = 0.12;
            g.burst = 0; g.charge = 0; g.cd = 0.45;
            e._gunsLeft--;
            Engine.burst(e.x + g.ox, e.y + g.oy, '#ffe8a0', 10, 3, 3);
            try { Engine.audio.blip(280, 0.08, 'square', 0.08); } catch (err) {}
          }
        }
        return;
      }
      if (!privateerGunOpen(e, g) || !e.entered) { g.charge = 0; return; }
      g.cd = (g.cd || 0) - dt;
      if (g.cd <= 0 && g.charge <= 0) g.charge = 0.40;
      if (g.charge > 0) {
        g.charge -= dt;
        if (g.charge <= 0) {
          privateerFireGun(e, g, phase);
          g.cd = (phase >= 2 ? 0.95 : phase >= 1 ? 1.2 : 1.4) + Math.random() * 0.2;
        }
      }
    });
  }
  // Thresholds, not dwell bands: gale is a timed event and must not wait for HP to leave.
  function privateerGaleBandId(e) {
    if (e._coreOpen) return 0;
    const r = e.hp / e.maxHp;
    if (r <= 0.25) return 2;
    if (r <= 0.60) return 1;
    return 0;
  }
  function privateerStartGale(e, band) {
    e._galeId = band;
    e._windDir = (Game.player && Game.player.x < Engine.W / 2) ? 1 : -1;
    e._windWarn = 1.4;
    e._windOn = 0;
    e._gustT = 0.45;
    (e.guns || []).forEach(g => { g.charge = 0; });
    privateerSay(e, 'boss.privateer.gale', '#ffe08a');
    try { Engine.audio.blip(140, 0.12, 'sawtooth', 0.1); Engine.shake(6); } catch (err) {}
  }
  function privateerEndGale(e) {
    e._galeUsed = Math.max(e._galeUsed || 0, e._galeId || 0);
    e._galeId = 0;
    e._windWarn = 0;
    e._windOn = 0;
    (e.guns || []).forEach(g => {
      if (g.hp > 0) { g.hideT = Math.min(g.hideT || 0, 0.18); g.charge = 0; }
    });
    if (typeof Hazards !== 'undefined' && Hazards.releaseWind) Hazards.releaseWind();
    try { Engine.audio.blip(220, 0.08, 'square', 0.07); } catch (err) {}
  }
  function privateerTickGusts(e, dt, phase) {
    e._gustT = (e._gustT || 0.5) - dt;
    if (e._gustT > 0) return;
    e._gustT = phase >= 2 ? 0.58 : 0.78;
    const dir = e._windDir || 1;
    const fromX = dir > 0 ? -16 : Engine.W + 16;
    const ang = dir > 0 ? 0 : Math.PI;
    const lanes = 3 + (phase >= 2 ? 1 : 0);
    const stagger = ((e._gustN || 0) % 2) * 26;
    e._gustN = (e._gustN || 0) + 1;
    const span = Engine.H - 230;
    for (let i = 0; i < lanes; i++) {
      const y = 155 + stagger + (i + 0.5) * (span / lanes);
      shot({ x: fromX, y, r: 7 }, ang, 168 + phase * 14, 0, 0, 6);
    }
    try { Engine.audio.blip(90, 0.05, 'sawtooth', 0.045); } catch (err) {}
  }
  function privateerTickWind(e, dt, phase) {
    if (!e.entered) return;
    if (e._coreOpen) {
      if (e._galeId || privateerSealed(e)) privateerEndGale(e);
      return;
    }
    const band = privateerGaleBandId(e);
    if (band > (e._galeUsed || 0) && !e._galeId) privateerStartGale(e, band);
    if (e._windWarn > 0) {
      e._windWarn -= dt;
      if (e._windWarn <= 0) {
        e._windWarn = 0;
        const hold = (e._galeId || 1) >= 2 ? 7.0 : 6.2;
        e._windOn = hold;
        if (typeof Hazards !== 'undefined' && Hazards.forceWind) {
          Hazards.forceWind(e._windDir || 1, hold);
        }
        try { Engine.shake(10); Engine.audio.sweep(180, 60, 0.4, 'sawtooth', 0.1); } catch (err) {}
      }
      return;
    }
    if (e._windOn > 0) {
      e._windOn -= dt;
      if (e._windOn <= 0) { privateerEndGale(e); return; }
      privateerTickGusts(e, dt, phase);
    }
  }
  function privateerDraw(e, ctx) {
    const TAU = Engine.TAU;
    const galeOn = e._windOn > 0;
    const galeWarn = e._windWarn > 0;
    (e.guns || []).forEach(g => {
      const rec = (g.recoil || 0) * 8;
      const ax = Math.cos(g.aim || Math.PI / 2), ay = Math.sin(g.aim || Math.PI / 2);
      const gx = e.x + g.ox - ax * rec, gy = e.y + g.oy - ay * rec;
      const alive = g.hp > 0;
      const open = privateerGunOpen(e, g);
      const charging = open && g.charge > 0;
      ctx.save();
      if (!alive) {
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = '#1a1210';
        ctx.beginPath(); ctx.ellipse(gx, gy, 13, 8, 0, 0, TAU); ctx.fill();
        ctx.strokeStyle = 'rgba(80,40,20,0.7)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.ellipse(gx, gy, 15, 9, 0, 0, TAU); ctx.stroke();
      } else if (!open) {
        const slam = galeWarn ? 0.45 + 0.55 * Math.abs(Math.sin(e.t * 14)) : 0.22;
        ctx.fillStyle = '#2a1c14';
        ctx.beginPath(); ctx.ellipse(gx, gy, 15, 9, 0, 0, TAU); ctx.fill();
        ctx.fillStyle = `rgba(90,64,36,${0.75 + slam * 0.2})`;
        ctx.fillRect(gx - 13, gy - 6, 26, 12);
        ctx.fillStyle = '#1a1008';
        ctx.fillRect(gx - 10, gy - 2, 20, 5);
        ctx.strokeStyle = `rgba(220,170,80,${0.35 + slam * 0.5})`;
        ctx.lineWidth = galeWarn ? 2 : 1.4;
        ctx.strokeRect(gx - 13, gy - 6, 26, 12);
      } else if (Vox.MODELS) {
        const mdl = Vox.MODELS.sailCannon || Vox.MODELS.enemyTurretHeavy || Vox.MODELS.enemyTurret;
        if (mdl) {
          Vox.groundShadow(ctx, gx, gy + 4, 16, { a: 0.4 });
          Vox.draw(ctx, mdl, gx, gy, {
            s: charging ? 5.7 : 5.1,
            yaw: (g.aim || Math.PI / 2) + Math.PI / 2,
            pitch: 0.85, t: e.t,
            thrust: 0.35 + (charging ? 0.5 : 0),
            flameColor: charging ? '#ffe080' : '#ff9a40',
          });
        }
        ctx.globalCompositeOperation = 'lighter';
        const pulse = 0.45 + 0.55 * Math.abs(Math.sin(e.t * 6 + g.ox));
        const ch = charging ? 1 - g.charge / 0.40 : 0;
        ctx.strokeStyle = g.flash > 0 ? `rgba(255,255,240,${0.9})`
          : charging ? `rgba(255,210,80,${0.55 + ch * 0.45})`
          : `rgba(255,200,90,${0.35 + pulse * 0.4})`;
        ctx.lineWidth = charging ? 3 : 2;
        ctx.setLineDash(charging ? [] : [5, 4]);
        ctx.beginPath(); ctx.arc(gx, gy, 20 + (charging ? ch * 5 : pulse * 2), 0, TAU); ctx.stroke();
        ctx.setLineDash([]);
        if (charging) {
          const rg = ctx.createRadialGradient(gx, gy, 2, gx, gy, 22);
          rg.addColorStop(0, `rgba(255,230,140,${0.35 + ch * 0.4})`);
          rg.addColorStop(1, 'rgba(255,160,40,0)');
          ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(gx, gy, 22, 0, TAU); ctx.fill();
        }
        if (g.muzzle > 0) {
          const u = g.muzzle / 0.16;
          ctx.fillStyle = `rgba(255,230,160,${0.7 * u})`;
          ctx.beginPath(); ctx.ellipse(gx + ax * 16, gy + ay * 16, 10 * u, 6 * u, g.aim || 0, 0, TAU); ctx.fill();
        }
        ctx.globalCompositeOperation = 'source-over';
        const bw = 22, bh = 3, pct = Engine.clamp(g.hp / g.maxHp, 0, 1);
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(gx - bw / 2, gy - 26, bw, bh);
        ctx.fillStyle = pct < 0.35 ? '#ff6a4a' : '#ffe08a';
        ctx.fillRect(gx - bw / 2, gy - 26, bw * pct, bh);
      }
      ctx.restore();
    });
    if (e._prowFlash > 0) {
      e._prowFlash -= 1 / 60;
      const u = Math.max(0, e._prowFlash / 0.2);
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      const rg = ctx.createRadialGradient(e.x, e.y + 36, 2, e.x, e.y + 36, 28);
      rg.addColorStop(0, `rgba(255,230,160,${0.7 * u})`);
      rg.addColorStop(1, 'rgba(255,140,40,0)');
      ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(e.x, e.y + 36, 28, 0, TAU); ctx.fill();
      ctx.restore();
    }
    if (e._coreOpen) {
      const p = 0.55 + 0.45 * Math.sin(e.t * 9);
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      const rg = ctx.createRadialGradient(e.x, e.y + 6, 2, e.x, e.y + 6, 38);
      rg.addColorStop(0, `rgba(255,240,180,${0.75 * p})`);
      rg.addColorStop(0.4, `rgba(255,90,40,${0.5 * p})`);
      rg.addColorStop(1, 'rgba(255,40,20,0)');
      ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(e.x, e.y + 6, 38, 0, TAU); ctx.fill();
      ctx.strokeStyle = `rgba(255,200,80,${0.55 + p * 0.4})`;
      ctx.lineWidth = 2.5; ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.arc(e.x, e.y + 6, 26 + p * 4, 0, TAU); ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle = `rgba(255,140,60,${0.35 + p * 0.25})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.rect(e.x - 16, e.y - 4, 32, 18); ctx.stroke();
      ctx.restore();
    }
    if (galeWarn || galeOn) {
      const dir = e._windDir || 1;
      const flash = 0.4 + 0.5 * Math.abs(Math.sin(e.t * 11));
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      if (!galeOn) {
        ctx.strokeStyle = `rgba(255,210,110,${0.35 + flash * 0.4})`;
        ctx.lineWidth = 2; ctx.setLineDash([7, 8]);
        for (const x of [36, Engine.W - 36]) {
          ctx.beginPath(); ctx.moveTo(x, 90); ctx.lineTo(x, Engine.H - 40); ctx.stroke();
        }
        ctx.setLineDash([]);
        for (let y = 100 + (e.t * 90 % 32); y < Engine.H - 30; y += 32) {
          ctx.fillStyle = `rgba(255,210,100,${0.35 + flash * 0.45})`;
          ctx.beginPath();
          ctx.moveTo(Engine.W / 2 + dir * 22, y);
          ctx.lineTo(Engine.W / 2 + dir * 8, y - 8);
          ctx.lineTo(Engine.W / 2 + dir * 8, y + 8);
          ctx.closePath(); ctx.fill();
        }
        const sailW = ctx.createRadialGradient(e.x, e.y - 8, 4, e.x, e.y - 8, e.r * 0.85);
        sailW.addColorStop(0, `rgba(255,230,160,${0.2 + flash * 0.2})`);
        sailW.addColorStop(1, 'rgba(255,180,60,0)');
        ctx.fillStyle = sailW; ctx.beginPath(); ctx.arc(e.x, e.y - 4, e.r * 0.85, 0, TAU); ctx.fill();
      } else {
        for (let i = 0; i < 18; i++) {
          const y = ((e.t * 300 + i * 47) % (Engine.H + 40)) - 10;
          const x0 = ((i * 41 + e.t * 170 * dir) % (Engine.W + 90)) - 45;
          ctx.strokeStyle = `rgba(255,220,140,${0.16 + (i % 3) * 0.09})`;
          ctx.lineWidth = 2 + (i % 3);
          ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + dir * (56 + (i % 4) * 18), y + 7); ctx.stroke();
        }
        const sail = ctx.createRadialGradient(e.x, e.y - 10, 6, e.x, e.y - 10, e.r * 1.05);
        sail.addColorStop(0, 'rgba(255,236,170,0.55)');
        sail.addColorStop(0.45, 'rgba(255,190,70,0.22)');
        sail.addColorStop(1, 'rgba(255,180,60,0)');
        ctx.fillStyle = sail; ctx.beginPath(); ctx.arc(e.x, e.y - 6, e.r * 1.05, 0, TAU); ctx.fill();
        const edge = dir > 0 ? 0 : Engine.W;
        const eg = ctx.createLinearGradient(edge, 0, edge + dir * 70, 0);
        eg.addColorStop(0, 'rgba(255,210,120,0.16)');
        eg.addColorStop(1, 'rgba(255,180,60,0)');
        ctx.fillStyle = eg;
        ctx.fillRect(dir > 0 ? 0 : Engine.W - 70, 80, 70, Engine.H - 100);
      }
      ctx.restore();
    }
  }

  function bossSay(key, color) {
    try { if (typeof Game !== 'undefined' && Game.announce) Game.announce(T(key), color); } catch (err) {}
  }
  function lerpAng(a, b, k) {
    let d = b - a;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    return a + d * k;
  }

  function nebulaBand(e) {
    const r = e.hp / e.maxHp;
    return r <= 0.33 ? 2 : r <= 0.66 ? 1 : 0;
  }
  function nebulaWarnDur() { return 1.25; }
  function nebulaShellDur(band) { return band >= 2 ? 8.8 : 5.8; }
  function nebulaOpenDur(band) { return band >= 2 ? 6.4 : 7.0; }
  function nebulaSpark(e, n) {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Engine.TAU;
      Engine.burst(
        e.x + Math.cos(a) * e.r * 1.05,
        e.y + Math.sin(a) * e.r * 0.72,
        i % 2 ? '#ff6a8a' : '#ffd080', 2, 2.1, 2
      );
    }
  }
  function nebulaBeginWarn(e) {
    const eclipse = nebulaBand(e) >= 2;
    e._cycle = 'warn';
    e._cycleT = nebulaWarnDur();
    e._mode = eclipse ? 'eclipse' : 'veil';
    bossSay(eclipse ? 'boss.nebula.eclipse' : 'boss.nebula.veil', eclipse ? '#ff6a8a' : '#ff8aa8');
    nebulaSpark(e, 10);
    try { Engine.audio.boss(); Engine.shake(4); } catch (err) {}
  }
  function nebulaBeginShell(e, morph) {
    const eclipse = nebulaBand(e) >= 2;
    e._cycle = 'shell';
    e._cycleT = nebulaShellDur(nebulaBand(e));
    e._mode = eclipse ? 'eclipse' : 'veil';
    e._iris = 1;
    if (morph) {
      nebulaSpark(e, 6);
      try { Engine.audio.sweep(160, 80, 0.2, 'sine', 0.06); } catch (err) {}
    } else {
      nebulaSpark(e, 12);
      try { Engine.shake(6); Engine.audio.sweep(200, 70, 0.22, 'sawtooth', 0.08); } catch (err) {}
    }
  }
  function nebulaBeginOpen(e) {
    const eclipse = nebulaBand(e) >= 2;
    e._cycle = 'open';
    e._cycleT = nebulaOpenDur(nebulaBand(e));
    e._mode = eclipse ? 'eclipse' : 'veil';
  }
  function nebulaStatus(e) {
    const eclipse = nebulaBand(e) >= 2;
    if (nebulaBand(e) === 0 || e._cycle === 'watch') {
      e.statusKey = 'boss.nebula.st.watch';
      e.statusColor = '#ffc0d0';
      e.statusTimer = 0;
    } else if (e._cycle === 'warn') {
      e.statusKey = eclipse ? 'boss.nebula.st.eWarn' : 'boss.nebula.st.warn';
      e.statusColor = '#ffe0a0';
      e.statusTimer = e._cycleT;
    } else if (e._cycle === 'shell') {
      e.statusKey = eclipse ? 'boss.nebula.st.eclipse' : 'boss.nebula.st.veil';
      e.statusColor = eclipse ? '#ff6a8a' : '#ff8aa8';
      e.statusTimer = e._cycleT;
    } else {
      e.statusKey = eclipse ? 'boss.nebula.st.eOpen' : 'boss.nebula.st.open';
      e.statusColor = eclipse ? '#ffc0d0' : '#ffe8c0';
      e.statusTimer = e._cycleT;
    }
  }
  function nebulaEase(cur, want, dt, tau) {
    return cur + (want - cur) * (1 - Math.exp(-dt / tau));
  }
  function nebulaGap(e) {
    const blend = e._eclipseBlend || 0;
    const gapC = Engine.lerp(e._veilGapC || Engine.W / 2, Engine.W / 2, blend);
    const gapW = Engine.lerp(e._veilGapW || 118, Engine.W - 116, blend);
    return { gapC, gapW };
  }
  function nebulaTick(e, dt) {
    const band = nebulaBand(e);
    if (!e.entered || band === 0) {
      e._cycle = 'watch';
      e._cycleT = 0;
      e._band = 0;
      e._shellVis = nebulaEase(e._shellVis || 0, 0, dt, 0.4);
      e._wallVis = nebulaEase(e._wallVis || 0, 0, dt, 0.45);
      e._eclipseBlend = nebulaEase(e._eclipseBlend || 0, 0, dt, 0.45);
      e._iris = e._shellVis;
      nebulaStatus(e);
      return;
    }
    if (e._band !== band) {
      e._band = band;
      if (e._cycle === 'shell') {
        // Stay sealed — eclipse must not drop the hull for a telegraph gap.
        if (band >= 2) bossSay('boss.nebula.eclipse', '#ff6a8a');
        nebulaBeginShell(e, true);
      } else if (e._cycle === 'warn') {
        e._cycleT = Math.max(e._cycleT, 0.95);
        e._mode = band >= 2 ? 'eclipse' : 'veil';
        if (band >= 2) bossSay('boss.nebula.eclipse', '#ff6a8a');
      } else {
        nebulaBeginWarn(e);
      }
    } else {
      e._cycleT = (e._cycleT || 0) - dt;
      if (e._cycleT <= 0) {
        if (e._cycle === 'warn') nebulaBeginShell(e, false);
        else if (e._cycle === 'shell') nebulaBeginOpen(e);
        else nebulaBeginWarn(e);
      }
    }
    if (e._shellFlash > 0) e._shellFlash -= dt;

    const sealing = e._cycle === 'warn' || e._cycle === 'shell';
    e._shellVis = nebulaEase(e._shellVis || 0, sealing ? 1 : 0, dt, sealing ? 0.38 : 0.5);
    e._wallVis = nebulaEase(e._wallVis || 0, (band >= 2 || sealing) ? 1 : 0, dt, 0.42);
    e._eclipseBlend = nebulaEase(e._eclipseBlend || 0, band >= 2 ? 1 : 0, dt, 0.5);
    if (e._cycle === 'warn') e._iris = Engine.clamp(1 - e._cycleT / nebulaWarnDur(), 0, 1);
    else if (e._cycle === 'shell') e._iris = 1;
    else e._iris = e._shellVis;

    e._veilPh = (e._veilPh || 0) + dt * 0.5;
    e._veilGapC = Engine.W / 2 + Math.sin(e._veilPh) * (Engine.W * 0.2);
    e._veilGapW = 118;

    const p = Game.player;
    if (p && (e._wallVis || 0) > 0.5) {
      const g = nebulaGap(e);
      if (p.x < g.gapC - g.gapW * 0.5 || p.x > g.gapC + g.gapW * 0.5) {
        e._veilDmg = (e._veilDmg || 0) - dt;
        if (e._veilDmg <= 0) { e._veilDmg = 0.42; Game.damagePlayer(); }
      }
    }
    nebulaStatus(e);
  }
  function nebulaHex(ctx, cx, cy, radius, t, alpha, hit) {
    const TAU = Engine.TAU;
    const steps = 14;
    ctx.strokeStyle = `rgba(255,190,150,${alpha})`;
    ctx.lineWidth = 1.1;
    ctx.lineCap = 'round';
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * TAU + t * 0.22;
      const wob = 1 + 0.02 * Math.sin(t * 5 + i * 0.8);
      const x = cx + Math.cos(a) * radius * wob;
      const y = cy + Math.sin(a) * radius * wob;
      const s = 3.4 + (i % 3) * 0.55 + hit * 0.8;
      ctx.beginPath();
      for (let k = 0; k < 6; k++) {
        const ha = a + (k / 6) * TAU + t * 0.35;
        const px = x + Math.cos(ha) * s;
        const py = y + Math.sin(ha) * s;
        if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
    }
    ctx.fillStyle = `rgba(255,230,190,${alpha * 1.15})`;
    for (let i = 0; i < steps; i += 2) {
      const a = (i / steps) * TAU + t * 0.12;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius, 1.3 + hit * 1.1, 0, TAU);
      ctx.fill();
    }
  }
  function nebulaDrawIris(ctx, e, vis, hit) {
    const TAU = Engine.TAU;
    const t = e.t;
    const cx = e.x, cy = e.y + 6;
    const close = e._iris == null ? vis : e._iris;
    const r = e.r * (1.14 + 0.035 * Math.sin(t * 3.1) + hit * 0.07);
    const a = vis;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    const wash = ctx.createRadialGradient(cx, cy, r * 0.18, cx, cy, r * 1.38);
    wash.addColorStop(0, `rgba(255,90,120,${(0.18 + hit * 0.22) * a})`);
    wash.addColorStop(0.5, `rgba(180,20,55,${(0.14 + hit * 0.12) * a})`);
    wash.addColorStop(1, 'rgba(80,0,20,0)');
    ctx.fillStyle = wash;
    ctx.beginPath(); ctx.arc(cx, cy, r * 1.38, 0, TAU); ctx.fill();

    const blades = 8;
    const span = (TAU / blades) * (0.16 + 0.82 * close);
    ctx.lineCap = 'round';
    for (let i = 0; i < blades; i++) {
      const a0 = i * TAU / blades + t * 0.16 + close * 0.06;
      ctx.strokeStyle = `rgba(255,55,95,${(0.32 + 0.42 * close + hit * 0.35) * a})`;
      ctx.lineWidth = 7.5 + hit * 4;
      ctx.beginPath(); ctx.arc(cx, cy, r, a0, a0 + span); ctx.stroke();
      ctx.strokeStyle = `rgba(255,220,165,${(0.22 + 0.5 * close + hit * 0.4) * a})`;
      ctx.lineWidth = 2.1 + hit * 1.6;
      ctx.beginPath(); ctx.arc(cx, cy, r * 0.97, a0, a0 + span); ctx.stroke();
    }

    if (close > 0.42) {
      nebulaHex(ctx, cx, cy, r * 0.99, t, ((close - 0.42) / 0.58) * a * (0.38 + hit * 0.4), hit);
    }

    if (close < 0.98) {
      for (let k = 0; k < 2; k++) {
        const ph = (close * 1.15 + k * 0.48) % 1;
        ctx.strokeStyle = `rgba(255,190,130,${(1 - ph) * 0.5 * a})`;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(cx, cy, r * (0.68 + ph * 0.72), 0, TAU); ctx.stroke();
      }
    }

    const slit = 20 * (1.2 - close * 0.55);
    ctx.strokeStyle = `rgba(255,232,190,${(0.45 + 0.4 * Math.sin(t * 6)) * a})`;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(cx, cy - 2, slit * 0.32, slit * 0.58, 0, 0, TAU); ctx.stroke();
    ctx.restore();
  }
  function nebulaDrawCurtain(ctx, e, side, innerX, vis, flashing) {
    const W = Engine.W, H = Engine.H, t = e.t;
    const edge = side < 0 ? 0 : W;
    const inward = side < 0 ? 1 : -1;
    const fill = Math.abs(innerX - edge);
    if (fill < 3 || vis < 0.02) return;
    const flash = flashing ? 0.55 + 0.45 * Math.abs(Math.sin(t * 11)) : 1;
    const a = vis * flash;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.beginPath();
    ctx.moveTo(edge, 58);
    ctx.lineTo(edge, H);
    for (let y = H; y >= 58; y -= 7) {
      const wave = Math.sin(y * 0.04 + t * 3.5) * 8 + Math.sin(y * 0.1 + t * 2.1) * 4;
      ctx.lineTo(edge + inward * (fill + wave * vis), y);
    }
    ctx.closePath();
    const g = ctx.createLinearGradient(edge, 0, edge + inward * (fill + 12), 0);
    g.addColorStop(0, `rgba(70,4,16,${0.58 * a})`);
    g.addColorStop(0.38, `rgba(190,18,48,${0.44 * a})`);
    g.addColorStop(0.8, `rgba(255,70,110,${0.4 * a})`);
    g.addColorStop(1, 'rgba(255,190,130,0)');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = `rgba(255,214,160,${0.48 * a})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let y = 58; y <= H; y += 7) {
      const wave = Math.sin(y * 0.04 + t * 3.5) * 8 + Math.sin(y * 0.1 + t * 2.1) * 4;
      const x = edge + inward * (fill + wave * vis);
      if (y === 58) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
  }
  function nebulaDraw(e, ctx) {
    const TAU = Engine.TAU;
    const vis = e._shellVis || 0;
    const wall = e._wallVis || 0;
    const warn = e._cycle === 'warn';
    const shell = e._cycle === 'shell';
    const hit = e._shellFlash > 0 ? Engine.clamp(e._shellFlash / 0.18, 0, 1) : 0;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const pulse = 0.5 + 0.5 * Math.sin(e.t * 6);
    const eyeA = (shell ? 0.16 : 0.34) + pulse * (shell ? 0.12 : 0.34);
    const rg = ctx.createRadialGradient(e.x, e.y, 4, e.x, e.y, 28);
    rg.addColorStop(0, `rgba(255,200,180,${eyeA})`);
    rg.addColorStop(1, 'rgba(200,40,70,0)');
    ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(e.x, e.y, 28, 0, TAU); ctx.fill();
    ctx.restore();

    if (vis > 0.02) nebulaDrawIris(ctx, e, vis, hit);

    if (wall > 0.02) {
      const g = nebulaGap(e);
      nebulaDrawCurtain(ctx, e, -1, g.gapC - g.gapW * 0.5, wall, warn);
      nebulaDrawCurtain(ctx, e, 1, g.gapC + g.gapW * 0.5, wall, warn);
    }
  }

  function hiveEnsure(e) {
    if (e.sacs) return;
    e.sacs = [
      { ox: -42, oy: 10 }, { ox: 42, oy: 10 },
      { ox: -24, oy: 26 }, { ox: 24, oy: 26 },
    ].map(s => ({ ox: s.ox, oy: s.oy, hp: 90, maxHp: 90, open: false, flash: 0 }));
  }
  function hiveHurtSac(e, s, dmg, hx, hy) {
    s.hp -= dmg; s.flash = 0.12;
    e._lastHurt = 0;
    // Tiny hull bleed — never skip a HP band from sac hits in one volley.
    const floor = e._mode === 'brood' ? e.maxHp * 0.331 : 0;
    e.hp = Math.max(floor, e.hp - e.maxHp * 0.006);
    Engine.burst(hx, hy, '#9bff7d', 6, 2.4, 2);
    if (s.hp <= 0) {
      s.hp = 0; s.open = false;
      Engine.burst(e.x + s.ox, e.y + s.oy, '#c8ff80', 18, 5, 4);
      try { Engine.audio.explode(); } catch (err) {}
    }
  }
  function hiveTick(e, dt) {
    hiveEnsure(e);
    e._lastHurt = (e._lastHurt || 0) + dt;
    // Slow hull regen while not under fire, capped at the current HP band.
    if (e._lastHurt > 0.85 && e.entered) {
      const rNow = e.hp / e.maxHp;
      const cap = rNow > 0.66 ? 1 : rNow > 0.33 ? 0.66 : 0.33;
      const capHp = e.maxHp * cap;
      if (e.hp < capHp - 1) e.hp = Math.min(capHp, e.hp + e.maxHp * 0.007 * dt);
    }
    const r = e.hp / e.maxHp;
    const brood = r <= 0.66 && r > 0.33;
    const scream = r <= 0.33;
    if (brood && e._mode !== 'brood') {
      e._mode = 'brood';
      e._broodLock = 0.45;
      e.sacs.forEach(s => { if (s.hp > 0) s.open = true; });
      bossSay('boss.hive.brood', '#9bff7d');
      try { Engine.audio.boss(); } catch (err) {}
    } else if (scream && e._mode !== 'scream') {
      e._mode = 'scream';
      // The web armours the hull, so every surviving sac MUST be open — the one
      // way through the last phase cannot depend on what happened in the last.
      e.sacs.forEach(s => { if (s.hp > 0) s.open = true; });
      e.sacs.forEach(s => {
        if (s.hp > 0) {
          Engine.burst(e.x + s.ox, e.y + s.oy, '#c8ff80', 14, 4, 3);
          if (Game.enemyCount() < 8) {
            Game.spawnEnemy(Math.random() < 0.5 ? 'kamikaze' : 'weaver', e.x + s.ox, e.y + s.oy + 18);
          }
          s.hp = 0; s.open = false;
        }
      });
      bossSay('boss.hive.scream', '#d0ff80');
      try { Engine.audio.boss(); Engine.shake(10); } catch (err) {}
    } else if (!brood && !scream && e._mode !== 'hum') {
      e._mode = 'hum';
    }
    if ((e._broodLock || 0) > 0) {
      e._broodLock -= dt;
      if (e.hp < e.maxHp * 0.331) e.hp = e.maxHp * 0.331;
    }
    e.statusKey = scream ? 'boss.hive.st.scream' : brood ? 'boss.hive.st.brood' : 'boss.hive.st.hum';
    e.statusColor = scream ? '#d0ff80' : brood ? '#9bff7d' : '#b8e8a0';
    e.sacs.forEach(s => { s.flash = Math.max(0, (s.flash || 0) - dt); });
    // Unique phases: spores from the brood phase on, resonance web at scream.
    if (brood || scream) hiveSporeTick(e, dt);
    if (scream) hiveWebTick(e, dt);
    if (brood) {
      e.summonT = (e.summonT || 2.3) - dt;
      const live = e.sacs.filter(s => s.hp > 0 && s.open);
      if (e.summonT <= 0 && live.length && Game.enemyCount() < 6) {
        e.summonT = 2.5;
        const s = live[(Math.random() * live.length) | 0];
        Game.spawnEnemy(Math.random() < 0.5 ? 'kamikaze' : 'weaver', e.x + s.ox, e.y + s.oy + 18);
        Engine.audio.blip(180, 0.12, 'sawtooth', 0.07);
      }
    }
  }
  /* -- HIVE GATE: unique phases ---------------------------------------------
   * The other gate keepers each have one mechanic that forces a specific
   * response (Warden's iris, Silo's shutter, Heliot's surge). The Hive only had
   * "shoot the sacs", which is why it read as the weak one. Two phases now:
   *
   *   BROOD  (66%) - SPORE BLOOM. Vents drifting pods that track lazily and
   *                  burst into a short-range ring. They are shootable, so the
   *                  answer is fire discipline: clear pods or eat the burst.
   *   SCREAM (33%) - RESONANCE WEB. Surviving sacs link with rotating tethers.
   *                  While a tether pair is live the hull is armoured; the web
   *                  only collapses when you kill a sac, so the phase forces you
   *                  to hit the weak points instead of hosing the middle.
   */
  function hiveSporeTick(e, dt) {
    e.spores = e.spores || [];
    const p = Game.player;
    e._sporeT = (e._sporeT || 2.2) - dt;
    const live = e.sacs.filter(sc => sc.hp > 0);
    if (e._sporeT <= 0 && live.length && e.spores.length < 7) {
      e._sporeT = 2.0;
      const sc = live[(Math.random() * live.length) | 0];
      const a = Math.atan2((p ? p.y : Engine.H) - (e.y + sc.oy), (p ? p.x : e.x) - (e.x + sc.ox));
      e.spores.push({
        x: e.x + sc.ox, y: e.y + sc.oy,
        vx: Math.cos(a) * 62, vy: Math.sin(a) * 62,
        t: 0, life: 5.2, hp: 26, r: 13, burst: 0, dead: false,
      });
      try { Engine.audio.blip(220, 0.09, 'sawtooth', 0.06); } catch (err) {}
    }
    for (let i = e.spores.length - 1; i >= 0; i--) {
      const sp = e.spores[i];
      sp.t += dt;
      if (sp.burst > 0) {
        sp.burst -= dt;
        if (sp.burst <= 0) { e.spores.splice(i, 1); }
        continue;
      }
      // lazy tracking: enough to punish standing still, easy to out-fly
      if (p) {
        const a = Math.atan2(p.y - sp.y, p.x - sp.x);
        sp.vx = Engine.lerp(sp.vx, Math.cos(a) * 74, Math.min(1, dt * 0.7));
        sp.vy = Engine.lerp(sp.vy, Math.sin(a) * 74, Math.min(1, dt * 0.7));
      }
      sp.x += sp.vx * dt; sp.y += sp.vy * dt;
      if (Math.random() < 0.35) Engine.burst(sp.x, sp.y, '#9bff7d', 1, 1.2, 1.6);
      const hitPlayer = p && Engine.dist2(sp.x, sp.y, p.x, p.y) < (sp.r + p.r) * (sp.r + p.r);
      if (sp.t >= sp.life || hitPlayer || sp.hp <= 0) hiveBurstSpore(e, sp);
      if (sp.x < -40 || sp.x > Engine.W + 40 || sp.y > Engine.H + 40) e.spores.splice(i, 1);
    }
  }
  function hiveBurstSpore(e, sp) {
    if (sp.burst > 0) return;
    sp.burst = 0.3;
    Engine.burst(sp.x, sp.y, '#c8ff80', 20, 5, 3.5);
    try { Engine.audio.explode(); } catch (err) {}
    const p = Game.player;
    const R = 54;
    if (p && Engine.dist2(sp.x, sp.y, p.x, p.y) < (R + p.r) * (R + p.r)) Game.damagePlayer();
  }
  /** Live tether pairs between surviving sacs — the armour of the last phase. */
  function hiveTetherPairs(e) {
    const live = e.sacs.filter(sc => sc.hp > 0);
    if (live.length < 2) return [];
    const out = [];
    for (let i = 0; i < live.length; i++) out.push([live[i], live[(i + 1) % live.length]]);
    return out;
  }
  function hiveWebTick(e, dt) {
    e._webA = (e._webA || 0) + dt * 1.15;
    e._webDmgT = Math.max(0, (e._webDmgT || 0) - dt);
    const p = Game.player;
    if (!p) return;
    const pairs = hiveTetherPairs(e);
    for (const [a, b] of pairs) {
      // tether endpoints orbit with the web angle, so the beams sweep the arena
      const ax = e.x + a.ox * Math.cos(e._webA) - a.oy * Math.sin(e._webA);
      const ay = e.y + a.ox * Math.sin(e._webA) + a.oy * Math.cos(e._webA);
      const bx = e.x + b.ox * Math.cos(e._webA) - b.oy * Math.sin(e._webA);
      const by = e.y + b.ox * Math.sin(e._webA) + b.oy * Math.cos(e._webA);
      if (e._webDmgT > 0) continue;
      // point-segment distance
      const dx = bx - ax, dy = by - ay;
      const len2 = dx * dx + dy * dy || 1;
      let t = ((p.x - ax) * dx + (p.y - ay) * dy) / len2;
      t = Engine.clamp(t, 0, 1);
      const cx = ax + dx * t, cy = ay + dy * t;
      if (Engine.dist2(cx, cy, p.x, p.y) < (7 + p.r) * (7 + p.r)) {
        e._webDmgT = 0.6;
        Game.damagePlayer();
      }
    }
  }
  /** Web up = hull armoured; killing a sac is the only way through. */
  function hiveWebUp(e) {
    return e._mode === 'scream' && hiveTetherPairs(e).length > 0;
  }
  function hiveDrawSpores(e, ctx) {
    const TAU = Engine.TAU;
    for (const sp of e.spores || []) {
      if (sp.burst > 0) {
        const k = sp.burst / 0.3;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = `rgba(200,255,128,${k})`;
        ctx.lineWidth = 3 * k + 1;
        ctx.beginPath(); ctx.arc(sp.x, sp.y, 54 * (1.05 - k * 0.5), 0, TAU); ctx.stroke();
        ctx.restore();
        continue;
      }
      const pulse = 0.6 + 0.4 * Math.sin(sp.t * 9);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(sp.x, sp.y, 1, sp.x, sp.y, sp.r * 1.9);
      g.addColorStop(0, `rgba(220,255,180,${0.7 * pulse})`);
      g.addColorStop(0.5, 'rgba(140,255,110,0.35)');
      g.addColorStop(1, 'rgba(60,160,40,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(sp.x, sp.y, sp.r * 1.9, 0, TAU); ctx.fill();
      ctx.fillStyle = '#0d2a10';
      ctx.beginPath(); ctx.arc(sp.x, sp.y, sp.r * 0.72, 0, TAU); ctx.fill();
      ctx.strokeStyle = `rgba(180,255,140,${0.6 + 0.4 * pulse})`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(sp.x, sp.y, sp.r * 0.72, 0, TAU); ctx.stroke();
      // spiky husk
      ctx.strokeStyle = 'rgba(200,255,150,0.7)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 6; i++) {
        const a = sp.t * 2 + i * (TAU / 6);
        ctx.beginPath();
        ctx.moveTo(sp.x + Math.cos(a) * sp.r * 0.7, sp.y + Math.sin(a) * sp.r * 0.7);
        ctx.lineTo(sp.x + Math.cos(a) * sp.r * 1.15, sp.y + Math.sin(a) * sp.r * 1.15);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  function hiveDrawWeb(e, ctx) {
    if (!hiveWebUp(e)) return;
    const TAU = Engine.TAU;
    const pairs = hiveTetherPairs(e);
    const a0 = e._webA || 0;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const [a, b] of pairs) {
      const ax = e.x + a.ox * Math.cos(a0) - a.oy * Math.sin(a0);
      const ay = e.y + a.ox * Math.sin(a0) + a.oy * Math.cos(a0);
      const bx = e.x + b.ox * Math.cos(a0) - b.oy * Math.sin(a0);
      const by = e.y + b.ox * Math.sin(a0) + b.oy * Math.cos(a0);
      const flick = 0.55 + 0.45 * Math.abs(Math.sin(e.t * 13 + a.ox));
      ctx.strokeStyle = `rgba(200,255,128,${flick})`;
      ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      ctx.strokeStyle = `rgba(255,255,255,${flick * 0.8})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      // node flares
      for (const [nx, ny] of [[ax, ay], [bx, by]]) {
        const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, 16);
        g.addColorStop(0, 'rgba(230,255,190,0.85)');
        g.addColorStop(1, 'rgba(120,220,90,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(nx, ny, 16, 0, TAU); ctx.fill();
      }
    }
    // armour shimmer over the hull while the web holds
    ctx.strokeStyle = `rgba(160,255,120,${0.3 + 0.2 * Math.sin(e.t * 7)})`;
    ctx.lineWidth = 2.5;
    ctx.setLineDash([9, 7]);
    ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 1.06, 0, TAU); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  function hiveDraw(e, ctx) {
    hiveEnsure(e);
    const TAU = Engine.TAU;
    hiveDrawSpores(e, ctx);
    hiveDrawWeb(e, ctx);
    e.sacs.forEach(s => {
      const gx = e.x + s.ox, gy = e.y + s.oy;
      const alive = s.hp > 0;
      const open = alive && s.open;
      const pulse = 0.55 + 0.45 * Math.sin(e.t * 5 + s.ox);
      ctx.save();
      if (!alive) {
        ctx.globalAlpha = 0.45;
        ctx.fillStyle = '#142018';
        ctx.beginPath(); ctx.ellipse(gx, gy, 11, 8, 0, 0, TAU); ctx.fill();
      } else {
        const rad = open ? 13 + pulse * 2 : 10;
        const g = ctx.createRadialGradient(gx, gy - 2, 2, gx, gy, rad);
        g.addColorStop(0, s.flash > 0 ? '#fff' : (open ? '#d8ff90' : '#3a6040'));
        g.addColorStop(0.55, open ? '#4cb868' : '#2a4830');
        g.addColorStop(1, 'rgba(10,20,12,0.2)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(gx, gy, rad, rad * 0.78, 0, 0, TAU); ctx.fill();
        if (open) {
          ctx.globalCompositeOperation = 'lighter';
          ctx.strokeStyle = `rgba(180,255,120,${0.4 + pulse * 0.4})`;
          ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
          ctx.beginPath(); ctx.arc(gx, gy, rad + 5, 0, TAU); ctx.stroke();
          ctx.setLineDash([]);
          const bw = 18, pct = Engine.clamp(s.hp / s.maxHp, 0, 1);
          ctx.globalCompositeOperation = 'source-over';
          ctx.fillStyle = 'rgba(0,0,0,0.5)';
          ctx.fillRect(gx - bw / 2, gy - 20, bw, 3);
          ctx.fillStyle = '#9bff7d';
          ctx.fillRect(gx - bw / 2, gy - 20, bw * pct, 3);
        }
      }
      ctx.restore();
    });
    // tendrils
    ctx.save();
    ctx.strokeStyle = 'rgba(70,180,90,0.55)'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(e.x + i * 14, e.y + 22);
      ctx.quadraticCurveTo(
        e.x + i * 20, e.y + 40 + Math.sin(e.t * 3 + i) * 5,
        e.x + i * 16, e.y + 52 + Math.sin(e.t * 3 + i) * 7
      );
      ctx.stroke();
    }
    ctx.restore();
  }

  function heliotSurging(e) { return !!(e && e._cycle === 'surge'); }
  function heliotWarning(e) { return !!(e && e._cycle === 'warn'); }
  function heliotBand(e) {
    const r = e.hp / e.maxHp;
    return r <= 0.33 ? 2 : r <= 0.66 ? 1 : 0;
  }
  function heliotHuntDur(band) { return band >= 2 ? 5.2 : band >= 1 ? 6.2 : 7.0; }
  function heliotSurgeDur(band) { return band >= 2 ? 6.8 : band >= 1 ? 6.2 : 5.6; }
  function heliotBeginHunt(e) {
    e._cycle = 'hunt';
    e._cycleT = heliotHuntDur(heliotBand(e));
    e._magmaOn = 0; e._magmaWarn = 0; e.walls = 0; e._magmaBand = false;
    e._vents = [];
    if (typeof Hazards !== 'undefined' && Hazards.setMagma) Hazards.setMagma(false);
  }
  function heliotBeginWarn(e) {
    e._cycle = 'warn';
    e._cycleT = 1.3;
    e._magmaWarn = 1.3; e._magmaOn = 0; e.walls = 0; e._magmaBand = true;
    e._vents = [];
    bossSay('boss.heliot.magma', '#ff8a30');
    try { Engine.audio.sweep(120, 40, 0.5, 'sawtooth', 0.1); Engine.shake(8); } catch (err) {}
  }
  function heliotBeginSurge(e) {
    e._cycle = 'surge';
    e._cycleT = heliotSurgeDur(heliotBand(e));
    e._magmaOn = e._cycleT; e._magmaWarn = 0; e.walls = e._cycleT; e._magmaBand = true;
    e._rainT = 0.12; e._ventT = 0.25;
    if (typeof Hazards !== 'undefined' && Hazards.setMagma) Hazards.setMagma(true, true);
    try { Engine.shake(12); Engine.audio.boss(); } catch (err) {}
  }
  function heliotPushDrop(e, spec) {
    if (!e.drops) e.drops = [];
    if (e.drops.length >= 42) return;
    e.drops.push(spec);
  }
  function heliotSpray(e, hx, hy, n) {
    for (let i = 0; i < n; i++) {
      heliotPushDrop(e, {
        x: hx + Engine.rand(-16, 16), y: hy + Engine.rand(0, 12),
        vx: Engine.rand(-110, 110), vy: Engine.rand(40, 180),
        r: Math.random() < 0.34 ? 12 : 6,
      });
    }
  }
  function heliotMotion(e) {
    const px = (Game.player && Game.player.x) || Engine.W / 2;
    const surge = heliotSurging(e);
    const warn = heliotWarning(e);
    const pad = surge ? 102 : 76;
    const target = Engine.clamp(px, pad, Engine.W - pad);
    e.x = Engine.lerp(e.x, target, surge ? 0.026 : 0.05);
    if (warn) e.x += Math.sin(e.t * 26) * 2.4;
    e.y = 122 + Math.sin(e.t * (surge ? 2.5 : 1.35)) * (surge ? 6.5 : 3.2);
  }
  function heliotAttack(e, phase) {
    if (heliotWarning(e)) { e.fireT = 0.4; return; }
    const b = aim(e);
    if (heliotSurging(e)) {
      e.fireT = phase >= 2 ? 0.48 : 0.64;
      shot(e, b, 198, 0, 18, 7);
      shot(e, b - 0.2, 176, -12, 12, 5);
      shot(e, b + 0.2, 176, 12, 12, 5);
      return;
    }
    const r = e.hp / e.maxHp;
    if (r > 0.66) {
      e.fireT = 0.88;
      shot(e, b, 208, 0, 16, 6);
      shot(e, b - 0.14, 186, -14, 10, 5);
      shot(e, b + 0.14, 186, 14, 10, 5);
    } else if (r > 0.33) {
      e.fireT = 0.62;
      for (const o of [-0.22, 0, 0.22]) shot(e, b + o, 214, o * 50, 14, 6);
    } else {
      e.fireT = 0.46;
      const off = e.t * 1.45;
      for (let i = 0; i < 7; i++) shot(e, off + i / 7 * Engine.TAU, 166, 0, 8, 5);
    }
  }
  function heliotHit(e, dmg, hx, hy) {
    e.dpsWin = (e.dpsWin || 0) + dmg;
    const n = 3 + Math.min(6, Math.floor((e.dpsWin || 0) / 28));
    heliotSpray(e, hx, hy, n);
    if (heliotSurging(e)) {
      Engine.burst(hx, hy, '#ff6a20', 8, 3, 3);
      return true;
    }
    const mul = Math.max(0.4, 1 - (e.dpsWin || 0) / 220);
    Engine.burst(hx, hy, '#ff8a30', 5, 2.4, 2);
    return dmg * mul;
  }
  function heliotTickRain(e, dt, phase) {
    e._rainT = (e._rainT || 0.2) - dt;
    if (e._rainT > 0) return;
    e._rainT = phase >= 2 ? 0.16 : 0.24;
    const n = phase >= 2 ? 5 : 4;
    for (let i = 0; i < n; i++) {
      heliotPushDrop(e, {
        x: Engine.rand(70, Engine.W - 70), y: 58,
        vx: Engine.rand(-40, 40), vy: Engine.rand(90, 170),
        r: Math.random() < 0.35 ? 12 : 6,
      });
    }
  }
  function heliotFireVent(e, v) {
    const x = v.side < 0 ? 36 : Engine.W - 36;
    const ang = v.side < 0 ? 0 : Math.PI;
    for (const o of [-0.2, 0, 0.2]) shot({ x, y: v.y, r: 8 }, ang + o, 158, 0, 0, 7);
    const inward = v.side < 0 ? 1 : -1;
    for (let i = 0; i < 4; i++) {
      heliotPushDrop(e, {
        x: x + inward * 10, y: v.y + Engine.rand(-12, 12),
        vx: inward * Engine.rand(90, 180), vy: Engine.rand(-50, 90),
        r: Math.random() < 0.35 ? 12 : 6,
      });
    }
    Engine.burst(x + inward * 8, v.y, '#ffb040', 10, 3.2, 3);
    try { Engine.audio.blip(110, 0.06, 'sawtooth', 0.05); } catch (err) {}
  }
  function heliotTickVents(e, dt, phase) {
    if (!e._vents) e._vents = [];
    e._ventT = (e._ventT || 0.3) - dt;
    if (e._ventT <= 0) {
      e._ventT = phase >= 2 ? 0.48 : 0.66;
      e._vents.push({
        side: Math.random() < 0.5 ? -1 : 1,
        y: Engine.rand(170, Engine.H - 90),
        t: 0, warn: 0.42, life: 0.85, fired: false, w: 20 + Engine.rand(0, 10),
      });
    }
    const p = Game.player;
    for (let i = e._vents.length - 1; i >= 0; i--) {
      const v = e._vents[i];
      v.t += dt;
      if (!v.fired && v.t >= v.warn) { v.fired = true; heliotFireVent(e, v); }
      if (v.fired && p) {
        const x0 = v.side < 0 ? 0 : Engine.W;
        const inward = v.side < 0 ? 1 : -1;
        const reach = 150;
        const along = (p.x - x0) * inward;
        if (along > 0 && along < reach && Math.abs(p.y - v.y) < v.w * 0.55 + p.r) {
          v.dmgT = (v.dmgT || 0) - dt;
          if (v.dmgT <= 0) { v.dmgT = 0.38; Game.damagePlayer(); }
        }
      }
      if (v.t >= v.warn + v.life) e._vents.splice(i, 1);
    }
  }
  function heliotTickLance(e, dt) {
    if (!e.entered || heliotSurging(e) || heliotWarning(e)) {
      e._lanceWarn = 0; e._lanceOn = 0;
      return;
    }
    if (e.hp / e.maxHp > 0.66) return;
    e._lanceCd = (e._lanceCd == null ? 1.8 : e._lanceCd) - dt;
    if (e._lanceCd <= 0 && !(e._lanceWarn > 0) && !(e._lanceOn > 0)) {
      const px = (Game.player && Game.player.x) || Engine.W / 2;
      e._lanceX = Engine.clamp(px, 72, Engine.W - 72);
      e._lanceWarn = 0.78;
      e._lanceCd = e.hp / e.maxHp <= 0.33 ? 2.5 : 3.3;
      try { Engine.audio.blip(160, 0.1, 'sawtooth', 0.08); } catch (err) {}
    }
    if (e._lanceWarn > 0) {
      e._lanceWarn -= dt;
      if (e._lanceWarn <= 0) {
        e._lanceWarn = 0;
        e._lanceOn = 0.44;
        e._lanceDmgT = 0;
        try { Engine.shake(8); Engine.audio.sweep(320, 80, 0.25, 'sawtooth', 0.1); } catch (err) {}
      }
      return;
    }
    if (e._lanceOn > 0) {
      e._lanceOn -= dt;
      e._lanceDmgT = (e._lanceDmgT || 0) - dt;
      const p = Game.player;
      if (p && Math.abs(p.x - e._lanceX) < 22 + p.r && e._lanceDmgT <= 0) {
        e._lanceDmgT = 0.36;
        Game.damagePlayer();
      }
    }
  }
  function heliotTick(e, dt, phase) {
    if (!e.drops) e.drops = [];
    e.dpsWin = (e.dpsWin || 0) * Math.exp(-dt / 1.5);
    if (e.entered) {
      if (e._cycle == null) heliotBeginHunt(e);
      e._cycleT = (e._cycleT || 0) - dt;
      if (e._cycle === 'hunt') {
        e._magmaOn = 0; e._magmaWarn = 0; e.walls = 0;
        e._dripT = (e._dripT || 0.35) - dt;
        if (e._dripT <= 0) {
          e._dripT = 0.22;
          heliotSpray(e, e.x + Engine.rand(-18, 18), e.y + 16, 2);
        }
        if (e._cycleT <= 0) heliotBeginWarn(e);
      } else if (e._cycle === 'warn') {
        e._magmaWarn = Math.max(0, e._cycleT);
        e._magmaOn = 0;
        if (e._cycleT <= 0) heliotBeginSurge(e);
      } else {
        e._magmaOn = Math.max(0, e._cycleT);
        e.walls = e._magmaOn;
        e._magmaWarn = 0;
        if (e._cycleT <= 0) heliotBeginHunt(e);
        else {
          heliotTickRain(e, dt, phase);
          heliotTickVents(e, dt, phase);
        }
      }
    }
    if (heliotSurging(e)) {
      e._wallDmgT = (e._wallDmgT || 0) - dt;
      const p = Game.player;
      if (p && (p.x < 56 || p.x > Engine.W - 56) && e._wallDmgT <= 0) {
        e._wallDmgT = 0.4;
        Game.damagePlayer();
      }
    }
    heliotTickLance(e, dt);
    if (heliotSurging(e)) {
      e.statusKey = 'boss.heliot.st.magma'; e.statusColor = '#ff8a30';
      e.statusTimer = e._cycleT;
    } else if (heliotWarning(e)) {
      e.statusKey = 'boss.heliot.st.warn'; e.statusColor = '#ffe080';
      e.statusTimer = e._cycleT;
    } else if (e._lanceWarn > 0 || e._lanceOn > 0) {
      e.statusKey = 'boss.heliot.st.lance'; e.statusColor = '#ffd050';
      e.statusTimer = 0;
    } else {
      e.statusKey = 'boss.heliot.st.hunt'; e.statusColor = '#ffc080';
      e.statusTimer = 0;
    }
    for (let i = e.drops.length - 1; i >= 0; i--) {
      const d = e.drops[i];
      d.vy += 420 * dt; d.x += d.vx * dt; d.y += d.vy * dt;
      if (Game.player && Engine.dist2(d.x, d.y, Game.player.x, Game.player.y) < (d.r + Game.player.r) * (d.r + Game.player.r)) {
        Game.damagePlayer();
        e.drops.splice(i, 1);
        continue;
      }
      if (d.y > Engine.H + 24 || d.x < -30 || d.x > Engine.W + 30) e.drops.splice(i, 1);
    }
  }
  function heliotDrawWall(ctx, e, side, warn) {
    const TAU = Engine.TAU, W = Engine.W, H = Engine.H;
    const edge = side < 0 ? 0 : W;
    const inward = side < 0 ? 1 : -1;
    const fill = warn ? 22 : 46;
    const t = e.t;
    const flash = warn ? 0.28 + 0.4 * Math.abs(Math.sin(t * 12)) : 1;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.beginPath();
    ctx.moveTo(edge, 64);
    ctx.lineTo(edge, H);
    for (let y = H; y >= 64; y -= 8) {
      const wave = Math.sin(y * 0.045 + t * 4.2) * 7 + Math.sin(y * 0.11 + t * 2.1) * 3.5;
      ctx.lineTo(edge + inward * (fill + wave), y);
    }
    ctx.closePath();
    const g = ctx.createLinearGradient(edge, 0, edge + inward * (fill + 14), 0);
    g.addColorStop(0, `rgba(180,28,4,${0.88 * flash})`);
    g.addColorStop(0.45, `rgba(255,70,14,${0.7 * flash})`);
    g.addColorStop(0.82, `rgba(255,170,40,${0.55 * flash})`);
    g.addColorStop(1, 'rgba(255,220,90,0)');
    ctx.fillStyle = g;
    ctx.fill();
    // blocky crest like the floor magma
    for (let y = 70; y < H - 8; y += 16) {
      const wave = Math.sin(y * 0.045 + t * 4.2) * 7;
      const cx = edge + inward * (fill - 6 + wave);
      ctx.fillStyle = `rgba(255,220,120,${0.75 * flash})`;
      ctx.fillRect(cx - 4, y, 8, 8);
      ctx.fillStyle = `rgba(255,130,30,${0.55 * flash})`;
      ctx.fillRect(cx - 4 + inward * 8, y + 3, 8, 6);
    }
    if (warn) {
      ctx.setLineDash([7, 8]);
      ctx.strokeStyle = `rgba(255,230,100,${0.55 + flash * 0.4})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(edge + inward * 18, 70);
      ctx.lineTo(edge + inward * 18, H - 16);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.restore();
  }
  function heliotDrawVent(ctx, e, v) {
    const W = Engine.W;
    const x0 = v.side < 0 ? 0 : W;
    const inward = v.side < 0 ? 1 : -1;
    const hot = v.t >= v.warn;
    const u = hot ? Math.max(0, 1 - (v.t - v.warn) / v.life) : 0.35 + 0.45 * Math.abs(Math.sin(e.t * 14));
    const reach = hot ? 150 : 70;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    if (!hot) {
      ctx.setLineDash([6, 8]);
      ctx.strokeStyle = `rgba(255,220,90,${0.45 + u * 0.4})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x0 + inward * 20, v.y);
      ctx.lineTo(x0 + inward * reach, v.y);
      ctx.stroke();
      ctx.setLineDash([]);
    } else {
      const gg = ctx.createLinearGradient(x0, v.y, x0 + inward * reach, v.y);
      gg.addColorStop(0, `rgba(255,200,80,${0.75 * u})`);
      gg.addColorStop(0.55, `rgba(255,90,20,${0.45 * u})`);
      gg.addColorStop(1, 'rgba(255,60,10,0)');
      ctx.fillStyle = gg;
      ctx.beginPath();
      ctx.moveTo(x0, v.y - v.w * 0.5);
      ctx.lineTo(x0 + inward * reach, v.y - 5);
      ctx.lineTo(x0 + inward * reach, v.y + 5);
      ctx.lineTo(x0, v.y + v.w * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = `rgba(255,250,200,${0.55 * u})`;
      ctx.fillRect(x0, v.y - 2, inward * reach, 4);
    }
    ctx.restore();
  }
  function heliotDraw(e, ctx) {
    const TAU = Engine.TAU;
    const surge = heliotSurging(e);
    const warn = heliotWarning(e);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const pulse = 0.5 + 0.5 * Math.sin(e.t * (surge ? 9 : 5));
    const corona = ctx.createRadialGradient(e.x, e.y, 6, e.x, e.y, e.r * (1.05 + pulse * 0.15));
    corona.addColorStop(0, `rgba(255,220,120,${0.28 + pulse * 0.22})`);
    corona.addColorStop(0.45, `rgba(255,110,30,${0.16 + pulse * 0.1})`);
    corona.addColorStop(1, 'rgba(180,30,0,0)');
    ctx.fillStyle = corona;
    ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 1.2, 0, TAU); ctx.fill();
    if (surge) {
      ctx.strokeStyle = `rgba(255,200,80,${0.45 + pulse * 0.4})`;
      ctx.lineWidth = 2.4; ctx.setLineDash([6, 5]);
      ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 0.92 + pulse * 3, 0, TAU); ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.restore();

    (e.drops || []).forEach(d => {
      const g = ctx.createRadialGradient(d.x, d.y, 1, d.x, d.y, d.r);
      g.addColorStop(0, '#ffe080'); g.addColorStop(0.5, '#ff6a20'); g.addColorStop(1, 'rgba(80,10,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, TAU); ctx.fill();
    });

    if (e._lanceWarn > 0 || e._lanceOn > 0) {
      const x = e._lanceX || Engine.W / 2;
      const hot = e._lanceOn > 0;
      const flash = 0.35 + 0.55 * Math.abs(Math.sin(e.t * (hot ? 16 : 11)));
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      if (!hot) {
        ctx.setLineDash([8, 10]);
        ctx.strokeStyle = `rgba(255,220,90,${0.4 + flash * 0.45})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(x, 70); ctx.lineTo(x, Engine.H - 20); ctx.stroke();
        ctx.setLineDash([]);
      } else {
        const u = Engine.clamp(e._lanceOn / 0.44, 0, 1);
        const gr = ctx.createLinearGradient(x - 22, 0, x + 22, 0);
        gr.addColorStop(0, 'rgba(255,80,10,0)');
        gr.addColorStop(0.5, `rgba(255,230,140,${0.55 * u})`);
        gr.addColorStop(1, 'rgba(255,80,10,0)');
        ctx.fillStyle = gr;
        ctx.fillRect(x - 24, 64, 48, Engine.H - 80);
        ctx.strokeStyle = `rgba(255,250,200,${0.7 * u})`;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(x, 70); ctx.lineTo(x, Engine.H - 24); ctx.stroke();
      }
      ctx.restore();
    }

    if (warn || surge) {
      heliotDrawWall(ctx, e, -1, warn);
      heliotDrawWall(ctx, e, 1, warn);
      (e._vents || []).forEach(v => heliotDrawVent(ctx, e, v));
    }
  }

  function siloBand(e) {
    const r = e.hp / e.maxHp;
    return r <= 0.33 ? 2 : r <= 0.66 ? 1 : 0;
  }
  /** Shutter bands are finer than attack bands — four seals across the fight. */
  function siloSealBand(e) {
    const r = e.hp / e.maxHp;
    return r <= 0.20 ? 4 : r <= 0.40 ? 3 : r <= 0.60 ? 2 : r <= 0.80 ? 1 : 0;
  }
  /**
   * Blast shutter — a timed invulnerability window.
   * Armed BY damage (crossing an HP band) and released BY a timer, so it can
   * never stall the fight the way the old bay-band armour did: that one gated on
   * HP, the hull never dropped, and the bomb phase never spawned at all.
   */
  function siloBeginShutter(e) {
    e._shutterT = 3.6;
    e._shutterMax = 3.6;
    e.bayOpen = Math.max(e.bayOpen || 0, 0.5);
    siloDropBombs(e);                     // seal + immediate salvo = real pressure
    bossSay('boss.silo.seal', '#ff5a4a');
    try { Engine.audio.boss(); Engine.audio.sweep(220, 70, 0.5, 'square', 0.09); Engine.shake(14); } catch (err) {}
  }
  function siloMissileDur(band) { return band >= 2 ? 5.4 : band >= 1 ? 6.4 : 7.2; }
  function siloBayDur(band) { return band >= 2 ? 7.0 : band >= 1 ? 6.4 : 5.8; }
  function siloBeginMissiles(e) {
    e._cycle = 'missiles';
    e._cycleT = siloMissileDur(siloBand(e));
    e.bayOpen = 0; e._bayBand = false;
  }
  function siloBeginWarn(e) {
    e._cycle = 'warn';
    e._cycleT = 1.25;
    e.bayOpen = 0.2;
    bossSay('boss.silo.bay', '#ff8a50');
    try { Engine.audio.sweep(90, 40, 0.4, 'square', 0.08); Engine.shake(6); } catch (err) {}
  }
  function siloBeginBay(e) {
    e._cycle = 'bay';
    e._cycleT = siloBayDur(siloBand(e));
    e.bayOpen = e._cycleT; e._bayBand = true;
    e._bombDropT = 0.15;
    siloDropBombs(e);
    try { Engine.audio.boss(); Engine.shake(10); } catch (err) {}
  }
  function siloLaunchMissiles(e) {
    const p = Game.player;
    if (!p) return;
    e.missiles = e.missiles || [];
    const band = siloBand(e);
    const sides = band >= 2 ? [-1, 0, 1] : [-1, 1];
    for (const side of sides) {
      const sx = e.x + side * (e.r * 0.72), sy = e.y + 12;
      const a = Math.atan2(p.y - sy, p.x - sx);
      e.missiles.push({
        x: sx, y: sy,
        vx: Math.cos(a) * 236, vy: Math.sin(a) * 236,
        steer: 1.55, hp: 42, maxHp: 42,
        yaw: a, t: 0, dead: false, dieT: 0, flash: 0,
      });
      e._tubeFlash = e._tubeFlash || {};
      e._tubeFlash[side] = 0.22;
    }
    try { Engine.audio.blip(200, 0.06, 'sawtooth', 0.07); Engine.shake(3); } catch (err) {}
  }
  function siloDropBombs(e) {
    e.bombs = e.bombs || [];
    const band = siloBand(e);
    // Heavier load: bombs are the whole threat of the bay phase now that they
    // cannot be shot down, and the shutter salvo doubles up on top.
    let n = band >= 2 ? 5 : band >= 1 ? 4 : 3;
    let cap = 8;
    if (e._shutterT > 0) { n += 2; cap = 11; }
    const live = e.bombs.filter(b => !b.dead).length;
    if (live >= cap) return;
    n = Math.min(n, cap - live);
    for (let i = 0; i < n; i++) {
      const spread = (i - (n - 1) / 2) * 38;
      e.bombs.push({
        x: e.x + spread, y: e.y + 30,
        vx: spread * 0.45, vy: 48,
        hp: 48, maxHp: 48,
        fuse: 3.1, fuseMax: 3.1,
        rBody: 16, rBlast: 108,
        rot: 0, spin: Engine.rand(-1.6, 1.6),
        dead: false, dieT: 0, boom: false, flash: 0,
        rArm: 74, armT: 0,          // proximity trigger + its warning beat
      });
    }
    e._bayFlash = 0.28;
    try { Engine.audio.blip(140, 0.1, 'square', 0.08); Engine.shake(5); } catch (err) {}
  }
  function siloHurtMissile(e, m, dmg) {
    if (m.dead) return;
    m.hp -= dmg; m.flash = 0.1;
    Engine.burst(m.x, m.y, '#ffd24a', 4, 2, 2);
    if (m.hp <= 0) siloKillMissile(m, false);
  }
  function siloKillMissile(m, hitPlayer) {
    if (m.dead) return;
    m.dead = true; m.dieT = 0.26; m.vx *= 0.25; m.vy *= 0.25;
    Engine.burst(m.x, m.y, '#ff9a40', 14, 4.5, 3);
    Engine.burst(m.x, m.y, '#ffe080', 8, 3, 2);
    try { Engine.audio.explode(); } catch (err) {}
    if (hitPlayer) Game.damagePlayer();
  }
  function siloHurtBomb(e, b, dmg) {
    if (b.dead) return;
    b.hp -= dmg; b.flash = 0.1;
    Engine.burst(b.x, b.y, '#ffd24a', 5, 2.2, 2);
    if (b.hp <= 0) siloDefuseBomb(b);
  }
  function siloDefuseBomb(b) {
    if (b.dead) return;
    b.dead = true; b.boom = false; b.dieT = 0.22;
    Engine.burst(b.x, b.y, '#9ad0ff', 10, 3, 3);
    try { Engine.audio.blip(520, 0.06, 'sine', 0.07); } catch (err) {}
  }
  function siloDetonateBomb(b) {
    if (b.dead) return;
    b.dead = true; b.boom = true; b.dieT = 0.38;
    Engine.burst(b.x, b.y, '#ffe080', 28, 8, 5);
    Engine.burst(b.x, b.y, '#ff6a30', 22, 6, 4);
    try { Engine.audio.explode(); Engine.shake(14); } catch (err) {}
    const p = Game.player;
    if (p && Engine.dist2(b.x, b.y, p.x, p.y) < (b.rBlast + p.r) * (b.rBlast + p.r)) {
      Game.damagePlayer();
    }
  }
  /**
   * Rockets are shootable — they are the fight's counterplay.
   * BOMBS ARE NOT. They used to have 48 HP, which a trained gun deletes on
   * contact, so the bay phase had no teeth at all: the player never had to move.
   * Bombs must be dodged; they still eat the shot (returns true) so bullets do
   * not punch through them into the hull.
   */
  function siloStrikeAt(e, dmg, hx, hy, rad) {
    const r2 = rad * rad;
    for (const m of e.missiles || []) {
      if (m.dead) continue;
      if (Engine.dist2(hx, hy, m.x, m.y) < r2) {
        siloHurtMissile(e, m, dmg);
        return true;
      }
    }
    for (const b of e.bombs || []) {
      if (b.dead) continue;
      if (Engine.dist2(hx, hy, b.x, b.y) < (b.rBody + 4) * (b.rBody + 4)) {
        b.flash = 0.09;                                   // sparks off the casing
        Engine.burst(hx, hy, '#8a94ad', 3, 1.8, 1.6);
        return true;                                      // absorbed, never damaged
      }
    }
    return false;
  }
  function siloAttack(e, phase) {
    if (e._cycle === 'warn' || e._cycle === 'bay') { e.fireT = 0.45; return; }
    e.fireT = phase >= 2 ? 1.0 : phase >= 1 ? 1.2 : 1.4;
    siloLaunchMissiles(e);
  }
  function siloTick(e, dt, phase) {
    e.missiles = e.missiles || [];
    e.bombs = e.bombs || [];
    e._shutterT = Math.max(0, (e._shutterT || 0) - dt);
    if (e.entered) {
      const sb = siloSealBand(e);
      if (e._sealBand == null) e._sealBand = sb;
      else if (sb > e._sealBand) { e._sealBand = sb; siloBeginShutter(e); }
      if (e._shutterT > 0) {
        // Sealed: keep raining bombs so the window is survival, not a rest stop.
        e._shutDropT = (e._shutDropT || 0) - dt;
        if (e._shutDropT <= 0) { e._shutDropT = 1.15; siloDropBombs(e); }
      }
      if (e._cycle == null) siloBeginMissiles(e);
      e._cycleT = (e._cycleT || 0) - dt;
      if (e._cycle === 'missiles') {
        e.bayOpen = 0;
        if (e._cycleT <= 0) siloBeginWarn(e);
      } else if (e._cycle === 'warn') {
        e.bayOpen = 0.35 + (1 - e._cycleT / 1.25) * 0.4;
        if (e._cycleT <= 0) siloBeginBay(e);
      } else {
        e.bayOpen = Math.max(0.4, e._cycleT);
        if (e._cycleT <= 0) siloBeginMissiles(e);
        else {
          e._bombDropT = (e._bombDropT || 1.8) - dt;
          const live = e.bombs.filter(b => !b.dead).length;
          if (e._bombDropT <= 0 && live < 4) {
            e._bombDropT = siloBand(e) >= 2 ? 1.7 : 2.2;
            siloDropBombs(e);
          }
        }
      }
    }
    if (e._shutterT > 0) {
      e.statusKey = 'boss.silo.st.seal';
      e.statusColor = '#ff5a4a';
      e.statusTimer = e._shutterT;
    } else if (e._cycle === 'bay') {
      e.statusKey = e.hp / e.maxHp <= 0.12 ? 'boss.silo.st.core' : 'boss.silo.st.bay';
      e.statusColor = e.hp / e.maxHp <= 0.12 ? '#ff6a4a' : '#ff8a50';
      e.statusTimer = e._cycleT;
    } else if (e._cycle === 'warn') {
      e.statusKey = 'boss.silo.st.warn'; e.statusColor = '#ffd080';
      e.statusTimer = e._cycleT;
    } else {
      e.statusKey = 'boss.silo.st.missiles'; e.statusColor = '#9ad0ff';
      e.statusTimer = 0;
    }
    e._bayFlash = Math.max(0, (e._bayFlash || 0) - dt);
    if (e._tubeFlash) {
      for (const k of Object.keys(e._tubeFlash)) {
        e._tubeFlash[k] = Math.max(0, e._tubeFlash[k] - dt);
      }
    }

    const p = Game.player;
    e.missiles.forEach(m => {
      m.t = (m.t || 0) + dt;
      m.flash = Math.max(0, (m.flash || 0) - dt);
      if (m.dead) { m.dieT -= dt; return; }
      m.steer -= dt;
      if (m.steer > 0 && p) {
        const a = Math.atan2(p.y - m.y, p.x - m.x);
        const sp = Math.hypot(m.vx, m.vy) || 240;
        m.vx = Engine.lerp(m.vx, Math.cos(a) * sp, 0.07);
        m.vy = Engine.lerp(m.vy, Math.sin(a) * sp, 0.07);
      }
      m.x += m.vx * dt; m.y += m.vy * dt;
      if (Math.random() < 0.55) Engine.burst(m.x - m.vx * 0.02, m.y - m.vy * 0.02, '#ff9a40', 1, 1.3, 2);
      const face = Math.atan2(m.vy, m.vx);
      m.yaw = m.yaw == null ? face : lerpAng(m.yaw, face, 0.2);
      if (p && Engine.dist2(m.x, m.y, p.x, p.y) < (10 + p.r) * (10 + p.r)) {
        siloKillMissile(m, true);
      }
    });
    e.missiles = e.missiles.filter(m => {
      if (m.dead) return m.dieT > 0;
      return m.x > -50 && m.x < Engine.W + 50 && m.y > -50 && m.y < Engine.H + 50;
    });

    e.bombs.forEach(b => {
      b.flash = Math.max(0, (b.flash || 0) - dt);
      if (b.dead) { b.dieT -= dt; return; }
      b.vy += 70 * dt;
      b.x += b.vx * dt; b.y += b.vy * dt;
      b.vx *= 0.99;
      b.rot += b.spin * dt;
      b.fuse -= dt;
      if (b.y > Engine.H - 36) { siloDetonateBomb(b); return; }
      if (b.fuse <= 0) { siloDetonateBomb(b); return; }
      // PROXIMITY MINE. These only went off on a direct hull graze before, so in
      // practice they drifted past and popped harmlessly at the end of their
      // fuse — the bay phase had no teeth. Entering the arming ring starts a
      // short, loudly-flashing countdown: readable, dodgeable, and lethal if
      // ignored.
      if (p && !b.dead) {
        const armR = b.rArm + p.r;
        const near = Engine.dist2(b.x, b.y, p.x, p.y) < armR * armR;
        if (near && b.armT <= 0) {
          b.armT = 0.42;
          try { Engine.audio.blip(880, 0.05, 'square', 0.07); } catch (err) {}
        }
        if (b.armT > 0) {
          b.armT -= dt;
          b.flash = 0.08;
          if (b.armT <= 0) { siloDetonateBomb(b); return; }
        }
        // A direct graze still detonates immediately.
        if (Engine.dist2(b.x, b.y, p.x, p.y) < (b.rBody + p.r) * (b.rBody + p.r)) {
          siloDetonateBomb(b);
        }
      }
    });
    e.bombs = e.bombs.filter(b => !b.dead || b.dieT > 0);
  }
  function siloDraw(e, ctx) {
    const TAU = Engine.TAU;
    const bay = e._cycle === 'bay';
    const warn = e._cycle === 'warn';
    const pulse = 0.5 + 0.5 * Math.sin(e.t * (bay ? 9 : 5));

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const halo = ctx.createRadialGradient(e.x, e.y, 8, e.x, e.y, e.r * 1.15);
    halo.addColorStop(0, `rgba(255,80,50,${0.14 + pulse * 0.12})`);
    halo.addColorStop(1, 'rgba(120,10,20,0)');
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 1.2, 0, TAU); ctx.fill();
    ctx.restore();

    // Blast shutter: armoured plates slam across the hull. It has to be obvious
    // that shooting is pointless right now, or the window just reads as a bug.
    if ((e._shutterT || 0) > 0) {
      const u = Engine.clamp(e._shutterT / (e._shutterMax || 3.6), 0, 1);
      const open = Engine.clamp((1 - u) * 3.2, 0, 1);        // slams shut fast, lifts at the end
      const hit = e._shutHit > 0 ? (e._shutHit -= 1 / 60) : 0;
      const R = e.r * 1.16;
      ctx.save();
      ctx.beginPath(); ctx.arc(e.x, e.y, R, 0, TAU); ctx.clip();
      const rows = 5;
      for (let i = 0; i < rows; i++) {
        const y0 = e.y - R + (i * 2 * R) / rows;
        const h = (2 * R) / rows;
        const slide = (i % 2 ? 1 : -1) * open * R * 0.9;
        ctx.fillStyle = i % 2 ? 'rgba(64,40,44,0.94)' : 'rgba(44,28,34,0.94)';
        ctx.fillRect(e.x - R + slide, y0, 2 * R, h - 2);
        ctx.fillStyle = `rgba(255,${110 + hit * 700},70,${0.30 + 0.22 * pulse + hit * 3})`;
        ctx.fillRect(e.x - R + slide, y0 + h - 4, 2 * R, 3);
      }
      ctx.restore();
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `rgba(255,90,60,${0.5 + 0.4 * pulse})`;
      ctx.lineWidth = 3 + 2 * pulse;
      ctx.beginPath(); ctx.arc(e.x, e.y, R, 0, TAU); ctx.stroke();
      ctx.restore();
    }

    if (e._tubeFlash) {
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      for (const side of [-1, 0, 1]) {
        const u = e._tubeFlash[side] || 0;
        if (u <= 0) continue;
        const tx = e.x + side * e.r * 0.72, ty = e.y + 16;
        const rg = ctx.createRadialGradient(tx, ty, 2, tx, ty, 22);
        rg.addColorStop(0, `rgba(255,220,140,${0.8 * u / 0.22})`);
        rg.addColorStop(1, 'rgba(255,60,20,0)');
        ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(tx, ty, 22, 0, TAU); ctx.fill();
      }
      ctx.restore();
    }

    if (warn || bay || e.bayOpen > 0) {
      const open = warn ? (1 - e._cycleT / 1.25) : 1;
      const flash = warn ? 0.35 + 0.5 * Math.abs(Math.sin(e.t * 13)) : 0.45 + 0.35 * pulse;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const doorW = 18 + open * 16, doorH = 10 + open * 12;
      const glow = ctx.createRadialGradient(e.x, e.y + 18, 2, e.x, e.y + 18, 42);
      glow.addColorStop(0, `rgba(255,120,50,${0.55 * flash * (0.4 + open)})`);
      glow.addColorStop(0.5, `rgba(255,40,30,${0.28 * flash})`);
      glow.addColorStop(1, 'rgba(80,0,0,0)');
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.ellipse(e.x, e.y + 18, 36 + open * 8, 22 + open * 6, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = `rgba(255,230,160,${0.35 + flash * 0.35})`;
      ctx.beginPath(); ctx.ellipse(e.x, e.y + 20, doorW * 0.45, doorH * 0.4, 0, 0, TAU); ctx.fill();
      ctx.strokeStyle = `rgba(255,160,70,${0.4 + flash * 0.4})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(e.x - doorW, e.y + 10);
      ctx.lineTo(e.x - 6, e.y + 22);
      ctx.moveTo(e.x + doorW, e.y + 10);
      ctx.lineTo(e.x + 6, e.y + 22);
      ctx.stroke();
      if (warn) {
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = `rgba(255,220,100,${0.5 + flash * 0.4})`;
        ctx.beginPath(); ctx.ellipse(e.x, e.y + 18, 28, 16, 0, 0, TAU); ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.restore();
    }

    (e.missiles || []).forEach(m => {
      if (m.dead) {
        const u = Math.max(0, m.dieT / 0.26);
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        const rg = ctx.createRadialGradient(m.x, m.y, 2, m.x, m.y, 22 * (1.4 - u));
        rg.addColorStop(0, `rgba(255,220,140,${0.8 * u})`);
        rg.addColorStop(1, 'rgba(255,80,20,0)');
        ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(m.x, m.y, 22 * (1.4 - u), 0, TAU); ctx.fill();
        ctx.restore();
        return;
      }
      if (Vox.MODELS && Vox.MODELS.missile) {
        Vox.groundShadow(ctx, m.x, m.y, 10, { a: 0.32 });
        Vox.draw(ctx, Vox.MODELS.missile, m.x, m.y, {
          s: m.flash > 0 ? 5.1 : 4.6,
          yaw: (m.yaw || 0) + Math.PI / 2,
          t: m.t, thrust: 1, flameColor: '#ffd24a',
        });
      }
      const pct = Engine.clamp(m.hp / m.maxHp, 0, 1);
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(m.x - 10, m.y - 18, 20, 3);
      ctx.fillStyle = pct < 0.35 ? '#ff6a4a' : '#ffe08a';
      ctx.fillRect(m.x - 10, m.y - 18, 20 * pct, 3);
    });
    (e.bombs || []).forEach(b => {
      if (b.dead) {
        const u = Math.max(0, b.dieT / (b.boom ? 0.38 : 0.22));
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        const rad = b.boom ? b.rBlast * (1.05 - u * 0.35) : 22;
        const rg = ctx.createRadialGradient(b.x, b.y, 4, b.x, b.y, rad);
        rg.addColorStop(0, `rgba(255,240,180,${0.85 * u})`);
        rg.addColorStop(0.4, `rgba(255,100,40,${0.5 * u})`);
        rg.addColorStop(1, 'rgba(255,40,10,0)');
        ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(b.x, b.y, rad, 0, TAU); ctx.fill();
        if (b.boom) {
          ctx.strokeStyle = `rgba(255,210,80,${0.7 * u})`;
          ctx.lineWidth = 3;
          ctx.beginPath(); ctx.arc(b.x, b.y, rad * 0.82, 0, TAU); ctx.stroke();
        }
        ctx.restore();
        return;
      }
      const fusePct = Engine.clamp(b.fuse / b.fuseMax, 0, 1);
      const warnR = 20 + (1 - fusePct) * (b.rBlast - 20);
      const hot = fusePct < 0.35;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const fill = ctx.createRadialGradient(b.x, b.y, 4, b.x, b.y, warnR);
      fill.addColorStop(0, `rgba(255,80,30,${hot ? 0.16 : 0.06})`);
      fill.addColorStop(1, 'rgba(255,40,10,0)');
      ctx.fillStyle = fill;
      ctx.beginPath(); ctx.arc(b.x, b.y, warnR, 0, TAU); ctx.fill();
      ctx.strokeStyle = hot
        ? `rgba(255,80,40,${0.5 + 0.45 * Math.abs(Math.sin(e.t * 16))})`
        : `rgba(255,180,60,${0.4 + 0.2 * Math.sin(e.t * 6)})`;
      ctx.lineWidth = hot ? 3 : 2;
      ctx.setLineDash(hot ? [4, 4] : [8, 6]);
      ctx.beginPath(); ctx.arc(b.x, b.y, warnR, 0, TAU); ctx.stroke();
      ctx.setLineDash([]);
      // Arming ring: the proximity trigger has to be visible BEFORE it fires, or
      // a mine that goes off near you reads as an unfair hit rather than a
      // warning you ignored.
      if ((b.armT || 0) > 0) {
        const k = 1 - b.armT / 0.42;
        ctx.globalAlpha = 0.85;
        ctx.strokeStyle = '#fff2a0';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.rArm * (1 - k * 0.55), 0, TAU); ctx.stroke();
        ctx.globalAlpha = 0.5 + 0.5 * Math.abs(Math.sin(e.t * 40));
        ctx.strokeStyle = '#ff4a20';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.rBlast * 0.55, 0, TAU); ctx.stroke();
        ctx.globalAlpha = 1;
      } else {
        // idle: a faint dashed hint of where the trigger ring sits
        ctx.globalAlpha = 0.16 + 0.08 * Math.sin(e.t * 3);
        ctx.strokeStyle = '#ffb060';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 7]);
        ctx.beginPath(); ctx.arc(b.x, b.y, b.rArm, 0, TAU); ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
      }
      ctx.restore();
      if (Vox.MODELS && Vox.MODELS.siloBomb) {
        Vox.groundShadow(ctx, b.x, b.y, 14, { a: 0.4 });
        Vox.draw(ctx, Vox.MODELS.siloBomb, b.x, b.y, {
          s: b.flash > 0 ? 5.6 : 5.0,
          yaw: 0, roll: b.rot, pitch: 0.95,
          t: e.t, thrust: 0.45 + (1 - fusePct) * 0.4, flameColor: '#ff8040',
        });
      } else {
        ctx.fillStyle = b.flash > 0 ? '#fff' : '#e04040';
        ctx.beginPath(); ctx.arc(b.x, b.y, 11, 0, TAU); ctx.fill();
      }
      const pct = Engine.clamp(b.hp / b.maxHp, 0, 1);
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(b.x - 12, b.y - 24, 24, 3);
      ctx.fillStyle = pct < 0.35 ? '#ff6a4a' : '#ffd24a';
      ctx.fillRect(b.x - 12, b.y - 24, 24 * pct, 3);
    });
  }

  // Voxel boss visuals: archetype model + monochrome tint per boss key.
  // 6 distinct silhouettes across the 15 bosses (was 4) + a unique tint each.
  const BOSS_VOX = {
    nebula:      ['bossWarden', null], asteroid:    ['bossRock',  null],
    hive:        ['bossHive',  null], void:        ['bossStar',  '#7a54c8'],
    ember:       ['bossRock',  '#c86a3a'], frost:       ['bossOrb',   '#5a9cd8'],
    nexus:       ['bossCross', '#3fa87e'], core:        ['bossOrb',   '#c8a840'],
    warden:      ['bossOrb',   '#4a7ac0'], leviathan:   ['bossRock',  '#8a7a5a'],
    reaper:      ['boss',      '#8a4ac0'], dreadnought: ['bossCross', '#5a6488'],
    titan:       ['bossStar',  '#7a3ac0'], overmind:    ['bossRound', '#3a9c50'],
    singularity: ['bossStar',  '#d8a020'],
    privateer:   ['bossSail',  null],
    heliot:      ['bossHeliot', null],
    silo:        ['bossSilo',  null],
    relayCore:   ['relay',     '#c04050'],
  };
  // per-archetype motion — slow enough to sell volume without "washing machine" spin.
  function bossAnim(arch, t, e) {
    switch (arch) {
      case 'bossRock':  return { yaw: t * 0.28, roll: t * 0.14, pitch: 0.98, thrust: 0 };           // deliberate tumble
      case 'bossOrb':
      case 'bossRound': return { yaw: t * 0.16, roll: Math.sin(t * 0.4) * 0.04, pitch: 0.98, thrust: 0 };
      case 'bossStar':  return { yaw: t * 0.22, roll: Math.sin(t * 0.5) * 0.05, pitch: 0.98, thrust: 0 };
      case 'bossCross': return { yaw: Math.PI + t * 0.12, roll: Math.sin(t * 0.45) * 0.04, pitch: 0.98, thrust: 0 };
      case 'bossWarden': return { yaw: Math.PI + Math.sin(t * 0.38) * 0.08, roll: Math.sin(t * 0.55) * 0.05, pitch: 0.96, thrust: 0.7 };
      case 'bossHive':   return { yaw: Math.PI + Math.sin(t * 0.24) * 0.1, roll: Math.sin(t * 1.15) * 0.06, pitch: 0.95, thrust: 0 };
      case 'bossSail': {
        const gale = e && e._windOn > 0;
        const warn = e && e._windWarn > 0;
        const heel = gale ? (e._windDir || 1) * 0.26
          : warn ? (e._windDir || 1) * 0.12 : 0;
        const lurch = e && e._lurch ? e._lurch * 0.01 : 0;
        const flutter = gale ? Math.sin(t * 7.5) * 0.05 : 0;
        return {
          yaw: Math.PI + Math.sin(t * 0.35) * 0.04 + flutter * 0.4,
          roll: Math.sin(t * 1.15) * 0.07 + heel + lurch + flutter,
          pitch: gale ? 0.80 : 0.84,
          thrust: gale ? 1 : warn ? 0.75 : 0.55,
        };
      }
      case 'bossHeliot': {
        const surge = e && e._magmaOn > 0;
        const warn = e && e._magmaWarn > 0;
        return {
          yaw: Math.PI + (surge ? t * 0.58 : t * 0.24) + Math.sin(t * 0.45) * 0.05,
          roll: Math.sin(t * (surge ? 2.3 : 0.75)) * (surge ? 0.13 : 0.05)
            + (warn ? Math.sin(t * 22) * 0.045 : 0),
          pitch: surge ? 0.86 : 0.93,
          thrust: surge ? 1 : warn ? 0.7 : 0.45,
          flameColor: '#ff6a20',
        };
      }
      case 'bossLava':  return { yaw: t * 0.35, roll: t * 0.18, pitch: 0.95, thrust: 0 };
      case 'bossSilo': {
        const bay = e && e._cycle === 'bay';
        const warn = e && e._cycle === 'warn';
        return {
          yaw: Math.PI + Math.sin(t * 0.2) * 0.05,
          roll: Math.sin(t * (bay ? 1.5 : 0.55)) * (bay ? 0.07 : 0.03)
            + (warn ? Math.sin(t * 20) * 0.035 : 0),
          pitch: bay ? 0.86 : 0.93,
          thrust: bay ? 0.9 : 0.45,
          flameColor: '#ff5030',
        };
      }
      case 'relay':     return { yaw: Math.PI + Math.sin(t * 0.2) * 0.06, roll: 0, pitch: 0.95, thrust: 0 };
      default:          return { yaw: Math.PI + Math.sin(t * 0.28) * 0.14, roll: Math.sin(t * 0.4) * 0.05, pitch: 0.98, thrust: 1 };
    }
  }
  const bossModelCache = {};
  function bossModel(key) {
    if (bossModelCache[key]) return bossModelCache[key];
    const [arch, tint] = BOSS_VOX[key] || BOSS_VOX.nebula;
    const base = Vox.MODELS[arch];
    return (bossModelCache[key] = tint ? Vox.retint(base, tint) : base);
  }

  /**
   * Temporary boss shields — assigned to a subset of bosses (not all, not one).
   *   orbit  — rotating arc shell; bullets blocked only when shell faces impact
   *   pulse  — cyclic full bubble ON/OFF
   *   regen  — breakable outer HP; regenerates if you stop firing
   * Optional phase HP regen stays within the current damage stage cap.
   */
  const BOSS_SHIELD = {
    void: 'orbit', warden: 'pulse', nexus: 'regen', reaper: 'orbit',
    titan: 'pulse', leviathan: 'regen', dreadnought: 'orbit', frost: 'regen',
    overmind: 'pulse', relayCore: 'pulse',
  };

  function makeShield(mode, maxHp) {
    if (!mode) return null;
    // Orbit angle is canvas space: 0=east, π/2=south (player), −π/2=north
    const sh = {
      mode,
      angle: mode === 'orbit' ? Math.PI / 2 : 0, // start covering the approach from below
      arc: 0.95, // orbit half-width ~110°
      t: 0, period: 5.2, activeDur: 2.1, active: mode === 'regen',
      hp: mode === 'regen' ? maxHp * 0.22 : 0,
      maxHp: mode === 'regen' ? maxHp * 0.22 : 0,
      flash: 0, lastHitT: 99,
      // Mild hull recovery only for pulse/regen (orbit is pure arc gate)
      phaseRegen: mode === 'pulse' || mode === 'regen',
    };
    if (mode === 'pulse') { sh.active = false; sh.t = 0.4; }
    return sh;
  }

  function tickShield(e, dt) {
    const sh = e.shield;
    if (!sh) return;
    sh.t += dt;
    sh.lastHitT += dt;
    if (sh.flash > 0) sh.flash -= dt;
    if (sh.mode === 'orbit') {
      sh.angle = (sh.angle + dt * 1.15) % Engine.TAU;
      sh.active = true; // always "on", but only the arc blocks
    } else if (sh.mode === 'pulse') {
      const cyc = sh.t % sh.period;
      sh.active = cyc < sh.activeDur;
    } else if (sh.mode === 'regen') {
      // Rebuild after break if player stops hitting
      if (sh.hp <= 0 && sh.lastHitT > 1.6) {
        sh.hp = Math.min(sh.maxHp, sh.hp + sh.maxHp * 0.4 * dt);
        if (sh.hp >= sh.maxHp * 0.12) sh.active = true;
      } else if (sh.hp > 0 && sh.hp < sh.maxHp && sh.lastHitT > 1.0) {
        sh.hp = Math.min(sh.maxHp, sh.hp + sh.maxHp * 0.32 * dt);
        sh.active = true;
      }
      if (sh.hp <= 0) sh.active = false;
    }
    // Phase-bound hull regen — slow, only after a real pause in fire
    if (sh.phaseRegen && sh.lastHitT > 2.0 && e.entered) {
      const phases = e.def.phases || 3;
      const cap = phases >= 4
        ? (e.phase >= 3 ? 0.25 : e.phase >= 2 ? 0.5 : e.phase >= 1 ? 0.75 : 1)
        : (e.phase >= 2 ? 0.33 : e.phase >= 1 ? 0.66 : 1);
      const capHp = e.maxHp * cap;
      if (e.hp < capHp - 1) {
        e.hp = Math.min(capHp, e.hp + e.maxHp * 0.012 * dt);
      }
    }
  }

  /**
   * True if shield absorbed the hit (no hull damage).
   * Spawns impact sparks on block.
   */
  function absorbBossHit(e, dmg, hx, hy) {
    const sh = e.shield;
    if (!sh) return false;

    if (sh.mode === 'orbit') {
      // Canvas angle of impact from boss center (matches drawShield arcs)
      const ang = Math.atan2(hy - e.y, hx - e.x);
      let da = ang - sh.angle;
      const TAU = Engine.TAU;
      while (da > Math.PI) da -= TAU;
      while (da < -Math.PI) da += TAU;
      if (Math.abs(da) <= sh.arc) {
        sh.lastHitT = 0;
        sh.flash = 0.16;
        Engine.burst(hx, hy, '#7de0ff', 6, 3.2, 2.4);
        Engine.burst(hx, hy, '#ffffff', 3, 2.2, 1.6);
        try { Engine.audio.blip(880, 0.03, 'triangle', 0.05); } catch (err) {}
        return true;
      }
      // Open gap — hull takes the hit (lastHitT for phase regen still updates)
      sh.lastHitT = 0;
      return false;
    }

    if (sh.mode === 'pulse') {
      if (!sh.active) {
        sh.lastHitT = 0;
        return false;
      }
      sh.lastHitT = 0;
      sh.flash = 0.14;
      Engine.burst(hx, hy, '#9ad0ff', 5, 2.8, 2.2);
      Engine.burst(hx, hy, '#cfefff', 3, 2, 1.5);
      try { Engine.audio.blip(720, 0.03, 'sine', 0.045); } catch (err) {}
      return true;
    }

    if (sh.mode === 'regen') {
      if (sh.hp <= 0) {
        sh.lastHitT = 0;
        return false;
      }
      sh.lastHitT = 0;
      sh.hp -= dmg;
      sh.flash = 0.14;
      Engine.burst(hx, hy, '#5ad0ff', 5, 2.6, 2);
      if (sh.hp <= 0) {
        sh.hp = 0; sh.active = false;
        Engine.burst(e.x, e.y, '#9ef0ff', 14, 5, 3.5);
        try { Engine.audio.explode(); } catch (err) {}
      } else {
        try { Engine.audio.blip(640, 0.03, 'triangle', 0.04); } catch (err) {}
      }
      return true;
    }
    return false;
  }

  /**
   * Cinematic boss energy shields (visual only — absorb rules unchanged).
   * Layered glow + hex lattice + hit flash so shells read as real force fields.
   */
  function drawShield(e, ctx) {
    const sh = e.shield;
    if (!sh) return;
    const r = e.r * 1.18;
    const t = e.t || 0;
    const hit = sh.flash > 0 ? Engine.clamp(sh.flash / 0.16, 0, 1) : 0;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    // Soft under-glow always when shell is relevant
    const underGlow = (alpha, rad) => {
      const g = ctx.createRadialGradient(e.x, e.y, rad * 0.35, e.x, e.y, rad);
      g.addColorStop(0, `rgba(90,200,255,${alpha * 0.55})`);
      g.addColorStop(0.55, `rgba(40,140,220,${alpha * 0.22})`);
      g.addColorStop(1, 'rgba(20,80,160,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(e.x, e.y, rad, 0, Engine.TAU); ctx.fill();
    };

    /** Hex lattice along an arc (orbit) or full ring. a0/a1 in canvas angles. */
    const drawHexLattice = (radius, a0, a1, alpha, dens) => {
      const span = a1 - a0;
      const steps = Math.max(6, Math.round(Math.abs(span) * dens));
      ctx.strokeStyle = `rgba(160,230,255,${alpha})`;
      ctx.lineWidth = 1.1;
      ctx.lineCap = 'round';
      for (let i = 0; i <= steps; i++) {
        const a = a0 + (span * i) / steps;
        const wob = 1 + 0.018 * Math.sin(t * 5 + i * 0.9);
        const rr = radius * wob;
        const x = e.x + Math.cos(a) * rr;
        const y = e.y + Math.sin(a) * rr;
        const s = 3.2 + (i % 3) * 0.6;
        ctx.beginPath();
        for (let k = 0; k < 6; k++) {
          const ha = a + (k / 6) * Math.PI * 2 + t * 0.4;
          const px = x + Math.cos(ha) * s;
          const py = y + Math.sin(ha) * s;
          if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }
      // energy nodes along rim
      ctx.fillStyle = `rgba(200,245,255,${alpha * 1.2})`;
      for (let i = 0; i < steps; i += 2) {
        const a = a0 + (span * i) / steps + t * 0.15;
        const x = e.x + Math.cos(a) * radius;
        const y = e.y + Math.sin(a) * radius;
        ctx.beginPath(); ctx.arc(x, y, 1.4 + hit * 1.2, 0, Engine.TAU); ctx.fill();
      }
    };

    if (sh.mode === 'orbit') {
      // sh.angle is already canvas space (same as absorbBossHit)
      const a0 = sh.angle - sh.arc;
      const a1 = sh.angle + sh.arc;
      const thick = 7 + hit * 5;
      underGlow(0.12 + hit * 0.15, r * 1.25);

      // Outer bloom
      ctx.strokeStyle = `rgba(40,150,255,${0.22 + hit * 0.25})`;
      ctx.lineWidth = thick + 14;
      ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(e.x, e.y, r * 1.02, a0, a1); ctx.stroke();

      // Mid plate
      ctx.strokeStyle = hit > 0
        ? `rgba(255,255,255,${0.55 + hit * 0.4})`
        : `rgba(120,210,255,${0.55 + 0.12 * Math.sin(t * 6)})`;
      ctx.lineWidth = thick;
      ctx.beginPath(); ctx.arc(e.x, e.y, r, a0, a1); ctx.stroke();

      // Hot core edge
      ctx.strokeStyle = `rgba(220,250,255,${0.75 + hit * 0.25})`;
      ctx.lineWidth = 2.2 + hit * 2;
      ctx.beginPath(); ctx.arc(e.x, e.y, r * 0.97, a0, a1); ctx.stroke();

      // Inner secondary plate (parallax depth)
      ctx.strokeStyle = `rgba(80,170,255,${0.28 + hit * 0.2})`;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(e.x, e.y, r * 0.88, a0 + 0.06, a1 - 0.06); ctx.stroke();

      drawHexLattice(r * 0.99, a0, a1, 0.35 + hit * 0.35, 9);

      // Leading edge glints (where the arc "cuts" space)
      for (const ae of [a0, a1]) {
        const gx = e.x + Math.cos(ae) * r;
        const gy = e.y + Math.sin(ae) * r;
        const gg = ctx.createRadialGradient(gx, gy, 0, gx, gy, 14 + hit * 8);
        gg.addColorStop(0, `rgba(255,255,255,${0.75 + hit * 0.25})`);
        gg.addColorStop(0.4, `rgba(140,220,255,${0.45})`);
        gg.addColorStop(1, 'rgba(40,120,255,0)');
        ctx.fillStyle = gg;
        ctx.beginPath(); ctx.arc(gx, gy, 14 + hit * 8, 0, Engine.TAU); ctx.fill();
      }
    } else if (sh.mode === 'pulse' && sh.active) {
      const pulse = 0.72 + 0.28 * Math.sin(t * 9);
      const breath = 1 + 0.03 * Math.sin(t * 4.5);
      underGlow(0.16 * pulse + hit * 0.12, r * 1.28 * breath);

      // Expanding ripple rings (cinematic field)
      for (let k = 0; k < 2; k++) {
        const ph = (t * 1.1 + k * 0.5) % 1;
        const rr = r * (0.75 + ph * 0.55) * breath;
        ctx.strokeStyle = `rgba(130,210,255,${(1 - ph) * 0.35 * pulse})`;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(e.x, e.y, rr, 0, Engine.TAU); ctx.stroke();
      }

      // Hex shell outline (12 facets ≈ force bubble)
      const facets = 12;
      ctx.beginPath();
      for (let i = 0; i <= facets; i++) {
        const a = (i / facets) * Engine.TAU + t * 0.15;
        const rr = r * 1.05 * breath * (1 + 0.012 * Math.sin(t * 7 + i));
        const x = e.x + Math.cos(a) * rr;
        const y = e.y + Math.sin(a) * rr;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = hit > 0 ? `rgba(255,255,255,${0.85})` : `rgba(150,220,255,${0.5 * pulse})`;
      ctx.lineWidth = 2.4 + hit * 2.5;
      ctx.stroke();
      ctx.strokeStyle = `rgba(70,160,255,${0.2 * pulse})`;
      ctx.lineWidth = 9;
      ctx.stroke();

      drawHexLattice(r * 1.02 * breath, 0, Engine.TAU, 0.22 * pulse + hit * 0.2, 5);

      // Bright rim
      ctx.strokeStyle = `rgba(210,245,255,${0.4 * pulse + hit * 0.4})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(e.x, e.y, r * 0.92 * breath, 0, Engine.TAU); ctx.stroke();
    } else if (sh.mode === 'regen' && sh.hp > 0) {
      const pct = Engine.clamp(sh.hp / sh.maxHp, 0, 1);
      const crack = 1 - pct;
      const breath = 1 + 0.02 * Math.sin(t * 3.2);
      underGlow(0.1 + 0.14 * pct + hit * 0.1, r * 1.2);

      // Crystalline shell body
      const facets = 10;
      ctx.beginPath();
      for (let i = 0; i <= facets; i++) {
        const a = (i / facets) * Engine.TAU - t * 0.08;
        const jagged = 1 + crack * 0.04 * Math.sin(i * 2.7 + t);
        const rr = r * 1.04 * breath * jagged;
        const x = e.x + Math.cos(a) * rr;
        const y = e.y + Math.sin(a) * rr;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = hit > 0
        ? `rgba(255,255,255,${0.9})`
        : `rgba(100,210,255,${0.3 + 0.5 * pct})`;
      ctx.lineWidth = 2.2 + pct * 2.2 + hit * 2;
      ctx.stroke();
      ctx.strokeStyle = `rgba(50,140,220,${0.18 + 0.15 * pct})`;
      ctx.lineWidth = 8;
      ctx.stroke();

      // Fracture lines when damaged
      if (crack > 0.08) {
        ctx.strokeStyle = `rgba(180,230,255,${0.15 + crack * 0.35})`;
        ctx.lineWidth = 1.2;
        for (let i = 0; i < 5; i++) {
          const a = t * 0.3 + i * 1.1;
          const r0 = r * 0.55, r1 = r * (0.95 + crack * 0.08);
          ctx.beginPath();
          ctx.moveTo(e.x + Math.cos(a) * r0, e.y + Math.sin(a) * r0);
          ctx.lineTo(e.x + Math.cos(a + 0.15) * r1, e.y + Math.sin(a + 0.12) * r1);
          ctx.stroke();
        }
      }

      drawHexLattice(r * 0.98 * breath, 0, Engine.TAU, 0.18 + 0.2 * pct + hit * 0.15, 4.5);

      // Shield HP pip (above boss)
      const bw = 40, bh = 4;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(e.x - bw / 2, e.y - e.r - 16, bw, bh);
      const hg = ctx.createLinearGradient(e.x - bw / 2, 0, e.x + bw / 2, 0);
      hg.addColorStop(0, '#2a90c8');
      hg.addColorStop(0.5, '#8ef0ff');
      hg.addColorStop(1, '#4ad0ff');
      ctx.fillStyle = hg;
      ctx.fillRect(e.x - bw / 2, e.y - e.r - 16, bw * pct, bh);
      ctx.strokeStyle = 'rgba(140,220,255,0.45)';
      ctx.lineWidth = 1;
      ctx.strokeRect(e.x - bw / 2, e.y - e.r - 16, bw, bh);
    }
    ctx.restore();
  }

  // Build a boss for a given boss-archetype key (falls back to nebula).
  function makeBoss(bossKey, wave) {
    const def = BOSSES[bossKey] || BOSSES.nebula;
    // Cap the wave used for HP so a late-campaign boss stays beatable; ultra
    // bosses carry their menace in a big baseHp instead of runaway scaling.
    const scaleWave = Math.min(wave, 45);
    const maxHp = def.baseHp + scaleWave * def.hpPerWave;
    const phases = def.phases || 3;             // ultra bosses run 4 phases
    const shieldMode = BOSS_SHIELD[bossKey] || null;
    return {
      isBoss: true, alive: true, def, ultra: !!def.ultra,
      nameKey: def.nameKey, sprite: def.sprite,
      x: Engine.W / 2, y: -120, r: def.r,
      hp: maxHp, maxHp,
      t: 0, fireT: 0, phase: 0, flash: 0, entered: false,
      shield: makeShield(shieldMode, maxHp),
      score: 5000 + wave * 1000 + (def.ultra ? 20000 : 0),
      update(e, dt) {
        e.t += dt;
        if (!e.entered) {
          if (def.enter) {
            def.enter(e, dt);
          } else {
            e.y = Engine.lerp(e.y, 130, 0.03);
            if (e.y > 125) { e.entered = true; e.strafeT0 = e.t; }
          }
          tickShield(e, dt);
          if (def.tick && !e.entered) def.tick(e, dt, 0);
          return;
        }
        if (def.motion) {
          def.motion(e, dt, e.phase);
        } else if (def.stationary) {
          e.y = Engine.lerp(e.y, def.parkY || 130, 0.06);
        } else {
          e.x = Engine.W / 2 + Math.sin((e.t - e.strafeT0) * def.strafe) * (Engine.W / 2 - 80);
        }
        const ratio = e.hp / e.maxHp;
        const phase = phases >= 4
          ? (ratio > 0.75 ? 0 : ratio > 0.5 ? 1 : ratio > 0.25 ? 2 : 3)
          : (ratio > 0.66 ? 0 : ratio > 0.33 ? 1 : 2);
        if (phase !== e.phase) {
          e.phase = phase;
          // Warden seal is its own cinematic; a phase-break boom reads as a jump.
          if (!def.quietPhase) {
            Engine.audio.boss();
            Engine.audio.explode();
            const boom = e.ultra ? 1.35 : 1;
            Engine.shake(e.ultra ? 22 : 16);
            Engine.burst(e.x, e.y, '#ffffff', Math.round(28 * boom), 8 * boom, 5);
            Engine.burst(e.x, e.y, '#ffd24a', Math.round(36 * boom), 10 * boom, 6);
            Engine.burst(e.x, e.y, '#ff6a30', Math.round(30 * boom), 9 * boom, 5);
            Engine.burst(e.x, e.y - 10, '#43434e', Math.round(18 * boom), 6 * boom, 4);
            e.phaseFlash = 0.28;
            if (e.shield && e.shield.mode === 'regen') {
              e.shield.hp = e.shield.maxHp * 0.85;
              e.shield.active = true;
            }
          }
        }
        tickShield(e, dt);
        if (def.tick) def.tick(e, dt, phase);
        e.fireT -= dt;
        if (e.fireT > 0) return;
        def.attack(e, phase);
      },
      draw(e, ctx) {
        // LIVE 3D voxel boss: per-archetype motion (spin / tumble / menace).
        const m = bossModel(bossKey);
        const arch = (BOSS_VOX[bossKey] || BOSS_VOX.nebula)[0];
        const a = bossAnim(arch, e.t, e);
        Vox.groundShadow(ctx, e.x, e.y, e.r * 1.05, { a: 0.5 });
        Vox.draw(ctx, m, e.x, e.y, {
          s: (e.r * 2.15 / m.w) * (def.voxScale || 1.3),
          yaw: a.yaw, roll: a.roll, pitch: a.pitch == null ? 1.05 : a.pitch,
          t: e.t, thrust: a.thrust, flameColor: a.flameColor || '#ff4adf',
        });
        if (def.drawExtra) def.drawExtra(e, ctx);
        drawShield(e, ctx);
        // Phase-break flash (set when HP threshold crossed)
        if (e.phaseFlash > 0) {
          e.phaseFlash -= 1 / 60;
          const u = Math.max(0, e.phaseFlash / 0.28);
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          ctx.globalAlpha = 0.55 * u;
          const rg = ctx.createRadialGradient(e.x, e.y, 4, e.x, e.y, e.r * (1.2 + (1 - u) * 0.8));
          rg.addColorStop(0, 'rgba(255,255,240,0.9)');
          rg.addColorStop(0.35, 'rgba(255,160,60,0.55)');
          rg.addColorStop(1, 'rgba(255,40,20,0)');
          ctx.fillStyle = rg;
          ctx.beginPath(); ctx.arc(e.x, e.y, e.r * (1.4 + (1 - u)), 0, Engine.TAU); ctx.fill();
          ctx.restore();
        }
        // ---- 3 damage stages tied to HP thirds: pristine → smoking → burning ----
        const ratio = e.hp / e.maxHp;
        const stage = ratio < 0.34 ? 2 : ratio < 0.67 ? 1 : 0;
        if (stage >= 1) {
          const rr = e.r;
          // rising smoke puffs + fire embers from random hull points
          if (Math.random() < (stage === 2 ? 0.55 : 0.28)) {
            const ang = Math.random() * Engine.TAU, d = Math.random() * rr * 0.65;
            Engine.burst(e.x + Math.cos(ang) * d, e.y + Math.sin(ang) * d - 6, stage === 2 ? '#43434e' : '#5a5a66', 1, 0.5, stage === 2 ? 4 : 3);
          }
          if (Math.random() < (stage === 2 ? 0.45 : 0.18)) {
            const ang = Math.random() * Engine.TAU, d = Math.random() * rr * 0.55;
            Engine.burst(e.x + Math.cos(ang) * d, e.y + Math.sin(ang) * d, stage === 2 ? '#ff8a2a' : '#ff9a3d', 1, 1.4, 2);
          }
          // flickering fire pockets anchored to the hull
          ctx.save(); ctx.globalCompositeOperation = 'lighter';
          const nf = stage === 2 ? 4 : 2;
          for (let i = 0; i < nf; i++) {
            const sd = i * 2.399;
            const fx = e.x + Math.sin(e.t * 1.3 + sd) * rr * 0.5;
            const fy = e.y + Math.cos(e.t * 1.7 + sd) * rr * 0.42;
            const fl = 0.4 + 0.6 * Math.abs(Math.sin(e.t * 8 + sd * 3));
            const gr = ctx.createRadialGradient(fx, fy, 0, fx, fy, 7 + fl * 8);
            gr.addColorStop(0, `rgba(255,225,140,${0.5 * fl})`);
            gr.addColorStop(0.45, `rgba(255,110,30,${0.4 * fl})`);
            gr.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(fx, fy, 7 + fl * 8, 0, Engine.TAU); ctx.fill();
          }
          ctx.restore();
        }
        if (stage === 2) {
          // critical: pulsing red enrage glow over the core
          const p = 0.5 + 0.5 * Math.sin(e.t * 8);
          ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.3 + 0.28 * p;
          const g = ctx.createRadialGradient(e.x, e.y, 2, e.x, e.y, e.r * 0.55);
          g.addColorStop(0, '#ff6a5a'); g.addColorStop(1, 'rgba(255,74,60,0)');
          ctx.fillStyle = g; ctx.fillRect(e.x - e.r, e.y - e.r, e.r * 2, e.r * 2);
          ctx.restore();
        }
      },
    };
  }

  /**
   * Draw force-field shield at an arbitrary point (boss-quality visual).
   * Used by orbit assault base shield — same art as boss pulse/orbit shells.
   * sh: { mode, active, angle, arc, flash, t }  (minimal pulse needs active+flash)
   */
  function drawForceShield(ctx, x, y, radius, sh, t) {
    if (!sh) return;
    drawShield({ x, y, r: radius, shield: sh, t: t != null ? t : (sh.t || 0) }, ctx);
  }

  return { types, makeBoss, absorbBossHit, drawForceShield, makeShield, tickShield };
})();
