/* Chroma Echo — main: stage layout, drag & drop, beat FX, transport wiring */
window.CE = window.CE || {};
(function (CE) {
  'use strict';
  const KEYS = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9 };
  const SAVE_KEY = 'chroma-echo-mix-v1';

  class Game {
    constructor(root) {
      this.root = root;
      this.engine = new CE.AudioEngine();
      this.app = new PIXI.Application({
        antialias: true, backgroundAlpha: 0, resolution: Math.min(2, devicePixelRatio || 1),
        autoDensity: true, resizeTo: root, preserveDrawingBuffer: true,
      });
      root.appendChild(this.app.view);

      // layers
      this.bgSprite = new PIXI.Sprite(PIXI.Texture.WHITE);
      this.bgGlow = new PIXI.Graphics();
      this.fxBack = new PIXI.Container();
      this.charLayer = new PIXI.Container();
      this.particles = new CE.Particles();
      this.stepLayer = new PIXI.Container();
      this.paletteWrap = new PIXI.Container();
      this.palette = new PIXI.Container(); this.paletteWrap.addChild(this.palette);
      this.hint = new PIXI.Text('', { fontFamily: 'Baloo 2, system-ui', fontSize: 17, fontWeight: '700', fill: 0x8b7fb0 });
      this.hint.anchor.set(0.5);
      this.dragLayer = new PIXI.Container();
      this.app.stage.addChild(this.bgSprite, this.bgGlow, this.fxBack, this.charLayer,
        this.particles.view, this.stepLayer, this.paletteWrap, this.hint, this.dragLayer);

      this.slots = [];
      this.orbs = [];
      this.stepDots = [];
      this.drag = null;
      this.flash = 0; this.barFlash = 0; this.curStep = 0;
      this.usedCostumes = {};

      this.app.stage.eventMode = 'static';
      this.app.stage.hitArea = this.app.screen;
      this.app.stage.on('pointermove', e => this.onMove(e));
      this.app.stage.on('pointerup', e => this.onUp(e));
      this.app.stage.on('pointerupoutside', e => this.onUp(e));

      this.buildSlots();
      this.buildPalette();
      this.layout();
      this.app.renderer.on('resize', () => this.layout());
      // re-layout when the (responsive) bar grows/shrinks rows independently of the canvas
      const barEl = document.getElementById('bar');
      if (barEl && window.ResizeObserver) {
        this._barRO = new ResizeObserver(() => this.layout());
        this._barRO.observe(barEl);
      }
      this.app.ticker.add(() => this.tick());
    }

    // ---- build --------------------------------------------------------------
    buildSlots() {
      for (let i = 0; i < 7; i++) {
        const cont = new PIXI.Container();
        const pad = new PIXI.Graphics();
        const ring = new PIXI.Graphics(); // empty-slot hint
        const blob = new CE.Blob(i);
        const ctrl = this.makeControls(i);
        cont.addChild(pad, ring, blob.view, ctrl);
        this.charLayer.addChild(cont);
        blob.view.eventMode = 'static'; blob.view.cursor = 'grab';
        blob.view.on('pointerdown', e => this.onCharDown(i, e));
        this.slots.push({ i, cont, pad, ring, blob, ctrl, costumeId: null, x: 0, y: 0 });
      }
    }
    makeControls(i) {
      const c = new PIXI.Container(); c.visible = false;
      const mk = (label, col) => {
        const b = new PIXI.Container(); b.eventMode = 'static'; b.cursor = 'pointer';
        const g = new PIXI.Graphics();
        const t = new PIXI.Text(label, { fontFamily: 'Baloo 2, system-ui', fontSize: 16, fontWeight: '800', fill: 0xffffff });
        t.anchor.set(0.5); b.addChild(g, t); b._g = g; b._col = col; b._on = false;
        b._render = () => { g.clear().beginFill(b._on ? col : 0xffffff, 1).lineStyle(2, col).drawCircle(0, 0, 15).endFill(); t.style.fill = b._on ? 0xffffff : col; };
        b._render();
        return b;
      };
      const m = mk('M', 0xff7aa8), s = mk('S', 0x5cc8ff);
      m.x = -19; s.x = 19;
      m.on('pointertap', () => this.toggleMute(i));
      s.on('pointertap', () => this.toggleSolo(i));
      c.addChild(m, s); c._m = m; c._s = s;
      return c;
    }
    buildPalette() {
      CE.COSTUMES.forEach(cost => {
        const orb = new CE.Orb(cost);
        orb.view.on('pointerdown', e => this.onOrbDown(orb, e));
        this.palette.addChild(orb.view);
        this.orbs.push(orb);
      });
      this.paletteWrap.addChild(this.hint);
    }

    // ---- layout -------------------------------------------------------------
    layout() {
      const W = this.app.screen.width, H = this.app.screen.height;
      // background gradient
      const tex = CE.gradientTexture(W, H, [[0, '#ffe3f1'], [0.42, '#f3e9ff'], [0.72, '#e6f0ff'], [1, '#e2fbf3']]);
      this.bgSprite.texture = tex; this.bgSprite.width = W; this.bgSprite.height = H;

      // reserve space for the actual (responsive, possibly multi-row) transport bar
      const barEl = document.getElementById('bar');
      const topPad = (barEl ? barEl.offsetHeight : 72) + 8;
      // palette shrinks on short iframes so the stage keeps breathing room
      const paletteH = Math.max(78, Math.min(180, H * 0.24));
      const paletteTop = H - paletteH;
      const availH = Math.max(50, paletteTop - topPad);
      const charY = topPad + availH * 0.52;

      // slots — scale by both the horizontal gap and the vertical room available
      const n = this.slots.length;
      const avail = Math.min(W - 40, 1180);
      const gap = avail / n;
      const sH = gap / 168;
      const sV = availH / 210;        // a blob + pedestal is ~210px tall at s=1
      const s = Math.max(0.4, Math.min(1.18, Math.min(sH, sV)));
      const x0 = (W - gap * (n - 1)) / 2;
      this.slots.forEach((sl, i) => {
        sl.x = x0 + i * gap; sl.y = charY;
        sl.cont.position.set(sl.x, sl.y);
        sl.blob.setScale(s);
        sl.ctrl.y = 86 * s; sl.ctrl.scale.set(Math.min(1, s + 0.1));
        // pedestal
        sl.pad.clear().beginFill(0xffffff, 0.55).drawEllipse(0, 80 * s, 58 * s, 15 * s).endFill();
        sl.hitR = 70 * s;
        this.drawEmptyRing(sl, s);
      });

      // step dots row
      this.layoutSteps(W, paletteTop - 26);

      // palette
      this.paletteWrap.position.set(0, paletteTop);
      this.palettePanel = this.palettePanel || new PIXI.Graphics();
      if (!this.palettePanel.parent) this.paletteWrap.addChildAt(this.palettePanel, 0);
      this.palettePanel.clear().beginFill(0xffffff, 0.5).drawRoundedRect(16, 10, W - 32, paletteH - 22, 26).endFill();
      // the hint only fits when the palette is tall enough; hide it otherwise
      const showHint = paletteH > 130;
      this.hint.visible = showHint;
      this.hint.text = '✨  drag a friend onto a stage spot  ✨';
      this.hint.position.set(W / 2, paletteH - 20);

      // orbs row (grouped by category, centered, scaled to fit width AND height)
      let lastCat = null, x = 0;
      const baseGap = 86; const groupGap = 26;
      this.orbs.forEach(orb => {
        if (lastCat && orb.costume.cat !== lastCat) x += groupGap;
        orb._x = x; x += baseGap; lastCat = orb.costume.cat;
      });
      const totalW = x - baseGap + 60;
      const fitW = (W - 40) / totalW;
      const fitH = (paletteH - (showHint ? 30 : 14)) / 96;   // orb + label ≈ 96px tall
      const fit = Math.max(0.45, Math.min(1, fitW, fitH));
      const oy = (showHint ? (paletteH - 30) * 0.42 : paletteH * 0.45);
      const startX = Math.max(20, (W - totalW * fit) / 2);
      this.palette.scale.set(fit);
      this.palette.position.set(startX, 0);
      this.orbs.forEach(orb => { orb.view.position.set(orb._x + 30, oy / fit); });

      this.drawBgGlow();
    }
    drawEmptyRing(sl, s) {
      const r = sl.ring; r.clear();
      if (sl.costumeId) { r.visible = false; return; }
      r.visible = true;
      r.lineStyle({ width: 3 * s, color: 0xb9a9e0, alpha: 0.7, alignment: 0.5 });
      const rad = 50 * s;
      for (let a = 0; a < Math.PI * 2; a += 0.5) {
        r.moveTo(Math.cos(a) * rad, 4 * s + Math.sin(a) * rad * 1.04);
        r.lineTo(Math.cos(a + 0.28) * rad, 4 * s + Math.sin(a + 0.28) * rad * 1.04);
      }
      r.beginFill(0xb9a9e0, 0.9); CE.star(r, 0, 4 * s, 5 * s, 2.2 * s, 0xb9a9e0); r.endFill();
    }
    layoutSteps(W, y) {
      this.stepLayer.removeChildren(); this.stepDots = [];
      const n = 16; const gap = Math.min(26, (W - 120) / n);
      const x0 = (W - gap * (n - 1)) / 2;
      for (let i = 0; i < n; i++) {
        const g = new PIXI.Graphics();
        g.position.set(x0 + i * gap, y);
        this.stepLayer.addChild(g); this.stepDots.push(g);
      }
      this._stepY = y;
    }
    drawBgGlow() {
      const W = this.app.screen.width, H = this.app.screen.height;
      const active = this.slots.filter(s => s.costumeId).length;
      const a = Math.min(0.5, 0.06 + active * 0.05) * (0.6 + this.flash * 0.8);
      this.bgGlow.clear();
      this.bgGlow.beginFill(0xffffff, a).drawRect(0, 0, W, H).endFill();
    }

    // ---- drag: palette orb --------------------------------------------------
    onOrbDown(orb, e) {
      if (orb.used) return;
      this.engine.resume();
      const ghost = new CE.Orb(orb.costume); ghost.view.scale.set(1.18); ghost.view.alpha = 0.95;
      this.dragLayer.addChild(ghost.view);
      const p = e.global;
      ghost.view.position.set(p.x, p.y);
      this.drag = { type: 'orb', costume: orb.costume, ghost, orb, moved: false };
    }
    // ---- drag: lift costume off a character ---------------------------------
    onCharDown(i, e) {
      const sl = this.slots[i];
      if (!sl.costumeId) return;
      this.engine.resume();
      const cost = CE.costumeById(sl.costumeId);
      const ghost = new CE.Orb(cost); ghost.view.scale.set(1.1); ghost.view.alpha = 0.9;
      this.dragLayer.addChild(ghost.view);
      ghost.view.position.copyFrom(e.global);
      this.drag = { type: 'char', costume: cost, ghost, from: i, moved: false, startX: e.global.x, startY: e.global.y };
    }
    onMove(e) {
      if (!this.drag) return;
      const p = e.global;
      this.drag.ghost.view.position.set(p.x, p.y);
      if (this.drag.type === 'char') {
        const dx = p.x - this.drag.startX, dy = p.y - this.drag.startY;
        if (Math.hypot(dx, dy) > 8) this.drag.moved = true;
      } else this.drag.moved = true;
      // highlight nearest slot
      const target = this.slotAt(p.x, p.y);
      this.slots.forEach(sl => { sl.cont.scale.set(sl === target && this.canDrop(sl) ? 1.06 : 1); });
    }
    onUp(e) {
      if (!this.drag) return;
      const d = this.drag; this.drag = null;
      this.slots.forEach(sl => sl.cont.scale.set(1));
      this.dragLayer.removeChild(d.ghost.view); d.ghost.view.destroy({ children: true });
      const p = e.global; const target = this.slotAt(p.x, p.y);

      if (d.type === 'char' && !d.moved) { return; } // tap on character = no-op (use M/S buttons)

      if (d.type === 'orb') {
        if (target) {
          if (target.costumeId) this.clearSlot(target.i, true); // replace whoever was there
          this.assign(target.i, d.costume.id);
        }
        return;
      }
      // char drag
      if (target && target.i === d.from) return;      // back home
      if (target && !target.costumeId) {              // move to empty slot
        this.clearSlot(d.from, true);
        this.assign(target.i, d.costume.id);
      } else if (target) {                            // swap with the friend already there
        const other = target.costumeId;
        this.clearSlot(target.i, true);
        this.clearSlot(d.from, true);
        this.assign(target.i, d.costume.id);
        this.assign(d.from, other);
      } else {                                        // dropped away → remove
        const sl = this.slots[d.from];
        this.poof(sl.x, sl.y, CE.CAT[d.costume.cat].color);
        this.clearSlot(d.from);
      }
    }
    slotAt(x, y) {
      let best = null, bd = 1e9;
      for (const sl of this.slots) {
        const d = Math.hypot(x - sl.x, y - sl.y);
        if (d < (sl.hitR || 70) && d < bd) { bd = d; best = sl; }
      }
      return best;
    }
    canDrop(sl) {
      if (!this.drag) return false;
      if (this.drag.type === 'orb') return true;   // empty = place, occupied = replace
      return true;                                  // char: any slot = swap, home = no-op
    }

    // ---- arrangement ops ----------------------------------------------------
    assign(i, costumeId) {
      const sl = this.slots[i];
      sl.costumeId = costumeId;
      sl.blob.setCostume(CE.costumeById(costumeId));
      this.engine.assign('c' + i, costumeId);
      this.setUsed(costumeId, true);
      sl.ctrl.visible = true; this.syncCtrl(i);
      this.drawEmptyRing(sl, sl.blob._s);
      this.poof(sl.x, sl.y - 10, CE.CAT[CE.costumeById(costumeId).cat].color, 'burst');
      if (!this.engine.playing) this.play();
      this.afterChange();
    }
    clearSlot(i, silent) {
      const sl = this.slots[i];
      if (!sl.costumeId) return;
      this.setUsed(sl.costumeId, false);
      sl.costumeId = null;
      sl.blob.setCostume(null);
      this.engine.clearChar('c' + i);
      sl.ctrl.visible = false;
      this.drawEmptyRing(sl, sl.blob._s);
      if (!silent) this.afterChange();
    }
    setUsed(costumeId, used) {
      this.usedCostumes[costumeId] = used;
      const orb = this.orbs.find(o => o.costume.id === costumeId);
      if (orb) orb.setUsed(used);
    }
    toggleMute(i) {
      const sl = this.slots[i]; if (!sl.costumeId) return;
      const m = this.engine.toggleMute('c' + i); sl.blob.muted = m;
      this.syncCtrl(i); this.afterChange();
    }
    toggleSolo(i) {
      const sl = this.slots[i]; if (!sl.costumeId) return;
      this.engine.toggleSolo('c' + i);
      this.slots.forEach((s2, j) => this.syncCtrl(j));
      this.afterChange();
    }
    syncCtrl(i) {
      const sl = this.slots[i]; const c = sl.ctrl;
      c._m._on = !!(this.engine.active['c' + i] && this.engine.active['c' + i].muted);
      c._s._on = this.engine.soloId === ('c' + i);
      c._m._render(); c._s._render();
    }

    // ---- transport ----------------------------------------------------------
    play() { this.engine.play(); CE.ui && CE.ui.setPlaying(true); }
    stop() { this.engine.stop(); CE.ui && CE.ui.setPlaying(false); this.resetStepDots(); }
    togglePlay() { this.engine.playing ? this.stop() : this.play(); }
    setBpm(b) { this.engine.setBpm(b); this.afterChange(); }
    setKey(name) { this.engine.setTranspose(KEYS[name] || 0); this._key = name; this.afterChange(); }
    masterMute(on) { this.engine.masterMuted = on; }
    clearAll() {
      this.slots.forEach((s, i) => this.clearSlot(i, true));
      this.engine.clearAll();
      this.afterChange();
    }
    surprise() {
      this.engine.resume();
      this.clearAll();
      const byCat = {}; CE.COSTUMES.forEach(c => { (byCat[c.cat] = byCat[c.cat] || []).push(c); });
      const cats = Object.keys(byCat); const picks = [];
      // always a beat + bass, then random variety
      ['drums', 'bass'].forEach(cat => picks.push(rand(byCat[cat])));
      const pool = CE.COSTUMES.filter(c => !picks.includes(c));
      while (picks.length < 5 && pool.length) picks.splice(2, 0, pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
      picks.slice(0, this.slots.length).forEach((c, i) => this.assign(i, c.id));
    }

    // ---- FX & loop ----------------------------------------------------------
    poof(x, y, color, kind) { this.particles.emit(x, y - 6, color, kind || 'one'); }
    resetStepDots() {
      this.stepDots.forEach(g => g.clear().beginFill(0xffffff, 0.6).drawCircle(0, 0, 4).endFill());
    }
    onBeat(step, hits) {
      this.curStep = step;
      if (step % 4 === 0) this.flash = Math.min(1, this.flash + (step % 16 === 0 ? 0.9 : 0.5));
      if (step % 16 === 0) this.spawnRing();
      hits.forEach(h => {
        if (!h.audible) return;
        const i = +h.charId.slice(1); const sl = this.slots[i];
        const cost = CE.costumeById(h.costumeId);
        const melodic = ['melody', 'voice', 'fx'].includes(cost.cat) || cost.cat === 'chords';
        sl.blob.hit(h.vel, melodic);
        this.particles.emit(sl.x + (Math.random() - .5) * 30, sl.y - 30, CE.CAT[cost.cat].color, melodic ? 'one' : 'one');
      });
    }
    spawnRing() {
      const W = this.app.screen.width, H = this.app.screen.height;
      const ring = new PIXI.Graphics(); ring._t = 0;
      ring.position.set(W / 2, H * 0.42);
      this.fxBack.addChild(ring); ring._ring = true;
      if (!this._rings) this._rings = []; this._rings.push(ring);
    }
    tick() {
      const dt = Math.min(0.05, this.app.ticker.deltaMS / 1000);
      const t = performance.now() / 1000;
      // drain audio-synced beat events
      if (this.engine.ctx) {
        const evs = this.engine.pull(this.engine.ctx.currentTime);
        evs.forEach(ev => this.onBeat(ev.step, ev.hits));
      }
      // decays
      this.flash *= Math.pow(0.0006, dt);
      // characters
      this.slots.forEach(sl => sl.blob.update(dt, t, true));
      this.orbs.forEach(o => o.update(dt, t));
      this.particles.update(dt);
      // rings
      if (this._rings) {
        for (let i = this._rings.length - 1; i >= 0; i--) {
          const r = this._rings[i]; r._t += dt;
          const k = r._t / 1.4; if (k >= 1) { this.fxBack.removeChild(r); r.destroy(); this._rings.splice(i, 1); continue; }
          r.clear().lineStyle(6 * (1 - k), 0xffffff, (1 - k) * 0.5).drawCircle(0, 0, 60 + k * 520);
        }
      }
      // step dots
      const cur = this.engine.playing ? (this.curStep % 16) : -1;
      this.stepDots.forEach((g, idx) => {
        const on = idx === cur; const beat = idx % 4 === 0;
        const r = on ? 8 : (beat ? 5 : 3.4);
        const col = on ? 0xff7aa8 : (beat ? 0xb9a9e0 : 0xffffff);
        g.clear().beginFill(col, on ? 1 : 0.75).drawCircle(0, 0, r).endFill();
      });
      this.drawBgGlow();
    }

    // ---- persistence --------------------------------------------------------
    serialize() {
      return {
        slots: this.slots.map(s => s.costumeId),
        mutes: this.slots.map((s, i) => !!(this.engine.active['c' + i] && this.engine.active['c' + i].muted)),
        solo: this.engine.soloId, bpm: this.engine.bpm, key: this._key || 'C',
      };
    }
    afterChange() {
      try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.serialize())); } catch (e) {}
      CE.ui && CE.ui.refresh();
    }
    restore() {
      let data; try { data = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) {}
      if (data) this.load(data, false);
    }
    load(data, autoplay) {
      this.clearAll();
      if (data.bpm) { this.engine.setBpm(data.bpm); CE.ui && CE.ui.setBpm(data.bpm); }
      if (data.key) { this.setKey(data.key); CE.ui && CE.ui.setKey(data.key); }
      (data.slots || []).forEach((id, i) => { if (id && i < this.slots.length) this.assign(i, id); });
      (data.mutes || []).forEach((m, i) => { if (m && this.slots[i] && this.slots[i].costumeId) this.toggleMute(i); });
      if (data.solo) { const i = +data.solo.slice(1); if (this.slots[i]) this.toggleSolo(i); }
      if (autoplay) this.play();
    }
    shareCode() { return btoa(unescape(encodeURIComponent(JSON.stringify(this.serialize())))); }
    loadCode(code) {
      try { const d = JSON.parse(decodeURIComponent(escape(atob(code.trim())))); this.load(d, true); return true; }
      catch (e) { return false; }
    }
    activeCount() { return this.slots.filter(s => s.costumeId).length; }
  }
  function rand(a) { return a[Math.floor(Math.random() * a.length)]; }

  CE.Game = Game;
})(window.CE);
