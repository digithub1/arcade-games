// ═════════════════════════════════════════════════════════════════════════
// Localization — all user-facing strings + language detection.
//
// TO ADD A LANGUAGE: add ONE new object to BB_STRINGS keyed by its language
// code (lowercase, e.g. 'de', 'fr', 'zh'). Nothing else needs to change — the
// game reads everything through BB_I18N.t(key). Keep the same keys as `en`.
//
// {n} in `combo`, {icon}/{name} in `boosterAward` are placeholders filled at
// runtime; leave them in place (they can be reordered for a language's grammar).
// ═════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';

  const BB_STRINGS = {
    // ── English (default fallback) ──────────────────────────────────────
    en: {
      score: 'SCORE',
      best: 'BEST',
      gameOverTitle: 'No More Moves',
      gameOverSubtitle: 'The board is jammed — nowhere left to drop a piece.',
      newBest: '★ New personal best!',
      retry: 'Play Again',
      boosterEarned: 'BOOSTER EARNED!',
      boosterAward: '+1 {icon} {name}',
      bomb: 'Bomb',
      sword: 'Sword',
      combo: '{n}× COMBO!',
      continueAd: 'Continue — Watch Ad',
      continueRun: 'Continue',
      newGame: 'New Game',
    },

    // ── Russian ─────────────────────────────────────────────────────────
    ru: {
      score: 'СЧЁТ',
      best: 'РЕКОРД',
      gameOverTitle: 'Ходов больше нет',
      gameOverSubtitle: 'Поле забито — фигуры больше некуда ставить.',
      newBest: '★ Новый рекорд!',
      retry: 'Играть снова',
      boosterEarned: 'БУСТЕР ПОЛУЧЕН!',
      boosterAward: '+1 {icon} {name}',
      bomb: 'Бомба',
      sword: 'Меч',
      combo: 'КОМБО {n}×!',
      continueAd: 'Продолжить — за рекламу',
    },

    // ── Spanish ─────────────────────────────────────────────────────────
    es: {
      score: 'PUNTOS',
      best: 'RÉCORD',
      gameOverTitle: 'Sin movimientos',
      gameOverSubtitle: 'El tablero está lleno, no caben más piezas.',
      newBest: '★ ¡Nuevo récord!',
      retry: 'Jugar de nuevo',
      boosterEarned: '¡BOOSTER GANADO!',
      boosterAward: '+1 {icon} {name}',
      bomb: 'Bomba',
      sword: 'Espada',
      combo: '¡COMBO {n}×!',
      continueAd: 'Continuar — ver anuncio',
    },

    // ── Portuguese (Brazil) ─────────────────────────────────────────────
    'pt-br': {
      score: 'PONTOS',
      best: 'RECORDE',
      gameOverTitle: 'Sem jogadas',
      gameOverSubtitle: 'O tabuleiro está cheio, sem espaço para as peças.',
      newBest: '★ Novo recorde!',
      retry: 'Jogar de novo',
      boosterEarned: 'BOOSTER GANHO!',
      boosterAward: '+1 {icon} {name}',
      bomb: 'Bomba',
      sword: 'Espada',
      combo: 'COMBO {n}×!',
      continueAd: 'Continuar — ver anúncio',
    },

    // ── Turkish ─────────────────────────────────────────────────────────
    tr: {
      score: 'SKOR',
      best: 'REKOR',
      gameOverTitle: 'Hamle kalmadı',
      gameOverSubtitle: 'Tahta doldu, parçalara yer yok.',
      newBest: '★ Yeni rekor!',
      retry: 'Tekrar oyna',
      boosterEarned: 'BOOSTER KAZANILDI!',
      boosterAward: '+1 {icon} {name}',
      bomb: 'Bomba',
      sword: 'Kılıç',
      combo: 'KOMBO {n}×!',
      continueAd: 'Devam et — reklam izle',
    },

    // ── Arabic (right-to-left) ──────────────────────────────────────────
    ar: {
      score: 'النقاط',
      best: 'الأفضل',
      gameOverTitle: 'لا مزيد من الحركات',
      gameOverSubtitle: 'اللوحة ممتلئة، لا مكان لوضع القطع.',
      newBest: '★ رقم قياسي جديد!',
      retry: 'العب مجددًا',
      boosterEarned: '!معزّز جديد',
      boosterAward: '{name} {icon} +1',
      bomb: 'قنبلة',
      sword: 'سيف',
      combo: '!كومبو {n}×',
      continueAd: 'المتابعة — شاهد إعلان',
    },
  };

  // Navigation, confirmation, and header controls introduced in v1.2.
  Object.assign(BB_STRINGS.en, {
    continueRun: 'Continue',
    newGame: 'Start New Game',
    startNewTitle: 'Start a new game?',
    startNewBody: 'Your current game will be replaced.',
    restartTitle: 'Restart the game?',
    restartBody: 'Your current board and score will be lost.',
    cancel: 'Cancel',
    restart: 'Restart',
    home: 'Home',
    soundOn: 'Sound on',
    soundOff: 'Sound off',
    loadingAd: 'Loading…',
    adUnavailable: 'No ad available right now. Please try again soon.',
    language: 'Language',
  });
  Object.assign(BB_STRINGS.ru, {
    continueRun: 'Продолжить',
    newGame: 'Начать новую игру',
    startNewTitle: 'Начать новую игру?',
    startNewBody: 'Текущая игра будет заменена.',
    restartTitle: 'Перезапустить игру?',
    restartBody: 'Текущая доска и счёт будут потеряны.',
    cancel: 'Отмена',
    restart: 'Перезапуск',
    home: 'Домой',
    soundOn: 'Звук включён',
    soundOff: 'Звук выключен',
    loadingAd: 'Загрузка…',
    adUnavailable: 'Реклама сейчас недоступна. Попробуйте чуть позже.',
    language: 'Язык',
  });
  Object.assign(BB_STRINGS.es, {
    continueRun: 'Continuar',
    newGame: 'Empezar nueva partida',
    startNewTitle: '¿Empezar una nueva partida?',
    startNewBody: 'Tu partida actual será reemplazada.',
    restartTitle: '¿Reiniciar la partida?',
    restartBody: 'Perderás el tablero y la puntuación actuales.',
    cancel: 'Cancelar',
    restart: 'Reiniciar',
    home: 'Inicio',
    soundOn: 'Sonido activado',
    soundOff: 'Sonido desactivado',
    loadingAd: 'Cargando…',
    adUnavailable: 'No hay anuncios disponibles ahora. Inténtalo de nuevo pronto.',
    language: 'Idioma',
  });
  Object.assign(BB_STRINGS['pt-br'], {
    continueRun: 'Continuar',
    newGame: 'Iniciar novo jogo',
    startNewTitle: 'Iniciar um novo jogo?',
    startNewBody: 'Seu jogo atual será substituído.',
    restartTitle: 'Reiniciar o jogo?',
    restartBody: 'Seu tabuleiro e pontuação atuais serão perdidos.',
    cancel: 'Cancelar',
    restart: 'Reiniciar',
    home: 'Início',
    soundOn: 'Som ligado',
    soundOff: 'Som desligado',
    loadingAd: 'Carregando…',
    adUnavailable: 'Nenhum anúncio disponível agora. Tente novamente em breve.',
    language: 'Idioma',
  });
  Object.assign(BB_STRINGS.tr, {
    continueRun: 'Devam et',
    newGame: 'Yeni oyun başlat',
    startNewTitle: 'Yeni bir oyun başlatılsın mı?',
    startNewBody: 'Mevcut oyununuz değiştirilecek.',
    restartTitle: 'Oyun yeniden başlatılsın mı?',
    restartBody: 'Mevcut tahta ve puanınız kaybolacak.',
    cancel: 'İptal',
    restart: 'Yeniden başlat',
    home: 'Ana sayfa',
    soundOn: 'Ses açık',
    soundOff: 'Ses kapalı',
    loadingAd: 'Yükleniyor…',
    adUnavailable: 'Şu anda reklam yok. Lütfen biraz sonra tekrar deneyin.',
    language: 'Dil',
  });
  Object.assign(BB_STRINGS.ar, {
    continueRun: 'متابعة',
    newGame: 'بدء لعبة جديدة',
    startNewTitle: 'هل تريد بدء لعبة جديدة؟',
    startNewBody: 'سيتم استبدال لعبتك الحالية.',
    restartTitle: 'هل تريد إعادة تشغيل اللعبة؟',
    restartBody: 'ستفقد اللوحة الحالية والنقاط.',
    cancel: 'إلغاء',
    restart: 'إعادة التشغيل',
    home: 'الرئيسية',
    soundOn: 'الصوت مفعّل',
    soundOff: 'الصوت مكتوم',
    loadingAd: 'جارٍ التحميل…',
    adUnavailable: 'لا يوجد إعلان متاح الآن. حاول مرة أخرى بعد قليل.',
    language: 'اللغة',
  });

  // Languages offered in the manual language picker, in their own script.
  const BB_LANG_LIST = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'es', name: 'Español' },
    { code: 'pt-br', name: 'Português' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'ar', name: 'العربية' },
  ];

  // Languages that render right-to-left.
  const RTL_LANGS = { ar: true };

  // Base-code aliases → the specific variant we ship.
  const ALIASES = { pt: 'pt-br', 'pt-pt': 'pt-br' };

  // Map a raw BCP-47 tag (e.g. "pt-BR", "en-US", "ar") to a supported key.
  function normalize(raw) {
    if (!raw) return null;
    const lower = String(raw).toLowerCase();
    if (BB_STRINGS[lower]) return lower;               // exact, e.g. pt-br
    if (ALIASES[lower]) return ALIASES[lower];
    const base = lower.split('-')[0];
    if (BB_STRINGS[base]) return base;                 // base, e.g. en-us → en
    if (ALIASES[base]) return ALIASES[base];           // pt-* → pt-br
    return null;
  }


  const BB_I18N = {
    strings: BB_STRINGS,
    lang: 'en',
    dir: 'ltr',

    // opts (from the Platform adapter, all optional):
    //   { lang: '<raw language from the SDK/navigator>', fallback: '<code>' }
    // Resolution order: adapter language → navigator.language(s) → fallback.
    init(opts) {
      opts = opts || {};
      const fallback = normalize(opts.fallback) || (window.BB_PLAYHOP ? 'ru' : 'en');

      let resolved = normalize(opts.lang);
      if (!resolved) {
        const navs = (typeof navigator !== 'undefined')
          ? (navigator.languages && navigator.languages.length
              ? navigator.languages : [navigator.language])
          : [];
        for (const n of navs) { const m = normalize(n); if (m) { resolved = m; break; } }
      }

      this.lang = resolved || fallback;
      this.dir = RTL_LANGS[this.lang] ? 'rtl' : 'ltr';
      try {
        document.documentElement.lang = this.lang;
        document.documentElement.dir = this.dir;
      } catch (e) {}
      return this;
    },

    get rtl() { return this.dir === 'rtl'; },

    // Explicit user choice from the in-game language picker — always wins,
    // no navigator/adapter detection involved.
    setLang(code) {
      const resolved = normalize(code);
      if (!resolved) return false;
      this.lang = resolved;
      this.dir = RTL_LANGS[this.lang] ? 'rtl' : 'ltr';
      try {
        document.documentElement.lang = this.lang;
        document.documentElement.dir = this.dir;
      } catch (e) {}
      return true;
    },

    // Look up a key for the active language (falling back to EN, then the raw
    // key), replacing any {placeholders} from `params`.
    t(key, params) {
      const dict = this.strings[this.lang] || this.strings.en;
      let s = dict[key] != null ? dict[key]
            : (this.strings.en[key] != null ? this.strings.en[key] : key);
      if (params) {
        for (const k in params) s = s.split('{' + k + '}').join(String(params[k]));
      }
      return s;
    },
  };

  window.BB_STRINGS = BB_STRINGS;
  window.BB_I18N = BB_I18N;
  window.BB_LANG_LIST = BB_LANG_LIST;
})();
