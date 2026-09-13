var nt = Object.defineProperty;
var ot = (l, t, e) => t in l ? nt(l, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : l[t] = e;
var s = (l, t, e) => (ot(l, typeof t != "symbol" ? t + "" : t, e),
e);
import {L as at, A as rt, T as I, G as lt, D as ht, F as ct, a as dt, R as pt, U as ut, b as mt, c as gt, d, e as ft, S as bt, P as vt, W as wt, s as yt, V as A, f as Lt, M as C, g as Bt, h as xt, i as S, j as X, k as Y, B as U, l as V, m as Z, n as _, o as Et, p as Mt, q as Tt, r as St, t as Ct, u as Pt, v as At, w as q, x as kt, y as Rt, z as u, O as Ht, C as Nt, E as Ot} from "./vendor.1e0b8f9a.js";
const It = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        i(o);
    new MutationObserver(o => {
        for (const n of o)
            if (n.type === "childList")
                for (const a of n.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && i(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function e(o) {
        const n = {};
        return o.integrity && (n.integrity = o.integrity),
        o.referrerpolicy && (n.referrerPolicy = o.referrerpolicy),
        o.crossorigin === "use-credentials" ? n.credentials = "include" : o.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function i(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const n = e(o);
        fetch(o.href, n)
    }
};
It();
const Dt = "assets/sounds"
  , j = "assets/graphics"
  , Q = "assets/textures"
  , D = "assets/models";
class zt {
    constructor(t) {
        s(this, "mb3d");
        s(this, "loadingManager");
        s(this, "loaded", !1);
        s(this, "onLoad");
        s(this, "onProgress");
        s(this, "soundOn", !0);
        s(this, "showDelay");
        s(this, "config");
        s(this, "envTexture");
        s(this, "BoardTextures");
        s(this, "audioList", []);
        s(this, "models");
        s(this, "modelAnim");
        s(this, "textures");
        s(this, "atlas");
        s(this, "atlasData");
        s(this, "audios");
        this.mb3d = t,
        this.config = t.config,
        this.init()
    }
    init() {
        const t = this.loadingManager = new at
          , e = this;
        this.models = {},
        this.modelAnim = {},
        this.atlasData = {},
        this.atlas = {},
        this.audios = {},
        this.textures = {},
        t.onLoad = function() {
            e.loaded = !0,
            console.log("Assets loaded"),
            e.onLoad && e.onLoad.call(e)
        }
        ,
        t.onProgress = function(i, o, n) {
            e.onProgress && e.onProgress.call(e, i, o, n)
        }
    }
    load() {
        this.loadAudios(["ButtonClick", "Firework", "WonTune", "LoseTune"]),
        this.loadTextures(["Firework", "Shadow"]),
        this.loadTextureAtlas([]),
        this.loadBoardTextures(),
        this.loadGLBModels(["MineFlag", "AlienTall"]),
        this.loadEnvironmentTexture("venice"),
        this.loadFBXModels()
    }
    loadAudios(t=[]) {
        const e = this
          , i = new rt
          , o = (n, a) => {
            const r = new mt(i);
            new gt(e.loadingManager).load(Dt + "/" + n + ".mp3", function(c) {
                r.setBuffer(c),
                e.audios[n] = r,
                a && a.call(e)
            })
        }
        ;
        for (let n = 0; n < t.length; n++)
            o(t[n])
    }
    loadTextures(t=[]) {
        const e = this
          , i = new I(this.loadingManager)
          , o = function(n) {
            i.load(j + "/" + n + ".png", function(a) {
                e.textures[n] = a
            })
        };
        for (let n = 0; n < t.length; n++)
            o(t[n])
    }
    loadBoardTextures() {
        const t = this
          , e = this.mb3d.config.general.boardTextures
          , i = new I(this.loadingManager);
        this.BoardTextures = [];
        const o = function(a) {
            i.load(j + "/" + a, function(r) {
                t.BoardTextures.push(r)
            })
        };
        for (var n = 0; n < e.length; n++)
            o(e[n])
    }
    loadGLBModels(t=[]) {
        const e = this
          , i = new lt(e.loadingManager)
          , o = new ht;
        o.setDecoderPath("libs/draco/"),
        i.setDRACOLoader(o);
        const n = function(a) {
            i.load(D + "/" + a + ".glb", function(r) {
                const h = r.scene;
                e.models[a] = h,
                r.animations && (e.modelAnim[a] = r.animations),
                h.frustumCulled = !1
            })
        };
        for (let a = 0; a < t.length; a++)
            n(t[a])
    }
    loadFBXModels(t=[]) {
        const e = this
          , i = new ct(this.loadingManager)
          , o = function(n) {
            i.load(D + "/" + n + ".fbx", function(a) {
                e.models[n] = a,
                e.modelAnim[n] = a.animations,
                a.traverse(function(r) {
                    r.isMesh
                })
            })
        };
        for (let n = 0; n < t.length; n++)
            o(t[n])
    }
    loadTextureAtlas(t=[]) {
        const e = this
          , i = new dt(this.loadingManager)
          , o = new I(this.loadingManager)
          , n = function(a) {
            i.load(Q + "/" + a + ".json", function(r) {
                e.atlasData[a] = JSON.parse(r)
            }),
            o.load(Q + "/" + a + ".png", function(r) {
                e.atlas[a] = r
            })
        };
        for (let a = 0; a < t.length; a++)
            n(t[a])
    }
    loadEnvironmentTexture(t) {
        const e = this;
        new pt(this.loadingManager).setDataType(ut).load(D + "/" + t + ".hdr", o => {
            e.envTexture = o
        }
        )
    }
    toggleSound() {
        if (this.soundOn = !this.soundOn,
        this.soundOn)
            for (let t in this.audios)
                this.audios[t].setVolume(1);
        else
            for (let t in this.audios)
                this.audios[t].setVolume(0)
    }
}
class Ft {
    constructor(t, e) {
        s(this, "dataString");
        s(this, "config");
        s(this, "data");
        this.dataString = e,
        this.config = t,
        this.init(e)
    }
    init(t) {
        if (t == null) {
            this.data = {
                name: "MazeBall",
                unlocked: []
            };
            const e = this.config.data.levels;
            for (let i = 0; i < e.length; i++)
                this.data.unlocked[i] = 0;
            this.save()
        } else
            this.data = JSON.parse(t)
    }
    save() {
        this.data != null && localStorage.setItem("MazeBall", JSON.stringify(this.data))
    }
    isUnlocked(t) {
        return t == 0 ? !0 : this.data.unlocked[t] === 1
    }
    saveUnlock(t) {
        const e = this.data.unlocked;
        e[t] = 1,
        this.save()
    }
}
class k {
    constructor(t=300, e=300) {
        s(this, "width");
        s(this, "height");
        s(this, "overlay");
        s(this, "el");
        s(this, "closeBtn");
        this.width = t,
        this.height = e
    }
    init() {
        const t = this.overlay = document.createElement("div");
        t.className = "rs-game-overlay";
        const e = this.el = document.createElement("div");
        e.className = "rs-game-panel",
        e.style.width = this.width + "px",
        e.style.height = this.height + "px";
        const i = this.closeBtn = document.createElement("span");
        i.className = "rs-closebtn",
        i.innerHTML = "&times",
        e.appendChild(i),
        i.addEventListener("click", this.hide.bind(this))
    }
    show() {
        document.body.appendChild(this.overlay),
        document.body.appendChild(this.el),
        d.remove(this.el),
        d({
            targets: this.el,
            opacity: [0, 1],
            duration: 800,
            easing: "easeOutQuint"
        })
    }
    hide() {
        document.body.contains(this.overlay) && document.body.removeChild(this.overlay),
        document.body.contains(this.el) && document.body.removeChild(this.el)
    }
}
const J = .85;
class Gt extends k {
    constructor(t) {
        super();
        s(this, "img");
        s(this, "callback");
        this.callback = t,
        this.init()
    }
    init() {
        super.init(),
        this.el.classList.add("rs-image-panel");
        const t = this.img = document.createElement("img");
        this.el.appendChild(this.img),
        this.el.style.width = this.el.style.height = "auto";
        const e = this;
        function i(o) {
            var n;
            (n = e.callback) == null || n.call(e),
            e.hide()
        }
        this.closeBtn.addEventListener("click", i),
        t.addEventListener("click", i),
        t.onload = function() {
            const o = t.naturalWidth / t.naturalHeight;
            t.naturalHeight >= window.innerHeight && (t.height = window.innerHeight * J,
            t.width = t.height * o),
            t.naturalWidth >= window.innerWidth && (t.width = window.innerWidth * J,
            t.height = t.width / o)
        }
    }
    showImageSource(t) {
        this.img.src = t,
        super.show()
    }
}
class Wt {
    constructor(t=1e3, e=600, i=60) {
        s(this, "width");
        s(this, "height");
        s(this, "fov");
        s(this, "scene");
        s(this, "camera");
        s(this, "renderer");
        s(this, "raycaster");
        s(this, "el");
        s(this, "rId");
        s(this, "thfov");
        this.width = t,
        this.height = e,
        this.fov = i,
        this.init()
    }
    init() {
        console.log("THREE revision", ft),
        this.scene = new bt,
        this.camera = new vt(this.fov,this.width / this.height,.01,5e3);
        const t = this.renderer = new wt({
            alpha: !0,
            antialias: !0
        });
        t.setSize(this.width, this.height),
        t.setPixelRatio(window.devicePixelRatio),
        t.outputEncoding = yt,
        this.camera.lookAt(new A(0,0,0)),
        this.el = t.domElement,
        this.raycaster = new Lt
    }
    renderRequest() {
        this.renderer.render(this.scene, this.camera),
        this.rId = requestAnimationFrame(this.renderRequest.bind(this))
    }
    startRendering() {
        this.stopRendering(),
        this.rId = requestAnimationFrame(this.renderRequest.bind(this))
    }
    stopRendering() {
        cancelAnimationFrame(this.rId)
    }
    resizeHandler() {
        this.thfov = Math.tan(this.camera.fov * Math.PI / 360)
    }
    setCameraMatchProjection(t=1) {
        const e = this.camera
          , i = .5 * this.height / Math.tan(e.fov * Math.PI / 360);
        e.position.x = e.position.y = 0,
        e.position.z = i / t,
        e.lookAt(new A(0,0,0))
    }
    getScaleFitRatio(t, e, i) {
        i = i || .75;
        let o = t / e, n;
        return this.width / o > this.height ? n = this.height * i / e : n = this.width * i / t,
        n
    }
    getScaleFitPositionZ(t, e, i) {
        this.setCameraMatchProjection();
        const o = this.getScaleFitRatio(t, e, i)
          , n = this.camera.position.z;
        return n - n / o
    }
}
const Xt = 40;
class Yt extends C {
    constructor(t) {
        super();
        s(this, "pb");
        s(this, "dopt");
        s(this, "am");
        this.pb = t,
        this.dopt = t.dopt,
        this.am = t.am,
        this.init()
    }
    init() {
        const t = this.dopt;
        this.geometry = new Bt(1,Xt),
        this.material = new xt({
            color: t.ballColor,
            roughness: t.ballRoughness,
            metalness: t.ballMetalness
        })
    }
    setRadius(t) {
        this.scale.set(t, t, t)
    }
    update(t) {}
}
const z = 4;
class Ut extends S {
    constructor(t) {
        super();
        s(this, "pb");
        s(this, "am");
        s(this, "model");
        this.pb = t,
        this.am = t.am,
        this.init()
    }
    init() {
        const t = this.model = this.am.models.MineFlag;
        t.scale.set(z, z, z),
        this.add(t);
        const e = 65501;
        this.model.traverse(function(o) {
            if (o instanceof C && o.material && o.name == "Plane") {
                const n = o.material.clone();
                n.color.setHex(e),
                o.material = n,
                o.material.needsUpdate = !0
            }
        });
        const i = new C(new X(1,1),new Y({
            map: this.am.textures.Shadow,
            transparent: !0,
            opacity: .5
        }));
        i.position.z = -.25,
        this.add(i)
    }
}
class F extends C {
    constructor(t) {
        super();
        s(this, "pb");
        s(this, "dopt");
        s(this, "boxShape");
        s(this, "ti");
        s(this, "tj");
        this.pb = t,
        this.dopt = t.dopt,
        this.init()
    }
    init() {
        this.geometry = new U(1,1,1),
        this.material = new V({
            specular: 1118481,
            emissive: this.dopt.pieceEmissive,
            side: Z
        })
    }
    setTexture(t) {
        const e = this.material;
        e.map = t,
        e.needsUpdate = !0
    }
    setSize(t, e, i) {
        this.scale.set(t, e, i)
    }
    reset() {
        this.scale.set(1, 1, 1),
        this.boxShape = null,
        this.ti = this.tj = -1
    }
}
const Vt = 4;
class Zt {
    constructor(t) {
        s(this, "pb");
        s(this, "pool");
        this.pb = t,
        this.init()
    }
    init() {
        this.pool = [];
        for (let t = 0; t < Vt; t++) {
            const e = new F(this.pb);
            this.pool.push(e)
        }
    }
    obtain() {
        if (this.pool.length > 0) {
            const t = this.pool.pop();
            return t.reset(),
            t
        } else {
            const t = new F(this.pb);
            return t.reset(),
            t
        }
    }
    free(t) {
        this.pool.push(t)
    }
}
class _t extends S {
    constructor() {
        super(...arguments);
        s(this, "currentAction");
        s(this, "mixer");
        s(this, "modelAnim")
    }
    play(t) {
        this.currentAction && this.currentAction.fadeOut(.5);
        const e = _.findByName(this.modelAnim, t)
          , i = this.mixer.clipAction(e);
        this.currentAction = i,
        i.clampWhenFinished = !0,
        i.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play()
    }
    playOnce(t) {
        this.currentAction && this.currentAction.fadeOut(.5);
        const e = _.findByName(this.modelAnim, t)
          , i = this.mixer.clipAction(e);
        this.currentAction = i,
        i.clampWhenFinished = !0,
        i.reset().setLoop(Et, 1).setEffectiveTimeScale(1).setEffectiveWeight(1).play()
    }
    update(t) {
        this.mixer.update(t)
    }
}
class qt extends _t {
    constructor(t, e=1, i) {
        super();
        s(this, "pb");
        s(this, "model");
        s(this, "am");
        s(this, "modelName");
        s(this, "_modelScale");
        this.pb = t,
        this.am = t.am,
        i && (this.modelName = i,
        this.modelAnim = this.am.modelAnim[i],
        this.model = Mt(this.am.models[i]),
        this.modelScale = e,
        this.mixer = new Tt(this.model),
        this.add(this.model))
    }
    set modelScale(t) {
        this._modelScale = t,
        this.model.scale.set(t, t, t)
    }
    get modelScale() {
        return this._modelScale
    }
}
const jt = 1;
class R extends qt {
    constructor(t) {
        super(t, jt, "AlienTall");
        s(this, "orientation");
        s(this, "direction");
        s(this, "limitX0");
        s(this, "limitX1");
        s(this, "limitY0");
        s(this, "limitY1");
        s(this, "speed");
        s(this, "wvector");
        s(this, "ti");
        s(this, "tj");
        this.speed = t.dopt.alienSpeed,
        this.wvector = new A,
        this.init()
    }
    init() {
        const t = this.model;
        t.rotation.x = Math.PI * .4;
        const e = new C(new X(2,1),new Y({
            map: this.am.textures.Shadow,
            transparent: !0,
            opacity: .35
        }));
        e.position.z = -.25 * Math.random(),
        this.add(e)
    }
    getWordVector() {
        return this.getWorldPosition(this.wvector),
        this.wvector
    }
    setLimit(t) {
        this.limitX0 = t[0],
        this.limitX1 = t[1],
        this.limitY0 = t[2],
        this.limitY1 = t[3]
    }
    reset() {
        this.play("Walk"),
        this.direction = 1,
        this.ti = this.tj = -1,
        this.limitX0 = this.limitX1 = -1,
        this.limitY0 = this.limitY1 = -1
    }
    update(t) {
        super.update(t),
        this.pb.dopt.boardThickness,
        this.orientation == "X" ? (this.position.x += this.speed * this.direction,
        (this.position.x >= this.limitX1 || this.position.x <= this.limitX0) && (this.direction *= -1,
        this.position.x += this.speed * this.direction)) : (this.position.y += this.speed * this.direction,
        (this.position.y >= this.limitY1 || this.position.y <= this.limitY0) && (this.direction *= -1,
        this.position.y += this.speed * this.direction))
    }
}
const Qt = 2;
class Jt {
    constructor(t) {
        s(this, "pb");
        s(this, "pool");
        this.pb = t,
        this.init()
    }
    init() {
        this.pool = [];
        for (let t = 0; t < Qt; t++) {
            const e = new R(this.pb);
            this.pool.push(e)
        }
    }
    obtain() {
        if (this.pool.length > 0) {
            const t = this.pool.pop();
            return t.reset(),
            t
        } else {
            const t = new R(this.pb);
            return t.reset(),
            t
        }
    }
    free(t) {
        this.pool.push(t)
    }
}
const H = 10
  , N = 1 / H;
class Kt extends S {
    constructor(t) {
        super();
        s(this, "g3d");
        s(this, "gs");
        s(this, "am");
        s(this, "dopt");
        s(this, "topBoard");
        s(this, "leftBoard");
        s(this, "rightBoard");
        s(this, "bottomBoard");
        s(this, "backBoard");
        s(this, "boardList");
        s(this, "board");
        s(this, "ballVec");
        s(this, "flagVec");
        s(this, "imageWidth");
        s(this, "imageHeight");
        s(this, "row");
        s(this, "column");
        s(this, "rt");
        s(this, "level");
        s(this, "currentTex");
        s(this, "bpieces");
        s(this, "bpool");
        s(this, "apool");
        s(this, "apieces");
        s(this, "started");
        s(this, "editData");
        s(this, "ball");
        s(this, "flag");
        s(this, "physics");
        this.g3d = t,
        this.gs = t.gs,
        this.dopt = t.dopt,
        this.am = t.am,
        this.physics = t.physics,
        this.editData = {
            blocks: [],
            alien: []
        },
        this.init()
    }
    init() {
        const t = this.dopt;
        this.visible = !0,
        this.ballVec = new A,
        this.flagVec = new A,
        this.buildBoard(),
        this.imageWidth = this.imageHeight = t.boardDimension,
        this.ball = new Yt(this),
        this.add(this.ball),
        this.flag = new Ut(this),
        this.board.add(this.flag),
        this.bpieces = [],
        this.bpool = new Zt(this),
        this.apieces = [],
        this.apool = new Jt(this)
    }
    buildBoard() {
        const t = this.dopt
          , e = this;
        this.boardList = [],
        this.board = new $t,
        this.add(this.board);
        function i() {
            const o = new U(10,10,10)
              , n = new V({
                specular: t.pieceSpecular,
                color: 16777215,
                emissive: t.pieceEmissive,
                side: Z
            })
              , a = new G(o,n);
            return e.board.add(a),
            e.boardList.push(a),
            a
        }
        this.topBoard = i(),
        this.leftBoard = i(),
        this.rightBoard = i(),
        this.bottomBoard = i(),
        this.backBoard = i(),
        this.backBoard.isBackboard = !0
    }
    getScaleFitPosition(t, e) {
        const i = this.dopt
          , o = this.getBound()
          , n = o[0]
          , a = o[1]
          , r = o[2]
          , h = i.fitFactor || .98
          , c = n / a;
        let p;
        t / c > e ? p = e * h / a : p = t * h / n,
        this.rt = p;
        const m = this.g3d.camera.position.z;
        return m - m / p - r * .5
    }
    arrangeBoard() {
        const t = this.dopt
          , e = t.boardThickness
          , i = t.boardDepth
          , o = this.imageWidth
          , n = this.imageHeight;
        let a = o + 2 * e
          , r = e
          , h = t.pieceDepth + i;
        this.topBoard.scale.set(a / 10, r / 10, h / 10),
        this.topBoard.position.set(0, n * .5 + .5 * e, -i * .5),
        this.bottomBoard.scale.set(a / 10, r / 10, h / 10),
        this.bottomBoard.position.set(0, -n * .5 - .5 * e, -i * .5),
        a = e,
        r = n,
        this.leftBoard.scale.set(a / 10, r / 10, h / 10),
        this.leftBoard.position.set(-o * .5 - .5 * e, 0, -i * .5),
        this.rightBoard.scale.set(a / 10, r / 10, h / 10),
        this.rightBoard.position.set(o * .5 + .5 * e, 0, -i * .5),
        this.backBoard.scale.set(o / 10, n / 10, i / 10),
        this.backBoard.position.set(0, 0, -h * .5)
    }
    prepareBoard(t, e) {
        const i = this;
        this.dopt,
        this.level = t,
        this.row = this.column = t.matrix,
        this.board.reset(),
        this.ball.visible = !1,
        this.physics.reset(),
        this.updatePhysics(this.ball, this.physics.ball),
        this.bpieces.forEach(o => {
            this.board.remove(o),
            this.bpool.free(o)
        }
        ),
        this.bpieces.splice(0),
        this.apieces.forEach(o => {
            this.board.remove(o),
            this.apool.free(o)
        }
        ),
        this.apieces.splice(0),
        this.started = !1,
        i.arrangeBoard(),
        i.visible = !0,
        this.updateBoardTexture(),
        this.construct(t),
        e && e.call(i.g3d)
    }
    construct(t) {
        const e = this.dopt.boardDimension / t.matrix
          , i = t.blocks
          , o = this.calPosition(0, 0);
        this.flag.position.set(o[0], o[1], 0);
        const n = this.calPosition(t.matrix - 1, t.matrix - 1);
        this.ball.position.x = n[0],
        this.ball.position.y = n[1];
        const a = e * .85 * .5;
        this.ball.setRadius(a),
        this.physics.setBallRadius(a * N),
        this.physics.placeBall(n[0], n[1]),
        i.forEach(r => {
            this.addBlock(r[0], r[1])
        }
        ),
        t.alien.forEach(r => {
            this.addAlien(r[0], r[1], r[2])
        }
        ),
        this.scanAlienLimits()
    }
    scanAlienLimits() {
        const t = this.dopt.boardThickness
          , e = this.dopt.boardDimension * .5 - t
          , i = this.dopt.boardDimension / this.level.matrix
          , o = (n, a, r) => {
            let h = -e
              , c = e
              , p = -e
              , m = e
              , v = 100
              , f = -100
              , g = 100
              , y = -100;
            if (r == "X") {
                this.bpieces.forEach(T => {
                    const w = [T.ti, T.tj];
                    w[0] == n && (w[1] <= a && w[1] >= y && (y = w[1]),
                    w[1] >= a && w[1] <= g && (g = w[1]))
                }
                );
                const b = this.calPosition(n, y)
                  , x = this.calPosition(n, g);
                return y !== -100 && (h = b[0] + i * .75),
                g !== 100 && (c = x[0] - i * .75),
                [h, c, p, m]
            } else {
                this.bpieces.forEach(T => {
                    const w = [T.ti, T.tj];
                    w[1] == a && (w[0] <= n && w[0] >= f && (f = w[0]),
                    w[0] >= n && w[0] <= v && (v = w[0]))
                }
                );
                const b = this.calPosition(f, a)
                  , x = this.calPosition(v, a);
                return f !== -100 ? p = b[1] - i * .75 : p = -p,
                v !== 100 ? m = x[1] + i * .75 : m = -m,
                [h, c, m, p]
            }
        }
        ;
        this.apieces.forEach(n => {
            const a = o(n.ti, n.tj, n.orientation);
            n.setLimit(a)
        }
        )
    }
    addAlien(t, e, i) {
        const o = this.level.alienScale || 1
          , n = this.apool.obtain();
        return this.apieces.push(n),
        n.reset(),
        n.ti = t,
        n.tj = e,
        n.orientation = i,
        n.modelScale = o,
        this.board.add(n),
        this.setPosition(n, t, e),
        this.logData(),
        n
    }
    addAlienUV(t, e, i) {
        const o = this.level.matrix
          , n = Math.floor((1 - e) * o)
          , a = Math.floor(t * o);
        this.editData.alien.push([n, a, "X"]),
        this.addAlien(n, a, i)
    }
    removeAlien(t) {
        for (let e = this.apieces.length - 1; e >= 0; e--) {
            const i = this.apieces[e];
            if (i == t) {
                this.apieces.splice(e, 1),
                this.board.remove(i),
                this.apool.free(i),
                this.logData();
                return
            }
        }
    }
    addBlock(t, e) {
        const i = this.dopt.boardDimension / this.level.matrix
          , o = this.bpool.obtain();
        this.bpieces.push(o),
        o.reset(),
        o.setSize(i, i, this.dopt.pieceDepth),
        o.ti = t,
        o.tj = e,
        this.board.add(o),
        o.setTexture(this.currentTex),
        this.setPosition(o, t, e);
        const n = this.calPosition(t, e)
          , a = this.physics.addBlock(n[0] * N, n[1] * N, i * N);
        o.boxShape = a,
        this.logData()
    }
    removeBlock(t) {
        for (let e = this.bpieces.length - 1; e >= 0; e--) {
            const i = this.bpieces[e];
            if (i == t) {
                this.bpieces.splice(e, 1),
                this.physics.removeBlock(t.boxShape),
                this.board.remove(i),
                this.bpool.free(i),
                this.logData();
                return
            }
        }
    }
    addBlockUV(t, e) {
        const i = this.level.matrix
          , o = Math.floor((1 - e) * i)
          , n = Math.floor(t * i);
        this.editData.blocks.push([o, n]),
        this.addBlock(o, n)
    }
    logData() {
        if (!this.dopt.isEditing)
            return;
        let t = {
            blocks: [],
            alien: []
        };
        this.bpieces.forEach(e => {
            t.blocks.push([e.ti, e.tj])
        }
        ),
        this.apieces.forEach(e => {
            t.alien.push([e.ti, e.tj, e.orientation])
        }
        ),
        console.log(JSON.stringify(t))
    }
    start() {
        this.started = !0,
        this.ball.visible = !0,
        this.g3d.inTransition = !1
    }
    updateBoardTexture() {
        const t = this.am
          , e = this.currentTex = t.BoardTextures[Math.floor(Math.random() * t.BoardTextures.length)];
        this.boardList.forEach(i => {
            i.material.map = e,
            i.material.needsUpdate = !0
        }
        )
    }
    getBound() {
        const t = this.dopt
          , e = this.imageWidth
          , i = this.imageHeight
          , o = e
          , n = i
          , a = t.pieceDepth + t.boardDepth;
        return [o, n, a]
    }
    calPosition(t, e) {
        let i = this.imageWidth
          , o = this.imageHeight
          , n = 0
          , a = i / this.column + n
          , r = i - a
          , h = o - a
          , c = -r * .5
          , p = h * .5;
        function m(g) {
            return Math.abs(g) < 1e-4 ? 0 : g
        }
        let v = c + e * a
          , f = p - t * a;
        return v = m(v),
        f = m(f),
        [v, f]
    }
    getMatrixPosition(t) {
        const e = this.dopt.boardDimension / this.level.matrix
          , i = Math.floor(this.level.matrix / 2);
        console.log(e, t.position.y, t.position.x);
        const o = Math.floor(t.position.y / e)
          , n = Math.floor(t.position.x / e) + i;
        return [o, n]
    }
    getBallPosition() {
        console.log(this.getMatrixPosition(this.ball))
    }
    setPosition(t, e, i) {
        const o = this.calPosition(e, i);
        t.position.x = o[0],
        t.position.y = o[1]
    }
    update(t) {
        !this.started || (this.physics.update(),
        this.updatePhysics(this.ball, this.physics.ball),
        this.started && this.ball.position.z < -20 && this.g3d.setLoseState(),
        this.flag.getWorldPosition(this.flagVec),
        this.ball.getWorldPosition(this.ballVec),
        this.flagVec.distanceTo(this.ballVec) < .5 && this.g3d.setWonState(),
        this.apieces.forEach(e => {
            e.update(t),
            e.getWordVector().distanceTo(this.ballVec) < 1.5 && (console.log("Hit alien"),
            this.g3d.setLoseState())
        }
        ))
    }
    updatePhysics(t, e) {
        t.position.set(e.position.x * H, e.position.y * H, e.position.z * H),
        t.quaternion.set(e.quaternion.x, e.quaternion.y, e.quaternion.z, e.quaternion.w)
    }
    rotateBoard(t) {
        this.physics.board.quaternion.setFromEuler(0, 0, t),
        this.board.rotation.z = t
    }
}
class G extends C {
    constructor() {
        super(...arguments);
        s(this, "isBackboard", !1)
    }
}
class $t extends S {
    constructor() {
        super(...arguments);
        s(this, "currentRotZ")
    }
    reset() {
        this.currentRotZ = 0
    }
}
class te extends S {
    constructor(t) {
        super();
        s(this, "g3d");
        s(this, "dopt");
        s(this, "speed");
        s(this, "bound");
        s(this, "dirX");
        s(this, "lights");
        this.dopt = t.dopt,
        this.speed = this.dopt.lightMovingSpeed,
        this.g3d = t,
        this.init()
    }
    init() {
        this.bound = [300, 400, 10],
        this.dirX = 1;
        const t = this.lights = []
          , e = .85;
        t[0] = new K(15658734,e,0),
        t[1] = new K(15658734,e,0,1),
        t[0].oZ = 4,
        t[1].oZ = 10,
        this.add(t[1]);
        const i = new St(this.dopt.ambientLight,.8);
        this.add(i)
    }
    animate() {
        this.lights[1].position.x += this.dirX * this.speed;
        const t = this.lights[1].position.x;
        (t > this.bound[0] * .5 || t < -this.bound[0] * .5) && (this.dirX = -this.dirX)
    }
    setBound(t, e) {
        this.bound = t;
        const i = this.lights[1];
        i.position.set(t[0] * .5, 0, i.oZ)
    }
}
class K extends Ct {
    constructor() {
        super(...arguments);
        s(this, "oZ")
    }
}
class ee extends S {
    constructor(t) {
        super();
        s(this, "g3d");
        s(this, "glight");
        s(this, "gameBoard");
        s(this, "currentRotZ");
        this.g3d = t,
        this.init()
    }
    init() {
        this.gameBoard = new Kt(this.g3d),
        this.add(this.gameBoard);
        const t = this.glight = new te(this.g3d);
        this.add(t)
    }
    fitGameBoard() {
        const t = this.g3d.gs
          , e = t.header.getClientSize()
          , i = t.bbar.getClientSize()
          , o = this.g3d.el.clientHeight
          , a = this.g3d.el.clientWidth
          , r = o - e[1] - i[1] - 10;
        this.g3d.setCameraMatchProjection();
        const h = this.gameBoard.getScaleFitPosition(a, r);
        this.position.z = h,
        this.glight.setBound(this.gameBoard.getBound())
    }
    show() {
        this.visible = !1,
        this.currentRotZ = 0,
        this.fitGameBoard(),
        this.rotation.x = -Math.PI * .5;
        const t = this;
        this.scale.set(.01, .01, .01),
        d.remove(this.scale),
        d({
            targets: this.scale,
            x: 1,
            y: 1,
            z: 1,
            easing: "easeOutQuad",
            duration: 1200
        });
        const e = -Math.PI / 5;
        d.remove(this.rotation),
        d({
            targets: this.rotation,
            x: e,
            delay: 1e3,
            easing: "easeOutCubic",
            duration: 1500,
            complete: function() {
                t.gameBoard.start()
            }
        }),
        setTimeout(function() {
            t.visible = !0
        }, 140)
    }
    setWonLoseState() {
        d.remove(this.rotation),
        d({
            targets: this.rotation,
            x: -Math.PI / 3,
            easing: "easeOutQuint",
            duration: 800
        });
        const t = this.position.z - 2;
        d.remove(this.position),
        d({
            targets: this.position,
            z: t,
            easing: "easeOutQuint",
            duration: 800
        })
    }
    updateCurrentRotZ() {
        this.currentRotZ = this.rotation.z - this.rotation.z % (2 * Math.PI)
    }
}
const W = .1
  , O = [16777215, 16776960, 14352128, 16711844, 15990528];
class se extends Pt {
    constructor(t) {
        super();
        s(this, "config");
        s(this, "targetPos");
        s(this, "regionWidth");
        s(this, "regionHeight");
        s(this, "state", P.EXPLODED);
        s(this, "velocity", []);
        this.config = Object.assign(t, {
            launchHeight: 300,
            sphereRadius: 200,
            color: 16763904,
            size: 72,
            numParticles: 24
        }),
        this.init()
    }
    init() {
        const t = this.config;
        this.geometry = new At;
        const e = new Float32Array(t.numParticles * 3)
          , i = new q(e,3);
        this.geometry.setAttribute("position", i);
        const o = new Float32Array(t.numParticles * 3)
          , n = this.targetPos = new q(o,3)
          , a = 50;
        for (let h = 0; h < t.numParticles; h++) {
            let c, p, m;
            c = 2 * Math.random() * t.sphereRadius - t.sphereRadius + a,
            p = 2 * Math.random() * t.sphereRadius - t.sphereRadius + a,
            m = 2 * Math.random() * t.sphereRadius - t.sphereRadius + a,
            n.setXYZ(h, c, p, m),
            this.velocity[h] = 0
        }
        const r = O[Math.floor(Math.random() * O.length)];
        this.material = new kt({
            size: t.size,
            color: r,
            opacity: 1,
            transparent: !0,
            blending: Rt,
            depthTest: !1,
            map: t.map
        }),
        this.material.needsUpdate = !0
    }
    setRegion(t, e) {
        this.regionWidth = t,
        this.regionHeight = e
    }
    update(t) {
        const e = this.geometry.getAttribute("position")
          , i = this.targetPos
          , o = this.config;
        if (this.state == P.EXPLODED)
            for (let n = 0; n < o.numParticles; n++) {
                let a = e.getX(n)
                  , r = e.getY(n)
                  , h = e.getZ(n);
                e.setXYZ(n, a + (i.getX(n) - a) * W, r + (i.getY(n) - r) * W, h + (i.getZ(n) - h) * W),
                Math.abs(i.getX(n) - a) < .5 && (this.state = P.FALLING)
            }
        else {
            const n = -80 * t;
            for (let r = 0; r < o.numParticles; r++) {
                let h = e.getY(r);
                this.velocity[r] += n,
                e.setY(r, h + this.velocity[r])
            }
            const a = this.material;
            a.opacity += (0 - a.opacity) * .05,
            a.opacity <= .025 && this.reset()
        }
        e.needsUpdate = !0
    }
    reset() {
        if (this.rotation.z = 0,
        this.regionWidth) {
            this.position.x = Math.random() * this.regionWidth - this.regionWidth * .5;
            const a = this.regionHeight - this.config.launchHeight;
            this.position.y = Math.random() * a - a * .5
        }
        this.state = P.EXPLODED;
        const t = this.material;
        t.opacity = 1,
        t.color.set(O[Math.floor(Math.random() * O.length)]),
        t.needsUpdate = !0;
        const e = this.config
          , i = this.geometry.getAttribute("position")
          , o = this.targetPos
          , n = 50;
        for (let a = 0; a < e.numParticles; a++) {
            let r, h, c;
            r = 2 * Math.random() * e.sphereRadius - e.sphereRadius + n,
            h = 2 * Math.random() * e.sphereRadius - e.sphereRadius + n,
            c = 2 * Math.random() * e.sphereRadius - e.sphereRadius + n,
            o.setXYZ(a, r, h, c),
            this.velocity[a] = 0,
            i.setXYZ(a, 0, 0, 0)
        }
        i.needsUpdate = !0,
        e.callback && e.callback.call(this)
    }
}
var P;
(function(l) {
    l[l.EXPLODED = 0] = "EXPLODED",
    l[l.FALLING = 1] = "FALLING"
}
)(P || (P = {}));
class ie extends S {
    constructor(t, e=3, i=500, o) {
        super();
        s(this, "map");
        s(this, "numFireworks");
        s(this, "interval");
        s(this, "callback");
        this.map = t,
        this.numFireworks = e,
        this.interval = i,
        this.callback = o,
        this.init()
    }
    init() {
        for (let t = 0; t < this.numFireworks; t++) {
            const e = new se({
                map: this.map,
                callback: this.callback
            });
            this.add(e)
        }
    }
    update(t) {
        for (let e = 0; e < this.children.length; e++)
            this.children[e].update(t)
    }
    changeRegion(t, e) {
        this.children.forEach(function(i) {
            i.setRegion(t, e)
        })
    }
    reset() {
        this.children.forEach(function(t) {
            t.reset()
        })
    }
}
const ne = 10
  , B = 1 / ne
  , L = .5 * B
  , oe = 1 / 60
  , $ = 0
  , tt = .8
  , et = .3;
class ae {
    constructor(t) {
        s(this, "g3d");
        s(this, "dopt");
        s(this, "ball");
        s(this, "world");
        s(this, "ballMaterial");
        s(this, "wallMaterial");
        s(this, "groundMaterial");
        s(this, "topWall");
        s(this, "board");
        s(this, "blist");
        s(this, "slist");
        s(this, "sphere");
        this.g3d = t,
        this.dopt = t.dopt,
        this.init()
    }
    init() {
        this.slist = [];
        const t = this.dopt
          , e = t.boardDimension
          , i = t.boardDimension
          , o = t.ballRadius
          , n = t.boardThickness
          , a = t.boardDepth;
        let r = e + 2 * n
          , h = n
          , c = t.pieceDepth + a;
        this.world = new u.exports.World,
        this.world.gravity.set(0, t.gravityY, t.gravityZ),
        this.world.broadphase = new u.exports.NaiveBroadphase,
        this.world.solver.iterations = 10;
        const p = this.ballMaterial = new u.exports.Material("Ball")
          , m = this.wallMaterial = new u.exports.Material("Wall")
          , v = this.groundMaterial = new u.exports.Material("Ground")
          , f = new u.exports.ContactMaterial(p,m,{
            friction: tt,
            restitution: $
        });
        this.world.addContactMaterial(f);
        const g = new u.exports.ContactMaterial(p,v,{
            friction: tt,
            restitution: $
        });
        this.world.addContactMaterial(g);
        const y = o * B;
        this.sphere = new u.exports.Sphere(y);
        const b = this.ball = new u.exports.Body({
            material: p,
            mass: 20,
            position: new u.exports.Vec3((-e * .5 + 2 * o) * B,0,0),
            shape: this.sphere,
            angularDamping: et,
            linearDamping: et
        });
        this.world.addBody(b),
        this.board = new u.exports.Body({
            mass: 0,
            material: m
        }),
        this.world.addBody(this.board);
        const x = () => {
            console.log("Collide")
        }
        ;
        this.board.addEventListener("collide", x);
        const T = -(t.pieceDepth + a) * .5 * B;
        this.board.addShape(new u.exports.Box(new u.exports.Vec3(e * L,i * L,a * L)), new u.exports.Vec3(0,0,T));
        const w = 1;
        this.board.addShape(new u.exports.Box(new u.exports.Vec3(r * L,h * L,w * c * L)), new u.exports.Vec3(0,(i * .5 + .5 * n) * B,-a * .5 * B)),
        this.board.addShape(new u.exports.Box(new u.exports.Vec3(r * L,h * L,w * c * L)), new u.exports.Vec3(0,(-i * .5 - .5 * n) * B,-a * .5 * B)),
        r = n,
        h = i,
        this.board.addShape(new u.exports.Box(new u.exports.Vec3(r * L,h * L,w * c * L)), new u.exports.Vec3((-e * .5 - .5 * n) * B,0,-a * .5 * B)),
        this.board.addShape(new u.exports.Box(new u.exports.Vec3(r * L,h * L,w * c * L)), new u.exports.Vec3((e * .5 + .5 * n) * B,0,-a * .5 * B)),
        this.blist = []
    }
    addBlock(t, e, i) {
        const o = new u.exports.Box(new u.exports.Vec3(i * .5,i * .5,10 * this.dopt.pieceDepth * L));
        return this.board.addShape(o, new u.exports.Vec3(t,e,0)),
        this.slist.push(o),
        o
    }
    removeBlock(t) {
        for (let e = this.slist.length - 1; e >= 0; e--)
            if (t == this.slist[e]) {
                this.slist.splice(e, 1),
                this.board.shapes.splice(e + 5, 1),
                this.board.shapeOffsets.splice(e + 5, 1),
                this.board.shapeOrientations.splice(e + 5, 1);
                return
            }
    }
    setBallRadius(t) {
        this.sphere.radius = t,
        this.ball.updateBoundingRadius(),
        this.ball.updateMassProperties()
    }
    update() {
        this.world.step(oe)
    }
    reset() {
        this.ball.velocity.set(0, 0, 0),
        this.ball.angularVelocity.set(0, 0, 0),
        this.board.quaternion.setFromEuler(0, 0, 0),
        this.cleanBlocks()
    }
    placeBall(t, e) {
        this.ball.position.x = t * B,
        this.ball.position.y = e * B,
        this.ball.position.z = .45 * B
    }
    cleanBlocks() {
        this.board.shapes.splice(5),
        this.slist.splice(0),
        this.board.shapeOffsets.splice(5),
        this.board.shapeOrientations.splice(5),
        this.board.updateMassProperties()
    }
}
const re = 0;
class le extends Wt {
    constructor(t) {
        super();
        s(this, "dopt");
        s(this, "am");
        s(this, "gs");
        s(this, "clock");
        s(this, "state");
        s(this, "container");
        s(this, "controls");
        s(this, "f3ds");
        s(this, "physics");
        s(this, "isHover");
        s(this, "isDragging");
        s(this, "currentCamY");
        s(this, "revealId");
        s(this, "inTransition");
        s(this, "pmremGenerator");
        this.gs = t,
        this.dopt = t.dopt,
        this.am = t.am,
        this.setCameraMatchProjection(),
        this.buildScene(),
        this.initMouseDrag()
    }
    enableOrbitControl() {
        this.controls = new Ht(this.camera,this.el),
        this.controls.enableDamping = !0,
        this.controls.update()
    }
    buildScene() {
        this.clock = new Nt,
        this.physics = new ae(this),
        this.container = new ee(this);
        const t = this.scene;
        t.add(this.container);
        const e = this.am;
        this.pmremGenerator = new Ot(this.renderer),
        this.pmremGenerator.compileEquirectangularShader();
        const i = this.pmremGenerator.fromEquirectangular(e.envTexture).texture;
        this.pmremGenerator.dispose(),
        t.environment = i,
        this.f3ds = new ie(e.textures.Firework,3,500,function() {
            e.audios.Firework.isPlaying && e.audios.Firework.stop(),
            e.audios.Firework.play()
        }
        ),
        t.add(this.f3ds),
        this.setRunningState(),
        this.handleInteraction(),
        this.resizeHandler()
    }
    initMouseDrag() {
        const t = 65
          , e = this.el;
        let i, o, n, a, r, h;
        const c = this
          , p = this.container;
        p.gameBoard;
        function m(g) {
            c.isHover || c.inTransition || !c.isRunningState || (c.isDragging = !0,
            o = g.clientX,
            r = g.clientY,
            i = o,
            a = r,
            h = c.camera.position.y,
            n = p.gameBoard.board.rotation.z,
            e.addEventListener("pointermove", v),
            e.addEventListener("pointerup", f),
            window.addEventListener("pointermove", v),
            window.addEventListener("pointerup", f))
        }
        function v(g) {
            o = g.clientX,
            r = g.clientY;
            const y = (o - i) * .25
              , b = (r - a) * .25;
            let x = y;
            x < -t && (x = -t),
            x > t && (x = t),
            p.gameBoard.board.currentRotZ = n - x * Math.PI / 180,
            c.currentCamY = h + b
        }
        function f(g) {
            c.isDragging = !1,
            e.removeEventListener("pointermove", v),
            e.removeEventListener("pointerup", f),
            window.removeEventListener("pointermove", v),
            window.removeEventListener("pointerup", f)
        }
        e.addEventListener("pointerdown", m)
    }
    handleInteraction() {
        const t = this.camera
          , e = this.raycaster
          , i = this.container
          , o = this.el
          , n = this
          , a = this.container.gameBoard;
        function r(c) {
            if (n.inTransition || !n.isRunningState)
                return;
            let p, m;
            p = c.offsetX,
            m = c.offsetY;
            const v = {
                x: p / n.width * 2 - 1,
                y: -(m / n.height) * 2 + 1
            };
            e.setFromCamera(v, t);
            const f = e.intersectObjects(i.children, !0);
            for (let g = 0; g < f.length; g++) {
                const y = f[g].object;
                if (c.type === "pointerdown" && n.dopt.isEditing) {
                    if (c.button == 0 && y instanceof G && y.isBackboard) {
                        const b = f[g].uv;
                        a.addBlockUV(b.x, b.y),
                        a.scanAlienLimits()
                    }
                    if (c.button == 0 && y instanceof F && (a.removeBlock(y),
                    a.scanAlienLimits()),
                    c.button == 2 && y instanceof G && y.isBackboard) {
                        const b = f[g].uv;
                        c.shiftKey ? a.addAlienUV(b.x, b.y, "Y") : a.addAlienUV(b.x, b.y, "X"),
                        a.scanAlienLimits()
                    } else if (c.button == 2) {
                        let b = y;
                        for (; b.parent && (b = b.parent,
                        !(b instanceof R)); )
                            ;
                        b instanceof R && a.removeAlien(b)
                    }
                }
                c.type === "pointermove";
                break
            }
            f.length === 0 && c.type === "pointermove"
        }
        function h(c) {}
        o.addEventListener("pointerdown", r),
        o.addEventListener("pointermove", r),
        o.addEventListener("pointerup", h)
    }
    loadLevel(t, e) {
        this.setRunningState(),
        this.currentCamY = re,
        this.inTransition = !0;
        const i = this.gs.levels;
        t == i.length && (t = 0),
        clearInterval(this.revealId);
        const o = i[t];
        this.isDragging = !1;
        const n = this;
        this.container.visible = !1,
        this.f3ds.visible = !1,
        this.container.gameBoard.prepareBoard(o, function() {
            n.container.show(),
            e == null || e.call(n)
        })
    }
    renderRequest() {
        super.renderRequest();
        const t = this.clock.getDelta();
        this.controls && this.controls.update(),
        (this.state == E.WON || this.state == E.FIRE_WORK) && this.f3ds.update(t);
        const e = this.container;
        e.glight.animate();
        const i = e.gameBoard.board;
        e.gameBoard.rotateBoard(i.rotation.z + (i.currentRotZ - i.rotation.z) * .075),
        this.state === E.RUNNING && e.gameBoard.update(t)
    }
    setRunningState() {
        this.state = E.RUNNING,
        this.gs.header.show()
    }
    get isRunningState() {
        return this.state == E.RUNNING
    }
    setPauseState() {
        this.state = E.PAUSE
    }
    setWonState() {
        this.dopt.isEditing || !this.isRunningState || (this.state = E.WON,
        this.container.setWonLoseState(),
        this.f3ds.visible = !0,
        this.f3ds.reset(),
        this.gs.header.timeBtn.pause(),
        this.gs.header.hide(),
        this.gs.showWonBar(),
        this.am.audios.WonTune.play(),
        this.gs.unlockNextLevel())
    }
    setLoseState() {
        this.dopt.isEditing || !this.isRunningState || (this.state = E.LOSE,
        this.container.setWonLoseState(),
        this.gs.header.timeBtn.pause(),
        this.gs.header.hide(),
        this.gs.showLoseBar(),
        this.am.audios.LoseTune.play())
    }
    resize(t, e) {
        this.width = t,
        this.height = e,
        this.camera.aspect = t / e,
        this.camera.updateProjectionMatrix(),
        this.renderer.setSize(t, e),
        this.resizeHandler(),
        this.container.fitGameBoard(),
        this.f3ds.changeRegion(t, e)
    }
    resizeHandler() {
        super.resizeHandler(),
        this.setCameraMatchProjection()
    }
    show() {
        this.el.style.display = "block"
    }
    hide() {
        this.el.style.display = "none"
    }
    destroy() {}
}
var E;
(function(l) {
    l[l.RUNNING = 0] = "RUNNING",
    l[l.WON = 1] = "WON",
    l[l.LOSE = 2] = "LOSE",
    l[l.PAUSE = 3] = "PAUSE",
    l[l.FIRE_WORK = 4] = "FIRE_WORK"
}
)(E || (E = {}));
class he {
    constructor(t) {
        s(this, "gs");
        s(this, "el");
        this.gs = t,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("img");
        t.className = "rs-control-guide",
        t.src = "assets/graphics/ControlGuide.png",
        t.draggable = !1,
        this.hide()
    }
    show() {
        this.el.style.display = "block",
        d.remove(this.el),
        d({
            targets: this.el,
            opacity: [0, 1],
            duration: 800,
            easing: "easeOutQuad"
        })
    }
    hide() {
        this.el.style.display = "none"
    }
}
class ce {
    constructor(t, e) {
        s(this, "el");
        this.init(t, e)
    }
    init(t, e) {
        const i = this.el = document.createElement("span");
        i.className = t,
        i.style.display = "block",
        i.style.cursor = "pointer",
        i.style.borderRadius = "50%",
        i.style.textAlign = "center";
        const o = this;
        e && i.addEventListener("click", function(n) {
            e.call(o)
        })
    }
    addClass(t) {
        this.el.classList.add(t)
    }
    removeClass(t) {
        this.el.classList.remove(t)
    }
}
class M extends ce {
    init(t, e) {
        super.init(t, e),
        this.el.classList.add("rs-mb3d-mainbutton")
    }
    addClass(t) {
        this.el.classList.add(t)
    }
    removeClass(t) {
        this.el.classList.remove(t)
    }
}
class M2 extends ce {
    init(t, e) {
        super.init(t, e),
        this.el.classList.add("rs-mb3d-mainbutton2")
    }
    addClass(t) {
        this.el.classList.add(t)
    }
    removeClass(t) {
        this.el.classList.remove(t)
    }
}
class de {
    constructor(t) {
        s(this, "gs");
        s(this, "am");
        s(this, "el");
        s(this, "levelBtn");
        s(this, "infoBtn");
		s(this, "rewardBtn");
        s(this, "homeBtn");
        s(this, "soundBtn");
        s(this, "soundOn", !0);
        this.gs = t,
        this.am = t.am,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-mb3d-gamebuttonbar",
        this.am,
        this.levelBtn = new M("icon-stack",this.showGameLevels.bind(this)),
        this.levelBtn.addClass("rs-mb3d-mainbutton-extra"),
        t.appendChild(this.levelBtn.el),
        this.infoBtn = new M("icon-info",this.showHelp.bind(this)),
        t.appendChild(this.infoBtn.el),
		this.rewardBtn = new M2("icon-reward",this.showRew.bind(this)),
        t.appendChild(this.rewardBtn.el),
        this.homeBtn = new M("icon-home",this.showHome.bind(this)),
        t.appendChild(this.homeBtn.el),
        this.soundBtn = new M("icon-sound-on",this.toggleSound.bind(this)),
        t.appendChild(this.soundBtn.el)
    }
    show() {
        d({
            targets: this.el,
            bottom: 15,
            easing: "easeOutQuint",
            duration: 800
        })
    }
    hide() {
        d({
            targets: this.el,
            bottom: -50,
            easing: "easeOutQuint",
            duration: 800
        })
    }
    showHint() {
        console.log("Show hint"),
        this.am.audios.ButtonClick.play()
    }
    showGameLevels() {
        this.am.audios.ButtonClick.play(),
        this.gs.levelPanel.show(),
		window[window.preroll.config.loaderObjectName].refetchAd()
    }
    replayLevel() {
        this.am.audios.ButtonClick.play(),
        this.gs.replayLevel(),
		window[window.preroll.config.loaderObjectName].refetchAd()
    }
    showHome() {
        this.am.audios.ButtonClick.play(),
        this.gs.game3d.setPauseState(),
        this.gs.mb3d.setHomeScreen(),
		window[window.preroll.config.loaderObjectName].refetchAd()
    }
    showHelp() {
        this.am.audios.ButtonClick.play(),
        this.gs.hpanel.show(),
		window[window.preroll.config.loaderObjectName].refetchAd()
    }
	showRew() {
        this.am.audios.ButtonClick.play(),
		window[window.preroll.config.loaderObjectName].refetchAd(),
		this.gs.trophyPanel.show(),
		this.gs.unlockNextLevel(),
		this.gs.header.hide(),
		this.gs.showWonBar(),
		this.am.audios.WonTune.play()	
    }
    toggleSound() {
        const t = this.soundBtn;
        this.soundOn = !this.soundOn,
        this.soundOn ? (t.removeClass("icon-sound-off"),
        t.addClass("icon-sound-on"),
        this.am.audios.ButtonClick.play()) : (t.removeClass("icon-sound-on"),
        t.addClass("icon-sound-off")),
        this.am.toggleSound()
    }
    getClientSize() {
        return [this.el.clientWidth, this.el.clientHeight]
    }
}
class pe {
    constructor(t) {
        s(this, "gs");
        s(this, "am");
        s(this, "el");
        s(this, "timeBtn");
        s(this, "levelBtn");
        s(this, "moveBtn");
        this.gs = t,
        this.am = t.am,
        this.init()
    }
    init() {
        this.gs;
        const t = this.el = document.createElement("div");
        t.className = "rs-mb3d-gameheader",
        this.timeBtn = new ue(this),
        this.levelBtn = new me(this),
        t.appendChild(this.levelBtn.el),
        this.moveBtn = new ge(this)
    }
    getClientSize() {
        return [this.el.clientWidth, this.el.clientHeight]
    }
    show() {
        d({
            targets: this.el,
            top: 4,
            easing: "easeOutQuint",
            duration: 800
        })
    }
    hide() {
        d({
            targets: this.el,
            top: -80,
            easing: "easeOutQuint",
            duration: 800
        })
    }
}
class ue {
    constructor(t) {
        s(this, "gh");
        s(this, "am");
        s(this, "el");
        s(this, "isPlaying", !1);
        s(this, "currentTime");
        s(this, "ticon");
        s(this, "tval");
        s(this, "tpause");
        s(this, "timeId");
        this.gh = t,
        this.am = t.am,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-mb3d-timebtn",
        this.isPlaying = !1,
        this.currentTime = 0,
        this.gh;
        const e = this.am;
        t.addEventListener("click", function() {
            e.audios.ButtonClick.play()
        });
        const i = this.ticon = document.createElement("span");
        t.appendChild(i),
        i.className = "icon-timer";
        const o = this.tval = document.createElement("span");
        o.className = "timebtn-value",
        t.appendChild(o),
        o.innerHTML = "00:00:00";
        const n = this.tpause = document.createElement("span");
        n.className = "icon-pausetime",
        t.appendChild(n)
    }
    resume() {
        clearInterval(this.timeId),
        this.timeId = setInterval(this.timeTick.bind(this), 1e3),
        this.isPlaying = !0,
        this.tpause.className = "icon-pausetime"
    }
    pause() {
        clearInterval(this.timeId),
        this.isPlaying = !1,
        this.tpause.className = "icon-playtime"
    }
    reset() {
        this.currentTime = 0,
        this.tval.innerHTML = "00:00:00"
    }
    timeTick() {
        this.currentTime += 1;
        const t = this.currentTime
          , e = Math.floor(t / 3600)
          , i = Math.floor((t - e * 3600) / 60)
          , o = (t - e * 3600) % 60;
        function n(a) {
            return a < 10 ? "0" + a : a
        }
        this.tval.innerHTML = n(e) + ":" + n(i) + ":" + n(o)
    }
    toggleTime() {
        this.isPlaying = !this.isPlaying,
        this.isPlaying ? this.resume() : this.pause()
    }
}
class me {
    constructor(t) {
        s(this, "gh");
        s(this, "el");
        s(this, "label");
        s(this, "btn");
        s(this, "currentLevel");
        this.gh = t,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-mb3d-levelbtn",
        this.label = document.createElement("span"),
        this.label.className = "levelbtn-label",
        t.appendChild(this.label),
        this.btn = document.createElement("span"),
        this.btn.className = "levelbtn-shuffle icon-undo",
        this.reset()
    }
    setLevel(t) {
        this.currentLevel = t,
        this.label.innerHTML = "Level " + t
    }
    addLevel(t) {
        this.setLevel(this.currentLevel + t)
    }
    reset() {
        this.setLevel(0),
        this.currentLevel = 0
    }
}
class ge {
    constructor(t) {
        s(this, "gh");
        s(this, "el");
        s(this, "micon");
        s(this, "mval");
        s(this, "count");
        this.gh = t,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-mb3d-movebtn",
        this.count = 0;
        const e = this.micon = document.createElement("span");
        t.appendChild(e),
        e.className = "icon-quill";
        const i = this.mval = document.createElement("span");
        i.className = "movebtn-value",
        t.appendChild(i),
        i.innerHTML = "000"
    }
    addCount(t) {
        this.count += t;
        let e = this.count
          , i = 0
          , o = "";
        for (; e >= 10; )
            i++,
            e = e / 10;
        i = 3 - i - 1;
        for (var n = 0; n < i; n++)
            o += "0";
        this.mval.innerHTML = o + this.count
    }
    reset() {
        this.count = 0,
        this.mval.innerHTML = "000"
    }
}
class fe {
    constructor(t) {
        s(this, "gs");
        s(this, "el");
        s(this, "replayBtn");
        s(this, "status");
        s(this, "am");
        this.gs = t,
        this.am = t.am,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-mb3d-gamewonbar",
        t.style.bottom = "-85px",
        this.replayBtn = new M("icon-undo",this.doReplay.bind(this)),
        this.replayBtn.addClass("rs-mb3d-mainbutton-extra"),
        t.appendChild(this.replayBtn.el),
        this.status = document.createElement("h1"),
        this.status.className = "trophy-level-title",
        this.status.innerHTML = "DRAW"
    }
    doReplay() {
        this.am.audios.ButtonClick.play(),
        this.gs.replayLevel()
    }
    show(t) {
        d({
            targets: this.el,
            bottom: 12,
            easing: "easeOutQuint",
            duration: 800
        }),
        this.setStatus(t),
        document.body.appendChild(this.status)
    }
    hide() {
        d({
            targets: this.el,
            bottom: -85,
            easing: "easeOutQuint",
            duration: 800
        }),
        document.body.contains(this.status) && document.body.removeChild(this.status)
    }
    setStatus(t) {
        this.status.innerHTML = t
    }
}
class be {
    constructor(t) {
        s(this, "gs");
        s(this, "el");
        s(this, "status");
        s(this, "nextBtn");
        s(this, "am");
        this.gs = t,
        this.am = t.am,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-mb3d-gamewonbar",
        t.style.bottom = "-85px",
        this.status = document.createElement("h1"),
        this.status.className = "trophy-level-title",
        this.status.innerHTML = "DRAW",
        this.nextBtn = new M("icon-nextlevel",this.doNext.bind(this)),
        this.nextBtn.addClass("rs-mb3d-mainbutton-extra"),
        t.appendChild(this.nextBtn.el)
    }
    doNext() {
        this.am.audios.ButtonClick.play(),
        this.gs.nextLevel()
    }
    show(t) {
        d({
            targets: this.el,
            bottom: 12,
            easing: "easeOutQuint",
            duration: 800
        }),
        this.setStatus(t),
        document.body.appendChild(this.status),
        this.gs.trophyPanel.show()
    }
    setStatus(t) {
        this.status.innerHTML = t
    }
    hide() {
        d({
            targets: this.el,
            bottom: -85,
            easing: "easeOutQuint",
            duration: 800
        }),
        document.body.contains(this.status) && document.body.removeChild(this.status)
    }
}
class st {
    constructor(t) {
        s(this, "el");
        s(this, "scrollId");
        this.el = t,
        this.el.style.overflow = "hidden",
        this.init()
    }
    init() {
        const t = this.el
          , e = this;
        let i, o, n, a;
        function r() {
            t.scrollTop += (n - t.scrollTop) * .075,
            e.scrollId = requestAnimationFrame(r)
        }
        function h(m) {
            a = m.clientY,
            i = a,
            o = n = t.scrollTop,
            t.addEventListener("pointermove", c),
            t.addEventListener("pointerup", p),
            window.addEventListener("pointermove", c),
            window.addEventListener("pointerup", p),
            cancelAnimationFrame(e.scrollId),
            e.scrollId = requestAnimationFrame(r),
            t.style.cursor = "grab"
        }
        function c(m) {
            a = m.clientY;
            var v = (a - i) * 2.5
              , f = t.scrollHeight - e.el.clientHeight
              , g = o - v;
            g > f && (g = f),
            g < 0 && (g = 0),
            n = g,
            t.style.cursor = "grabbing"
        }
        function p(m) {
            t.removeEventListener("pointermove", c),
            t.removeEventListener("pointerup", p),
            window.removeEventListener("pointermove", c),
            window.removeEventListener("pointerup", p),
            cancelAnimationFrame(e.scrollId),
            t.style.cursor = "grab"
        }
        t.addEventListener("pointerdown", h),
        t.addEventListener("mouseover", function(m) {
            t.style.cursor = "grab"
        })
    }
}
const ve = "assets/text/helpcontent.html";
class it extends k {
    constructor(t) {
        super();
        s(this, "gs");
        s(this, "container");
        s(this, "scroller");
        this.gs = t,
        this.init()
    }
    init() {
        super.init();
        const t = this.el;
        t.classList.add("rs-mb3d-helppanel"),
        t.style.width = t.style.height = "90%";
        const e = this.container = document.createElement("div");
        e.className = "rs-helpcontainer",
        t.appendChild(e),
        this.scroller = new st(this.container);
        const i = new XMLHttpRequest;
        i.addEventListener("load", function(o) {
            const n = this.responseText;
            e.innerHTML = n
        }),
        i.open("GET", ve),
        i.send()
    }
    show() {
        var t;
        super.show(),
        (t = this.gs) == null || t.game3d.setPauseState()
    }
    hide() {
        var t;
        super.hide(),
        (t = this.gs) == null || t.game3d.setRunningState()
    }
}
class we extends k {
    constructor(t) {
        super();
        s(this, "gs");
        s(this, "am");
        s(this, "levelTitle");
        s(this, "lgc");
        s(this, "lg");
        s(this, "scroller");
        s(this, "scrollId");
        this.gs = t,
        this.am = t.am,
        this.init()
    }
    init() {
        super.init();
        const t = this.el;
        this.el.classList.add("rs-mb3d-levelpanel"),
        t.style.width = t.style.height = "90%";
        const e = this.levelTitle = document.createElement("div");
        e.className = "trophy-level-title",
        e.innerHTML = "LEVELS";
        const i = this.lgc = document.createElement("div");
        i.className = "rs-mb3d-levelgridcontainer",
        t.appendChild(i),
        this.lg = document.createElement("div"),
        this.lg.className = "rs-mb3d-levelgrid",
        i.appendChild(this.lg),
        this.scroller = new st(this.lgc)
    }
    show() {
        super.show(),
        this.buildGrid(),
        this.gs.game3d.setPauseState()
    }
    hide() {
        super.hide(),
        document.body.contains(this.levelTitle) && document.body.removeChild(this.levelTitle),
        this.gs.game3d.setRunningState()
    }
    buildGrid() {
        const t = this.gs.levels.length
          , e = this.lg
          , i = this.gs
          , o = this.gs.mb3d.pref
          , n = this.am;
        e.textContent = "";
        function a(h) {
            const c = parseInt(h.currentTarget.dataset.index);
            o.isUnlocked(c) && (i.loadLevel(c),
            console.log("load level ", c)),
            n.audios.ButtonClick.play()
        }
        for (let h = 0; h < t; h++) {
            const c = document.createElement("div");
            c.className = "rs-mb3d-levelgriditem",
            c.dataset.index = h.toString(),
            o.isUnlocked(h) ? (c.innerHTML = "<span>" + (h + 1) + "</span>",
            c.dataset.unlocked = "true") : (c.innerHTML = '<span class="icon-lock"></span>',
            c.dataset.unlocked = "false"),
            e.appendChild(c),
            c.addEventListener("click", a)
        }
        cancelAnimationFrame(this.scrollId),
        this.lgc.scrollTop = 0;
        const r = Math.floor(this.lg.clientWidth / 96) * 96;
        this.lg.style.width = r + "px"
    }
}
class ye extends k {
    constructor(t) {
        super();
        s(this, "gs");
        s(this, "am");
        s(this, "title");
        s(this, "meta");
        s(this, "timespan");
        s(this, "movespan");
        s(this, "lvl");
        s(this, "btnContainer");
        s(this, "replayBtn");
        s(this, "nextBtn");
        this.gs = t,
        this.am = t.am,
        this.init()
    }
    init() {
        super.init();
        const t = this.el;
        t.classList.add("rs-trophy-panel"),
        t.style.width = t.style.height = "90%",
        this.title = document.createElement("h1"),
        this.title.className = "trophy-level-title",
        this.title.innerHTML = "Level Up";
        const e = this.meta = document.createElement("div");
        e.className = "meta-container",
        t.appendChild(e);
        const i = this.timespan = document.createElement("span");
        i.innerHTML = "Time: 100s",
        e.appendChild(i);
        const o = this.movespan = document.createElement("span");
        o.innerHTML = "Moves: 000";
        const n = document.createElement("div");
        n.className = "trophy-container";
        const a = document.createElement("img");
        a.src = "assets/graphics/trophy.png",
        a.draggable = !1,
        n.appendChild(a),
        t.appendChild(n);
        const r = this.lvl = document.createElement("span");
        r.className = "level-label",
        r.innerHTML = "1",
        n.appendChild(r);
        const h = this.btnContainer = document.createElement("div");
        h.className = "trophy-button-container",
        t.appendChild(h),
        this.replayBtn = new M("icon-undo",this.doReplay.bind(this)),
        this.replayBtn.addClass("rs-mb3d-mainbutton-extra"),
        h.appendChild(this.replayBtn.el),
        this.nextBtn = new M("icon-nextlevel",this.doNext.bind(this)),
        this.nextBtn.addClass("rs-mb3d-mainbutton-extra"),
        h.appendChild(this.nextBtn.el),
        this.closeBtn.style.display = "none"
    }
    show() {
        super.show(),
        this.setValues(this.gs.getPlayingTime(), this.gs.currentLevel + 1)
    }
    hide() {
        super.hide(),
        document.body.contains(this.title) && document.body.removeChild(this.title)
    }
    doReplay() {
        this.am.audios.ButtonClick.play(),
        this.gs.replayLevel()
    }
    doNext() {
        this.am.audios.ButtonClick.play(),
        this.gs.nextLevel()
    }
    setValues(t, e) {
        this.timespan.innerHTML = "Times: " + t + "s",
        this.lvl.innerHTML = e.toString()
    }
}
class Le {
    constructor(t, e) {
        s(this, "am");
        s(this, "mb3d");
        s(this, "game3d");
        s(this, "el");
        s(this, "config");
        s(this, "dopt");
        s(this, "header");
        s(this, "bbar");
        s(this, "wbar");
        s(this, "lbar");
        s(this, "currentLevel");
        s(this, "levels");
        s(this, "imagePanel");
        s(this, "levelPanel");
        s(this, "trophyPanel");
        s(this, "hpanel");
        s(this, "controlGuide");
        this.mb3d = t,
        this.config = e,
        this.am = t.assetManager,
        this.dopt = t.defaultOptions,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-gscreen",
        t.style.width = t.style.height = "100%",
        t.style.display = "none",
        this.levels = this.config.data.levels,
        this.initPanel(),
        this.header = new pe(this),
        t.appendChild(this.header.el),
        this.bbar = new de(this),
        t.appendChild(this.bbar.el),
        this.wbar = new be(this),
        t.appendChild(this.wbar.el),
        this.lbar = new fe(this),
        t.appendChild(this.lbar.el),
        this.controlGuide = new he(this),
        document.body.appendChild(this.controlGuide.el),
        document.body.addEventListener("pointerdown", () => {
            this.controlGuide.hide()
        }
        ),
        this.game3d = new le(this),
        t.appendChild(this.game3d.el),
        this.currentLevel = 0
    }
    initPanel() {
        this.imagePanel = new Gt(this.applyNewLevel.bind(this)),
        this.trophyPanel = new ye(this),
        this.mb3d.homeScreen ? this.hpanel = this.mb3d.homeScreen.hpanel : this.hpanel = new it(this),
        this.levelPanel = new we(this)
    }
    loadLevel(t) {
        const e = this;
        this.trophyPanel.hide(),
        this.levelPanel.hide(),
        this.wbar.hide(),
        this.lbar.hide(),
        this.showButtonBar();
        function i() {
            e.reset(),
            e.header.timeBtn.resume(),
            e.header.levelBtn.setLevel(t + 1),
            e.controlGuide.show()
        }
        this.game3d.loadLevel(t, i),
        this.currentLevel = t
    }
    nextLevel() {
        let t = this.currentLevel + 1;
        t == this.levels.length && (t = 0),
        this.loadLevel(t),
		window[window.preroll.config.loaderObjectName].refetchAd()
    }
    unlockNextLevel() {
        let t = this.currentLevel + 1;
        t < this.levels.length && this.mb3d.pref.saveUnlock(t)
    }
    replayLevel() {
        this.loadLevel(this.currentLevel),
			window[window.preroll.config.loaderObjectName].refetchAd()
    }
    reset() {
        this.header.timeBtn.reset(),
        this.header.moveBtn.reset(),
        this.header.levelBtn.reset()
    }
    applyNewLevel(t) {
        this.mb3d.root.appendChild(this.el),
        this.transitionIn();
        const e = this.mb3d.getAppDimension();
        this.game3d.resize(e[0], e[1]),
        this.game3d.startRendering(),
        t == null && (t = 0),
        this.loadLevel(t)
    }
    show(t) {
        this.imagePanel.showImageSource("assets/graphics/tutor.png")
    }
    hide() {
        this.mb3d.root.removeChild(this.el),
        this.game3d.stopRendering()
    }
    showWonBar() {
        this.bbar.hide();
        var t = this.wbar;
        setTimeout(function() {
            t.show("Level Passed")
        }, 400)
    }
    showLoseBar() {
        this.bbar.hide();
        var t = this.lbar;
        setTimeout(function() {
            t.show("Level Failed")
        }, 400)
    }
    showButtonBar() {
        this.wbar.hide();
        var t = this.bbar;
        setTimeout(function() {
            t.show()
        }, 400)
    }
    transitionIn() {
        this.el.style.display = "block"
    }
    transitionOut() {}
    getPlayingTime() {
        return this.header.timeBtn.currentTime
    }
    addMoveCount() {
        this.header.moveBtn.addCount(1)
    }
    addScore(t) {
        this.header.levelBtn.addLevel(t)
    }
    resize(t, e) {
        this.game3d.resize(t, e)
    }
    dispose() {}
}
class Be extends k {
    constructor(t) {
        super();
        s(this, "mb3d");
        s(this, "content");
        this.mb3d = t,
        this.init()
    }
    init() {
        super.init();
        const t = this.el;
        t.classList.add("rs-mb3d-cpanel"),
        t.style.width = "90%",
        t.style.height = "auto";
        const e = this.content = document.createElement("div")
          , i = this.mb3d.config.strings;
        e.innerHTML = "<h3>" + i.APP_TITLE + "</h3>",
        e.innerHTML += "<p>" + i.CREDIT_TEXT + "</p>",
        t.appendChild(e)
    }
}
class xe {
    constructor(t) {
        s(this, "hs");
        s(this, "el");
        s(this, "title");
        s(this, "info");
        s(this, "progress");
        s(this, "progressInner");
        s(this, "logo");
        s(this, "isMobile");
        this.hs = t,
        this.init()
    }
    init() {
        this.isMobile = document.createElement("span").ontouchstart === null;
        const t = this.el = document.createElement("div");
        t.className = "rs-hscreen-header";
        const e = this.hs.config;
        this.title = document.createElement("h1"),
        this.title.className = "app-title",
        this.title.innerHTML = e.strings.APP_TITLE,
        t.appendChild(this.title),
        this.info = document.createElement("span"),
        this.info.className = "app-info",
        this.info.innerHTML = e.strings.APP_INFO,
        t.appendChild(this.info),
        this.progress = document.createElement("div"),
        this.progress.className = "app-progress",
        this.progressInner = document.createElement("div"),
        this.progressInner.className = "app-progress-inner",
        t.appendChild(this.progress),
        this.progress.appendChild(this.progressInner),
        this.setProgress(0),
        this.logo = document.createElement("img"),
        this.logo.className = "app-logo",
        this.logo.src = "assets/graphics/logo.png",
        this.logo.onmousedown = function(i) {
            i.preventDefault()
        }
        ,
        t.appendChild(this.logo)
    }
    setProgress(t) {
        this.progressInner.style.width = t + "%"
    }
    hideProgress() {
        const t = this.progress;
        d({
            targets: t,
            opacity: 0,
            easing: "easeOutQuint",
            complete: function() {
                t.style.display = "none"
            }
        })
    }
    hideLogo() {
        const t = this.logo
          , e = this.isMobile;
        d({
            targets: t,
            opacity: 0,
            easing: "easeOutQuint",
            complete: function() {
                if (e) {
                    t.style.display = "none";
                    return
                }
                d.remove(t),
                d({
                    targets: t,
                    width: 32,
                    marginTop: 20,
                    opacity: 1
                })
            }
        })
    }
    moveTop() {
        this.hideProgress(),
        this.hideLogo(),
        d({
            targets: this.el,
            top: 0,
            translateY: 0,
            easing: "easeOutQuint",
            duration: 1200
        })
    }
    center() {
        const t = this.hs.mb3d.assetManager
          , e = this.el;
        d({
            targets: this.el,
            top: "50%",
            translateY: "-50%",
            duration: 1400,
            update: function() {
                t.showDelay && (d.remove(e),
                d({
                    targets: e,
                    top: 0,
                    translateY: 0,
                    duration: 0
                }))
            }
        })
    }
}
class Ee {
    constructor(t) {
        s(this, "hs");
        s(this, "el");
        s(this, "con");
        this.hs = t,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-hscreenmenu",
        this.con = document.createElement("div"),
        this.con.className = "menu-list",
        t.appendChild(this.con);
        const e = this.hs.config
          , i = this.hs;
        this.addItem(e.strings.NEW_GAME, function() {
            i.startNewGame()
        }),
        e.general.useHelpPanel && this.addItem(e.strings.HELP, function() {
            i.showHelp()
        }),
        e.general.useCreditPanel && this.addItem(e.strings.CREDITS, function() {
            i.showCredit()
        })
    }
    addItem(t, e) {
        const i = document.createElement("div");
        i.className = "menu-item",
        i.innerHTML = t,
        i.style.opacity = "0",
        this.con.appendChild(i);
        const o = this.hs.mb3d.assetManager;
        i.addEventListener("click", function() {
            e && e.call(this),
            o.audios.ButtonClick.play()
        })
    }
    show() {
        d({
            targets: ".rs-hscreenmenu .menu-item",
            opacity: 1,
            easing: "easeOutQuad",
            delay: d.stagger(150, {
                start: 500
            })
        })
    }
}
const Me = 1500;
class Te {
    constructor(t) {
        s(this, "config");
        s(this, "mb3d");
        s(this, "loaded");
        s(this, "assetManager");
        s(this, "el");
        s(this, "header");
        s(this, "menu");
        s(this, "hpanel");
        s(this, "cpanel");
        this.mb3d = t,
        this.loaded = !1,
        this.config = t.config,
        this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-hscreen",
        t.style.width = t.style.height = "100%",
        t.style.display = "none",
        this.header = new xe(this),
        this.menu = new Ee(this),
        this.hpanel = new it,
        this.cpanel = new Be(this.mb3d)
    }
    load() {
        this.el.style.display = "block",
        this.el.appendChild(this.header.el),
        this.header.center();
        const t = this.mb3d.assetManager
          , e = this
          , i = this.header
          , o = this.menu;
        t.onLoad = function() {
            setTimeout(function() {
                t.showDelay = !0,
                i.moveTop(),
                e.el.appendChild(o.el),
                o.show(),
                t.audios.BackgroundMusic && t.audios.BackgroundMusic.play()
            }, Me)
        }
        ,
        t.onProgress = (n, a, r) => {
            e.header.setProgress(a / r * 100)
        }
        ,
        this.mb3d.assetManager.load()
    }
    transitionIn() {
        this.el.style.display = "block",
        d({
            targets: this.el,
            translateY: 0,
            easing: "easeOutQuint",
            opacity: 1,
            duration: 1200
        })
    }
    transitionOut() {
        const t = this.el;
        d({
            targets: this.el,
            translateY: -400,
            easing: "easeOutQuint",
            opacity: 0,
            duration: 1200,
            complete: function() {
                t.style.display = "none"
            }
        })
    }
    show() {
        if (this.mb3d.root.appendChild(this.el),
        !this.mb3d.assetManager.loaded) {
            this.load();
            return
        }
        this.transitionIn()
    }
    hide() {
        this.mb3d.root.removeChild(this.el),
        this.transitionOut()
    }
    startNewGame() {
        this.mb3d.setGameScreen(),
		window[window.preroll.config.loaderObjectName].refetchAd()
    }
    showHelp() {
        this.hpanel.show(),
		window[window.preroll.config.loaderObjectName].refetchAd()
    }
    showCredit() {
        window.open("https://newkidsgames.org/?utm_source=WeeGoo-3d_maze_control");		
    }
    resize(t, e) {}
}
const Se = 200
  , Ce = "config.json";
class Pe {
    constructor(t, e={}) {
        s(this, "assetManager");
        s(this, "root");
        s(this, "isMobile");
        s(this, "pref");
        s(this, "activeScreen");
        s(this, "config");
        s(this, "defaultOptions");
        s(this, "homeScreen");
        s(this, "gameScreen");
        this.root = t,
        this.root.style.position = "relative",
        this.root.style.display = "block",
        this.root.style.overflow = "hidden",
        this.loadConfig(),
        this.defaultOptions = Object.assign(e, {
            isEditing: !1,
            pieceDepth: 1,
            pieceSpecular: 1118481,
            pieceEmissive: 65793,
            boardDimension: 10,
            boardThickness: .35,
            boardDepth: .4,
            fitFactor: .8,
            ambientLight: 3355443,
            lightMovingSpeed: .1,
            ballRadius: .8,
            ballColor: 14044549,
            ballRoughness: .25,
            ballMetalness: .6,
            gravityY: -8,
            gravityZ: -20,
            alienSpeed: .02
        });
        const i = this;
        window.addEventListener("resize", function() {
            i.resize()
        }),
        document.body.addEventListener("click", function(o) {}),
        document.oncontextmenu = function() {
            return !1
        }
    }
    loadConfig() {
        const t = this
          , e = new XMLHttpRequest;
        e.addEventListener("load", function(i) {
            const o = JSON.parse(this.response);
            t.config = o,
            t.initComponents()
        }),
        e.open("GET", Ce),
        e.send()
    }
    initComponents() {
        const t = this;
        this.defaultOptions,
        this.config,
        this.initPreferences(),
        this.activeScreen = null,
        this.assetManager = new zt(this),
        window.location.search.includes("editor") && (this.defaultOptions.isEditing = !0),
        window.location.search.includes("bypass") ? (this.assetManager.onLoad = function() {
            t.setGameScreen()
        }
        ,
        this.assetManager.load()) : this.setHomeScreen(),
        setTimeout(function() {
            t.resize()
        }, Se)
    }
    initPreferences() {
        this.pref = new Ft(this.config,localStorage.getItem("MazeBall"))
    }
    setScreen(t) {
        this.activeScreen && this.activeScreen.hide(),
        t.show(),
        this.activeScreen = t
    }
    setGameScreen() {
        this.gameScreen || (this.gameScreen = new Le(this,this.config)),
        this.setScreen(this.gameScreen)
    }
    setHomeScreen() {
        this.homeScreen || (this.homeScreen = new Te(this)),
        this.setScreen(this.homeScreen)
    }
    getAppDimension() {
        return [this.root.offsetWidth, this.root.offsetHeight]
    }
    resize() {
        const t = this.getAppDimension()
          , e = t[0]
          , i = t[1];
        this.activeScreen && this.activeScreen.resize(e, i)
    }
    dispose() {}
}
function Ae() {
    document.body.onload = function() {
        const l = document.querySelector(".rs-mb3d");
        new Pe(l)
    }
}
Ae();