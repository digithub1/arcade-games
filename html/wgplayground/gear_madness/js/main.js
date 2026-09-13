(function() {
    function a(a) {
        a = String(a);
        return a.charAt(0).toUpperCase() + a.slice(1)
    }
    function d(a, b) {
        var f = -1,
        e = a ? a.length : 0;
        if ("number" == typeof e && -1 < e && e <= n)
            for (; ++f < e;) b(a[f], f, a);
        else c(a, b)
    }
    function b(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }
    function c(a, b) {
        for (var c in a) t.call(a, c) && b(a[c], c, a)
    }
    function g(b) {
        return null == b ? a(b) : v.call(b).slice(8, -1)
    }
    function h(a, b) {
        var c = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) && ("object" == c ? !!a[b] : !0)
    }
    function f(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }
    function e(a, b) {
        var c = null;
        d(a, function(f, e) {
            c = b(c, f, e, a)
        });
        return c
    }
    function m(a) {
        function d(c) {
            return e(c, function(c, e) {
                var g = e.pattern || f(e);
                !c && (c = RegExp("\\b" + g + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + g + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + g + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((c = String(e.label && !RegExp(g, "i").test(e.label) ? e.label : c).split("/"))[1] && !/[\d.]+/.test(c[0]) && (c[0] += " " + c[1]), e = e.label || e, c = b(c[0].replace(RegExp(g, "i"), e).replace(RegExp("; *(?:" + e + "[_-])?", "i"), " ").replace(RegExp("(" + e + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return c
            })
        }
        function n(b) {
            return e(b, function(b, c) {
                return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }
        var t = p,
        l = a && "object" == typeof a && "String" != g(a);
        l && (t = a, a = null);
        var q = t.navigator || {},
        k = q.userAgent || "";
        a || (a = k);
        var z = l ? !!q.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(v.toString()),
        y = l ? "Object" : "ScriptBridgingProxyObject",
        R = l ? "Object" : "Environment",
        N = l && t.java ? "JavaPackage" : g(t.java),
        V = l ? "Object" : "RuntimeObject";
        R = (N = /\bJava/.test(N) && t.java) && g(t.environment) == R;
        var W = N ? "a" : "\u03b1",
        X = N ? "b" : "\u03b2",
        S = t.document || {},
        L = t.operamini || t.opera,
        O = r.test(O = l && L ? L["[[Class]]"] : g(L)) ? O : L = null,
        u, P = a;
        l = [];
        var Q = null,
        M = a == k;
        k = M && L && "function" == typeof L.version && L.version();
        var E = function(b) {
            return e(b, function(b, c) {
                return b || RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) && (c.label || c)
            })
        }([{
            label: "EdgeHTML",
            pattern: "Edge"
            }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
        w = function(b) {
            return e(b, function(b, c) {
                return b || RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) && (c.label || c)
            })
        }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
            label: "Microsoft Edge",
            pattern: "Edge"
            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                label: "Samsung Internet",
                pattern: "SamsungBrowser"
            }, "SeaMonkey", {
                label: "Silk",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Sleipnir", "SlimBrowser", {
                label: "SRWare Iron",
                pattern: "Iron"
            }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                label: "Opera Mini",
                pattern: "OPiOS"
            }, "Opera", {
                label: "Opera",
                pattern: "OPR"
            }, "Chrome", {
                label: "Chrome Mobile",
                pattern: "(?:CriOS|CrMo)"
            }, {
                label: "Firefox",
                pattern: "(?:Firefox|Minefield)"
            }, {
                label: "Firefox for iOS",
                pattern: "FxiOS"
            }, {
                label: "IE",
                pattern: "IEMobile"
            }, {
                label: "IE",
                pattern: "MSIE"
            }, "Safari"]),
        F = d([{
            label: "BlackBerry",
            pattern: "BB10"
            }, "BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
            }, {
                label: "Galaxy S2",
                pattern: "GT-I9100"
            }, {
                label: "Galaxy S3",
                pattern: "GT-I9300"
            }, {
                label: "Galaxy S4",
                pattern: "GT-I9500"
            }, {
                label: "Galaxy S5",
                pattern: "SM-G900"
            }, {
                label: "Galaxy S6",
                pattern: "SM-G920"
            }, {
                label: "Galaxy S6 Edge",
                pattern: "SM-G925"
            }, {
                label: "Galaxy S7",
                pattern: "SM-G930"
            }, {
                label: "Galaxy S7 Edge",
                pattern: "SM-G935"
            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                label: "Wii U",
                pattern: "WiiU"
            }, "Wii", "Xbox One", {
                label: "Xbox 360",
                pattern: "Xbox"
            }, "Xoom"]),
        J = function(b) {
            return e(b, function(b, c, e) {
                return b || (c[F] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] || RegExp("\\b" + f(e) + "(?:\\b|\\w*\\d)", "i").exec(a)) && e
            })
        }({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Archos: {},
            Amazon: {
                Kindle: 1,
                "Kindle Fire": 1
            },
            Asus: {
                Transformer: 1
            },
            "Barnes & Noble": {
                Nook: 1
            },
            BlackBerry: {
                PlayBook: 1
            },
            Google: {
                "Google TV": 1,
                Nexus: 1
            },
            HP: {
                TouchPad: 1
            },
            HTC: {},
            LG: {},
            Microsoft: {
                Xbox: 1,
                "Xbox One": 1
            },
            Motorola: {
                Xoom: 1
            },
            Nintendo: {
                "Wii U": 1,
                Wii: 1
            },
            Nokia: {
                Lumia: 1
            },
            Samsung: {
                "Galaxy S": 1,
                "Galaxy S2": 1,
                "Galaxy S3": 1,
                "Galaxy S4": 1
            },
            Sony: {
                PlayStation: 1,
                "PlayStation Vita": 1
            }
        }),
        x = function(c) {
            return e(c, function(c, e) {
                var g = e.pattern || f(e);
                if (!c && (c = RegExp("\\b" + g + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))) {
                    var d = c,
                    h = e.label || e,
                    m = {
                        "10.0": "10",
                        "6.4": "10 Technical Preview",
                        "6.3": "8.1",
                        "6.2": "8",
                        "6.1": "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        "5.2": "Server 2003 / XP 64-bit",
                        "5.1": "XP",
                        "5.01": "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    g && h && /^Win/i.test(d) && !/^Windows Phone /i.test(d) && (m = m[/[\d.]+$/.exec(d)]) && (d = "Windows " + m);
                    d = String(d);
                    g && h && (d = d.replace(RegExp(g, "i"), h));
                    c = d = b(d.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                }
                return c
            })
        }(["Windows Phone", "Android", "CentOS", {
            label: "Chrome OS",
            pattern: "CrOS"
            }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        E && (E = [E]);
        J && !F && (F = d([J]));
        if (u = /\bGoogle TV\b/.exec(F)) F = u[0];
        /\bSimulator\b/i.test(a) && (F = (F ? F + " " : "") + "Simulator");
        "Opera Mini" == w && /\bOPiOS\b/.test(a) && l.push("running in Turbo/Uncompressed mode");
        "IE" == w && /\blike iPhone OS\b/.test(a) ? (u = m(a.replace(/like iPhone OS/, "")), J = u.manufacturer, F = u.product) : /^iP/.test(F) ? (w || (w = "Safari"), x = "iOS" + ((u = / OS ([\d_]+)/i.exec(a)) ? " " + u[1].replace(/_/g, ".") : "")) : "Konqueror" != w || /buntu/i.test(x) ? J && "Google" != J && (/Chrome/.test(w) && !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(F)) || /\bAndroid\b/.test(x) && /^Chrome/.test(w) && /\bVersion\//i.test(a) ? (w = "Android Browser", x = /\bAndroid\b/.test(x) ? x : "Android") : "Silk" == w ? (/\bMobi/i.test(a) || (x = "Android", l.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && l.unshift("accelerated")) : "PaleMoon" == w && (u = /\bFirefox\/([\d.]+)\b/.exec(a)) ? l.push("identifying as Firefox " + u[1]) : "Firefox" == w && (u = /\b(Mobile|Tablet|TV)\b/i.exec(a)) ? (x || (x = "Firefox OS"), F || (F = u[1])) : !w || (u = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(w)) ? (w && !F && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(u + "/") + 8)) && (w = null), (u = F || J || x) && (F || J || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(x)) && (w = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(x) ? x : u) + " Browser")) : "Electron" == w && (u = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && l.push("Chromium " + u) : x = "Kubuntu";
        k || (k = n(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", f(w), "(?:Firefox|Minefield|NetFront)"]));
        if (u = "iCab" == E && 3 < parseFloat(k) && "WebKit" || /\bOpera\b/.test(w) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(E) && "WebKit" || !E && /\bMSIE\b/i.test(a) && ("Mac OS" == x ? "Tasman" : "Trident") || "WebKit" == E && /\bPlayStation\b(?! Vita\b)/i.test(w) && "NetFront") E = [u];
        "IE" == w && (u = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (w += " Mobile", x = "Windows Phone " + (/\+$/.test(u) ? u : u + ".x"), l.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (w = "IE Mobile", x = "Windows Phone 8.x", l.unshift("desktop mode"), k || (k = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != w && "Trident" == E && (u = /\brv:([\d.]+)/.exec(a)) && (w && l.push("identifying as " + w + (k ? " " + k : "")), w = "IE", k = u[1]);
        if (M) {
            if (h(t, "global"))
                if (N && (u = N.lang.System, P = u.getProperty("os.arch"), x = x || u.getProperty("os.name") + " " + u.getProperty("os.version")), R) {
                    try {
                        k = t.require("ringo/engine").version.join("."), w = "RingoJS"
                    } catch (U) {
                        (u = t.system) && u.global.system == t.system && (w = "Narwhal", x || (x = u[0].os || null))
                    }
                    w || (w = "Rhino")
                } else "object" == typeof t.process && !t.process.browser && (u = t.process) && ("object" == typeof u.versions && ("string" == typeof u.versions.electron ? (l.push("Node " + u.versions.node), w = "Electron", k = u.versions.electron) : "string" == typeof u.versions.nw && (l.push("Chromium " + k, "Node " + u.versions.node), w = "NW.js", k = u.versions.nw)), w || (w = "Node.js", P = u.arch, x = u.platform, k = (k = /[\d.]+/.exec(u.version)) ? k[0] : null));
            else g(u = t.runtime) == y ? (w = "Adobe AIR", x = u.flash.system.Capabilities.os) : g(u = t.phantom) == V ? (w = "PhantomJS", k = (u = u.version || null) && u.major + "." + u.minor +
                "." + u.patch) : "number" == typeof S.documentMode && (u = /\bTrident\/(\d+)/i.exec(a)) ? (k = [k, S.documentMode], (u = +u[1] + 4) != k[1] && (l.push("IE " + k[1] + " mode"), E && (E[1] = ""), k[1] = u), k = "IE" == w ? String(k[1].toFixed(1)) : k[0]) : "number" == typeof S.documentMode && /^(?:Chrome|Firefox)\b/.test(w) && (l.push("masking as " + w + " " + k), w = "IE", k = "11.0", E = ["Trident"], x = "Windows");
            x = x && b(x)
        }
        k && (u = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (M && q.appMinorVersion)) || /\bMinefield\b/i.test(a) && "a") && (Q = /b/i.test(u) ? "beta" : "alpha", k = k.replace(RegExp(u + "\\+?$"), "") + ("beta" == Q ? X : W) + (/\d+\+?/.exec(u) || ""));
        if ("Fennec" == w || "Firefox" == w && /\b(?:Android|Firefox OS)\b/.test(x)) w = "Firefox Mobile";
        else if ("Maxthon" == w && k) k = k.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(F)) "Xbox 360" == F && (x = null), "Xbox 360" == F && /\bIEMobile\b/.test(a) && l.unshift("mobile mode");
                else if (!/^(?:Chrome|IE|Opera)$/.test(w) && (!w || F || /Browser|Mobi/.test(w)) || "Windows CE" != x && !/Mobi/i.test(a))
                    if ("IE" == w && M) try {
                        null === t.external && l.unshift("platform preview")
                    } catch (U) {
                        l.unshift("embedded")
                    } else(/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(a)) && (u = (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || k) ? (u = [u, /BB10/.test(a)], x = (u[1] ? (F = null, J = "BlackBerry") : "Device Software") + " " + u[0], k = null) : this != c && "Wii" != F && (M && L || /Opera/.test(w) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == w && /\bOS X (?:\d+\.){2,}/.test(x) || "IE" == w && (x && !/^Win/.test(x) && 5.5 < k || /\bWindows XP\b/.test(x) && 8 < k || 8 == k && !/\bTrident\b/.test(a))) && !r.test(u = m.call(c, a.replace(r, "") + ";")) && u.name && (u = "ing as " + u.name + ((u = u.version) ? " " + u : ""), r.test(w) ? (/\bIE\b/.test(u) && "Mac OS" == x && (x = null), u = "identify" + u) : (u = "mask" + u, w = O ? b(O.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(u) && (x = null), M || (k = null)), E = ["Presto"], l.push(u));
                    else w += " Mobile";
        if (u = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) {
            u = [parseFloat(u.replace(/\.(\d)$/, ".0$1")), u];
            if ("Safari" == w && "+" == u[1].slice(-1)) w = "WebKit Nightly", Q = "alpha", k = u[1].slice(0, -1);
            else if (k == u[1] || k == (u[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) k = null;
            u[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
            537.36 == u[0] && 537.36 == u[2] && 28 <= parseFloat(u[1]) && "WebKit" == E && (E = ["Blink"]);
            M && (z || u[1]) ? (E && (E[1] = "like Chrome"), u = u[1] || (u = u[0], 530 > u ? 1 : 532 > u ? 2 : 532.05 > u ? 3 : 533 > u ? 4 : 534.03 > u ? 5 : 534.07 > u ? 6 : 534.1 > u ? 7 : 534.13 > u ? 8 : 534.16 > u ? 9 : 534.24 > u ? 10 : 534.3 > u ? 11 : 535.01 > u ? 12 : 535.02 > u ? "13+" : 535.07 > u ? 15 : 535.11 > u ? 16 : 535.19 > u ? 17 : 536.05 > u ? 18 : 536.1 > u ? 19 : 537.01 > u ? 20 : 537.11 > u ? "21+" : 537.13 > u ? 23 : 537.18 > u ? 24 : 537.24 > u ? 25 : 537.36 > u ? 26 : "Blink" != E ? "27" : "28")) : (E && (E[1] = "like Safari"), u = (u = u[0], 400 > u ? 1 : 500 > u ? 2 : 526 > u ? 3 : 533 > u ? 4 : 534 > u ? "4+" : 535 > u ? 5 : 537 > u ? 6 : 538 > u ? 7 : 601 > u ? 8 : "8"));
            E && (E[1] += " " + (u += "number" == typeof u ? ".x" : /[.+]/.test(u) ? "" : "+"));
            "Safari" == w && (!k || 45 < parseInt(k)) && (k = u)
        }
        "Opera" == w && (u = /\bzbov|zvav$/.exec(x)) ? (w += " ", l.unshift("desktop mode"), "zvav" == u ? (w += "Mini", k = null) : w += "Mobile", x = x.replace(RegExp(" *" + u + "$"), "")) : "Safari" == w && /\bChrome\b/.exec(E && E[1]) && (l.unshift("desktop mode"), w = "Chrome Mobile", k = null, /\bOS X\b/.test(x) ? (J = "Apple", x = "iOS 4.3+") : x = null);
        k && 0 == k.indexOf(u = /[\d.]+$/.exec(x)) && -1 < a.indexOf("/" + u + "-") && (x = String(x.replace(u, "")).replace(/^ +| +$/g, ""));
        E && !/\b(?:Avant|Nook)\b/.test(w) && (/Browser|Lunascape|Maxthon/.test(w) || "Safari" != w && /^iOS/.test(x) && /\bSafari\b/.test(E[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(w) && E[1]) && (u = E[E.length - 1]) && l.push(u);
        l.length && (l = ["(" + l.join("; ") + ")"]);
        J && F && 0 > F.indexOf(J) && l.push("on " + J);
        F && l.push((/^on /.test(l[l.length -
            1]) ? "" : "on ") + F);
        if (x) {
            var T = (u = / ([\d.+]+)$/.exec(x)) && "/" == x.charAt(x.length - u[0].length - 1);
            x = {
                architecture: 32,
                family: u && !T ? x.replace(u[0], "") : x,
                version: u ? u[1] : null,
                toString: function() {
                    var a = this.version;
                    return this.family + (a && !T ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }(u = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(P)) && !/\bi686\b/i.test(P) ? (x && (x.architecture = 64, x.family = x.family.replace(RegExp(" *" + u), "")), w && (/\bWOW64\b/i.test(a) || M && /\w(?:86|32)$/.test(q.cpuClass || q.platform) && !/\bWin64; x64\b/i.test(a)) && l.unshift("32-bit")) : x && /^OS X/.test(x.family) && "Chrome" == w && 39 <= parseFloat(k) && (x.architecture = 64);
        a || (a = null);
        t = {};
        t.description = a;
        t.layout = E && E[0];
        t.manufacturer = J;
        t.name = w;
        t.prerelease = Q;
        t.product = F;
        t.ua = a;
        t.version = w && k;
        t.os = x || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        };
        t.parse = m;
        t.toString = function() {
            return this.description || ""
        };
        t.version && l.unshift(k);
        t.name && l.unshift(w);
        x && w && (x != String(x).split(" ")[0] || x != w.split(" ")[0] && !F) && l.push(F ? "(" + x + ")" : "on " +
            x);
        l.length && (t.description = l.join(" "));
        return t
    }
    var q = {
        "function": !0,
        object: !0
    },
    p = q[typeof window] && window || this,
    l = q[typeof exports] && exports;
    q = q[typeof module] && module && !module.nodeType && module;
    var k = l && q && "object" == typeof global && global;
    !k || k.global !== k && k.window !== k && k.self !== k || (p = k);
    var n = Math.pow(2, 53) - 1,
    r = /\bOpera/;
    k = Object.prototype;
    var t = k.hasOwnProperty,
    v = k.toString,
    z = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (p.platform = z, define(function() {
        return z
    })) : l && q ? c(z, function(a, c) {
        l[c] = a
    }) : p.platform = z
}).call(this);
function buildIOSMeta() {
    for (var a = [{
        name: "viewport",
        content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        }, {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black"
        }], d = 0; d < a.length; d++) {
        var b = document.createElement("meta");
        b.name = a[d].name;
        b.content = a[d].content;
        var c = window.document.head.querySelector('meta[name="' + b.name + '"]');
        c && c.parentNode.removeChild(c);
        window.document.head.appendChild(b)
    }
}
function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}
function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}
function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}
function __iosResize() {
    window.scrollTo(0, 0);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
            case 2:
                switch (window.innerWidth) {
                    case 568:
                        320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                        break;
                    case 667:
                        375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                        break;
                    default:
                        hideIOSFullscreenPanel()
                }
                break;
            case 3:
                switch (window.innerWidth) {
                    case 736:
                        414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                        break;
                    case 724:
                        375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                        break;
                    default:
                        hideIOSFullscreenPanel()
                }
                break;
            default:
                hideIOSFullscreenPanel()
        }
}
function iosResize() {
    __iosResize();
    setTimeout(function() {
        __iosResize()
        }, 500)
}
$(document).ready(function() {
    platform && "iPhone" === platform.product && "Safari" === platform.name && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function() {
    platform && "iPhone" === platform.product && "Safari" === platform.name && iosResize()
});
(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
    d = "undefined" !== typeof module && module.exports,
    b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
    c = function() {
        for (var c, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], g = 0, d = b.length, h = {}; g < d; g++)
            if ((c = b[g]) && c[1] in a) {
                for (g = 0; g < c.length; g++) h[b[0][g]] = c[g];
                return h
            } return !1
    }(),
    g = {
        change: c.fullscreenchange,
        error: c.fullscreenerror
    },
    h = {
        request: function(f) {
            var e = c.requestFullscreen;
            f = f || a.documentElement;
            if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[e]();
            else f[e](b && Element.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            a[c.exitFullscreen]()
        },
        toggle: function(a) {
            this.isFullscreen ? this.exit() : this.request(a)
        },
        onchange: function(a) {
            this.on("change", a)
        },
        onerror: function(a) {
            this.on("error", a)
        },
        on: function(c, b) {
            var e = g[c];
            e && a.addEventListener(e, b, !1)
        },
        off: function(c, b) {
            var e = g[c];
            e && a.removeEventListener(e, b, !1)
        },
        raw: c
    };
    c ? (Object.defineProperties(h, {
        isFullscreen: {
            get: function() {
                return !!a[c.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[c.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[c.fullscreenEnabled]
            }
        }
        }), d ? module.exports = h : window.screenfull = h) : d ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
s_iOffsetX, s_iOffsetY, s_bIsIphone = !1,
s_bIsRetina;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});
function trace(a) {
    console.log(a)
}
function getSize(a) {
    var d = a.toLowerCase(),
    b = window.document,
    c = b.documentElement;
    if (void 0 === window["inner" + a]) a = c["client" + a];
    else if (window["inner" + a] != c["client" + a]) {
        var g = b.createElement("body");
        g.id = "vpw-test-b";
        g.style.cssText = "overflow:scroll";
        var h = b.createElement("div");
        h.id = "vpw-test-d";
        h.style.cssText = "position:absolute;top:-1000px";
        h.innerHTML = "<style>@media(" + d + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
        g.appendChild(h);
        c.insertBefore(g, b.head);
        a = 7 == h["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(g)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function isIOS() {
    isRetina();
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;)
    if (navigator.platform === a.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}
function isRetina() {
    s_bIsRetina = matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches ? !0 : !1
}
function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}
function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var d = getSize("Width");
        _checkOrientation(d, a);
        var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
        c = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var g = a - b;
            b += g;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * g
        } else c < d && (g = d - c, c += g, b += CANVAS_HEIGHT / CANVAS_WIDTH * g);
        g = a / 2 - b / 2;
        var h = d / 2 - c / 2,
        f = CANVAS_WIDTH / c;
        if (h * f < -EDGEBOARD_X || g * f < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, g = (a - b) / 2, h = (d - c) / 2, f = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * h * f;
        s_iOffsetY = -1 * g * f;
        0 <= g && (s_iOffsetY = 0);
        0 <= h && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsRetina ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * b, canvas.style.width = c + "px", canvas.style.height = b + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT)) : s_bMobile ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > g || (g = (a - b) / 2);
        $("#canvas").css("top", g + "px");
        $("#canvas").css("left", h + "px");
        fullscreenHandler()
    }
}
function _checkOrientation(a, d) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()))
}
function playSound(a, d, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(d), s_aSounds[a].loop(b), s_aSounds[a]) : null
}
function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.stop()
}
function setVolume(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.volume(d)
}
function setMute(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.mute(d)
}
function fadeSound(a, d, b, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.fade(d, b, c)
}
function createBitmap(a, d, b) {
    var c = new createjs.Bitmap(a),
    g = new createjs.Shape;
    d && b ? g.graphics.beginFill("#fff").drawRect(0, 0, d, b) : g.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = g;
    return c
}
function createSprite(a, d, b, c, g, h) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-b, -c, g, h);
    a.hitArea = d;
    return a
}
function pad(a, d, b) {
    a += "";
    return a.length >= d ? a : Array(d - a.length + 1).join(b || "0") + a
}
function randomFloatBetween(a, d, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}
function rotateVector2D(a, d) {
    var b = d.getX() * Math.cos(a) + d.getY() * Math.sin(a),
    c = d.getX() * -Math.sin(a) + d.getY() * Math.cos(a);
    d.set(b, c)
}
function tweenVectorsOnX(a, d, b) {
    return a + b * (d - a)
}
function shuffle(a) {
    for (var d = a.length, b, c; 0 !== d;) c = Math.floor(Math.random() * d), --d, b = a[d], a[d] = a[c], a[c] = b;
    return a
}
function bubbleSort(a) {
    do {
        var d = !1;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (d = a[b], a[b] = a[b + 1], a[b + 1] = d, d = !0)
    } while (d)
}
function compare(a, d) {
    return a.index > d.index ? -1 : a.index < d.index ? 1 : 0
}
function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = parseFloat(a - 60 * d).toFixed(1);
    var b = "";
    b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
    return 10 > a ? b + ("0" + a) : b + a
}
function pixelsToMeters(a) {
    return a * PIXEL_TO_METER_RATIO
}
function kMetersHToPixelsF(a) {
    return 1E3 * a * METER_TO_PIXEL_RATIO / 3600 / FPS
}
function framesToMilliSeconds(a) {
    return (a * FPS_TIME).toFixed(0)
}
function milliSecondsToFrames(a) {
    return (.001 * a * FPS).toFixed(0)
}
function degreesToRadians(a) {
    return a * Math.PI / 180
}
function checkRectCollision(a, d) {
    var b = getBounds(a, .9);
    var c = getBounds(d, .98);
    return calculateIntersection(b, c)
}
function calculateIntersection(a, d) {
    var b, c, g, h;
    var f = a.x + (b = a.width / 2);
    var e = a.y + (c = a.height / 2);
    var m = d.x + (g = d.width / 2);
    var q = d.y + (h = d.height / 2);
    f = Math.abs(f - m) - (b + g);
    e = Math.abs(e - q) - (c + h);
    return 0 > f && 0 > e ? (f = Math.min(Math.min(a.width, d.width), -f), e = Math.min(Math.min(a.height, d.height), -e), {
        x: Math.max(a.x, d.x),
        y: Math.max(a.y, d.y),
        width: f,
        height: e,
        rect1: a,
        rect2: d
    }) : null
}
function getBounds(a, d) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var c = a.children,
        g = c.length,
        h;
        for (h = 0; h < g; h++) {
            var f = getBounds(c[h], 1);
            f.x < b.x && (b.x = f.x);
            f.y < b.y && (b.y = f.y);
            f.x + f.width > b.x2 && (b.x2 = f.x + f.width);
            f.y + f.height > b.y2 && (b.y2 = f.y + f.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            g = a.sourceRect || a.image;
            h = g.width * d;
            var e = g.height * d
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                g = a.spriteSheet.getFrame(a.currentFrame);
                h = g.rect.width;
                e = g.rect.height;
                c = g.regX;
                var m = g.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
            else b.x = a.x || 0, b.y = a.y || 0;
        c = c || 0;
        h = h || 0;
        m = m || 0;
        e = e || 0;
        b.regX = c;
        b.regY = m;
        g = a.localToGlobal(0 - c, 0 - m);
        f = a.localToGlobal(h - c, e - m);
        h = a.localToGlobal(h - c, 0 - m);
        c = a.localToGlobal(0 - c, e - m);
        b.x = Math.min(Math.min(Math.min(g.x, f.x), h.x), c.x);
        b.y = Math.min(Math.min(Math.min(g.y, f.y), h.y), c.y);
        b.width = Math.max(Math.max(Math.max(g.x, f.x), h.x), c.x) - b.x;
        b.height = Math.max(Math.max(Math.max(g.y, f.y), h.y), c.y) - b.y
    }
    return b
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
function shuffle(a) {
    for (var d = a.length, b, c; 0 < d;) c = Math.floor(Math.random() * d), d--, b = a[d], a[d] = a[c], a[c] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", !0, !0);
            a.dispatchEvent(d)
        }
    }
};
(function() {
    function a(a) {
        var c = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in c ? document.body.className = c[a.type] : (document.body.className = this[d] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var d = "hidden";
    d in document ? document.addEventListener("visibilitychange", a) : (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (d = "webkitHidden") in
    document ? document.addEventListener("webkitvisibilitychange", a) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(a) {
    for (var d = window.location.search.substring(1).split("&"), b = 0; b < d.length; b++) {
        var c = d[b].split("=");
        if (c[0] == a) return c[1]
    }
}
function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
    });
function CSpriteLibrary() {
    var a, d, b, c, g, h;
    this.init = function(f, e, m) {
        b = d = 0;
        c = f;
        g = e;
        h = m;
        a = {}
    };
    this.addSprite = function(c, b) {
        a.hasOwnProperty(c) || (a[c] = {
            szPath: b,
            oSprite: new Image
            }, d++);
    };
    this.getSprite = function(c) {
        return a.hasOwnProperty(c) ? a[c].oSprite : null
    };
    this._onSpritesLoaded = function() {
        g.call(h)
    };
    this._onSpriteLoaded = function() {
        c.call(h);
        ++b == d && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var c in a) a[c].oSprite.oSpriteLibrary = this, a[c].oSprite.onload = function() {
            this.oSpriteLibrary._onSpriteLoaded()
            }, a[c].oSprite.src = a[c].szPath
    };
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 1280,
CANVAS_HEIGHT = 768,
EDGEBOARD_X = 90,
EDGEBOARD_Y = 105,
PRIMARY_FONT = "ArialBold",
FPS = 60,
FPH = 3600 * FPS,
FPS_TIME = 1E3 / FPS,
CAR_REAL_LENGTH = 4.5,
CAR_PIXEL_LENGTH = 370,
PIXEL_TO_METER_RATIO = CAR_REAL_LENGTH / CAR_PIXEL_LENGTH,
METER_TO_PIXEL_RATIO = CAR_PIXEL_LENGTH / CAR_REAL_LENGTH,
PARALLAX_BG_RATIO = .05,
PARALLAX_1_RATIO = .2,
PARALLAX_2_RATIO = 1.2,
LAMP_WIDTH, LAMP_OFFSET = 570,
DISABLE_SOUND_MOBILE = !1,
STATE_LOADING = 0,
STATE_MENU = 1,
STATE_MODEMENU = 2,
STATE_HELP = 1,
STATE_GAME = 3,
ON_MOUSE_DOWN = 0,
ON_MOUSE_UP = 1,
ON_MOUSE_OVER = 2,
ON_MOUSE_OUT = 3,
ON_DRAG_START = 4,
ON_DRAG_END = 5,
STATE_HELP_PANEL = -1,
STATE_START_BATTLE = 0,
STATE_RACE_RUN = 1,
STATE_RACE_FINISH = 2,
GEAR_N = 0,
NULL_AREA = -1,
GREEN_AREA = 0,
EARLY_AREA = 1,
LATE_AREA = 2,
STATE_HUD_NULL = -1,
STATE_HUD_STALL = 0,
STATE_HUD_UPDATE = 1,
STATE_HUD_REPOSITIONING = 2,
STATE_ENGINE_STALL = 0,
STATE_ENGINE_UPDATE = 1,
STATE_ENGINE_BREAK = 2,
ENGINE_NORMAL_RPM_ACCELERATION = 1,
ENGINE_NITRO_RPM_ACCELERATION = 3,
NITRO_INFO, NITRO_DURATION = 0,
BREAK_DURATION = 4E3,
START_COUNTDOWN = 3E3,
HUD_DOWNSHIFT_GEAR_DURATION = 500,
HUD_RPM_INTERVAL = [{
    min: -90,
    max: 80
    }, {
        min: -90,
        max: 70
    }, {
        min: -50,
        max: 65
    }, {
        min: -40,
        max: 60
    }, {
        min: -40,
        max: 65
    }, {
        min: -30,
        max: 75
    }, {
        min: -10,
        max: 85
}],
WRONG_GEAR_DURATION_INFO, WRONG_GEAR_CHANGE_STALL_DURATION = 0,
GEAR_START_GREEN_WIDTH, GEAR_INRACE_GREEN_WIDTH, START_ACCELERATION_INDICATOR_SPEED = 2,
GEAR_START_AREA = {
    center: 45,
    greenangle: 0,
    earlyangle: 0,
    lateangle: 0
},
GEAR_IN_RACE_AREA = {
    greenangle: 0,
    earlyangle: 20,
    lateangle: 20
},
GEAR_NULL_AREA = {
    greenangle: 0,
    earlyangle: 0,
    lateangle: 0
},
NUM_TRACK = 10,
START_LINE_X = 600,
STAGE_METER_LENGTH = [],
STAGE_WIN_REWARDS, BONUS_REWARD_TRACKLENGTH_MULTIPLIER, BONUS_REWARD_OVERTAKING_MULTIPLIER, BONUS_REWARD_DIFFICULTY_MULTIPLIER, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
TEXT_GAMEOVER = "CONGRATULATIONS, YOU WON ALL THE RACES!";
TEXT_LOSE = "RACE LOST";
TEXT_WIN = "RACE WIN";
TEXT_ARE_SURE = "ARE YOU SURE?";
TEXT_KMH = "mph";
TEXT_M = "m";
TEXT_GEAR_N = "N";
TEXT_CURRENCY = "$";
TEXT_VS = "Vs";
TEXT_PERFECT = "PERFECT";
var TEXT_PRELOADER_CONTINUE = "START";
TEXT_SHOP = "SHOP";
TEXT_SELECT_STAGE = "SELECT STAGE";
TEXT_TOTAL_SCORE = "TOTAL SCORE";
TEXT_FIRST_WIN = "FIRST WIN";
TEXT_PRIZE = "PRIZE";
TEXT_BONUS = "BONUS";
TEXT_BONUS_TRACK_LENGTH = "TRACK LENGTH";
TEXT_BONUS_OVERTAKING = "OVERTAKING DISTANCE";
TEXT_BONUS_DIFFICULTY = "LEVEL DIFFICULTY";
TEXT_BONUS_ONLY = "BONUS ONLY!";
TEXT_HELP1 = "PRESS AND HOLD ACCELERATOR TO KEEP THE REV NEEDLE IN THE GREEN AREA AND MAKE A PERFECT START";
TEXT_HELP2 = "PRESS THE GEAR AT THE RIGHT TIME FOR AN EXCELLENT GEAR SHIFT";
TEXT_SAVE_REMOVE = "THIS WILL REMOVE ALL YOUR ACHIEVEMENTS! DO YOU WANT TO PROCEED?";
TEXT_IOS_PRIVATE = 'Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some info may not save or some features may not work properly';
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You completed the race in <strong>";
TEXT_SHARE_MSG2 = " seconds</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My time is ";
TEXT_SHARE_SHARE2 = " seconds! Can you do better";
function CCurtain(a) {
    var d, b, c;
    this._init = function(a) {
        c = new createjs.Container;
        a.addChild(c);
        d = new createjs.Container;
        d.y = 0;
        d.on("mousedown", function() {});
        c.addChild(d);
        a = s_oSpriteLibrary.getSprite("curtain_top");
        a = createBitmap(a);
        d.addChild(a);
        b = new createjs.Container;
        b.y = CANVAS_HEIGHT / 2;
        b.on("mousedown", function() {});
        c.addChild(b);
        a = s_oSpriteLibrary.getSprite("curtain_bot");
        a = createBitmap(a);
        b.addChild(a)
    };
    this.unload = function() {
        a.removeChild(c)
    };
    this.openAnim = function() {
        d.y = 0;
        b.y = CANVAS_HEIGHT / 2;
        (new createjs.Tween.get(d, {
            override: !0
        })).to({
            y: -CANVAS_HEIGHT / 2
            }, 1E3, createjs.Ease.cubicOut);
        (new createjs.Tween.get(b, {
            override: !0
        })).to({
            y: CANVAS_HEIGHT
            }, 1E3, createjs.Ease.cubicOut)
    };
    this.closeAnim = function(a) {
        d.y = -CANVAS_HEIGHT / 2;
        b.y = CANVAS_HEIGHT;
        (new createjs.Tween.get(d, {
            override: !0
        })).to({
            y: 0
            }, 1E3, createjs.Ease.cubicOut);
        (new createjs.Tween.get(b, {
            override: !0
        })).to({
            y: CANVAS_HEIGHT / 2
            }, 1E3, createjs.Ease.cubicOut).call(function() {
            a && a()
        })
    };
    this._init(a)
}
function CPreloader() {
    var a, d, b, c, g, h, f, e, m, q;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        q = new createjs.Container;
        s_oStage.addChild(q)
    };
    this.unload = function() {
        m.unload();
        q.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var p = new createjs.Shape;
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        q.addChild(p);
        p = s_oSpriteLibrary.getSprite("200x200");
        f = createBitmap(p);
        f.regX = .5 * p.width;
        f.regY = .5 * p.height;
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 80;
        q.addChild(f);
        e = new createjs.Shape;
        e.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(f.x - 100, f.y - 100, 200, 200, 10);
        q.addChild(e);
        f.mask = e;
        p = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(p);
        c.x = CANVAS_WIDTH / 2 - p.width / 2;
        c.y = CANVAS_HEIGHT / 2 + 70;
        q.addChild(c);
        a = p.width;
        d = p.height;
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, d);
        q.addChild(g);
        c.mask = g;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 120;
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        q.addChild(b);
        p = s_oSpriteLibrary.getSprite("but_start");
        m = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 100, p, TEXT_PRELOADER_CONTINUE, "Arial", "#000", 36, q);
        m.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        m.setVisible(!1);
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        q.addChild(h);
        createjs.Tween.get(h).to({
            alpha: 0
            }, 500).call(function() {
            createjs.Tween.removeTweens(h);
            q.removeChild(h)
        })
    };
    this._onButStartRelease = function() {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function(e) {
        b.text = e + "%";
        100 === e && (m.setVisible(!0), b.visible = !1, c.visible = !1);
        g.graphics.clear();
        e = Math.floor(e * a / 100);
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, e, d)
    };
    this._init()
}
var LOCALSTORAGE_TIMES = "times",
LOCALSTORAGE_COINS = "coins",
LOCALSTORAGE_GEARPOWER_LEVEL = "startpower",
LOCALSTORAGE_SPEEDPOWER_LEVEL = "speedpower",
LOCALSTORAGE_NITROPOWER_LEVEL = "nitropower";
function CLocalStorage(a) {
    var d = !0,
    b = [];
    this._init = function(a) {
        a = window.localStorage.getItem(a);
        null !== a && void 0 !== a || this.resetAllData();
        this.loadData()
    };
    this.setItem = function(c, g) {
        d ? window.localStorage.setItem(a + "_" + c, g) : b[c] = g
    };
    this.getItem = function(c) {
        return d ? window.localStorage.getItem(a + "_" + c) : b[c]
    };
    this.setItemJson = function(c, g) {
        d ? localStorage.setItem(a + "_" + c, JSON.stringify(g)) : b[c] = JSON.stringify(g)
    };
    this.getItemJson = function(c) {
        return d ? JSON.parse(localStorage.getItem(a + "_" + c)) : JSON.parse(b[c])
    };
    this.isDirty = function() {
        for (var a = s_oLocalStorage.getItemJson(LOCALSTORAGE_TIMES), b = 0; b < a.length; b++)
        if (0 < a[b]) return !0;
        return !1
    };
    this.isUsed = function() {
        return d
    };
    this.resetAllData = function() {
        try {
            window.localStorage.setItem(a, !0)
        } catch (h) {
            d = !1
        }
        for (var c = [], b = 0; b < NUM_TRACK; b++) c[b] = 0;
        this.setItemJson(LOCALSTORAGE_TIMES, c);
        this.setItem(LOCALSTORAGE_COINS, 0);
        this.setItem(LOCALSTORAGE_GEARPOWER_LEVEL, 0);
        this.setItem(LOCALSTORAGE_SPEEDPOWER_LEVEL, 0);
        this.setItem(LOCALSTORAGE_NITROPOWER_LEVEL, 0)
    };
    this.loadData = function() {
        var a = parseInt(this.getItem(LOCALSTORAGE_GEARPOWER_LEVEL));
        GEAR_START_AREA.greenangle = GEAR_START_GREEN_WIDTH[a];
        GEAR_IN_RACE_AREA.greenangle = GEAR_INRACE_GREEN_WIDTH[a];
        WRONG_GEAR_CHANGE_STALL_DURATION = WRONG_GEAR_DURATION_INFO[a];
        a = parseInt(this.getItem(LOCALSTORAGE_NITROPOWER_LEVEL));
        NITRO_DURATION = NITRO_INFO[a];
        a = parseInt(this.getItem(LOCALSTORAGE_SPEEDPOWER_LEVEL));
        PLAYER_ENGINE_GEAR = PLAYER_ENGINE_INFO[a]
    };
    this._init(a)
}
function CMain(a) {
    var d, b = 0,
    c = 0,
    g = STATE_LOADING,
    h, f;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !0;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        this._initData();
        s_oSpriteLibrary = new CSpriteLibrary;
        s_oTweenController = new CTweenController;
        s_oLocalStorage = new CLocalStorage("car");
        h = new CPreloader
    };
    this._initData = function() {
        GEAR_START_GREEN_WIDTH = a.start_green_width;
        GEAR_INRACE_GREEN_WIDTH = a.in_race_green_width;
        WRONG_GEAR_DURATION_INFO = a.wrong_change_gear_duration;
        PLAYER_ENGINE_INFO = a.player_engine;
        NITRO_INFO = a.nitro_duration;
        OPPONENT_ENGINE_GEAR = a.opponent_engine;
        SKILL = a.opponent_skills;
        STAGE_METER_LENGTH = a.track_meter_length;
        STAGE_WIN_REWARDS = a.track_rewards;
        BONUS_REWARD_TRACKLENGTH_MULTIPLIER = a.bonus_multiplier_length_reward;
        BONUS_REWARD_OVERTAKING_MULTIPLIER = a.bonus_multiplier_overtaking_reward;
        BONUS_REWARD_DIFFICULTY_MULTIPLIER = a.bonus_multiplier_difficulty;
        ENABLE_FULLSCREEN = a.fullscreen;
        ENABLE_CHECK_ORIENTATION = a.check_orientation
    };
    this.preloaderReady = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        this._loadImages();
        d = !0
    };
    this.soundLoaded = function() {
        b++;
        h.refreshLoader(Math.floor(b / c * 100))
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        a.push({
            path: "./sounds/",
            filename: "upgrade_car",
            loop: !1,
            volume: 1,
            ingamename: "upgrade_car"
        });
        a.push({
            path: "./sounds/",
            filename: "press_button",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "1",
            loop: !1,
            volume: 1,
            ingamename: "1"
        });
        a.push({
            path: "./sounds/",
            filename: "2",
            loop: !1,
            volume: 1,
            ingamename: "2"
        });
        a.push({
            path: "./sounds/",
            filename: "3",
            loop: !1,
            volume: 1,
            ingamename: "3"
        });
        a.push({
            path: "./sounds/",
            filename: "go",
            loop: !1,
            volume: 1,
            ingamename: "go"
        });
        a.push({
            path: "./sounds/",
            filename: "arrive_lose",
            loop: !1,
            volume: 1,
            ingamename: "arrive_lose"
        });
        a.push({
            path: "./sounds/",
            filename: "arrive_win",
            loop: !1,
            volume: 1,
            ingamename: "arrive_win"
        });
        a.push({
            path: "./sounds/",
            filename: "ignition",
            loop: !1,
            volume: 1,
            ingamename: "ignition"
        });
        a.push({
            path: "./sounds/",
            filename: "sprint_start",
            loop: !1,
            volume: 1,
            ingamename: "sprint_start"
        });
        a.push({
            path: "./sounds/",
            filename: "fire_wheel",
            loop: !0,
            volume: 1,
            ingamename: "fire_wheel"
        });
        a.push({
            path: "./sounds/",
            filename: "nitro",
            loop: !1,
            volume: 1,
            ingamename: "nitro"
        });
        a.push({
            path: "./sounds/",
            filename: "change_gear",
            loop: !1,
            volume: 1,
            ingamename: "change_gear"
        });
        a.push({
            path: "./sounds/",
            filename: "wrong_gear",
            loop: !1,
            volume: 1,
            ingamename: "wrong_gear"
        });
        a.push({
            path: "./sounds/",
            filename: "stall",
            loop: !0,
            volume: 1,
            ingamename: "stall"
        });
        a.push({
            path: "./sounds/",
            filename: "acceleration",
            loop: !1,
            volume: 1,
            ingamename: "acceleration"
        });
        a.push({
            path: "./sounds/",
            filename: "engine",
            loop: !1,
            volume: 1,
            ingamename: "engine"
        });
        a.push({
            path: "./sounds/",
            filename: "gear_player",
            loop: !1,
            volume: 1,
            ingamename: "gear_player"
        });
        c += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++){
        s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
        }
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("curtain_bot", "./sprites/preloader_bottom.jpg");
        s_oSpriteLibrary.addSprite("curtain_top", "./sprites/preloader_top.jpg");
        s_oSpriteLibrary.addSprite("logo", "./sprites/logo.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_continue_menu", "./sprites/but_continue_menu.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_exit_big", "./sprites/but_not.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_continue_small", "./sprites/but_continue_small.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_shop", "./sprites/but_shop.png");
        s_oSpriteLibrary.addSprite("upgrade_gear", "./sprites/upgrade_gear.png");
        s_oSpriteLibrary.addSprite("upgrade_speed", "./sprites/upgrade_speed.png");
        s_oSpriteLibrary.addSprite("upgrade_nitro", "./sprites/upgrade_nitro.png");
        s_oSpriteLibrary.addSprite("but_nitro", "./sprites/but_nitro.png");
        s_oSpriteLibrary.addSprite("accelerator", "./sprites/accelerator.png");
        s_oSpriteLibrary.addSprite("but_gear", "./sprites/but_gear.png");
        s_oSpriteLibrary.addSprite("gear_handle", "./sprites/gear_handle.png");
        s_oSpriteLibrary.addSprite("map_track", "./sprites/map_track.png");
        s_oSpriteLibrary.addSprite("car_track_0", "./sprites/car_track_0.png");
        s_oSpriteLibrary.addSprite("car_track_1", "./sprites/car_track_1.png");
        s_oSpriteLibrary.addSprite("tachometer", "./sprites/tachometer.png");
        s_oSpriteLibrary.addSprite("indicator", "./sprites/indicator.png");
        s_oSpriteLibrary.addSprite("smoke", "./sprites/smoke.png");
        s_oSpriteLibrary.addSprite("woman_starting", "./sprites/woman_starting.png");
        s_oSpriteLibrary.addSprite("parallaxe_1", "./sprites/parallaxe_1.png");
        s_oSpriteLibrary.addSprite("street_piece", "./sprites/street_piece.png");
        s_oSpriteLibrary.addSprite("parallaxe_2", "./sprites/parallaxe_2.png");
        s_oSpriteLibrary.addSprite("lamp", "./sprites/lamp.png");
        s_oSpriteLibrary.addSprite("arrive", "./sprites/arrive.png");
        s_oSpriteLibrary.addSprite("fireline", "./sprites/fireline.png");
        s_oSpriteLibrary.addSprite("firewheel", "./sprites/firewheel.png");
        for (var a = 0; 10 >= a; a++) s_oSpriteLibrary.addSprite("car_" + a, "./sprites/cars/car_" + a + ".png"), s_oSpriteLibrary.addSprite("shadow_" + a, "./sprites/cars/car_" + a + "_shadow.png"), s_oSpriteLibrary.addSprite("wheel_" + a, "./sprites/cars/car_" + a + "_wheel.png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        h.refreshLoader(Math.floor(b / c * 100))
    };
    this._onRemovePreloader = function() {
        h.unload();
        s_oSoundTrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        new CMenu;
        g = STATE_MENU
    };
    this.gotoModeMenu = function() {
        new CModeMenu;
        g = STATE_MODEMENU
    };
    this.gotoGame = function(a) {
        f = new CGame(e, a);
        g = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        g = STATE_HELP
    };
    this.stopUpdate = function() {
        d = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        d = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== d) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            g === STATE_GAME ? f.update() : g === STATE_MENU && s_oMenu.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var e = a;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
s_iCntTime = 0,
s_iTimeElaps = 0,
s_iPrevTime = 0,
s_iCntFps = 0,
s_iCurFps = 0,
s_bFullscreen = !1,
s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack, s_oCanvas, s_oTweenController, s_oLocalStorage, s_aSounds;
function CTextButton(a, d, b, c, g, h, f, e) {
    var m, q, p, l, k, n, r, t, v, z, y;
    this._init = function(a, b, c, e, f, d, g, h) {
        m = !1;
        l = [];
        k = [];
        y = createBitmap(c);
        q = c.width;
        p = c.height;
        z = new createjs.Text(e, g + "px " + f, d);
        z.textAlign = "center";
        z.textBaseline = "alphabetic";
        z.lineWidth = .9 * q;
        z.x = c.width / 2;
        z.y = Math.floor(c.height / 2) + 15;
        v = new createjs.Container;
        v.x = a;
        v.y = b;
        v.regX = c.width / 2;
        v.regY = c.height / 2;
        s_bMobile || (v.cursor = "pointer");
        v.addChild(y, z);
        !1 !== h && s_oStage.addChild(v);
        this._initListener()
    };
    this.unload = function() {
        v.off("mousedown", n);
        v.off("pressup", r);
        s_oStage.removeChild(v)
    };
    this.setVisible = function(a) {
        v.visible = a
    };
    this.setAlign = function(a) {
        z.textAlign = a
    };
    this.enable = function() {
        m = !1;
        y.filters = [];
        y.cache(0, 0, q, p)
    };
    this.disable = function() {
        m = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        y.filters = [new createjs.ColorMatrixFilter(a)];
        y.cache(0, 0, q, p)
    };
    this._initListener = function() {
        n = v.on("mousedown", this.buttonDown);
        r = v.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        k[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, e) {
        l[a] = b;
        k[a] = c;
        t = e
    };
    this.buttonRelease = function() {
        m || (playSound("click", 1, !1), v.scaleX = 1, v.scaleY = 1, l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(k[ON_MOUSE_UP], t))
    };
    this.buttonDown = function() {
        m || (v.scaleX = .9, v.scaleY = .9, l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        v.x = a;
        v.y = b
    };
    this.changeText = function(a) {
        z.text = a
    };
    this.setX = function(a) {
        v.x = a
    };
    this.setY = function(a) {
        v.y = a
    };
    this.getButtonImage = function() {
        return v
    };
    this.getX = function() {
        return v.x
    };
    this.getY = function() {
        return v.y
    };
    this.getSprite = function() {
        return v
    };
    this._init(a, d, b, c, g, h, f, e);
    return this
}
function CToggle(a, d, b, c, g) {
    var h, f, e, m, q, p, l, k;
    this._init = function(a, b, c, d) {
        e = [];
        m = [];
        var g = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        f = d;
        h = !1;
        k = createSprite(g, "state_" + f, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        k.x = a;
        k.y = b;
        k.stop();
        n.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown", q);
        k.off("pressup", p);
        s_bMobile || k.off("mouseover", l);
        n.removeChild(k)
    };
    this._initListener = function() {
        q = k.on("mousedown", this.buttonDown);
        p = k.on("pressup", this.buttonRelease);
        s_bMobile || (l = k.on("mouseover", this.buttonOver))
    };
    this.addEventListener = function(a, b, c) {
        e[a] = b;
        m[a] = c
    };
    this.setActive = function(a) {
        f = a;
        k.gotoAndStop("state_" + f)
    };
    this.enable = function() {
        h = !1
    };
    this.disable = function() {
        h = !0
    };
    this.buttonRelease = function() {
        h || (k.scaleX = 1, k.scaleY = 1, playSound("click", 1, !1), f = !f, k.gotoAndStop("state_" + f), e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(m[ON_MOUSE_UP], f))
    };
    this.buttonDown = function() {
        h || (k.scaleX = .9, k.scaleY = .9, e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function(a) {
        h || s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function(a, b) {
        k.x = a;
        k.y = b
    };
    var n = g;
    this._init(a, d, b, c)
}
function CGfxButton(a, d, b, c) {
    var g, h, f, e, m, q, p, l;
    this._init = function(a, b, c, d) {
        g = !1;
        h = 1;
        f = [];
        e = [];
        l = createBitmap(c);
        l.x = a;
        l.y = b;
        l.scaleX = l.scaleY = h;
        l.regX = c.width / 2;
        l.regY = c.height / 2;
        d.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown", m);
        l.off("pressup", q);
        s_bMobile || l.off("mouseover", p);
        c.removeChild(l)
    };
    this.setVisible = function(a) {
        l.visible = a
    };
    this.setClickable = function(a) {
        g = !a
    };
    this._initListener = function() {
        m = l.on("mousedown", this.buttonDown);
        q = l.on("pressup", this.buttonRelease);
        s_bMobile || (p = l.on("mouseover", this.buttonOver))
    };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        e[a] = c
    };
    this.buttonRelease = function() {
        g || (l.scaleX = h, l.scaleY = h, playSound("click", 1, !1), f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(e[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        g || (l.scaleX = .9 * h, l.scaleY = .9 * h, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function(a) {
        s_bMobile || g || (a.target.cursor = "pointer")
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(l).to({
            scaleX: .9 * h,
            scaleY: .9 * h
            }, 850, createjs.Ease.quadOut).to({
            scaleX: h,
            scaleY: h
            }, 650, createjs.Ease.quadIn).call(function() {
            k.pulseAnimation()
        })
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(l).to({
            rotation: 5
            }, 75, createjs.Ease.quadOut).to({
            rotation: -5
            }, 140, createjs.Ease.quadIn).to({
            rotation: 0
            }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            k.trebleAnimation()
        })
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    this.setX = function(a) {
        l.x = a
    };
    this.setY = function(a) {
        l.y = a
    };
    this.getButtonImage = function() {
        return l
    };
    this.getX = function() {
        return l.x
    };
    this.getY = function() {
        return l.y
    };
    var k = this;
    this._init(a, d, b, c);
    return this
}
var EASE_LINEAR = 0,
EASE_CUBIC_IN = 1,
EASE_QUART_BACKIN = 2,
EASE_BACKIN = 3,
EASE_SIN_IN = 4,
EASE_QUAD_IN = 5,
EASE_CUBIC_OUT = 6,
EASE_ELASTIC_OUT = 7,
EASE_BACKOUT = 8,
EASE_QUINT_OUT = 9,
EASE_CUBIC_INOUT = 10;
function CTweenController() {
    this.tweenValue = function(a, d, b) {
        return a + b * (d - a)
    };
    this.easeLinear = function(a, d, b, c) {
        return b * a / c + d
    };
    this.easeInCubic = function(a, d, b, c) {
        c = (a /= c) * a * a;
        return d + b * c
    };
    this.easeBackInQuart = function(a, d, b, c) {
        c = (a /= c) * a;
        return d + b * (2 * c * c + 2 * c * a + -3 * c)
    };
    this.easeInBack = function(a, d, b, c) {
        return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
    };
    this.easeInSine = function(a, d, b, c) {
        return -b * Math.cos(a / c * (Math.PI / 2)) + b + d
    };
    this.easeInQuad = function(a, d, b, c) {
        return b * (a /= c) * a + d
    };
    this.easeInQuint = function(a, d, b, c) {
        a /= c;
        return b * a * a * a * a * a + d
    };
    this.easeOutCubic = function(a, d, b, c) {
        return b * ((a = a / c - 1) * a * a + 1) + d
    };
    this.easeOutElastic = function(a, d, b, c) {
        if (0 === a) return d;
        if (1 === (a /= c)) return d + b;
        var g = .3 * c;
        return b * Math.pow(2, -10 * a) * Math.sin(2 * (a * c - g / 4) * Math.PI / g) + b + d
    };
    this.easeOutBack = function(a, d, b, c) {
        return b * ((a = a / c - 1) * a * (2.70158 * a + 1.70158) + 1) + d
    };
    this.easeInOutCubic = function(a, d, b, c) {
        return 1 > (a /= c / 2) ? b / 2 * a * a * a + d : b / 2 * ((a -= 2) * a * a + 2) + d
    };
    this.easeOutQuint = function(a, d, b, c) {
        return b * ((a = a / c - 1) * a * a * a * a + 1) + d
    }
}
function CMenu() {
    var a, d, b, c, g, h, f, e, m, q, p, l, k, n, r, t, v, z, y, A, C, B, D, H = null,
    K = null;
    this._init = function() {
        f = randomFloatBetween(.02, .07);
        e = randomFloatBetween(.02, .07);
        q = m = 0;
        y = new createjs.Container;
        s_oStage.addChild(y);
        A = new createjs.Container;
        s_oStage.addChild(A);
        p = new CBackground(y);
        l = new CStreet(0, y, A);
        l.setArrive(-400);
        B = new CCar(-randomFloatBetween(200, 1E3), 400, y, Math.floor(5 * Math.random()), !1, OPPONENT_ENGINE_GEAR[0], 0);
        B.setScale(.85);
        C = new CCar(-randomFloatBetween(200, 1E3), 500, y, Math.floor(5 * Math.random()), !1, OPPONENT_ENGINE_GEAR[0], 0);
        var G = s_oSpriteLibrary.getSprite("logo"),
        I = createBitmap(G);
        I.regX = G.width / 2;
        I.regY = G.height / 2;
        I.x = -1E3;
        I.y = CANVAS_HEIGHT / 2 - 160;
        s_oStage.addChild(I);
        (new createjs.Tween.get(I)).to({
            x: CANVAS_WIDTH / 2
            }, 1500, createjs.Ease.cubicOut);
        s_oLocalStorage.isDirty() ? (G = s_oSpriteLibrary.getSprite("but_play"), k = new CGfxButton(CANVAS_WIDTH / 2 - 1070, CANVAS_HEIGHT - 180, G, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onButReset, this), (new createjs.Tween.get(k.getButtonImage())).wait(500).to({
            x: CANVAS_WIDTH / 2 - 170
            }, 1500, createjs.Ease.cubicOut), G = s_oSpriteLibrary.getSprite("but_continue_menu"), n = new CGfxButton(CANVAS_WIDTH / 2 - 780, CANVAS_HEIGHT - 180, G, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this), (new createjs.Tween.get(n.getButtonImage())).wait(1E3).to({
                x: CANVAS_WIDTH / 2 + 120
                }, 1E3, createjs.Ease.cubicOut).call(function() {
                n.pulseAnimation()
        })) : (G = s_oSpriteLibrary.getSprite("but_play"), k = new CGfxButton(CANVAS_WIDTH / 2 - 780, CANVAS_HEIGHT - 180, G, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this), (new createjs.Tween.get(k.getButtonImage())).wait(500).to({
            x: CANVAS_WIDTH / 2
            }, 1500, createjs.Ease.cubicOut).call(function() {
                k.pulseAnimation()
        }));
        G = s_oSpriteLibrary.getSprite("but_info");
        g = G.height / 2 + 10;
        h = G.height / 2 + 10;
        v = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, G, s_oStage);
        //v.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) G = s_oSpriteLibrary.getSprite("audio_icon"), b = CANVAS_WIDTH - G.height / 2 - 10, c = G.height / 2 + 10, t = new CToggle(b, c, G, s_bAudioActive, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        G = window.document;
        I = G.documentElement;
        H = I.requestFullscreen || I.mozRequestFullScreen || I.webkitRequestFullScreen || I.msRequestFullscreen;
        K = G.exitFullscreen || G.mozCancelFullScreen || G.webkitExitFullscreen || G.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (H = !1);
        H && screenfull.enabled && (G = s_oSpriteLibrary.getSprite("but_fullscreen"), a = g + G.width / 2 + 10, d = G.height / 2 + 10, D = new CToggle(a, d, G, s_bFullscreen, s_oStage), D.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(r);
        createjs.Tween.get(r).to({
            alpha: 0
            }, 1E3).call(function() {
            r.visible = !1
        });
        z = new CCurtain(s_oStage);
        z.openAnim();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oLocalStorage.isUsed() || new CMsgBox(TEXT_IOS_PRIVATE)
    };
    this.unload = function() {
        k.unload();
        k = null;
        r.visible = !1;
        v.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(), t = null;
        H && screenfull.enabled && D.unload();
        s_oStage.removeChild(p);
        s_oMenu = p = null;
        z.unload();
        C.unload();
        B.unload()
    };
    this.refreshButtonPos = function(e, f) {
        v.setPosition(g + e, f + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(b - e, f + c);
        H && screenfull.enabled && D.setPosition(a + e, d + f)
    };
    this.resetFullscreenBut = function() {
        D.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? K.call(window.document) : H.call(window.document.documentElement);
        sizeHandler()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function() {
        new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        s_oLocalStorage.isDirty() ? (k.setClickable(!1), n.setClickable(!1)) : k.setClickable(!1);
        z.closeAnim(I._onCurtainClose)
    };
    this._onButReset = function() {
        (new CAreYouSurePanel(s_oMenu.removeDataAndContinue)).changeMessage(TEXT_SAVE_REMOVE, 40)
    };
    this.removeDataAndContinue = function() {
        s_oLocalStorage.resetAllData();
        s_oLocalStorage.loadData();
        s_oMenu._onButPlayRelease()
    };
    this._onCurtainClose = function() {
        I.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoModeMenu()
    };
    this.resetAnim = function() {
        C.unload();
        C.unload();
        f = randomFloatBetween(.02, .07);
        e = randomFloatBetween(.02, .07);
        q = m = 0;
        B = new CCar(-randomFloatBetween(200, 1E3), 400, y, Math.floor(5 * Math.random()), !1, OPPONENT_ENGINE_GEAR[0], 0);
        B.setScale(.85);
        C = new CCar(-randomFloatBetween(200, 1E3), 500, y, Math.floor(5 * Math.random()), !1, OPPONENT_ENGINE_GEAR[0], 0)
    };
    this.update = function() {
        l.menuMovement(25);
        m -= f;
        q -= e;
        C.move(m);
        B.move(q);
        C.getCar().x > 2 * CANVAS_WIDTH && B.getCar().x > 2 * CANVAS_WIDTH && this.resetAnim()
    };
    s_oMenu = this;
    var I = this;
    this._init()
}
var s_oMenu = null;
function CModeMenu() {
    var a, d, b, c, g, h, f, e, m, q = [],
    p, l, k, n, r, t, v;
    this._init = function() {
        f = 0;
        new CBackground(s_oStage);
        l = new CStreet(0, s_oStage, s_oStage);
        l.setArrive(-400);
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        t.alpha = .7;
        s_oStage.addChild(t);
        m = new createjs.Container;
        m.x = 0;
        m.y = 0;
        var e = new createjs.Text(TEXT_SELECT_STAGE, " 70px " + PRIMARY_FONT, "#3e240b");
        e.x = CANVAS_WIDTH / 2;
        e.y = 180;
        e.outline = 10;
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.lineWidth = 1E3;
        var y = new createjs.Text(TEXT_SELECT_STAGE, " 70px " + PRIMARY_FONT, "#ffffff");
        y.x = CANVAS_WIDTH / 2;
        y.y = 180;
        y.textAlign = "center";
        y.textBaseline = "alphabetic";
        y.lineWidth = 1E3;
        m.addChild(e, y);
        s_oStage.addChild(m);
        e = .5 * CANVAS_WIDTH - 20;
        y = -200;
        var A = -100;
        p = [];
        p = s_oLocalStorage.getItemJson(LOCALSTORAGE_TIMES);
        for (var C = 0; C < p.length; C++) 0 < p[C] && f++;
        for (C = 0; C < NUM_TRACK; C++, y += 170) 600 < y && (y = -200, A += 200), C <= f ? (q[C] = new CLevelBut(e - 120 + y, 425 + A, s_oSpriteLibrary.getSprite("but_level"), !0, C + 1, s_oStage), q[C].addEventListenerWithParams(ON_MOUSE_UP, this._onClick, this, C), q[C].enable()) : (q[C] = new CLevelBut(e - 120 + y, 425 + A, s_oSpriteLibrary.getSprite("but_level"), !1, C + 1, s_oStage), q[C].disable()), q[C].addLevelText(C + 1), q[C].disable(), s_bFirstTime = !0;
        this._setLevelInfo();
        e = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH - e.height / 2 - 10;
        h = e.height / 2 + 17;
        k = new CGfxButton(g, h, e, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (e = s_oSpriteLibrary.getSprite("audio_icon"), b = g - e.height - 10, c = h, n = new CToggle(b, c, e, s_bAudioActive, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), e = s_oSpriteLibrary.getSprite("but_shop"), a = b - e.height - 10, d = c) : (e = s_oSpriteLibrary.getSprite("but_shop"), a = g - e.height - 10, d = h);
        r = new CGfxButton(a, d, e, s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onShop, this);
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(t);
        (new createjs.Tween.get(t)).to({
            alpha: 0
            }, 1E3);
        v = new CCurtain(s_oStage);
        v.openAnim();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        for (var a = 0; a < NUM_TRACK; a++) q[a].unload();
        t.off("mousedown");
        s_oLevelMenu = null;
        s_oStage.removeAllChildren();
        v.unload()
    };
    this.refreshButtonPos = function(e, f) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(b - e, c + f);
        k.setPosition(g - e, h + f);
        r.setPosition(a - e, d + f)
    };
    this._setLevelInfo = function() {
        f < NUM_TRACK && (q[f].enable(), q[f].pulseAnimation());
        for (var a = 0; a < f; a++) q[a].enable(), q[a].addScore(p[a])
    };
    this._onNumModeToggle = function(a) {
        a === NUM_ACTIVE ? ((void 0).setActive(!1), (void 0).setActive(!0)) : ((void 0).setActive(!0), (void 0).setActive(!1))
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onClick = function(a) {
        e = a;
        t.on("mousedown", function() {});
        createjs.Tween.get(t, {
            override: !0
        }).to({
            alpha: 1
            }, 500);
        v.closeAnim(this._onCurtainClose)
    };
    this._onCurtainClose = function() {
        s_oLevelMenu.unload();
        s_oMain.gotoGame(e)
    };
    this._onExit = function() {
        $(s_oMain).trigger("end_session");
        v.closeAnim(this._onExitCurtainClose)
    };
    this._onExitCurtainClose = function() {
        s_oLevelMenu.unload();
        s_oMain.gotoMenu()
    };
    this._onShop = function() {
        new CShopPanel
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;
function CLevelBut(a, d, b, c, g, h) {
    var f, e, m, q, p = [],
    l, k, n, r, t = null,
    v = null,
    z;
    this._init = function(a, b, d, h) {
        f = !1;
        e = 1;
        m = [];
        q = [];
        l = new createjs.Container;
        l.x = a;
        l.y = b;
        l.scaleX = l.scaleY = e;
        h.addChild(l);
        k = new createjs.Container;
        k.x = a;
        k.y = b;
        k.scaleX = l.scaleY = e;
        h.addChild(k);
        a = d.width / 2;
        b = d.height;
        d = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: a,
                height: b,
                regX: a / 2,
                regY: b / 2
            },
            animations: {
                on: [0],
                off: [1]
            }
        });
        z = createSprite(d, "on", a / 2, b / 2, a, b);
        l.addChild(z);
        c ? z.gotoAndStop("on") : z.gotoAndStop("off");
        this._initListener();
        this.addInfo(STAGE_METER_LENGTH[g - 1] + TEXT_M)
    };
    this.unload = function() {
        s_bMobile ? l.off("mousedown", this.buttonDown) : (l.off("mousedown", this.buttonDown), l.off("mouseover", this.buttonOver));
        l.off("pressup", this.buttonRelease);
        h.removeChild(l)
    };
    this.setVisible = function(a) {
        l.visible = a
    };
    this.enable = function() {
        z.gotoAndStop("on");
        f = !1;
        null !== v && (t.color = "#3e240b", v.color = "#ffffff");
        null !== r && (n.color = "#3e240b", r.color = "#ffffff")
    };
    this.disable = function() {
        f = !0;
        z.gotoAndStop("off");
        null !== v && (t.color = "#000000", v.color = "#a8a8a8");
        null !== r && (n.color = "#000000", r.color = "#a8a8a8")
    };
    this.setClickable = function(a) {
        f = !a
    };
    this.addInfo = function(a) {
        n = new createjs.Text(a, " 24px " + PRIMARY_FONT, "#3e240b");
        n.x = b.height / 2 - 24;
        n.y = -b.height / 2 + 10;
        n.textAlign = "center";
        n.textBaseline = "middle";
        n.lineWidth = 200;
        n.outline = 4;
        n.rotation = 30;
        l.addChild(n);
        r = new createjs.Text(a, " 24px " + PRIMARY_FONT, "#ffffff");
        r.x = n.x;
        r.y = n.y;
        r.textAlign = "center";
        r.textBaseline = "middle";
        r.lineWidth = 200;
        r.rotation = n.rotation;
        l.addChild(r)
    };
    this.addScore = function(a) {
        var c = new createjs.Text(formatTime(a), " 20px " + PRIMARY_FONT, "#3e240b");
        c.y = b.height / 2 + 10;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 200;
        c.outline = 4;
        k.addChild(c);
        a = new createjs.Text(formatTime(a), " 20px " + PRIMARY_FONT, "#ffffff");
        a.y = c.y;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 200;
        k.addChild(a)
    };
    this.addLevelText = function(a) {
        t = new createjs.Text(a, " 60px " + PRIMARY_FONT, "#3e240b");
        t.y = 5;
        t.textAlign = "center";
        t.textBaseline = "middle";
        t.lineWidth = 200;
        t.outline = 8;
        l.addChild(t);
        v = new createjs.Text(a, " 60px " + PRIMARY_FONT, "#ffd800");
        v.y = 5;
        v.textAlign = "center";
        v.textBaseline = "middle";
        v.lineWidth = 200;
        l.addChild(v)
    };
    this._initListener = function() {
        if (s_bMobile) l.on("mousedown", this.buttonDown);
        else l.on("mousedown", this.buttonDown), l.on("mouseover", this.buttonOver);
        l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        m[a] = b;
        q[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, e) {
        m[a] = b;
        q[a] = c;
        p = e
    };
    this.buttonRelease = function() {
        f || (l.scaleX = e, l.scaleY = e, m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(q[ON_MOUSE_UP], p))
    };
    this.buttonDown = function() {
        f || (playSound("click", 1, !1), l.scaleX = .9 * e, l.scaleY = .9 * e, m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN], p))
    };
    this.buttonOver = function(a) {
        s_bMobile || f || (a.target.cursor = "pointer")
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(l).to({
            scaleX: .9 * e,
            scaleY: .9 * e
            }, 850, createjs.Ease.quadOut).to({
            scaleX: e,
            scaleY: e
            }, 650, createjs.Ease.quadIn).call(function() {
            y.pulseAnimation()
        })
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(l).to({
            rotation: 5
            }, 75, createjs.Ease.quadOut).to({
            rotation: -5
            }, 140, createjs.Ease.quadIn).to({
            rotation: 0
            }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            y.trebleAnimation()
        })
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    this.setScale = function(a) {
        e = a;
        l.scaleX = l.scaleY = a
    };
    this.setX = function(a) {
        l.x = a
    };
    this.setY = function(a) {
        l.y = a
    };
    this.getButtonImage = function() {
        return l
    };
    this.getX = function() {
        return l.x
    };
    this.getY = function() {
        return l.y
    };
    var y = this;
    this._init(a, d, b, h);
    return this
}
function CGame(a, d) {
    var b, c, g, h, f, e, m, q, p, l, k = null,
    n, r, t, v, z, y, A, C, B, D;
    this._init = function(a, b) {
        e = b;
        h = START_COUNTDOWN;
        g = STATE_HELP_PANEL;
        f = 0;
        y = new createjs.Container;
        s_oStage.addChild(y);
        A = new createjs.Container;
        s_oStage.addChild(A);
        n = new CBackground(y);
        r = new CStreet(0, y, A);
        r.setArrive(STAGE_METER_LENGTH[e]);
        D = new CCar(START_LINE_X, 400, y, e + 1, !1, OPPONENT_ENGINE_GEAR[e], e);
        D.setScale(.85);
        var c = s_oSpriteLibrary.getSprite("woman_starting"),
        d = c.width / 9,
        k = c.height / 2;
        a = {
            images: [c],
            framerate: 30,
            frames: {
                width: d,
                height: k,
                regX: d / 2,
                regY: k
            },
            animations: {
                play: [0, 17, "stop"],
                rev: [16, 1, "play"],
                stop: [17]
            }
        };
        c = new createjs.SpriteSheet(a);
        z = createSprite(c, "play", d / 2, k / 2, d, k);
        z.x = 700;
        z.y = 450;
        z.gotoAndStop("play");
        y.addChild(z);
        B = new CCar(START_LINE_X, 500, y, 0, !0, PLAYER_ENGINE_GEAR, e);
        t = new CAI(D, e);
        l = new CInterface;
        s_oHUD.setGearArea(GEAR_START_AREA.center, GEAR_START_AREA);
        v = new createjs.Shape;
        v.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        v.on("mousedown", function() {});
        s_oStage.addChild(v);
        new CVsPanel(e);
        $(s_oMain).trigger("start_level", e);
        C = new CCurtain(s_oStage);
        C.openAnim()
    };
    this.startAcceleration = function(a) {
        s_oHUD.startAccelerate(a);
        a && B.pitchStartAnim()
    };
    this.changeGear = function() {
        switch (s_oHUD.getIndicatorResult()) {
            case GREEN_AREA:
                B.changeGear();
                s_oHUD.downShiftGear(B.getGear(), STATE_HUD_UPDATE, 0);
                s_oHUD.scaleGear();
                new CScoreText(TEXT_PERFECT, 100, -30, s_oHUD.getContainer());
                break;
            case EARLY_AREA:
                B.changeGear();
                this._wrongGearChange();
                s_oHUD.scaleGear();
                break;
            case LATE_AREA:
                B.changeGear(), this._wrongGearChange(), s_oHUD.scaleGear()
        }
        B.getGear() < PLAYER_ENGINE_GEAR.length - 1 ? s_oHUD.setGearArea(HUD_RPM_INTERVAL[B.getGear()].max - GEAR_IN_RACE_AREA.greenangle - 5, GEAR_IN_RACE_AREA) : s_oHUD.setGearArea(0, GEAR_NULL_AREA)
    };
    this._wrongGearChange = function() {
        playSound("wrong_gear", 1, !1);
        var a = b ? WRONG_GEAR_CHANGE_STALL_DURATION / ENGINE_NITRO_RPM_ACCELERATION : WRONG_GEAR_CHANGE_STALL_DURATION;
        s_oHUD.downShiftGear(B.getGear(), STATE_HUD_STALL, a);
        B.delayEngine(a)
    };
    this.shotNitro = function() {
        b = !0;
        B.activateNitro(NITRO_DURATION);
        new CTremble(s_oStage, NITRO_DURATION, 5, 1)
    };
    this.endNitro = function() {
        b = !1
    };
    this.playerHighlight = function() {
        B.highlight()
    };
    this.opponentHighlight = function() {
        D.highlight()
    };
    this.getPlayerMeterSpeed = function() {
        return B.getMeterSpeed()
    };
    this.getStage = function() {
        return e
    };
    this.nextLevel = function() {
        e++;
        e === NUM_TRACK ? this.gameOver() : (C.closeAnim(this._onCurtainClose), (new createjs.Tween.get(v)).to({
            alpha: 1
            }, 500));
        fadeSound(s_oSoundTrack, 0, 1, 2E3)
    };
    this.restartGame = function() {
        $(s_oMain).trigger("restart_level", e);
        $(s_oMain).trigger("show_interlevel_ad");
        C.closeAnim(this._onCurtainClose);
        (new createjs.Tween.get(v)).to({
            alpha: 1
            }, 500);
        fadeSound(s_oSoundTrack, 0, 1, 2E3)
    };
    this._onCurtainClose = function() {
        H.unload();
        H._init(a, e)
    };
    this.unload = function() {
        l.unload();
        null !== k && k.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        C.unload();
        B.stopSound();
        D.stopSound();
        p && stopSound(p)
    };
    this.onExit = function() {
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("end_level", e);
        $(s_oMain).trigger("show_interlevel_ad");
        C.closeAnim(H._onExitCurtain);
        (new createjs.Tween.get(v)).to({
            alpha: 1
            }, 500);
        fadeSound(s_oSoundTrack, 0, 1, 2E3)
    };
    this._onExitCurtain = function() {
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onExitVersusPanel = function() {
        (new createjs.Tween.get(v)).to({
            alpha: 0
            }, 500).call(function() {
            0 === e ? new CHelpPanel : (q = playSound("ignition", 1, !1), g = STATE_START_BATTLE, fadeSound(s_oSoundTrack, 1, 0, 2E3))
        })
    };
    this._onExitHelp = function() {
        q = playSound("ignition", 1, !1);
        g = STATE_START_BATTLE;
        fadeSound(s_oSoundTrack, 1, 0, 2E3)
    };
    this._checkWinner = function(a, b) {
        stopSound(p);
        B.stopSound();
        D.stopSound();
        var c = a - b;
        $(s_oMain).trigger("end_level", e);
        a > b ? new CNextLevelPanel(e, f, c) : new CRetryPanel
    };
    this.gameOver = function() {
        k = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        k.show(e, f)
    };
    this.update = function() {
        switch (g) {
            case STATE_START_BATTLE:
                s_oHUD.updateIndicatorForStartBattle();
                h -= s_iTimeElaps;
                0 >= h && (h = 0, l.removeCountdown(), g = STATE_RACE_RUN, B.ignition(), D.ignition(), s_oHUD.getIndicatorResult() !== GREEN_AREA ? this._wrongGearChange() : (s_oHUD.downShiftGear(B.getGear(), STATE_HUD_UPDATE, 0), new CScoreText(TEXT_PERFECT, 100, -30, s_oHUD.getContainer())), s_oHUD.scaleGear(), s_oHUD.acceleratorButtonVisible(!1), s_oHUD.setGearArea(HUD_RPM_INTERVAL[B.getGear()].max - GEAR_IN_RACE_AREA.greenangle - 5, GEAR_IN_RACE_AREA), 0 !== parseInt(s_oLocalStorage.getItem(LOCALSTORAGE_NITROPOWER_LEVEL)) && s_oHUD.nitroButtonVisible(!0), s_oHUD.gearButtonVisible(!0), z.gotoAndPlay("play"), playSound("sprint_start", 1, !1), fadeSound(q, 1, 0, 2E3), p = playSound("engine", 1, !0));
                l.refreshCountdown(h);
                break;
            case STATE_RACE_RUN:
                B.move();
                c = B.getSpeed();
                z.x -= c;
                m = B.getMeterPos();
                m > STAGE_METER_LENGTH[e] ? (g = STATE_RACE_FINISH, this._checkWinner(m, D.getMeterPos())) : f += s_iTimeElaps;
                r.move(c, B.getPixelPos(), D.getPixelPos());
                n.move(c * PARALLAX_BG_RATIO);
                D.move(c);
                s_oHUD.updateTachometer(B.getMeterSpeed(), B.getGear());
                break;
            case STATE_RACE_FINISH:
                B.move(), c = B.getSpeed(), r.move(c, B.getPixelPos(), D.getPixelPos()), n.move(c * PARALLAX_BG_RATIO), D.move(c), s_oHUD.updateTachometer(B.getMeterSpeed(), B.getGear())
        }
        t.update(g, D.getMeterPos());
        l.refreshMap(B.getMeterPos(), D.getMeterPos(), f)
    };
    s_oGame = this;
    var H = this;
    this._init(a, d)
}
var s_oGame;
function CInterface() {
    var a, d, b, c, g, h, f, e, m, q, p, l, k = null,
    n, r, t, v, z, y, A = null,
    C = null;
    this._init = function() {
        var k = s_oSpriteLibrary.getSprite("but_exit");
        m = CANVAS_WIDTH - k.height / 2 - 10;
        q = k.height / 2 + 10;
        l = new CGfxButton(m, q, k, s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onExit, this);
        f = CANVAS_WIDTH - k.width / 2 - 80;
        e = k.height / 2 + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) k = s_oSpriteLibrary.getSprite("audio_icon"), p = new CToggle(m - k.height - 10, e, k, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        k = window.document;
        var D = k.documentElement;
        A = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
        C = k.exitFullscreen || k.mozCancelFullScreen || k.webkitExitFullscreen || k.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (A = !1);
        A && screenfull.enabled && (k = s_oSpriteLibrary.getSprite("but_fullscreen"), a = k.width / 4 + 10, d = k.height / 2 + 10, z = new CToggle(a, d, k, s_bFullscreen, s_oStage), z.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        r = new createjs.Text("", " 300px " +
            PRIMARY_FONT, "#3e240b");
        r.x = CANVAS_WIDTH / 2;
        r.y = CANVAS_HEIGHT / 2;
        r.textAlign = "center";
        r.textBaseline = "middle";
        r.lineWidth = 200;
        r.outline = 20;
        s_oStage.addChild(r);
        t = new createjs.Text("", " 300px " + PRIMARY_FONT, "rgba(255,224,0,1)");
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2;
        t.textAlign = "center";
        t.textBaseline = "middle";
        t.lineWidth = 200;
        s_oStage.addChild(t);
        y = [];
        for (k = 0; 3 >= k; k++) y[k] = !1;
        g = CANVAS_WIDTH / 2;
        h = 720;
        n = new CHUD(s_oStage);
        b = CANVAS_WIDTH / 2 - 100;
        c = 46;
        v = new CMapTrack(b, c, s_oStage, s_oGame.getStage());
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
        l.unload();
        A && screenfull.enabled && z.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(k, t) {
        l.setPosition(m - k, t + q);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(f - k, t + e);
        A && screenfull.enabled && z.setPosition(a + k, d + t);
        n.setPos(g, h - t);
        v.setPos(b, c + t)
    };
    this.resetFullscreenBut = function() {
        z.setActive(s_bFullscreen)
    };
    this.refreshMap = function(a, b, c) {
        v.refreshMap(a, b, c)
    };
    this.refreshCountdown = function(a) {
        var b = Math.ceil(a / 1E3),
        c = (1E3 * b - a) / 1E3;
        t.alpha = 1 - c;
        t.scaleX = t.scaleY = c;
        t.text = Math.ceil(a / 1E3);
        r.alpha = t.alpha;
        r.scaleX = r.scaleY = c;
        r.text = t.text;
        3 !== b || y[3] ? 2 !== b || y[2] ? 1 !== b || y[1] ? 0 === b && (y[0] = !0, playSound("go", 1, !1)) : (y[1] = !0, playSound("1", 1, !1)) : (y[2] = !0, playSound("2", 1, !1)) : (y[3] = !0, playSound("3", 1, !1))
    };
    this.removeCountdown = function() {
        t.visible = !1
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? C.call(window.document) : A.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButHelpRelease = function() {
        k = new CHelpPanel
    };
    this._onButRestartRelease = function() {
        s_oGame.restartGame()
    };
    this.onExitFromHelp = function() {
        k.unload()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;
function CMapTrack(a, d, b, c) {
    var g, h, f, e, m, q, p, l, k, n, r, t, v;
    this._init = function(a, b, c, d) {
        e = f = !1;
        m = d;
        l = new createjs.Container;
        c.addChild(l);
        a = s_oSpriteLibrary.getSprite("map_track");
        b = createBitmap(a);
        b.regX = a.width / 2;
        b.regY = a.height / 2;
        l.addChild(b);
        r = new createjs.Text("00:00.0", " 30px " + PRIMARY_FONT, "#3e240b");
        r.x = 430;
        r.textAlign = "center";
        r.textBaseline = "middle";
        r.lineWidth = 200;
        r.outline = 3;
        l.addChild(r);
        t = new createjs.Text("00:00.0", " 30px " + PRIMARY_FONT, "#ffffff");
        t.x = r.x;
        t.textAlign = "center";
        t.textBaseline = "middle";
        t.lineWidth = 200;
        l.addChild(t);
        v = new createjs.Text(STAGE_METER_LENGTH[d] + TEXT_M, " 30px " + PRIMARY_FONT, "#ffffff");
        v.textAlign = "center";
        v.textBaseline = "middle";
        v.lineWidth = 200;
        g = -a.width / 2 + 24;
        h = a.width / 2 - 10;
        a = s_oSpriteLibrary.getSprite("car_track_0");
        n = createBitmap(a);
        n.regX = a.width / 2;
        n.regY = a.height / 2;
        n.x = g;
        n.y = -15;
        l.addChild(n);
        a = s_oSpriteLibrary.getSprite("car_track_1");
        k = createBitmap(a);
        k.regX = a.width / 2;
        k.regY = a.height / 2;
        k.x = g;
        k.y = 15;
        l.addChild(k);
        q = pixelsToMeters(START_LINE_X);
        p = (h - g) / (STAGE_METER_LENGTH[m] - q)
    };
    this.setPos = function(a, b) {
        l.x = a;
        l.y = b
    };
    this._fadeOutIndicator = function(a) {
        (new createjs.Tween.get(a)).to({
            alpha: 0
            }, 500)
    };
    this.refreshMap = function(a, b, c) {
        k.x = (a - q) * p + g;
        n.x = (b - q) * p + g;
        t.text = formatTime(c);
        r.text = formatTime(c);
        !f && k.x > h && (f = !0, this._fadeOutIndicator(k));
        !e && n.x > h && (e = !0, this._fadeOutIndicator(n))
    };
    this._init(a, d, b, c)
}
function CVsPanel(a) {
    var d, b, c, g, h, f, e, m, q, p, l;
    this._init = function(a) {
        d = !1;
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = 0;
        g.on("mousedown", function() {
            k._onExit()
        });
        s_oStage.addChild(g);
        (new createjs.Tween.get(g)).to({
            alpha: .7
            }, 500);
        h = new createjs.Container;
        h.on("pressup", function() {
            k._onExit()
        });
        s_oStage.addChild(h);
        var n = s_oSpriteLibrary.getSprite("msg_box");
        b = n.width;
        c = n.height;
        n = createBitmap(n);
        n.regX = b / 2;
        n.regY = c / 2;
        h.addChild(n);
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2;
        (new createjs.Tween.get(h)).to({
            y: CANVAS_HEIGHT / 2
            }, 500, createjs.Ease.cubicIn);
        e = new CCar(CANVAS_WIDTH / 2, 135, h, 0, !0, OPPONENT_ENGINE_GEAR[a], a);
        e.getCar().scaleX = -1;
        f = new CCar(-CANVAS_WIDTH / 2, -45, h, a + 1, !1, OPPONENT_ENGINE_GEAR[a], a);
        m = new createjs.Text(TEXT_VS, " 100px " + PRIMARY_FONT, "#3e240b");
        m.textAlign = "center";
        m.textBaseline = "middle";
        m.lineWidth = 400;
        m.outline = 5;
        m.alpha = 0;
        m.scaleX = m.scaleY = 4;
        m.y = 15;
        h.addChild(m);
        q = new createjs.Text(m.text, " 100px " + PRIMARY_FONT, "rgba(255,224,0,1)");
        q.textAlign = "center";
        q.textBaseline = "middle";
        q.lineWidth = 400;
        q.alpha = 0;
        q.scaleX = q.scaleY = 4;
        q.y = m.y;
        h.addChild(q);
        n = 0;
        for (var t = s_oLocalStorage.getItemJson(LOCALSTORAGE_TIMES), v = 0; v < t.length; v++) 0 < t[v] && n++;
        t = 0;
        v = "";
        a >= n ? (t = STAGE_WIN_REWARDS[a], v = TEXT_CURRENCY + t) : v = TEXT_BONUS_ONLY;
        t = STAGE_WIN_REWARDS[a];
        p = new createjs.Text(TEXT_PRIZE + ": " + v, " 40px " + PRIMARY_FONT, "#3e240b");
        p.x = -302;
        p.y = 160;
        p.textAlign = "left";
        p.textBaseline = "middle";
        p.lineWidth = 700;
        p.outline = 5;
        p.alpha = 0;
        p.scaleX = p.scaleY = 4;
        h.addChild(p);
        l = new createjs.Text(p.text, " 40px " + PRIMARY_FONT, "rgba(255,224,0,1)");
        l.x = p.x;
        l.y = p.y;
        l.textAlign = "left";
        l.textBaseline = "middle";
        l.lineWidth = 700;
        l.alpha = 0;
        l.scaleX = l.scaleY = 4;
        h.addChild(l);
        this._introAnim()
    };
    this.unload = function() {
        s_oStage.removeChild(g);
        s_oStage.removeChild(h);
        h.off("pressup", function() {
            k._onExit()
        });
        g.off("pressup", function() {
            k._onExit()
        });
        e.unload();
        f.unload()
    };
    this._introAnim = function() {
        (new createjs.Tween.get(f.getCar())).to({
            x: -200
            }, 2E3, createjs.Ease.cubicOut);
        (new createjs.Tween.get(f.getWheels().right)).to({
            rotation: 1500
            }, 2E3, createjs.Ease.cubicOut);
        (new createjs.Tween.get(f.getWheels().left)).to({
            rotation: 1500
            }, 2E3, createjs.Ease.cubicOut);
        (new createjs.Tween.get(e.getCar())).to({
            x: 200
            }, 2E3, createjs.Ease.cubicOut);
        (new createjs.Tween.get(e.getWheels().right)).to({
            rotation: 1500
            }, 2E3, createjs.Ease.cubicOut);
        (new createjs.Tween.get(e.getWheels().left)).to({
            rotation: 1500
            }, 2E3, createjs.Ease.cubicOut);
        (new createjs.Tween.get(q)).wait(500).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
            }, 1E3, createjs.Ease.cubicIn);
        (new createjs.Tween.get(m)).wait(500).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
            }, 1E3, createjs.Ease.cubicIn);
        (new createjs.Tween.get(l)).wait(750).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
            }, 1E3, createjs.Ease.cubicIn);
        (new createjs.Tween.get(p)).wait(750).to({
            alpha: 1,
            scaleX: 1,
            scaleY: 1
            }, 1E3, createjs.Ease.cubicIn)
    };
    this._outroAnim = function() {
        setTimeout(function() {
            f.highlight();
            e.highlight()
            }, 300);
        playSound("acceleration", 1, !1);
        (new createjs.Tween.get(f.getCar(), {
            override: !0
        })).to({
            x: CANVAS_WIDTH / 2
            }, 1E3, createjs.Ease.cubicIn);
        (new createjs.Tween.get(f.getWheels().right, {
            override: !0
        })).to({
            rotation: 3E3
            }, 1E3, createjs.Ease.cubicIn);
        (new createjs.Tween.get(f.getWheels().left, {
            override: !0
        })).to({
            rotation: 3E3
            }, 1E3, createjs.Ease.cubicIn);
        (new createjs.Tween.get(e.getCar(), {
            override: !0
        })).to({
            x: -CANVAS_WIDTH / 2
            }, 1E3, createjs.Ease.cubicIn);
        (new createjs.Tween.get(e.getWheels().right, {
            override: !0
        })).to({
            rotation: 3E3
            }, 1E3, createjs.Ease.cubicIn);
        (new createjs.Tween.get(e.getWheels().left, {
            override: !0
        })).to({
            rotation: 3E3
            }, 1E3, createjs.Ease.cubicIn)
    };
    this._onExit = function() {
        d || (d = !0, k._outroAnim(), (new createjs.Tween.get(g)).to({
            alpha: 0
            }, 1E3), (new createjs.Tween.get(h)).to({
                alpha: 0
                }, 1E3).call(function() {
                s_oGame._onExitVersusPanel();
                k.unload()
        }))
    };
    var k = this;
    this._init(a)
}
function CHelpPanel() {
    var a, d, b, c, g, h, f, e, m;
    this._init = function() {
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function() {
            q._onExitHelp()
        });
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
            }, 500);
        e = new createjs.Container;
        e.on("pressup", function() {
            q._onExitHelp()
        });
        s_oStage.addChild(e);
        var d = s_oSpriteLibrary.getSprite("msg_box"),
        l = createBitmap(d);
        l.regX = d.width / 2;
        l.regY = d.height / 2;
        e.addChild(l);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT + d.height / 2;
        a = e.y;
        (new createjs.Tween.get(e)).to({
            y: CANVAS_HEIGHT / 2 - 40
            }, 500, createjs.Ease.cubicOut);
        c = new createjs.Text(TEXT_HELP1, " 24px " + PRIMARY_FONT, "#3e240b");
        c.x = -280;
        c.y = -150;
        c.textAlign = "left";
        c.textBaseline = "alphabetic";
        c.lineWidth = 400;
        c.outline = 4;
        e.addChild(c);
        b = new createjs.Text(TEXT_HELP1, " 24px " + PRIMARY_FONT, "#ffffff");
        b.x = -280;
        b.y = -150;
        b.textAlign = "left";
        b.textBaseline = "alphabetic";
        b.lineWidth = 400;
        e.addChild(b);
        d = s_oSpriteLibrary.getSprite("accelerator");
        l = createBitmap(d);
        l.regX = d.width / 2;
        l.regY = d.height / 2;
        l.x = 200;
        l.y = -100;
        l.scaleX = l.scaleY = .7;
        e.addChild(l);
        h = new createjs.Text(TEXT_HELP2, " 24px " + PRIMARY_FONT, "#3e240b");
        h.x = -280;
        h.y = 70;
        h.textAlign = "left";
        h.textBaseline = "alphabetic";
        h.lineWidth = 350;
        h.outline = 4;
        e.addChild(h);
        g = new createjs.Text(TEXT_HELP2, " 24px " + PRIMARY_FONT, "#ffffff");
        g.x = -280;
        g.y = 70;
        g.textAlign = "left";
        g.textBaseline = "alphabetic";
        g.lineWidth = 350;
        e.addChild(g);
        d = s_oSpriteLibrary.getSprite("but_gear");
        m = new CGearButton(200, 80, d, e);
        m.setClickable(!1)
    };
    this.unload = function() {
        s_oStage.removeChild(f);
        s_oStage.removeChild(e);
        e.off("pressup", function() {
            q._onExitHelp()
        });
        f.off("pressup", function() {
            q._onExitHelp()
        });
        m.unload()
    };
    this._onExitHelp = function() {
        d || (d = !0, (new createjs.Tween.get(f)).to({
            alpha: 0
            }, 500), (new createjs.Tween.get(e)).to({
                y: a
                }, 400, createjs.Ease.backIn).call(function() {
                q.unload();
                s_oGame._onExitHelp()
        }))
    };
    var q = this;
    this._init()
}
function CCreditsPanel() {
    var a, d, b, c, g;
    this._init = function() {
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        d.on("click", function() {});
        s_oStage.addChild(d);
        (new createjs.Tween.get(d)).to({
            alpha: .7
            }, 500);
        b = new createjs.Container;
        s_oStage.addChild(b);
        var h = s_oSpriteLibrary.getSprite("msg_box"),
        f = createBitmap(h);
        f.regX = h.width / 2;
        f.regY = h.height / 2;
        b.addChild(f);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT + h.height / 2;
        a = b.y;
        (new createjs.Tween.get(b)).to({
            y: CANVAS_HEIGHT / 2 - 40
            }, 500, createjs.Ease.cubicOut);
        f = new createjs.Text("PRESENTED BY", " 40px " + PRIMARY_FONT, "#3e240b");
        f.y = -h.height / 2 + 110;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 500;
        f.outline = 5;
        b.addChild(f);
        h = new createjs.Text("PRESENTED BY", " 40px " + PRIMARY_FONT, "#ffffff");
        h.y = f.y;
        h.textAlign = "center";
        h.textBaseline = "middle";
        h.lineWidth = 500;
        b.addChild(h);
        h = new createjs.Text("www.codethislab.com", " 40px " + PRIMARY_FONT, "#3e240b");
        h.y = 90;
        h.textAlign = "center";
        h.textBaseline = "middle";
        h.lineWidth = 600;
        h.outline = 5;
        b.addChild(h);
        f = new createjs.Text("www.codethislab.com", " 40px " + PRIMARY_FONT, "#ffffff");
        f.y = h.y;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 600;
        b.addChild(f);
        h = s_oSpriteLibrary.getSprite("ctl_logo");
        g = createBitmap(h);
        g.on("click", this._onLogoButRelease);
        g.regX = h.width / 2;
        g.regY = h.height / 2;
        b.addChild(g);
        h = s_oSpriteLibrary.getSprite("but_exit");
        c = new CGfxButton(282, -155, h, b);
        c.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.unload = function() {
        c.setClickable(!1);
        (new createjs.Tween.get(d)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(b)).to({
            y: a
            }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(d);
            s_oStage.removeChild(b);
            c.unload()
        });
        d.off("click", function() {});
        g.off("click", this._onLogoButRelease)
    };
    this._onLogoButRelease = function() {
        //window.open("https://www.codethislab.com")
    };
    this._onMoreGamesReleased = function() {
        //window.open("https://www.codethislab.com")
    };
    this._init()
}
function CMsgBox(a, d) {
    var b, c, g, h, f, e;
    this._init = function(a, d) {
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function() {});
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
            }, 500);
        e = new createjs.Container;
        s_oStage.addChild(e);
        var l = s_oSpriteLibrary.getSprite("msg_box"),
        k = createBitmap(l);
        k.regX = l.width / 2;
        k.regY = l.height / 2;
        e.addChild(k);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT + l.height / 2;
        b = e.y;
        (new createjs.Tween.get(e)).to({
            y: CANVAS_HEIGHT / 2 - 40
            }, 500, createjs.Ease.quartIn);
        c = new createjs.Text(a, " 26px " + PRIMARY_FONT, "#000000");
        c.y = -l.height / 2 + 60;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 550;
        c.outline = 5;
        e.addChild(c);
        g = new createjs.Text(a, " 26px " + PRIMARY_FONT, "#ffffff");
        g.y = c.y;
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.lineWidth = 550;
        e.addChild(g);
        h = new CGfxButton(0, 80, s_oSpriteLibrary.getSprite("but_yes_big"), e);
        h.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        h.pulseAnimation()
    };
    this._onButYes = function() {
        h.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(e)).to({
            y: b
            }, 400, createjs.Ease.backIn).call(function() {
            m.unload();
            d && d()
        })
    };
    this.changeMessage = function(a) {
        c.text = a;
        g.text = a
    };
    this.unload = function() {
        h.unload();
        s_oStage.removeChild(f);
        s_oStage.removeChild(e);
        f.off("mousedown", function() {})
    };
    var m = this;
    this._init(a, d)
}
function CAreYouSurePanel(a) {
    var d, b, c, g, h, f, e;
    this._init = function(a) {
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function() {});
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
            }, 500);
        e = new createjs.Container;
        s_oStage.addChild(e);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var m = createBitmap(a);
        m.regX = a.width / 2;
        m.regY = a.height / 2;
        e.addChild(m);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT + a.height / 2;
        d = e.y;
        (new createjs.Tween.get(e)).to({
            y: CANVAS_HEIGHT / 2 - 40
            }, 500, createjs.Ease.cubicOut);
        b = new createjs.Text(TEXT_ARE_SURE, " 50px " + PRIMARY_FONT, "#000000");
        b.y = -a.height / 2 + 120;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = 600;
        b.outline = 5;
        e.addChild(b);
        c = new createjs.Text(TEXT_ARE_SURE, " 50px " + PRIMARY_FONT, "#ffffff");
        c.y = b.y;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 600;
        e.addChild(c);
        g = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_yes_big"), e);
        g.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        h = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite("but_exit_big"), e);
        h.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        h.pulseAnimation()
    };
    this._onButYes = function() {
        h.setClickable(!1);
        g.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(e)).to({
            y: d
            }, 400, createjs.Ease.backIn).call(function() {
            m.unload();
            a()
        })
    };
    this._onButNo = function() {
        h.setClickable(!1);
        g.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(e)).to({
            y: d
            }, 400, createjs.Ease.backIn).call(function() {
            m.unload()
        })
    };
    this.changeMessage = function(a, e) {
        b.text = a;
        c.text = a;
        e && (b.font = " " + e + "px " + PRIMARY_FONT, c.font = " " + e + "px " + PRIMARY_FONT)
    };
    this.unload = function() {
        h.unload();
        g.unload();
        s_oStage.removeChild(f);
        s_oStage.removeChild(e);
        f.off("mousedown", function() {})
    };
    var m = this;
    this._init(a)
}
function CNextLevelPanel(a, d, b) {
    var c, g, h, f, e, m, q, p;
    this._init = function(a, b, d) {
        playSound("arrive_win", 1, !1);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function() {});
        s_oStage.addChild(f);
        (new createjs.Tween.get(f)).to({
            alpha: .7
            }, 500);
        e = new createjs.Container;
        s_oStage.addChild(e);
        var k = s_oSpriteLibrary.getSprite("msg_box"),
        l = createBitmap(k);
        l.regX = k.width / 2;
        l.regY = k.height / 2;
        e.addChild(l);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT +
        k.height / 2;
        c = e.y;
        (new createjs.Tween.get(e)).wait(1E3).to({
            y: CANVAS_HEIGHT / 2 - 40
            }, 500, createjs.Ease.cubicOut);
        l = new createjs.Text(TEXT_WIN, " 50px " + PRIMARY_FONT, "#3e240b");
        l.y = -k.height / 2 + 60;
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.lineWidth = 400;
        l.outline = 5;
        e.addChild(l);
        var n = new createjs.Text(TEXT_WIN, " 50px " + PRIMARY_FONT, "#ffffff");
        n.y = l.y;
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.lineWidth = 400;
        e.addChild(n);
        n = 0;
        l = s_oLocalStorage.getItemJson(LOCALSTORAGE_TIMES);
        for (var r = 0; r < l.length; r++) 0 < l[r] && n++;
        l = 0;
        r = TEXT_FIRST_WIN + ": -";
        a >= n && (l = STAGE_WIN_REWARDS[a], r = TEXT_FIRST_WIN + ": " + TEXT_CURRENCY + STAGE_WIN_REWARDS[a]);
        n = new createjs.Text(r, " 30px " + PRIMARY_FONT, "#3e240b");
        n.y = -k.height / 2 + 100;
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.lineWidth = 400;
        n.outline = 5;
        e.addChild(n);
        r = new createjs.Text(r, " 30px " + PRIMARY_FONT, "#ffffff");
        r.y = n.y;
        r.textAlign = "center";
        r.textBaseline = "alphabetic";
        r.lineWidth = 400;
        e.addChild(r);
        n = new createjs.Text(TEXT_BONUS, " 26px " + PRIMARY_FONT, "#3e240b");
        n.x = -250;
        n.y = -k.height / 2 + 150;
        n.textAlign = "left";
        n.textBaseline = "alphabetic";
        n.lineWidth = 400;
        n.outline = 5;
        e.addChild(n);
        r = new createjs.Text(TEXT_BONUS, " 26px " + PRIMARY_FONT, "#ffffff");
        r.x = n.x;
        r.y = n.y;
        r.textAlign = "left";
        r.textBaseline = "alphabetic";
        r.lineWidth = 400;
        e.addChild(r);
        n = Math.floor(.01 * STAGE_METER_LENGTH[a] * BONUS_REWARD_TRACKLENGTH_MULTIPLIER);
        r = new createjs.Text(TEXT_BONUS_TRACK_LENGTH + ": " + TEXT_CURRENCY + n, " 18px " + PRIMARY_FONT, "#3e240b");
        r.x = -250;
        r.y = -k.height / 2 + 180;
        r.textAlign = "left";
        r.textBaseline = "alphabetic";
        r.lineWidth = 400;
        r.outline = 5;
        e.addChild(r);
        var A = new createjs.Text(r.text, " 18px " + PRIMARY_FONT, "#ffffff");
        A.x = r.x;
        A.y = r.y;
        A.textAlign = "left";
        A.textBaseline = "alphabetic";
        A.lineWidth = 400;
        e.addChild(A);
        d = Math.floor(.1 * d * BONUS_REWARD_OVERTAKING_MULTIPLIER);
        r = new createjs.Text(TEXT_BONUS_OVERTAKING + ": " + TEXT_CURRENCY + d, " 18px " + PRIMARY_FONT, "#3e240b");
        r.x = -250;
        r.y = -k.height / 2 + 205;
        r.textAlign = "left";
        r.textBaseline = "alphabetic";
        r.lineWidth = 400;
        r.outline = 5;
        e.addChild(r);
        A = new createjs.Text(r.text, " 18px " + PRIMARY_FONT, "#ffffff");
        A.x = r.x;
        A.y = r.y;
        A.textAlign = "left";
        A.textBaseline = "alphabetic";
        A.lineWidth = 400;
        e.addChild(A);
        r = (a + 1) * BONUS_REWARD_DIFFICULTY_MULTIPLIER;
        A = new createjs.Text(TEXT_BONUS_DIFFICULTY + ": " + TEXT_CURRENCY + r, " 18px " + PRIMARY_FONT, "#3e240b");
        A.x = -250;
        A.y = -k.height / 2 + 230;
        A.textAlign = "left";
        A.textBaseline = "alphabetic";
        A.lineWidth = 400;
        A.outline = 5;
        e.addChild(A);
        k = new createjs.Text(A.text, " 18px " + PRIMARY_FONT, "#ffffff");
        k.x = A.x;
        k.y = A.y;
        k.textAlign = "left";
        k.textBaseline = "alphabetic";
        k.lineWidth = 400;
        e.addChild(k);
        g = new CGfxButton(245, 120, s_oSpriteLibrary.getSprite("but_continue"), e);
        g.addEventListener(ON_MOUSE_UP, this._showShop, this);
        g.pulseAnimation();
        h = new CGfxButton(-245, 120, s_oSpriteLibrary.getSprite("but_restart"), e);
        h.addEventListener(ON_MOUSE_UP, this._onButRestart, this);
        this._sendBestTime(a, b);
        a = parseInt(s_oLocalStorage.getItem(LOCALSTORAGE_COINS));
        b = a + l + n + d + r;
        s_oLocalStorage.setItem(LOCALSTORAGE_COINS, b);
        p = new createjs.Text(TEXT_CURRENCY + a, " 40px " + PRIMARY_FONT, "#3e240b");
        p.x = 250;
        p.y = k.y;
        p.textAlign = "right";
        p.textBaseline = "alphabetic";
        p.lineWidth = 400;
        p.outline = 5;
        e.addChild(p);
        q = new createjs.Text(TEXT_CURRENCY + a, " 40px " + PRIMARY_FONT, "#ffffff");
        q.x = p.x;
        q.y = p.y;
        q.textAlign = "right";
        q.textBaseline = "alphabetic";
        q.lineWidth = 400;
        e.addChild(q);
        m = {
            value: a
        };
        (new createjs.Tween.get(m, {
            override: !0
        })).to({
            value: b
            }, 3E3, createjs.Ease.cubicOut).addEventListener("change", this._refreshCoins)
    };
    this._refreshCoins = function() {
        var a = m.value.toFixed(0);
        p.text = TEXT_CURRENCY + a;
        q.text = TEXT_CURRENCY + a
    };
    this._sendBestTime = function(a, b) {
        var c = s_oLocalStorage.getItemJson(LOCALSTORAGE_TIMES);
        if (c[a] > b || 0 === c[a]) c[a] = b, s_oLocalStorage.setItemJson(LOCALSTORAGE_TIMES, c);
        $(s_oMain).trigger("share_event", b);
        $(s_oMain).trigger("save_score", b, a)
    };
    this._showShop = function() {
        new CShopPanel(this._onButContinue)
    };
    this._onButContinue = function() {
        h.setClickable(!1);
        g.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(e)).to({
            y: c
            }, 400, createjs.Ease.backIn).call(function() {
            l.unload();
            s_oGame.nextLevel()
        })
    };
    this._onButRestart = function() {
        h.setClickable(!1);
        g.setClickable(!1);
        (new createjs.Tween.get(f)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(e)).to({
            y: c
            }, 400, createjs.Ease.backIn).call(function() {
            l.unload();
            s_oGame.restartGame()
        })
    };
    this.unload = function() {
        $(s_oMain).trigger("show_interlevel_ad");
        h.unload();
        g.unload();
        s_oStage.removeChild(f);
        s_oStage.removeChild(e);
        f.off("mousedown", function() {})
    };
    var l = this;
    this._init(a, d, b)
}
function CRetryPanel() {
    var a, d, b, c, g;
    this._init = function() {
        playSound("arrive_lose", 1, !1);
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = 0;
        c.on("mousedown", function() {});
        s_oStage.addChild(c);
        (new createjs.Tween.get(c)).to({
            alpha: .7
            }, 500);
        g = new createjs.Container;
        s_oStage.addChild(g);
        var f = s_oSpriteLibrary.getSprite("msg_box"),
        e = createBitmap(f);
        e.regX = f.width / 2;
        e.regY = f.height / 2;
        g.addChild(e);
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT + f.height / 2;
        a = g.y;
        (new createjs.Tween.get(g)).to({
            y: CANVAS_HEIGHT / 2 - 40
            }, 500, createjs.Ease.quartIn);
        e = new createjs.Text(TEXT_LOSE, " 50px " + PRIMARY_FONT, "#000000");
        e.y = -f.height / 2 + 120;
        e.textAlign = "center";
        e.textBaseline = "middle";
        e.lineWidth = 500;
        e.outline = 5;
        g.addChild(e);
        f = new createjs.Text(TEXT_LOSE, " 50px " + PRIMARY_FONT, "#ffffff");
        f.y = e.y;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 500;
        g.addChild(f);
        b = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_restart"), g);
        b.addEventListener(ON_MOUSE_UP, this._onButRestart, this);
        b.pulseAnimation();
        d = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite("but_home"), g);
        d.addEventListener(ON_MOUSE_UP, this._onButHome, this)
    };
    this._showShop = function() {
        new CShopPanel(this._onButContinue)
    };
    this._onButHome = function() {
        b.setClickable(!1);
        d.setClickable(!1);
        (new createjs.Tween.get(c)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(g)).to({
            y: a
            }, 400, createjs.Ease.backIn).call(function() {
            h.unload();
            s_oGame.onExit()
        })
    };
    this._onButRestart = function() {
        b.setClickable(!1);
        d.setClickable(!1);
        (new createjs.Tween.get(c)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(g)).to({
            y: a
            }, 400, createjs.Ease.backIn).call(function() {
            h.unload();
            s_oGame.restartGame();
            $(s_oMain).trigger("show_interlevel_ad")
        })
    };
    this.unload = function() {
        b.unload();
        d.unload();
        s_oStage.removeChild(c);
        s_oStage.removeChild(g);
        c.off("mousedown", function() {})
    };
    var h = this;
    this._init()
}
function CEndPanel(a) {
    var d, b, c, g, h, f, e, m;
    this._init = function(a) {
        playSound("arrive_win", 1, !1);
        d = !1;
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = 0;
        m.on("mousedown", this._onExit);
        s_oStage.addChild(m);
        (new createjs.Tween.get(m)).to({
            alpha: .7
            }, 500);
        b = createBitmap(a);
        b.x = 0;
        b.y = 0;
        g = new createjs.Text("", " 60px " + PRIMARY_FONT, "#3e240b");
        g.x = CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2;
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.outline = 8;
        g.lineWidth = 500;
        h = new createjs.Text("", " 60px " + PRIMARY_FONT, "#ffffff");
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2;
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.lineWidth = 500;
        f = new createjs.Text("", " 40px " + PRIMARY_FONT, "#000");
        f.x = CANVAS_WIDTH / 2 + 1;
        f.y = CANVAS_HEIGHT / 2 + 50;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.lineWidth = 500;
        e = new createjs.Text("", " 40px " + PRIMARY_FONT, "#ffffff");
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 + 52;
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.lineWidth = 500;
        c = new createjs.Container;
        c.alpha = 0;
        c.visible = !1;
        c.addChild(f, e, g, h);
        s_oStage.addChild(c)
    };
    this.unload = function() {
        m.off("mousedown", this._onExit);
        c.off("mousedown", this._onExit)
    };
    this._initListener = function() {
        c.on("mousedown", this._onExit)
    };
    this.show = function(a, b) {
        playSound("game_over", 1, !1);
        g.text = TEXT_GAMEOVER;
        h.text = TEXT_GAMEOVER;
        c.visible = !0;
        var e = this;
        createjs.Tween.get(c).to({
            alpha: 1
            }, 500).call(function() {
            e._initListener()
        })
    };
    this._onExit = function() {
        d || (d = !0, (new createjs.Tween.get(m)).to({
            alpha: 0
            }, 500), q.unload(), s_oStage.removeChild(c), s_oGame.onExit())
    };
    var q = this;
    this._init(a);
    return this
}
function CShopPanel(a) {
    var d, b, c, g, h, f, e, m, q, p, l, k, n, r;
    this._init = function(a) {
        n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.alpha = 0;
        n.on("mousedown", function() {});
        s_oStage.addChild(n);
        (new createjs.Tween.get(n)).to({
            alpha: .7
            }, 500);
        r = new createjs.Container;
        s_oStage.addChild(r);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var t = createBitmap(a);
        t.regX = a.width / 2;
        t.regY = a.height / 2;
        r.addChild(t);
        r.x = CANVAS_WIDTH / 2;
        r.y = CANVAS_HEIGHT + a.height / 2;
        d = r.y;
        (new createjs.Tween.get(r)).to({
            y: CANVAS_HEIGHT / 2 - 40
            }, 500, createjs.Ease.cubicOut);
        t = new createjs.Text(TEXT_SHOP, " 50px " + PRIMARY_FONT, "#3e240b");
        t.y = -a.height / 2 + 50;
        t.textAlign = "center";
        t.textBaseline = "middle";
        t.lineWidth = 400;
        t.outline = 5;
        r.addChild(t);
        a = new createjs.Text(TEXT_SHOP, " 50px " + PRIMARY_FONT, "#ffffff");
        a.y = t.y;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 400;
        r.addChild(a);
        h = parseInt(s_oLocalStorage.getItem(LOCALSTORAGE_COINS));
        f = {
            value: h
        };
        m = new createjs.Text(TEXT_CURRENCY + f.value, " 40px " + PRIMARY_FONT, "#3e240b");
        m.y = 120;
        m.textAlign = "center";
        m.textBaseline = "middle";
        m.lineWidth = 400;
        m.outline = 5;
        r.addChild(m);
        e = new createjs.Text(TEXT_CURRENCY + f.value, " 40px " + PRIMARY_FONT, "#ffffff");
        e.y = m.y;
        e.textAlign = "center";
        e.textBaseline = "middle";
        e.lineWidth = 400;
        r.addChild(e);
        a = s_oSpriteLibrary.getSprite("but_continue_small");
        q = new CGfxButton(282, 155, a, r);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        b = parseInt(s_oLocalStorage.getItem(LOCALSTORAGE_GEARPOWER_LEVEL));
        p = new CUpgradeButton(-210, -34, s_oSpriteLibrary.getSprite("upgrade_gear"), r, [100, 300, 900]);
        p.addEventListener(ON_MOUSE_UP, this._onButGear, this);
        p.setUpgrade(b);
        c = parseInt(s_oLocalStorage.getItem(LOCALSTORAGE_SPEEDPOWER_LEVEL));
        l = new CUpgradeButton(-8, -30, s_oSpriteLibrary.getSprite("upgrade_speed"), r, [250, 500, 1E3]);
        l.addEventListener(ON_MOUSE_UP, this._onButSpeed, this);
        l.setUpgrade(c);
        l.setTextPos(8);
        l.setSegmentPos(8);
        g = parseInt(s_oLocalStorage.getItem(LOCALSTORAGE_NITROPOWER_LEVEL));
        k = new CUpgradeButton(210, -30, s_oSpriteLibrary.getSprite("upgrade_nitro"), r, [300, 600, 1200]);
        k.addEventListener(ON_MOUSE_UP, this._onButNitro, this);
        k.setUpgrade(g);
        this._checkAvailability()
    };
    this._refreshCoins = function() {
        var a = f.value.toFixed(0);
        m.text = TEXT_CURRENCY + a;
        e.text = TEXT_CURRENCY + a
    };
    this._onButGear = function() {
        b++;
        s_oLocalStorage.setItem(LOCALSTORAGE_GEARPOWER_LEVEL, b);
        GEAR_START_AREA.greenangle = GEAR_START_GREEN_WIDTH[b];
        GEAR_IN_RACE_AREA.greenangle = GEAR_INRACE_GREEN_WIDTH[b];
        WRONG_GEAR_CHANGE_STALL_DURATION = WRONG_GEAR_DURATION_INFO[b];
        h -= p.getPrice();
        s_oLocalStorage.setItem(LOCALSTORAGE_COINS, h);
        (new createjs.Tween.get(f, {
            override: !0
        })).to({
            value: h
            }, 2E3, createjs.Ease.cubicOut).addEventListener("change", this._refreshCoins);
        p.increaseUpgrade();
        this._checkAvailability()
    };
    this._onButSpeed = function() {
        c++;
        s_oLocalStorage.setItem(LOCALSTORAGE_SPEEDPOWER_LEVEL, c);
        PLAYER_ENGINE_GEAR = PLAYER_ENGINE_INFO[c];
        h -= l.getPrice();
        s_oLocalStorage.setItem(LOCALSTORAGE_COINS, h);
        (new createjs.Tween.get(f, {
            override: !0
        })).to({
            value: h
            }, 2E3, createjs.Ease.cubicOut).addEventListener("change", this._refreshCoins);
        l.increaseUpgrade();
        this._checkAvailability()
    };
    this._onButNitro = function() {
        g++;
        s_oLocalStorage.setItem(LOCALSTORAGE_NITROPOWER_LEVEL, g);
        NITRO_DURATION = NITRO_INFO[g];
        h -= k.getPrice();
        s_oLocalStorage.setItem(LOCALSTORAGE_COINS, h);
        (new createjs.Tween.get(f, {
            override: !0
        })).to({
            value: h
            }, 2E3, createjs.Ease.cubicOut).addEventListener("change", this._refreshCoins);
        k.increaseUpgrade();
        this._checkAvailability()
    };
    this._checkAvailability = function() {
        h < p.getPrice() && p.disable(!0);
        h < l.getPrice() && l.disable(!0);
        h < k.getPrice() && k.disable(!0)
    };
    this._onExit = function() {
        p.setClickable(!1);
        l.setClickable(!1);
        k.setClickable(!1);
        q.setClickable(!1);
        (new createjs.Tween.get(n)).to({
            alpha: 0
            }, 500);
        (new createjs.Tween.get(r)).to({
            y: d
            }, 400, createjs.Ease.backIn).call(function() {
            t.unload();
            a && a()
        })
    };
    this.unload = function() {
        p.unload();
        l.unload();
        k.unload();
        q.unload();
        s_oStage.removeChild(n);
        s_oStage.removeChild(r);
        n.off("mousedown", function() {})
    };
    var t = this;
    this._init(a)
}
function CUpgradeButton(a, d, b, c, g) {
    var h, f, e, m, q, p, l, k, n, r, t, v, z;
    this._init = function(a, b, c, d, g) {
        h = !1;
        e = 1;
        f = 0;
        q = [];
        p = [];
        v = new createjs.Container;
        v.x = a;
        v.y = b;
        d.addChild(v);
        n = new createjs.Container;
        v.addChild(n);
        a = c.width / 2;
        b = c.height;
        d = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: a,
                height: b,
                regX: a / 2,
                regY: b / 2
            },
            animations: {
                on: [0],
                off: [1]
            }
        });
        k = createSprite(d, "on", a / 2, b / 2, a, b);
        n.addChild(k);
        r = new createjs.Text(TEXT_CURRENCY + g[0], " 26px " + PRIMARY_FONT, "#3e240b");
        r.y = b / 2 - 18;
        r.textAlign = "center";
        r.textBaseline = "middle";
        r.lineWidth = 200;
        r.outline = 4;
        n.addChild(r);
        t = new createjs.Text(TEXT_CURRENCY + g[0], " 26px " + PRIMARY_FONT, "#ffffff");
        t.y = r.y;
        t.textAlign = "center";
        t.textBaseline = "middle";
        t.lineWidth = 200;
        n.addChild(t);
        z = new createjs.Container;
        n.addChild(z);
        m = c.width / g.length / 2;
        l = [];
        a = [];
        for (b = 0; b < g.length; b++) l[b] = new createjs.Shape, l[b].graphics.beginFill("rgba(0,0,0,1)").drawRect(0, 0, m, c.height / 8), l[b].x = -((m + 5) * g.length / 2) + b * (m + 5), l[b].y = c.height / 2 + 5, z.addChild(l[b]), a[b] = new createjs.Shape, a[b].graphics.beginStroke("rgba(255,224,0,1)").drawRect(0, 0, m, c.height / 8), a[b].x = -((m + 5) * g.length / 2) + b * (m + 5), a[b].y = c.height / 2 + 5, z.addChild(a[b]);
        this._initListener()
    };
    this.unload = function() {
        this.removeListener();
        c.removeChild(n)
    };
    this.setVisible = function(a) {
        n.visible = a
    };
    this.disable = function(a) {
        (h = a) ? k.gotoAndStop("off"): k.gotoAndStop("on")
    };
    this.setClickable = function(a) {
        h = !a
    };
    this._initListener = function() {
        if (s_bMobile) n.on("mousedown", this.buttonDown);
        else n.on("mousedown", this.buttonDown), n.on("mouseover", this.buttonOver);
        n.on("pressup", this.buttonRelease)
    };
    this.removeListener = function() {
        s_bMobile ? n.off("mousedown", this.buttonDown) : (n.off("mousedown", this.buttonDown), n.off("mouseover", this.buttonOver));
        n.off("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        q[a] = b;
        p[a] = c
    };
    this.increaseUpgrade = function() {
        l[f].graphics.beginFill("rgba(255,255,255,1)").drawRect(0, 0, m, b.height / 8);
        f++;
        f === g.length ? (this.disable(!0), f--, r.text = "", t.text = "") : this.setPrice(g[f])
    };
    this.setUpgrade = function(a) {
        for (var b = 0; b < a; b++) this.increaseUpgrade()
    };
    this.setPrice = function(a) {
        r.text = TEXT_CURRENCY + a;
        t.text = TEXT_CURRENCY + a
    };
    this.getPrice = function() {
        return g[f]
    };
    this.buttonRelease = function() {
        h || (n.scaleX = e, n.scaleY = e, q[ON_MOUSE_UP] && q[ON_MOUSE_UP].call(p[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        h || (n.scaleX = .9 * e, n.scaleY = .9 * e, playSound("upgrade_car", 1, !1), q[ON_MOUSE_DOWN] && q[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function(a) {
        s_bMobile || h || (a.target.cursor = "pointer")
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(n).to({
            scaleX: .9 * e,
            scaleY: .9 * e
            }, 850, createjs.Ease.quadOut).to({
            scaleX: e,
            scaleY: e
            }, 650, createjs.Ease.quadIn).call(function() {
            y.pulseAnimation()
        })
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(n).to({
            rotation: 5
            }, 75, createjs.Ease.quadOut).to({
            rotation: -5
            }, 140, createjs.Ease.quadIn).to({
            rotation: 0
            }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            y.trebleAnimation()
        })
    };
    this.setTextPos = function(a, b) {
        a && (r.x = a, t.x = a);
        b && (r.y = b, t.y = b)
    };
    this.setSegmentPos = function(a, b) {
        a && (z.x = a);
        b && (z.y = b)
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    this.setX = function(a) {
        n.x = a
    };
    this.setY = function(a) {
        n.y = a
    };
    this.getButtonImage = function() {
        return n
    };
    this.getX = function() {
        return n.x
    };
    this.getY = function() {
        return n.y
    };
    var y = this;
    this._init(a, d, b, c, g);
    return this
}
function CHUD(a) {
    var d, b, c, g, h, f, e, m, q, p, l, k, n, r;
    this._init = function(a) {
        g = STATE_HUD_UPDATE;
        f = 0;
        d = HUD_RPM_INTERVAL[0].min;
        b = HUD_RPM_INTERVAL[0].max;
        e = new createjs.Container;
        a.addChild(e);
        a = s_oSpriteLibrary.getSprite("tachometer");
        var c = createBitmap(a);
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        e.addChild(c);
        k = new createjs.Text("0 " + TEXT_KMH, " 24px " + PRIMARY_FONT, "#749fc3");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.lineWidth = 300;
        k.outline = 3;
        k.y = 10;
        e.addChild(k);
        q = new createjs.Text("0 " + TEXT_KMH, " 24px " +
            PRIMARY_FONT, "#ffffff");
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        q.lineWidth = 300;
        q.y = 10;
        e.addChild(q);
        p = new CGearAreaView(41, e);
        a = s_oSpriteLibrary.getSprite("indicator");
        m = createBitmap(a);
        m.regX = a.width / 2;
        m.regY = 122;
        m.y = 41;
        m.rotation = d;
        e.addChild(m);
        a = s_oSpriteLibrary.getSprite("but_nitro");
        l = new CGfxButton(-250, 200, a, e);
        l.addEventListener(ON_MOUSE_DOWN, this._onNitro, this);
        l.setVisible(!1);
        a = s_oSpriteLibrary.getSprite("accelerator");
        r = new CGfxButton(250, 0, a, e);
        r.addEventListener(ON_MOUSE_DOWN, this.accelerate, this);
        r.addEventListener(ON_MOUSE_UP, this.decelerate, this);
        a = s_oSpriteLibrary.getSprite("but_gear");
        n = new CGearButton(250, 200, a, e);
        n.addEventListener(ON_MOUSE_DOWN, this._onGear, this);
        n.setVisible(!1)
    };
    this.unload = function() {
        s_oHUD = null;
        a.removeChild(e);
        l && l.unload();
        n && n.unload();
        r && r.unload()
    };
    this.setGearArea = function(a, b) {
        p.setAreas(b);
        p.moveAreas(a)
    };
    this.setPos = function(a, b) {
        e.x = a;
        e.y = b
    };
    this._refreshSpeed = function(a) {
        a = Math.round(a);
        q.text = a + " " + TEXT_KMH;
        k.text = a + " " + TEXT_KMH
    };
    this._refreshIndicator = function(a, c) {
        Math.round(a) === PLAYER_ENGINE_GEAR[c].speed ? g = STATE_HUD_STALL : (new createjs.Tween.removeTweens(m), m.rotation = (a - f) / (PLAYER_ENGINE_GEAR[c].speed - f) * (b - d) + d)
    };
    this.updateTachometer = function(a, b) {
        this._refreshSpeed(a);
        switch (g) {
            case STATE_HUD_UPDATE:
                this._refreshIndicator(a, b);
                break;
            case STATE_HUD_STALL:
                this.stallAnim();
                break;
            case STATE_HUD_REPOSITIONING:
                this.downShiftGear()
        }
    };
    this.stallAnim = function() {
        g = STATE_HUD_NULL;
        (new createjs.Tween.get(m, {
            loop: !0,
            override: !0
        })).to({
            rotation: m.rotation +
            .5
            }, 50).to({
            rotation: m.rotation
            }, 50).to({
            rotation: m.rotation - .5
            }, 50).to({
            rotation: m.rotation
            }, 50)
    };
    this.downShiftGear = function(a, c, e) {
        g = STATE_HUD_NULL;
        d = HUD_RPM_INTERVAL[a].min;
        b = HUD_RPM_INTERVAL[a].max;
        (new createjs.Tween.get(m, {
            override: !0
        })).to({
            rotation: d
            }, HUD_DOWNSHIFT_GEAR_DURATION, createjs.Ease.cubicOut).call(function() {
            f = s_oGame.getPlayerMeterSpeed();
            g = c;
            c === STATE_HUD_STALL && setTimeout(function() {
                f = s_oGame.getPlayerMeterSpeed();
                g = STATE_HUD_UPDATE
                }, e)
        })
    };
    this.startAccelerate = function(a) {
        c = a;
        h = 0
    };
    this.updateIndicatorForStartBattle = function() {
        c ? (h += .1, m.rotation += START_ACCELERATION_INDICATOR_SPEED + h, m.rotation > HUD_RPM_INTERVAL[0].max && (h = 0, (new createjs.Tween.get(m, {
            loop: !0
            })).to({
                rotation: b + 3
                }, 50).to({
                rotation: b
                }, 50).to({
                rotation: b - 3
                }, 50).to({
                rotation: b
                }, 50))) : (new createjs.Tween.removeTweens(m), h = (m.rotation - HUD_RPM_INTERVAL[0].min) / (HUD_RPM_INTERVAL[0].max - HUD_RPM_INTERVAL[0].min) * (-START_ACCELERATION_INDICATOR_SPEED + .1) + START_ACCELERATION_INDICATOR_SPEED - .1, m.rotation -= START_ACCELERATION_INDICATOR_SPEED -
            h, m.rotation < HUD_RPM_INTERVAL[0].min && (m.rotation = HUD_RPM_INTERVAL[0].min))
    };
    this.getIndicatorResult = function() {
        return p.getIndicatorResult(m.rotation)
    };
    this._onNitro = function() {
        this.nitroButtonVisible(!1);
        s_oGame.shotNitro()
    };
    this._onGear = function() {
        s_oGame.changeGear()
    };
    this.scaleGear = function() {
        n.scaleGear()
    };
    this.gearButtonVisible = function(a) {
        a ? (n.setVisible(a), (new createjs.Tween(n.getButtonImage())).to({
            y: -30
            }, 500, createjs.Ease.cubicOut)) : (n.setClickable(!1), (new createjs.Tween(n.getButtonImage())).to({
            y: 200
            }, 500, createjs.Ease.cubicOut))
    };
    this.accelerate = function() {
        s_oGame.startAcceleration(!0)
    };
    this.decelerate = function() {
        s_oGame.startAcceleration(!1)
    };
    this.acceleratorButtonVisible = function(a) {
        a || (r.setClickable(!1), (new createjs.Tween(r.getButtonImage())).to({
            y: 300
            }, 500, createjs.Ease.cubicOut))
    };
    this.nitroButtonVisible = function(a) {
        a ? (l.setVisible(a), (new createjs.Tween(l.getButtonImage())).to({
            y: -30
            }, 500, createjs.Ease.cubicOut)) : (l.setClickable(!1), (new createjs.Tween(l.getButtonImage())).to({
            y: 200
            }, 500, createjs.Ease.cubicOut))
    };
    this.getContainer = function() {
        return e
    };
    this._init(a);
    s_oHUD = this
}
var s_oHUD;
function CGearAreaView(a, d) {
    var b, c, g, h, f, e, m, q, p, l, k, n;
    this._init = function(a, b) {
        f = 200;
        n = new createjs.Container;
        n.x = 0;
        n.y = a;
        b.addChild(n);
        this._setGreenSpot();
        this._setBlueSpot();
        this._setRedSpot()
    };
    this._setGreenSpot = function() {
        e = new createjs.Shape;
        e.graphics.rf(["rgba(0,255,0,0.01)", "rgba(0,255,0,0.4)"], [0, 1], 0, 0, 60, 0, 0, 126).drawCircle(0, 0, 126);
        n.addChild(e);
        m = new createjs.Shape;
        m.graphics.beginFill("rgba(255,255,255,0.01)");
        n.addChild(m)
    };
    this._setBlueSpot = function() {
        q = new createjs.Shape;
        q.graphics.rf(["rgba(0,0,255,0.01)", "rgba(0,0,255,0.4)"], [0, 1], 0, 0, 60, 0, 0, 126).drawCircle(0, 0, 126);
        n.addChild(q);
        p = new createjs.Shape;
        p.graphics.beginFill("rgba(255,255,255,0.01)");
        n.addChild(p)
    };
    this._setRedSpot = function() {
        l = new createjs.Shape;
        l.graphics.rf(["rgba(255,0,0,0.01)", "rgba(255,0,0,0.4)"], [0, 1], 0, 0, 60, 0, 0, 126).drawCircle(0, 0, 126);
        n.addChild(l);
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(255,255,255,0.01)");
        n.addChild(k)
    };
    this.setAreas = function(a) {
        b = 0;
        c = a.greenangle;
        g = a.earlyangle;
        h = a.lateangle;
        var d = a.greenangle / 2 * Math.PI / 180;
        d = f * Math.tan(d);
        m.graphics.beginFill("rgba(255,255,255,0.001)");
        m.graphics.moveTo(0, 0);
        m.graphics.lineTo(-d, -f);
        m.graphics.lineTo(d, -f);
        m.graphics.lineTo(0, 0);
        e.mask = m;
        d = a.earlyangle / 2 * Math.PI / 180;
        d = f * Math.tan(d);
        p.graphics.beginFill("rgba(255,255,255,0.001)");
        p.graphics.moveTo(0, 0);
        p.graphics.lineTo(-d, -f);
        p.graphics.lineTo(d, -f);
        p.graphics.lineTo(0, 0);
        p.rotation = -(a.earlyangle / 2 + a.greenangle / 2);
        q.mask = p;
        d = a.lateangle / 2 * Math.PI / 180;
        d = f * Math.tan(d);
        k.graphics.beginFill("rgba(255,255,255,0.001)");
        k.graphics.moveTo(0, 0);
        k.graphics.lineTo(-d, -f);
        k.graphics.lineTo(d, -f);
        k.graphics.lineTo(0, 0);
        k.rotation = a.lateangle / 2 + a.greenangle / 2;
        l.mask = k
    };
    this.moveAreas = function(a) {
        b = a;
        (new createjs.Tween.get(n)).to({
            rotation: a
            }, 1E3, createjs.Ease.cubicOut)
    };
    this.getIndicatorResult = function(a) {
        return a < b + c / 2 && a > b - c / 2 ? GREEN_AREA : a > b + c / 2 && a < b + c / 2 + h ? LATE_AREA : a < b - c / 2 && a > b - c / 2 - g ? EARLY_AREA : NULL_AREA
    };
    this._init(a, d)
}
function CBackground(a) {
    var d, b, c, g, h, f, e, m;
    this._init = function(a) {
        h = g = 0;
        f = 1;
        m = new createjs.Container;
        m.y = -150;
        a.addChild(m);
        c = 0;
        d = 2;
        e = [];
        a = s_oSpriteLibrary.getSprite("bg_game");
        b = a.width;
        for (var p = 0; p < d; p++) e[p] = createBitmap(a), e[p].x = p * b, m.addChild(e[p]), c += b
    };
    this._swapBgPiece = function() {
        f++;
        e[h].x = c;
        c += b;
        h++;
        h === d && (h = 0)
    };
    this.move = function(a) {
        g += a;
        m.x = -g;
        g >= b * f && this._swapBgPiece()
    };
    this._init(a)
}
function CStreet(a, d, b) {
    var c, g, h, f, e, m, q, p, l, k, n, r, t, v, z, y, A, C, B, D, H, K;
    this._init = function(a, b, d) {
        g = c = !1;
        q = m = e = 0;
        t = r = n = 1;
        B = new createjs.Container;
        B.y = 110;
        b.addChild(B);
        D = new createjs.Container;
        D.y = 290;
        b.addChild(D);
        H = new createjs.Container;
        H.y = CANVAS_HEIGHT;
        d.addChild(H);
        h = 2;
        p = 0;
        v = [];
        a = s_oSpriteLibrary.getSprite("parallaxe_1");
        f = a.width;
        for (b = 0; b < h; b++) v[b] = createBitmap(a), v[b].x = b * f, B.addChild(v[b]), p += f;
        l = 0;
        z = [];
        a = s_oSpriteLibrary.getSprite("street_piece");
        f = a.width;
        for (b = 0; b < h; b++) z[b] = createBitmap(a), z[b].x = b * f, D.addChild(z[b]), l += f;
        a = s_oSpriteLibrary.getSprite("arrive");
        A = createBitmap(a);
        A.y = 62;
        D.addChild(A);
        a = s_oSpriteLibrary.getSprite("lamp");
        C = createBitmap(a);
        LAMP_WIDTH = a.width;
        C.x = 880;
        C.y = -180;
        D.addChild(C);
        a = s_oSpriteLibrary.getSprite("lamp");
        K = createBitmap(a);
        K.x = 1200;
        K.y = -540;
        K.scaleX = K.scaleY = 1.5;
        H.addChild(K);
        k = 0;
        y = [];
        a = s_oSpriteLibrary.getSprite("parallaxe_2");
        for (b = 0; b < h; b++) y[b] = createBitmap(a), y[b].x = b * f, y[b].regY = a.height, H.addChild(y[b]), k += f
    };
    this.setArrive = function(a) {
        A.x = a * METER_TO_PIXEL_RATIO
    };
    this._swapBgPiece = function() {
        n++;
        v[n % h].x = p;
        p += f
    };
    this._swapRoadPiece = function() {
        r++;
        z[r % h].x = l;
        0 === r % 8 && (C.x = l + LAMP_OFFSET, g = !1);
        l += f
    };
    this._swapFgPiece = function() {
        t++;
        y[t % h].x = k;
        0 === t % 5 && (K.x = k + LAMP_OFFSET, c = !1);
        k += f
    };
    this.move = function(a, b, c) {
        e += a * PARALLAX_1_RATIO;
        B.x = -e;
        e >= f * n && this._swapBgPiece();
        m += a;
        D.x = -m;
        m >= f * r && this._swapRoadPiece();
        q += a * PARALLAX_2_RATIO;
        H.x = -q;
        q >= f * t && this._swapFgPiece();
        this._checkHighlighting(b, c)
    };
    this.menuMovement = function(a) {
        e += a * PARALLAX_1_RATIO;
        B.x = -e;
        e >= f * n && this._swapBgPiece();
        m += a;
        D.x = -m;
        m >= f * r && this._swapRoadPiece();
        q += a * PARALLAX_2_RATIO;
        H.x = -q;
        q >= f * t && this._swapFgPiece()
    };
    this._checkHighlighting = function(a, b) {
        H.x + K.x < START_LINE_X && !c && (c = !0, s_oGame.playerHighlight());
        C.x < b && !g && (g = !0, s_oGame.opponentHighlight())
    };
    this.getMeterCovered = function() {
        return pixelsToMeters(m)
    };
    this._init(a, d, b)
}
var WHEEL_POS = [
    [{
        x: 108,
        y: -22
        }, {
            x: -122,
            y: -22
    }],
    [{
        x: 104,
        y: -24
        }, {
            x: -98,
            y: -24
    }],
    [{
        x: 108,
        y: -18
        }, {
            x: -124,
            y: -20
    }],
    [{
        x: 114,
        y: -20
        }, {
            x: -114,
            y: -20
    }],
    [{
        x: 113,
        y: -14
        }, {
            x: -118,
            y: -14
    }],
    [{
        x: 98,
        y: -22
        }, {
            x: -108,
            y: -22
    }],
    [{
        x: 114,
        y: -18
        }, {
            x: -124,
            y: -18
    }],
    [{
        x: 117,
        y: -20
        }, {
            x: -106,
            y: -22
    }],
    [{
        x: 101,
        y: -20
        }, {
            x: -131,
            y: -20
    }],
    [{
        x: 114,
        y: -20
        }, {
            x: -120,
            y: -24
    }],
    [{
        x: 100,
        y: -20
        }, {
            x: -126,
            y: -24
    }]
],
SHADOW_POS = [-7, -2, -12, -8, -16, -8, -12, -10, -10, -8, -8],
PLAYER_ENGINE_INFO = [],
PLAYER_ENGINE_GEAR = PLAYER_ENGINE_INFO[0],
OPPONENT_ENGINE_GEAR = [],
SKILL = [];
function CCar(a, d, b, c, g, h, f) {
    var e, m, q, p, l, k, n, r, t, v, z, y, A;
    this._init = function(a, b, c, d, f, g, h) {
        e = !1;
        m = f;
        p = 0;
        n = new createjs.Container;
        q = a;
        n.x = a;
        n.y = b;
        c.addChild(n);
        c = s_oSpriteLibrary.getSprite("fireline");
        a = c.width / 2;
        b = c.height / 30;
        c = {
            images: [c],
            framerate: 30,
            frames: {
                width: a,
                height: b,
                regX: a,
                regY: b
            },
            animations: {
                play: [0, 59, "stop"],
                stop: [60, 60]
            }
        };
        c = new createjs.SpriteSheet(c);
        y = createSprite(c, "stop", a / 2, b / 2, a, b);
        y.x = WHEEL_POS[d][1].x;
        y.y = WHEEL_POS[d][1].y + 36;
        n.addChild(y);
        c = s_oSpriteLibrary.getSprite("car_" +
            d);
        l = 8;
        a = c.width / 4;
        b = c.height / 2;
        c = {
            images: [c],
            framerate: 30,
            frames: {
                width: a,
                height: b,
                regX: a / 2,
                regY: b
            },
            animations: {
                "static": [0],
                highlight: [1, 7, "static"]
            }
        };
        c = new createjs.SpriteSheet(c);
        r = createSprite(c, "static", a / 2, b / 2, a, b);
        n.addChild(r);
        c = s_oSpriteLibrary.getSprite("shadow_" + d);
        b = createBitmap(c);
        b.regY = c.height / 2 + SHADOW_POS[d];
        b.regX = a / 2;
        n.addChild(b);
        k = [];
        c = s_oSpriteLibrary.getSprite("wheel_" + d);
        k[0] = createBitmap(c);
        k[0].regX = c.width / 2;
        k[0].regY = c.height / 2;
        k[0].x = WHEEL_POS[d][0].x;
        k[0].y = WHEEL_POS[d][0].y;
        k[0].rotation = 360 * Math.random();
        n.addChild(k[0]);
        k[1] = createBitmap(c);
        k[1].regX = c.width / 2;
        k[1].regY = c.height / 2;
        k[1].x = WHEEL_POS[d][1].x;
        k[1].y = WHEEL_POS[d][1].y;
        k[1].rotation = 360 * Math.random();
        n.addChild(k[1]);
        c = s_oSpriteLibrary.getSprite("firewheel");
        a = c.width / 7;
        b = c.height / 2;
        c = {
            images: [c],
            framerate: 60,
            frames: {
                width: a,
                height: b,
                regX: a / 2,
                regY: b / 2
            },
            animations: {
                play: [0, 12, "play"],
                stop: [13, 13]
            }
        };
        c = new createjs.SpriteSheet(c);
        v = createSprite(c, "stop", a / 2, b / 2, a, b);
        v.x = WHEEL_POS[d][1].x;
        v.y = WHEEL_POS[d][1].y -
        3;
        n.addChild(v);
        z = createSprite(c, "stop", a / 2, b / 2, a, b);
        z.x = WHEEL_POS[d][0].x;
        z.y = WHEEL_POS[d][0].y - 3;
        n.addChild(z);
        c = s_oSpriteLibrary.getSprite("smoke");
        a = c.width / 5;
        b = c.height / 10;
        c = {
            images: [c],
            framerate: 30,
            frames: {
                width: a,
                height: b,
                regX: a / 2,
                regY: b / 2
            },
            animations: {
                play: [0, 49, "stop"],
                stop: [50]
            }
        };
        c = new createjs.SpriteSheet(c);
        A = createSprite(c, "stop", a / 2, b / 2, a, b);
        A.x = WHEEL_POS[d][1].x - 90;
        A.y = WHEEL_POS[d][1].y - 30;
        n.addChild(A);
        t = new CEngine(this, g)
    };
    this.unload = function() {
        b.removeChild(n)
    };
    this.getCar = function() {
        return n
    };
    this.getWheels = function() {
        return {
            right: k[0],
            left: k[1]
        }
    };
    this.getType = function() {
        return c
    };
    this.setScale = function(a) {
        n.scaleX = n.scaleY = a
    };
    this.setSpeed = function(a) {
        p = a
    };
    this.getSpeed = function() {
        return p
    };
    this.getMeterSpeed = function() {
        return t.getMeterSpeed()
    };
    this.getMaxSpeedPerGearReached = function() {
        return t.getMaxSpeedPerGearReached()
    };
    this.getMeterPos = function() {
        return pixelsToMeters(q)
    };
    this.getPixelPos = function() {
        return q
    };
    this.getGear = function() {
        return t.getGear()
    };
    this.ignition = function() {
        A.gotoAndPlay("play");
        t.start();
        this.changeGear()
    };
    this.stopSound = function() {
        t.stopSound()
    };
    this.highlight = function() {
        r.framerate = l / (LAMP_WIDTH / p / FPS);
        r.gotoAndPlay("highlight")
    };
    this.pitchStartAnim = function() {
        playSound("acceleration", 1, !1);
        (new createjs.Tween.get(r, {
            override: !0
        })).to({
            rotation: .5
            }, 100).to({
            rotation: 0
            }, 750);
        (new createjs.Tween.get(n, {
            override: !0
        })).to({
            x: a + 1
            }, 100).to({
            x: a
            }, 750)
    };
    this.changeGear = function() {
        0 !== t.getGear() && t.getGear() < h.length - 1 && !e && (new createjs.Tween.get(r, {
            override: !0
        })).to({
            rotation: .5
            }, 100, createjs.Ease.cubicOut).to({
            rotation: 0
            }, 750, createjs.Ease.cubicIn);
        t.changeGear()
    };
    this.delayEngine = function(a) {
        t.delayAcceleration(a)
    };
    this.activateNitro = function(a) {
        0 < a && (v.gotoAndPlay("play"), z.gotoAndPlay("play"), y.gotoAndPlay("play"), (new createjs.Tween.get(v)).wait(a / 2).to({
            alpha: 0
            }, a / 2, createjs.Ease.cubicIn), (new createjs.Tween.get(z)).wait(a / 2).to({
                alpha: 0
                }, a / 2, createjs.Ease.cubicIn), e = !0, t.activateNitro(!0));
        setTimeout(function() {
            t.fadeNitroSound(a / 2)
            }, a / 2 - 400);
        (new createjs.Tween.get(r)).to({
            rotation: -2
            }, 400, createjs.Ease.cubicOut).wait(a / 2 - 400).to({
            rotation: 0
            }, a / 2, createjs.Ease.cubicIn).call(function() {
            e = !1;
            t.activateNitro(!1)
        })
    };
    this["break"] = function() {
        t["break"]()
    };
    this.move = function(a) {
        q += p;
        t.update();
        for (var b = 0; 2 > b; b++) k[b].rotation = 1 > p ? k[b].rotation + (20 - 20 * p) : k[b].rotation + p;
        m || (n.x += p - a)
    };
    this._init(a, d, b, c, g, h, f)
}
function CEngine(a, d) {
    var b, c, g, h, f, e, m, q, p, l, k, n, r, t, v;
    this._init = function(a, d) {
        g = c = b = !1;
        e = STATE_ENGINE_UPDATE;
        k = 1;
        h = 0;
        q = m = 1;
        p = GEAR_N;
        v = "gear_player"
    };
    this.start = function() {
        b = !0
    };
    this.activateNitro = function(a) {
        if (a) {
            if (k = ENGINE_NITRO_RPM_ACCELERATION, !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r = s_aSounds.fire_wheel.play(), t = s_aSounds.nitro.play()
        } else k = ENGINE_NORMAL_RPM_ACCELERATION
    };
    this.changeGear = function() {
        p < d.length - 1 && (p++, g = !1, m = q, h = 0, f = milliSecondsToFrames(d[p].time))
    };
    this["break"] = function() {
        e = STATE_ENGINE_BREAK;
        m = q;
        h = 0;
        f = milliSecondsToFrames(BREAK_DURATION)
    };
    this.delayAcceleration = function(a) {
        e = STATE_ENGINE_STALL;
        m = q;
        h = 0;
        f = milliSecondsToFrames(a);
        l = m
    };
    this.stall = function() {
        0 === h && 0 === a.getType() && this.setStallSound();
        h++;
        if (h > f) m = q, h = 0, f = milliSecondsToFrames(d[p].time), e = STATE_ENGINE_UPDATE;
        else {
            var b = s_oTweenController.easeInSine(h, 0, 1, f);
            q = s_oTweenController.tweenValue(m, l, b);
            this._setSpeed()
        }
    };
    this.decelerate = function() {
        h += k;
        if (!(h > f)) {
            var a = s_oTweenController.easeInSine(h, 0, 1, f);
            q = s_oTweenController.tweenValue(m, 0, a);
            this._setSpeed()
        }
    };
    this.rotate = function() {
        0 === h && 0 === a.getType() && this._setEngineSound();
        h += k;
        if (h > f) g = !0, c || 0 !== a.getType() || this.setStallSound();
        else {
            var b = s_oTweenController.easeInSine(h, 0, 1, f);
            q = s_oTweenController.tweenValue(m, d[p].speed, b);
            this._setSpeed()
        }
    };
    this._setEngineSound = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_aSounds[v].stop(), s_aSounds.stall.stop(), n = 6E3 / PLAYER_ENGINE_GEAR[p].time.toFixed(1), 4 < n && (n = 4), .5 > n && (n = .5), s_aSounds[v].play(), s_aSounds[v].rate(n)
    };
    this.stopSound = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) c = !0, s_aSounds[v].stop(), s_aSounds.stall.stop(), s_aSounds.fire_wheel.stop(), s_aSounds.nitro.stop()
    };
    this.setStallSound = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_aSounds.stall.stop(), s_aSounds.stall.play()
    };
    this.stopStallSound = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds.stall.stop()
    };
    this.fadeNitroSound = function(a) {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_aSounds.fire_wheel.fade(1, 0, a, r), s_aSounds.nitro.fade(1, 0, a, t)
    };
    this.update = function() {
        if (b) switch (e) {
                case STATE_ENGINE_UPDATE:
                    this.rotate();
                    break;
                case STATE_ENGINE_STALL:
                    this.stall();
                    break;
                case STATE_ENGINE_BREAK:
                    this.decelerate()
            }
    };
    this.getMeterSpeed = function() {
        return q
    };
    this._setSpeed = function() {
        var b = kMetersHToPixelsF(q);
        a.setSpeed(b)
    };
    this.getGear = function() {
        return p
    };
    this.getMaxSpeedPerGearReached = function() {
        return g
    };
    this._init(a, d)
}
function CAI(a, d) {
    var b, c, g, h;
    this._init = function(a, e) {
        b = !1;
        a.getType();
        c = a.getGear();
        g = 400 + 500 * Math.random();
        h = (SKILL[e].normalizednitroshottime - .05 + .1 * Math.random()) * STAGE_METER_LENGTH[e];
        0 > h && (h = 0)
    };
    this.update = function(f, e) {
        switch (f) {
            case STATE_START_BATTLE:
                g -= s_iTimeElaps;
                0 > g && (g = 400 + 500 * Math.random(), a.pitchStartAnim());
                break;
            case STATE_RACE_RUN:
                e > h && !b && (b = !0, a.activateNitro(SKILL[d].nitroduration)), a.getMaxSpeedPerGearReached() && c < OPPONENT_ENGINE_GEAR[d].length - 1 && (a.changeGear(), c = a.getGear(), Math.random() < SKILL[d].wronggearchangeratio && a.delayEngine(SKILL[d].wrongearduration))
        }
    };
    this._init(a, d)
}
function CGearButton(a, d, b, c) {
    var g, h, f, e, m, q, p, l;
    this._init = function(a, b, c, d) {
        g = !1;
        h = 1;
        e = [];
        m = [];
        p = new createjs.Container;
        p.x = a;
        p.y = b;
        p.scaleX = p.scaleY = h;
        d.addChild(p);
        a = createBitmap(c);
        a.regX = c.width / 2;
        a.regY = c.height / 2;
        p.addChild(a);
        f = 0;
        q = [];
        c = -20;
        for (a = 1; a < PLAYER_ENGINE_GEAR.length; a++) q[a] = new createjs.Text(a, " 18px " + PRIMARY_FONT, "#000000"), q[a].x = c, 0 === a % 2 ? (q[a].y = 32, c += 20) : q[a].y = -32, q[a].textAlign = "center", q[a].textBaseline = "middle", q[a].lineWidth = 200, p.addChild(q[a]);
        c = s_oSpriteLibrary.getSprite("gear_handle");
        l = createBitmap(c);
        l.regX = c.width / 2;
        l.regY = c.height / 2;
        p.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? p.off("mousedown", this.buttonDown) : (p.off("mousedown", this.buttonDown), p.off("mouseover", this.buttonOver));
        p.off("pressup", this.buttonRelease);
        c.removeChild(p)
    };
    this.setVisible = function(a) {
        p.visible = a
    };
    this.setClickable = function(a) {
        g = !a
    };
    this._initListener = function() {
        if (s_bMobile) p.on("mousedown", this.buttonDown);
        else p.on("mousedown", this.buttonDown), p.on("mouseover", this.buttonOver);
        p.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        e[a] = b;
        m[a] = c
    };
    this.buttonRelease = function() {
        g || e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(m[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        g || e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(a) {
        s_bMobile || g || (a.target.cursor = "pointer")
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(p).to({
            scaleX: .9 * h,
            scaleY: .9 * h
            }, 850, createjs.Ease.quadOut).to({
            scaleX: h,
            scaleY: h
            }, 650, createjs.Ease.quadIn).call(function() {
            k.pulseAnimation()
        })
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(p).to({
            rotation: 5
            }, 75, createjs.Ease.quadOut).to({
            rotation: -5
            }, 140, createjs.Ease.quadIn).to({
            rotation: 0
            }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            k.trebleAnimation()
        })
    };
    this.setPosition = function(a, b) {
        p.x = a;
        p.y = b
    };
    this.setX = function(a) {
        p.x = a
    };
    this.setY = function(a) {
        p.y = a
    };
    this.getButtonImage = function() {
        return p
    };
    this.getX = function() {
        return p.x
    };
    this.getY = function() {
        return p.y
    };
    this.scaleGear = function() {
        f++;
        f >= PLAYER_ENGINE_GEAR.length && (f = PLAYER_ENGINE_GEAR.length - 1);
        for (var a = 1; a < PLAYER_ENGINE_GEAR.length; a++) q[a].color = "#000000";
        (new createjs.Tween.get(p)).to({
            scaleX: .9,
            scaleY: .9
            }, 200, createjs.Ease.cubicOut).to({
            scaleX: 1,
            scaleY: 1
            }, 200, createjs.Ease.cubicIn);
        playSound("change_gear", 1, !1);
        switch (f) {
            case 1:
                (new createjs.Tween.get(l, {
                    override: !0
                })).to({
                    x: -20
                    }, 200, createjs.Ease.cubicOut).wait(100).to({
                    y: -18
                    }, 200, createjs.Ease.cubicOut).call(function() {
                    q[f].color = "#ffffff"
                });
                break;
            case 3:
                (new createjs.Tween.get(l, {
                    override: !0
                })).to({
                    y: 0
                    }, 100, createjs.Ease.cubicOut).wait(100).to({
                    x: 0
                    }, 100, createjs.Ease.cubicOut).wait(100).to({
                    y: -18
                    }, 100, createjs.Ease.cubicOut).call(function() {
                    q[f].color = "#ffffff"
                });
                break;
            case 5:
                (new createjs.Tween.get(l, {
                    override: !0
                })).to({
                    y: 0
                    }, 100, createjs.Ease.cubicOut).wait(100).to({
                    x: 20
                    }, 100, createjs.Ease.cubicOut).wait(100).to({
                    y: -18
                    }, 100, createjs.Ease.cubicOut).call(function() {
                    q[f].color = "#ffffff"
                });
                break;
            default:
                (new createjs.Tween.get(l, {
                    override: !0
                })).to({
                    y: 0
                    }, 200, createjs.Ease.cubicOut).wait(100).to({
                    y: 16
                    }, 200, createjs.Ease.cubicOut).call(function() {
                    q[f].color = "#ffffff"
                })
        }
    };
    var k = this;
    this._init(a, d, b, c);
    return this
}
function CTremble(a, d, b, c) {
    var g, h, f, e, m, q, p;
    this._init = function(a, b, c, d) {
        e = f = !1;
        q = 0;
        this._calculateDuration();
        g = a.x;
        h = a.y;
        f || (f = !0, m = setInterval(function() {
            l._tremble()
            }, c))
    };
    this._tremble = function() {
        if (e = !e) {
            var k = .5 > Math.random() ? -c : c;
            var n = .5 > Math.random() ? -c : c;
            a.x += k;
            a.y += n
        } else a.x = g, a.y = h;
        q++;
        q > p && (q = 0, f = !1, 0 === d ? m = setInterval(function() {
            l._tremble()
            }, b) : clearInterval(m))
    };
    this._calculateDuration = function() {
        p = d / b
    };
    this.stopTremble = function() {
        clearInterval(m)
    };
    var l = this;
    this._init(a, d, b, c)
}
function CScoreText(a, d, b, c) {
    var g;
    this._init = function(a, b, d) {
        g = new createjs.Text("00000", "bold 30px " + PRIMARY_FONT, "#ffffff");
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.text = a;
        g.x = b;
        g.y = d;
        g.alpha = 0;
        g.shadow = new createjs.Shadow("#3e240b", 2, 2, 2);
        c.addChild(g);
        var e = this;
        createjs.Tween.get(g).to({
            alpha: 1
            }, 400, createjs.Ease.quadIn).call(function() {
            e.moveUp()
        })
    };
    this.moveUp = function() {
        var a = g.y - 100,
        b = this;
        createjs.Tween.get(g).to({
            alpha: 0
            }, 1E3);
        createjs.Tween.get(g).to({
            y: a
            }, 1E3, createjs.Ease.sineIn).call(function() {
            b.unload()
        })
    };
    this.unload = function() {
        c.removeChild(g)
    };
    this._init(a, d, b)
};