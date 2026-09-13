/* Chroma Echo — Visuals (PixiJS v7)
 * Blob characters, draggable costume orbs, particles and the pastel backdrop.
 */
window.CE = window.CE || {};
(function (CE) {
  'use strict';
  const G = PIXI.Graphics;

  // colour helpers ------------------------------------------------------------
  function shade(hex, amt) { // amt -1..1 (dark..light)
    let r = (hex >> 16) & 255, g = (hex >> 8) & 255, b = hex & 255;
    if (amt >= 0) { r += (255 - r) * amt; g += (255 - g) * amt; b += (255 - b) * amt; }
    else { r *= (1 + amt); g *= (1 + amt); b *= (1 + amt); }
    return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b);
  }
  CE.shade = shade;

  function gradientTexture(w, h, stops) {
    const cv = document.createElement('canvas'); cv.width = Math.max(2, w); cv.height = Math.max(2, h);
    const ctx = cv.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, h);
    stops.forEach(([o, c]) => g.addColorStop(o, c));
    ctx.fillStyle = g; ctx.fillRect(0, 0, cv.width, cv.height);
    return PIXI.Texture.from(cv);
  }
  CE.gradientTexture = gradientTexture;

  // ===========================================================================
  //  BLOB CHARACTER
  // ===========================================================================
  class Blob {
    constructor(id) {
      this.id = id;
      this.view = new PIXI.Container();
      this.shadow = new G(); this.view.addChild(this.shadow);
      this.bodyWrap = new PIXI.Container(); this.view.addChild(this.bodyWrap);
      this.bodyG = new G(); this.bodyWrap.addChild(this.bodyG);
      this.accG = new G(); this.bodyWrap.addChild(this.accG);
      this.eyeL = new G(); this.eyeR = new G();
      this.mouth = new G();
      this.bodyWrap.addChild(this.eyeL, this.eyeR, this.mouth);

      this.costume = null;
      this.pop = 0; this.mouthOpen = 0; this.blink = 0; this.blinkT = 1 + Math.random() * 3;
      this.bob = Math.random() * Math.PI * 2;
      this.muted = false; this.solo = false; this.spawn = 0;
      this.drawShadow();
      this.setCostume(null);

      this.bodyWrap.eventMode = 'static';
      this.bodyWrap.cursor = 'pointer';
    }
    drawShadow() {
      this.shadow.clear().beginFill(0x6a5a8a, 0.16).drawEllipse(0, 74, 50, 13).endFill();
    }
    setCostume(c) {
      this.costume = c;
      this.muted = false; this.solo = false;
      this.spawn = c ? 1 : 0;
      this.redraw();
    }
    redraw() {
      const c = this.costume;
      const cat = c ? CE.CAT[c.cat] : null;
      const base = c ? cat.color : 0xcfc9dd;
      const dark = shade(base, -0.32);
      const lite = shade(base, 0.34);
      // body
      const b = this.bodyG; b.clear();
      b.beginFill(dark, 1).drawEllipse(0, 56, 13, 12).drawEllipse(0, 56, 13, 12).endFill(); // feet base
      b.beginFill(shade(base, -0.2)).drawEllipse(-20, 60, 12, 9).drawEllipse(20, 60, 12, 9).endFill(); // feet
      b.beginFill(base).drawEllipse(0, 6, 47, 52).endFill(); // body
      b.beginFill(lite, 0.5).drawEllipse(-16, -16, 17, 14).endFill(); // sheen
      if (c) { b.beginFill(0xff9fb6, 0.5).drawCircle(-26, 20, 8).drawCircle(26, 20, 8).endFill(); } // cheeks
      // eyes
      const ey = -4, ex = 15;
      [this.eyeL, this.eyeR].forEach((e, i) => {
        const sx = i ? ex : -ex;
        e.clear();
        if (c) {
          e.beginFill(0xffffff).drawEllipse(sx, ey, 9, 11).endFill();
          e.beginFill(0x2b2740).drawCircle(sx + (i ? -1 : 1), ey + 2, 4.4).endFill();
          e.beginFill(0xffffff).drawCircle(sx + (i ? -2 : 0), ey, 1.6).endFill();
        } else { // sleeping
          e.lineStyle(3, 0x9a93ad).moveTo(sx - 7, ey).quadraticCurveTo(sx, ey + 4, sx + 7, ey);
        }
        e.position.set(0, 0);
      });
      // mouth
      this.drawMouth(0);
      // accessory
      this.accG.clear();
      if (c) drawAccessory(this.accG, c.acc, base, dark);
    }
    drawMouth(open) {
      const m = this.mouth; m.clear();
      if (!this.costume) return;
      const y = 24;
      if (open > 0.15) {
        m.beginFill(0x7a2e44).drawEllipse(0, y + open * 4, 8 + open * 4, 5 + open * 9).endFill();
        m.beginFill(0xff8fae).drawEllipse(0, y + 8 + open * 6, 5, 2.5 + open * 3).endFill(); // tongue
      } else {
        m.lineStyle(3, 0x7a2e44, 1).moveTo(-8, y).quadraticCurveTo(0, y + 6, 8, y);
      }
    }
    hit(vel, melodic) {
      this.pop = Math.min(1, this.pop + 0.7 + vel * 0.3);
      if (melodic) this.mouthOpen = Math.min(1, this.mouthOpen + 0.8);
      else this.mouthOpen = Math.min(0.5, this.mouthOpen + 0.4);
    }
    update(dt, t, audible) {
      // spawn pop-in
      if (this.spawn > 0) this.spawn = Math.max(0, this.spawn - dt * 3);
      const sp = ease(this.spawn);
      // squash & stretch
      this.pop *= Math.pow(0.0001, dt);
      const p = this.pop;
      const bobAmt = this.costume ? 4 : 1.5;
      const yb = Math.sin(t * 3.2 + this.bob) * bobAmt;
      this.bodyWrap.scale.set((1 + 0.13 * p) * (1 + sp * 0.0), (1 - 0.16 * p));
      this.bodyWrap.y = yb - p * 12 - sp * 30;
      const baseScale = 0.7 + 0.3 * (1 - sp);
      this.view.scale.set(this._s * baseScale);
      this.view.alpha = this.costume ? (this.muted ? 0.42 : 1) : 0.82;
      // mouth
      this.mouthOpen = Math.max(0, this.mouthOpen - dt * 4.5);
      this.drawMouth(this.mouthOpen);
      // blink
      this.blinkT -= dt;
      if (this.blinkT <= 0) { this.blink = 1; this.blinkT = 1.8 + Math.random() * 3.5; }
      if (this.blink > 0 && this.costume) {
        this.blink = Math.max(0, this.blink - dt * 9);
        const ec = 0.1 + 0.9 * (1 - this.blink);
        this.eyeL.scale.y = this.eyeR.scale.y = ec;
      } else { this.eyeL.scale.y = this.eyeR.scale.y = 1; }
    }
    setScale(s) { this._s = s; this.view.scale.set(s); }
  }

  // accessory drawing ---------------------------------------------------------
  function drawAccessory(g, type, base, dark) {
    const top = -48;
    const acc = shade(base, -0.45), wht = 0xffffff;
    switch (type) {
      case 'cap':
        g.beginFill(acc).arc(0, top + 14, 30, Math.PI, 0).endFill();
        g.beginFill(acc).drawEllipse(18, top + 16, 22, 7).endFill();
        g.beginFill(shade(base, 0.5)).drawCircle(0, top + 2, 5).endFill(); break;
      case 'bowtie':
        g.beginFill(acc).drawPolygon([-2, 44, -22, 36, -22, 52]).drawPolygon([2, 44, 22, 36, 22, 52]).endFill();
        g.beginFill(dark).drawCircle(0, 44, 5).endFill(); break;
      case 'antenna':
        g.lineStyle(4, acc).moveTo(0, top + 8).lineTo(0, top - 16);
        g.lineStyle(0).beginFill(0xfff07a).drawCircle(0, top - 20, 8).endFill();
        g.beginFill(0xffffff, .6).drawCircle(-2, top - 22, 2.5).endFill(); break;
      case 'horns':
        g.beginFill(acc).drawPolygon([-26, top + 20, -34, top - 6, -16, top + 10])
          .drawPolygon([26, top + 20, 34, top - 6, 16, top + 10]).endFill(); break;
      case 'mustache':
        g.beginFill(acc).moveTo(0, 16).bezierCurveTo(-16, 8, -22, 22, -2, 18)
          .moveTo(0, 16).bezierCurveTo(16, 8, 22, 22, 2, 18).endFill(); break;
      case 'shades':
        g.beginFill(0x2b2740).drawRoundedRect(-26, -14, 22, 16, 5).drawRoundedRect(4, -14, 22, 16, 5).endFill();
        g.lineStyle(3, 0x2b2740).moveTo(-4, -8).lineTo(4, -8);
        g.lineStyle(0).beginFill(0xffffff, .4).drawCircle(-18, -10, 3).drawCircle(12, -10, 3).endFill(); break;
      case 'cloud':
        g.beginFill(0xffffff, .92);
        g.drawCircle(-16, top, 12).drawCircle(0, top - 6, 15).drawCircle(16, top, 12).drawEllipse(0, top + 6, 26, 10).endFill(); break;
      case 'star':
        star(g, 0, top - 2, 14, 7, 0xfff07a); break;
      case 'beanie':
        g.beginFill(acc).arc(0, top + 16, 30, Math.PI, 0).endFill();
        g.beginFill(shade(base, 0.4)).drawRoundedRect(-30, top + 12, 60, 8, 4).endFill();
        g.beginFill(0xffffff).drawCircle(0, top - 6, 8).endFill(); break;
      case 'crown':
        g.beginFill(0xffd25c).drawPolygon([-24, top + 12, -24, top - 6, -12, top + 4, 0, top - 12, 12, top + 4, 24, top - 6, 24, top + 12]).endFill();
        g.beginFill(0xff7aa8).drawCircle(0, top - 2, 3.5).endFill(); break;
      case 'hairbow':
        g.beginFill(acc).drawPolygon([0, top + 8, -24, top - 4, -24, top + 18]).drawPolygon([0, top + 8, 24, top - 4, 24, top + 18]).endFill();
        g.beginFill(shade(base, 0.4)).drawCircle(0, top + 8, 6).endFill(); break;
      case 'lashes':
        g.lineStyle(2.5, 0x2b2740);
        [[-15, -1], [15, 1]].forEach(([sx, d]) => {
          for (let i = -1; i <= 1; i++) { g.moveTo(sx + i * 5, -15).lineTo(sx + i * 5 + d * 3, -22); }
        }); break;
      case 'beak':
        g.beginFill(0xffb02e).drawPolygon([-9, 22, 9, 22, 0, 32]).endFill(); break;
      case 'halo':
        g.lineStyle(5, 0xfff07a, .95).drawEllipse(0, top - 4, 22, 7);
        g.lineStyle(0).beginFill(0xffffff, .5).drawEllipse(0, top - 6, 18, 4).endFill(); break;
    }
  }
  function star(g, cx, cy, ro, ri, color) {
    g.beginFill(color); const pts = [];
    for (let i = 0; i < 10; i++) { const r = i % 2 ? ri : ro, a = -Math.PI / 2 + i * Math.PI / 5; pts.push(cx + Math.cos(a) * r, cy + Math.sin(a) * r); }
    g.drawPolygon(pts).endFill();
  }
  CE.star = star;

  function ease(x) { return x * x * (3 - 2 * x); }

  // ===========================================================================
  //  COSTUME ORB (palette item)
  // ===========================================================================
  class Orb {
    constructor(costume) {
      this.costume = costume;
      this.view = new PIXI.Container();
      this.view.eventMode = 'static'; this.view.cursor = 'grab';
      this.g = new G(); this.view.addChild(this.g);
      const cat = CE.CAT[costume.cat];
      this.label = new PIXI.Text(costume.name, { fontFamily: 'Baloo 2, system-ui', fontSize: 15, fontWeight: '700', fill: shade(cat.color, -0.5) });
      this.label.anchor.set(0.5); this.label.y = 40; this.view.addChild(this.label);
      this.used = false; this.bob = Math.random() * 6.28;
      this.draw();
    }
    draw() {
      const cat = CE.CAT[this.costume.cat];
      const base = cat.color; const g = this.g; g.clear();
      g.beginFill(shade(base, -0.5), 0.18).drawEllipse(0, 26, 24, 6).endFill();
      g.beginFill(base).drawCircle(0, 0, 26).endFill();
      g.beginFill(shade(base, 0.4), 0.6).drawEllipse(-8, -9, 9, 7).endFill();
      g.beginFill(0xffffff).drawCircle(-7, -2, 4.5).drawCircle(7, -2, 4.5).endFill();
      g.beginFill(0x2b2740).drawCircle(-6, -1, 2.2).drawCircle(8, -1, 2.2).endFill();
      g.lineStyle(2, 0x7a2e44).moveTo(-5, 9).quadraticCurveTo(0, 13, 5, 9);
      g.lineStyle(0).beginFill(0xff9fb6, 0.5).drawCircle(-15, 6, 4).drawCircle(15, 6, 4).endFill();
    }
    setUsed(u) { this.used = u; this.view.alpha = u ? 0.32 : 1; this.view.cursor = u ? 'default' : 'grab'; }
    update(dt, t) { if (!this.used) this.g.y = Math.sin(t * 2 + this.bob) * 3; }
  }

  // ===========================================================================
  //  PARTICLES
  // ===========================================================================
  class Particles {
    constructor() { this.view = new PIXI.Container(); this.items = []; }
    emit(x, y, color, kind) {
      const n = kind === 'burst' ? 8 : 1;
      for (let i = 0; i < n; i++) {
        const g = new G();
        const shp = Math.random();
        if (shp < 0.5) { star(g, 0, 0, 7, 3.2, color); }
        else if (shp < 0.8) { g.beginFill(color).drawCircle(0, 0, 4).endFill(); }
        else { // note
          g.beginFill(color).drawCircle(-4, 4, 4).endFill();
          g.lineStyle(2, color).moveTo(0, 4).lineTo(0, -8);
        }
        g.x = x + (Math.random() - 0.5) * 20; g.y = y;
        const ang = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
        const sp = 40 + Math.random() * 90;
        this.items.push({ g, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 30, life: 1, rot: (Math.random() - .5) * 6 });
        this.view.addChild(g);
      }
    }
    update(dt) {
      for (let i = this.items.length - 1; i >= 0; i--) {
        const p = this.items[i];
        p.life -= dt * 1.3;
        if (p.life <= 0) { this.view.removeChild(p.g); p.g.destroy(); this.items.splice(i, 1); continue; }
        p.vy += 90 * dt; p.g.x += p.vx * dt; p.g.y += p.vy * dt;
        p.g.rotation += p.rot * dt; p.g.alpha = Math.min(1, p.life * 1.6);
        p.g.scale.set(0.6 + p.life * 0.6);
      }
    }
  }

  CE.Blob = Blob;
  CE.Orb = Orb;
  CE.Particles = Particles;
})(window.CE);
