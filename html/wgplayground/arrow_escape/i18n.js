/* ============================
   Arrow Escape - i18n
   ============================ */

var LANGUAGES = {
    tr: { flag: "\u{1F1F9}\u{1F1F7}", name: "T\u00fcrk\u00e7e" },
    en: { flag: "\u{1F1EC}\u{1F1E7}", name: "English" },
    es: { flag: "\u{1F1EA}\u{1F1F8}", name: "Espa\u00f1ol" },
    pt: { flag: "\u{1F1E7}\u{1F1F7}", name: "Portugu\u00eas" },
    fr: { flag: "\u{1F1EB}\u{1F1F7}", name: "Fran\u00e7ais" },
    de: { flag: "\u{1F1E9}\u{1F1EA}", name: "Deutsch" },
    it: { flag: "\u{1F1EE}\u{1F1F9}", name: "Italiano" },
    ru: { flag: "\u{1F1F7}\u{1F1FA}", name: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
    ja: { flag: "\u{1F1EF}\u{1F1F5}", name: "\u65e5\u672c\u8a9e" },
    ko: { flag: "\u{1F1F0}\u{1F1F7}", name: "\ud55c\uad6d\uc5b4" },
    zh: { flag: "\u{1F1E8}\u{1F1F3}", name: "\u4e2d\u6587" },
    ar: { flag: "\u{1F1F8}\u{1F1E6}", name: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
    hi: { flag: "\u{1F1EE}\u{1F1F3}", name: "\u0939\u093f\u0928\u094d\u0926\u0940" },
    nl: { flag: "\u{1F1F3}\u{1F1F1}", name: "Nederlands" },
    pl: { flag: "\u{1F1F5}\u{1F1F1}", name: "Polski" },
};

var TRANSLATIONS = {
    en: {
        play: "PLAY",
        settings: "SETTINGS",
        select_level: "SELECT LEVEL",
        level: "Level",
        score: "SCORE",
        arrows: "ARROWS",
        level_complete: "LEVEL COMPLETE!",
        next_level: "NEXT LEVEL",
        replay: "REPLAY",
        out_of_hearts: "OUT OF HEARTS!",
        dont_give_up: "Don't give up!",
        retry: "RETRY",
        level_select: "LEVEL SELECT",
        you_win: "YOU WIN!",
        all_cleared: "All levels cleared!",
        main_menu: "MAIN MENU",
        tutorial_tap: "Tap an arrow to send it flying!",
        sound: "SOUND",
        music: "Music",
        sfx: "SFX",
        language: "LANGUAGE",
        reset_storage: "RESET DATA",
        reset_confirm: "ARE YOU SURE?",
        finish: "FINISH!",
        subtitle: "Find the right order!",
    },
    tr: {
        play: "OYNA",
        settings: "AYARLAR",
        select_level: "B\u00d6L\u00dcM SE\u00c7",
        level: "B\u00f6l\u00fcm",
        score: "SKOR",
        arrows: "OKLAR",
        level_complete: "B\u00d6L\u00dcM TAMAMLANDI!",
        next_level: "SONRAK\u0130 B\u00d6L\u00dcM",
        replay: "TEKRAR",
        out_of_hearts: "KALB\u0130N KALMADI!",
        dont_give_up: "Pes etme!",
        retry: "TEKRAR DENE",
        level_select: "B\u00d6L\u00dcM SE\u00c7",
        you_win: "KAZANDIN!",
        all_cleared: "T\u00fcm b\u00f6l\u00fcmler tamamland\u0131!",
        main_menu: "ANA MEN\u00dc",
        tutorial_tap: "U\u00e7mas\u0131 i\u00e7in bir oka dokun!",
        sound: "SES",
        music: "M\u00fczik",
        sfx: "Efektler",
        language: "D\u0130L",
        reset_storage: "VER\u0130LER\u0130 SIFIRLA",
        reset_confirm: "EM\u0130N M\u0130S\u0130N?",
        finish: "B\u0130T\u0130R!",
        subtitle: "Do\u011fru s\u0131ray\u0131 bul!",
    },
    es: {
        play: "JUGAR",
        settings: "AJUSTES",
        select_level: "ELEGIR NIVEL",
        level: "Nivel",
        score: "PUNTOS",
        arrows: "FLECHAS",
        level_complete: "\u00a1NIVEL COMPLETADO!",
        next_level: "SIGUIENTE",
        replay: "REPETIR",
        out_of_hearts: "\u00a1SIN CORAZONES!",
        dont_give_up: "\u00a1No te rindas!",
        retry: "REINTENTAR",
        level_select: "ELEGIR NIVEL",
        you_win: "\u00a1GANASTE!",
        all_cleared: "\u00a1Todos los niveles completados!",
        main_menu: "MEN\u00da",
        tutorial_tap: "\u00a1Toca una flecha para lanzarla!",
        sound: "SONIDO",
        music: "M\u00fasica",
        sfx: "Efectos",
        language: "IDIOMA",
        reset_storage: "BORRAR DATOS",
        reset_confirm: "\u00bfEST\u00c1S SEGURO?",
        finish: "\u00a1FIN!",
        subtitle: "\u00a1Encuentra el orden correcto!",
    },
    pt: {
        play: "JOGAR",
        settings: "CONFIGURA\u00c7\u00d5ES",
        select_level: "ESCOLHER N\u00cdVEL",
        level: "N\u00edvel",
        score: "PONTOS",
        arrows: "FLECHAS",
        level_complete: "N\u00cdVEL COMPLETO!",
        next_level: "PR\u00d3XIMO",
        replay: "REPETIR",
        out_of_hearts: "SEM CORA\u00c7\u00d5ES!",
        dont_give_up: "N\u00e3o desista!",
        retry: "TENTAR DE NOVO",
        level_select: "ESCOLHER N\u00cdVEL",
        you_win: "VOC\u00ca VENCEU!",
        all_cleared: "Todos os n\u00edveis completos!",
        main_menu: "MENU",
        tutorial_tap: "Toque em uma flecha para lan\u00e7\u00e1-la!",
        sound: "SOM",
        music: "M\u00fasica",
        sfx: "Efeitos",
        language: "IDIOMA",
        reset_storage: "APAGAR DADOS",
        reset_confirm: "TEM CERTEZA?",
        finish: "FIM!",
        subtitle: "Encontre a ordem certa!",
    },
    fr: {
        play: "JOUER",
        settings: "PARAM\u00c8TRES",
        select_level: "CHOISIR NIVEAU",
        level: "Niveau",
        score: "SCORE",
        arrows: "FL\u00c8CHES",
        level_complete: "NIVEAU TERMIN\u00c9 !",
        next_level: "SUIVANT",
        replay: "REJOUER",
        out_of_hearts: "PLUS DE C\u0152URS !",
        dont_give_up: "N'abandonne pas !",
        retry: "R\u00c9ESSAYER",
        level_select: "CHOISIR NIVEAU",
        you_win: "VICTOIRE !",
        all_cleared: "Tous les niveaux termin\u00e9s !",
        main_menu: "MENU",
        tutorial_tap: "Touche une fl\u00e8che pour la lancer !",
        sound: "SON",
        music: "Musique",
        sfx: "Effets",
        language: "LANGUE",
        reset_storage: "EFFACER DONN\u00c9ES",
        reset_confirm: "\u00caTES-VOUS S\u00dbR ?",
        finish: "FIN !",
        subtitle: "Trouve le bon ordre !",
    },
    de: {
        play: "SPIELEN",
        settings: "EINSTELLUNGEN",
        select_level: "LEVEL W\u00c4HLEN",
        level: "Level",
        score: "PUNKTE",
        arrows: "PFEILE",
        level_complete: "LEVEL GESCHAFFT!",
        next_level: "N\u00c4CHSTES",
        replay: "NOCHMAL",
        out_of_hearts: "KEINE HERZEN MEHR!",
        dont_give_up: "Gib nicht auf!",
        retry: "NOCHMAL",
        level_select: "LEVEL W\u00c4HLEN",
        you_win: "GEWONNEN!",
        all_cleared: "Alle Level geschafft!",
        main_menu: "MEN\u00dc",
        tutorial_tap: "Tippe auf einen Pfeil zum Starten!",
        sound: "TON",
        music: "Musik",
        sfx: "Effekte",
        language: "SPRACHE",
        reset_storage: "DATEN L\u00d6SCHEN",
        reset_confirm: "BIST DU SICHER?",
        finish: "FERTIG!",
        subtitle: "Finde die richtige Reihenfolge!",
    },
    it: {
        play: "GIOCA",
        settings: "IMPOSTAZIONI",
        select_level: "SCEGLI LIVELLO",
        level: "Livello",
        score: "PUNTEGGIO",
        arrows: "FRECCE",
        level_complete: "LIVELLO COMPLETATO!",
        next_level: "AVANTI",
        replay: "RIPETI",
        out_of_hearts: "CUORI ESAURITI!",
        dont_give_up: "Non arrenderti!",
        retry: "RIPROVA",
        level_select: "SCEGLI LIVELLO",
        you_win: "HAI VINTO!",
        all_cleared: "Tutti i livelli completati!",
        main_menu: "MENU",
        tutorial_tap: "Tocca una freccia per lanciarla!",
        sound: "AUDIO",
        music: "Musica",
        sfx: "Effetti",
        language: "LINGUA",
        reset_storage: "CANCELLA DATI",
        reset_confirm: "SEI SICURO?",
        finish: "FINE!",
        subtitle: "Trova l'ordine giusto!",
    },
    ru: {
        play: "\u0418\u0413\u0420\u0410\u0422\u042c",
        settings: "\u041d\u0410\u0421\u0422\u0420\u041e\u0419\u041a\u0418",
        select_level: "\u0412\u042b\u0411\u041e\u0420 \u0423\u0420\u041e\u0412\u041d\u042f",
        level: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c",
        score: "\u0421\u0427\u0401\u0422",
        arrows: "\u0421\u0422\u0420\u0415\u041b\u041a\u0418",
        level_complete: "\u0423\u0420\u041e\u0412\u0415\u041d\u042c \u041f\u0420\u041e\u0419\u0414\u0415\u041d!",
        next_level: "\u0414\u0410\u041b\u0415\u0415",
        replay: "\u0417\u0410\u041d\u041e\u0412\u041e",
        out_of_hearts: "\u0421\u0415\u0420\u0414\u0426\u0410 \u041a\u041e\u041d\u0427\u0418\u041b\u0418\u0421\u042c!",
        dont_give_up: "\u041d\u0435 \u0441\u0434\u0430\u0432\u0430\u0439\u0441\u044f!",
        retry: "\u0415\u0429\u0401 \u0420\u0410\u0417",
        level_select: "\u0412\u042b\u0411\u041e\u0420 \u0423\u0420\u041e\u0412\u041d\u042f",
        you_win: "\u041f\u041e\u0411\u0415\u0414\u0410!",
        all_cleared: "\u0412\u0441\u0435 \u0443\u0440\u043e\u0432\u043d\u0438 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u044b!",
        main_menu: "\u041c\u0415\u041d\u042e",
        tutorial_tap: "\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u0441\u0442\u0440\u0435\u043b\u043a\u0443!",
        sound: "\u0417\u0412\u0423\u041a",
        music: "\u041c\u0443\u0437\u044b\u043a\u0430",
        sfx: "\u042d\u0444\u0444\u0435\u043a\u0442\u044b",
        language: "\u042f\u0417\u042b\u041a",
        reset_storage: "\u0421\u0411\u0420\u041e\u0421",
        reset_confirm: "\u0422\u041e\u0427\u041d\u041e?",
        finish: "\u0413\u041e\u0422\u041e\u0412\u041e!",
        subtitle: "\u041d\u0430\u0439\u0434\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0440\u044f\u0434\u043e\u043a!",
    },
    ja: {
        play: "\u30d7\u30ec\u30a4",
        settings: "\u8a2d\u5b9a",
        select_level: "\u30ec\u30d9\u30eb\u9078\u629e",
        level: "\u30ec\u30d9\u30eb",
        score: "\u30b9\u30b3\u30a2",
        arrows: "\u77e2\u5370",
        level_complete: "\u30ec\u30d9\u30eb\u30af\u30ea\u30a2\uff01",
        next_level: "\u6b21\u3078",
        replay: "\u3082\u3046\u4e00\u5ea6",
        out_of_hearts: "\u30cf\u30fc\u30c8\u304c\u306a\u3044\uff01",
        dont_give_up: "\u8ac7\u3081\u306a\u3044\u3067\uff01",
        retry: "\u30ea\u30c8\u30e9\u30a4",
        level_select: "\u30ec\u30d9\u30eb\u9078\u629e",
        you_win: "\u52dd\u5229\uff01",
        all_cleared: "\u5168\u30ec\u30d9\u30eb\u30af\u30ea\u30a2\uff01",
        main_menu: "\u30e1\u30cb\u30e5\u30fc",
        tutorial_tap: "\u77e2\u5370\u3092\u30bf\u30c3\u30d7\u3057\u3066\u98db\u3070\u305d\u3046\uff01",
        sound: "\u30b5\u30a6\u30f3\u30c9",
        music: "\u97f3\u697d",
        sfx: "\u52b9\u679c\u97f3",
        language: "\u8a00\u8a9e",
        reset_storage: "\u30c7\u30fc\u30bf\u524a\u9664",
        reset_confirm: "\u672c\u5f53\u306b\uff1f",
        finish: "\u5b8c\u4e86\uff01",
        subtitle: "\u6b63\u3057\u3044\u9806\u756a\u3092\u898b\u3064\u3051\u3088\u3046\uff01",
    },
};

var currentLang = "en";
var _langStorageKey = "arrowEscape_lang";

function T(key) {
    var lang = TRANSLATIONS[currentLang];
    if (lang && lang[key]) return lang[key];
    return TRANSLATIONS.en[key] || key;
}

function setLanguage(lang) {
    if (!LANGUAGES[lang]) return;
    currentLang = lang;
    try { localStorage.setItem(_langStorageKey, lang); } catch (e) {}
    applyTranslations();
}

function loadLanguage() {
    try {
        var saved = localStorage.getItem(_langStorageKey);
        if (saved && LANGUAGES[saved]) {
            currentLang = saved;
        } else {
            var navLang = (navigator.language || "en").split("-")[0].toLowerCase();
            if (LANGUAGES[navLang]) currentLang = navLang;
        }
    } catch (e) {}
    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        var text = T(key);
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });
}

function buildLangList() {
    var container = document.getElementById("settingsLangList");
    if (!container) return;
    container.innerHTML = "";

    Object.keys(LANGUAGES).forEach(function (lang) {
        var info = LANGUAGES[lang];
        var item = document.createElement("div");
        item.className = "settings-lang-item" + (lang === currentLang ? " active" : "");
        item.setAttribute("data-lang", lang);

        item.innerHTML =
            '<span class="settings-lang-flag">' + info.flag + "</span>" +
            '<span class="settings-lang-name">' + info.name + "</span>" +
            '<span class="settings-lang-check"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#4ecca3"/></svg></span>';

        item.addEventListener("click", function (e) {
            e.stopPropagation();
            if (window.audioManager) window.audioManager.playClick();
            setLanguage(lang);
            updateLangListActive();
            // Rebuild level list if visible
            if (window.uiManager && document.getElementById("levelSelectScreen").classList.contains("active")) {
                window.uiManager._buildLevelList();
            }
        });

        container.appendChild(item);
    });
}

function updateLangListActive() {
    document.querySelectorAll(".settings-lang-item").forEach(function (item) {
        var lang = item.getAttribute("data-lang");
        if (lang === currentLang) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}
