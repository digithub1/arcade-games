/* Settings UI: injects a settings button and modal, allows language selection
   Requires i18n to be loaded
*/
(function () {
  const AVAILABLE = ['en', 'ru', 'de', 'fr', 'it', 'es', 'zh', 'pt', 'ko', 'ja', 'tr', 'ar', 'hi', 'id'];
  const LANG_FLAGS = {
    en: '🇺🇸',
    ru: '🇷🇺',
    de: '🇩🇪',
    fr: '🇫🇷',
    it: '🇮🇹',
    es: '🇪🇸',
    zh: '🇨🇳',
    pt: '🇵🇹',
    ko: '🇰🇷',
    ja: '🇯🇵',
    tr: '🇹🇷',
    ar: '🇸🇦',
    hi: '🇮🇳',
    id: '🇮🇩'
  };

  function createButton() {
    // Prefer existing header settings button if present
    const hosted = document.getElementById('btn-settings');
    const target = hosted || document.body;
    // create a non-intrusive button only if no hosted exists
    if (!hosted && document.getElementById('settings-button')) return;
    const btn = hosted || document.getElementById('settings-button') || document.createElement('button');
    btn.id = hosted ? 'btn-settings' : 'settings-button';
    btn.className = hosted ? btn.className : '';
    // Title (tooltip) should come from translations; button text must remain the gear emoji
    btn.title = window.i18n ? window.i18n.t('top.settings.title') : 'Settings';
    // Only mark attribute mapping for title so updateDOM will set the title attribute
    btn.setAttribute('data-i18n', 'top.settings.title');
    btn.setAttribute('data-i18n-attr', 'title');
    // Ensure visible text is always the gear emoji (do not use translation for button text)
    if (!btn.textContent || btn.textContent.trim() === '') btn.textContent = '⚙';
    btn.addEventListener('click', openModal);
    if (!hosted) {
      Object.assign(btn.style, { position: 'fixed', right: '12px', bottom: '12px', zIndex: 9999 });
      target.appendChild(btn);
    }
    if (window.i18n) window.i18n.onChange(() => { try { btn.setAttribute('title', window.i18n.t('top.settings.title')); } catch(e){} });
  }

  function openModal() {
    let modal = document.getElementById('settings-modal');
    if (!modal) modal = buildModal();
    // Use active class so CSS transition/visibility works
    modal.classList.add('active');
    modal.style.display = 'flex';
    // Refresh mute button + slider state from SDK each time modal opens
    try {
      const sfxOn = !(window.SoundManager?.isSFXMuted());
      const musOn = !(window.SoundManager?.isMusicMuted());
      const sfxBtn    = document.getElementById('btn-mute-sfx');
      const musicBtn  = document.getElementById('btn-mute-music');
      const sfxSlider = document.getElementById('sound-vol');
      const musSlider = document.getElementById('music-vol');
      if (sfxBtn)    { sfxBtn.textContent   = sfxOn ? '🔊' : '🔇'; sfxBtn.classList.toggle('muted', !sfxOn); }
      if (musicBtn)  { musicBtn.textContent = musOn ? '🎵' : '🔕'; musicBtn.classList.toggle('muted', !musOn); }
      if (sfxSlider) { sfxSlider.value = localStorage.getItem('sound_vol') ?? 80; sfxSlider.classList.toggle('vol-slider--muted', !sfxOn); }
      if (musSlider) { musSlider.value = localStorage.getItem('music_vol') ?? 60; musSlider.classList.toggle('vol-slider--muted', !musOn); }
    } catch(e) {}
  }

  function closeModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.style.display = 'none';
  }

  function buildModal() {
    const overlay = document.createElement('div');
    overlay.className = 'settings-modal-overlay';
    overlay.id = 'settings-modal';

    const box = document.createElement('div');
    box.className = 'settings-modal';

    const header = document.createElement('div'); header.className = 'settings-header';
    const title = document.createElement('div'); title.className = 'settings-title'; title.setAttribute('data-i18n', 'settings.title');
    const closeBtn = document.createElement('button'); closeBtn.className = 'modal-close-x'; closeBtn.setAttribute('aria-label', 'Close'); closeBtn.textContent = '×'; closeBtn.addEventListener('click', closeModal);
    header.appendChild(title);
    header.appendChild(closeBtn);
    box.appendChild(header);

    const body = document.createElement('div'); body.className = 'settings-body';

    // Language row (left label, right control)
    const langLabelWrap = document.createElement('div'); langLabelWrap.className = 'setting-label';
    const langLabel = document.createElement('div'); langLabel.setAttribute('data-i18n', 'settings.language_label');
    langLabelWrap.appendChild(langLabel);

    const langControlWrap = document.createElement('div'); langControlWrap.className = 'setting-control';
    // Use a single select dropdown so changing language applies immediately
    const langSelect = document.createElement('select'); langSelect.id = 'settings-lang-select'; langSelect.className = 'lang-select';
    AVAILABLE.forEach(code => {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = (LANG_FLAGS[code] || '🏳') + ' ' + code;
      langSelect.appendChild(opt);
    });
    // apply immediately when user picks a language
    langSelect.addEventListener('change', (e) => { selectLanguage(e.target.value); });
    langControlWrap.appendChild(langSelect);

    body.appendChild(langLabelWrap);
    body.appendChild(langControlWrap);

    // Helper: refresh mute button and slider appearance from SDK state
    function updateMuteButtons() {
      try {
        const sfxOn = !(window.SoundManager?.isSFXMuted());
        const musOn = !(window.SoundManager?.isMusicMuted());
        const sfxBtn    = document.getElementById('btn-mute-sfx');
        const musicBtn  = document.getElementById('btn-mute-music');
        const sfxSlider = document.getElementById('sound-vol');
        const musSlider = document.getElementById('music-vol');
        if (sfxBtn)    { sfxBtn.textContent   = sfxOn ? '🔊' : '🔇'; sfxBtn.classList.toggle('muted', !sfxOn); }
        if (musicBtn)  { musicBtn.textContent = musOn ? '🎵' : '🔕'; musicBtn.classList.toggle('muted', !musOn); }
        if (sfxSlider) sfxSlider.classList.toggle('vol-slider--muted', !sfxOn);
        if (musSlider) musSlider.classList.toggle('vol-slider--muted', !musOn);
      } catch(e) {}
    }

    // Sound label and mute toggle
    const soundLabelWrap = document.createElement('div'); soundLabelWrap.className = 'setting-label';
    const soundLabel = document.createElement('div'); soundLabel.setAttribute('data-i18n', 'settings.sound_label');
    soundLabelWrap.appendChild(soundLabel);
    const soundControlWrap = document.createElement('div'); soundControlWrap.className = 'setting-control';
    const sfxBtn = document.createElement('button'); sfxBtn.className = 'mute-toggle'; sfxBtn.id = 'btn-mute-sfx';
    sfxBtn.addEventListener('click', () => {
      try {
        if (window.SoundManager?.isSFXMuted()) window.SoundManager.unmuteSFX();
        else window.SoundManager?.muteSFX();
        updateMuteButtons();
      } catch(e) {}
    });
    soundControlWrap.appendChild(sfxBtn);
    const sfxSlider = document.createElement('input'); sfxSlider.type = 'range'; sfxSlider.className = 'vol-slider'; sfxSlider.id = 'sound-vol';
    sfxSlider.min = 0; sfxSlider.max = 100; sfxSlider.value = localStorage.getItem('sound_vol') ?? 80;
    sfxSlider.addEventListener('input', (e) => { try { localStorage.setItem('sound_vol', e.target.value); window.SoundManager?.updateSoundVolume(); } catch(e) {} });
    soundControlWrap.appendChild(sfxSlider);
    body.appendChild(soundLabelWrap);
    body.appendChild(soundControlWrap);

    // Music label and mute toggle
    const musicLabelWrap = document.createElement('div'); musicLabelWrap.className = 'setting-label';
    const musicLabel = document.createElement('div'); musicLabel.setAttribute('data-i18n', 'settings.music_label');
    musicLabelWrap.appendChild(musicLabel);
    const musicControlWrap = document.createElement('div'); musicControlWrap.className = 'setting-control';
    const musicBtn = document.createElement('button'); musicBtn.className = 'mute-toggle'; musicBtn.id = 'btn-mute-music';
    musicBtn.addEventListener('click', () => {
      try {
        if (window.SoundManager?.isMusicMuted()) window.SoundManager.unmuteMusic();
        else window.SoundManager?.muteMusic();
        updateMuteButtons();
      } catch(e) {}
    });
    musicControlWrap.appendChild(musicBtn);
    const musicSlider = document.createElement('input'); musicSlider.type = 'range'; musicSlider.className = 'vol-slider'; musicSlider.id = 'music-vol';
    musicSlider.min = 0; musicSlider.max = 100; musicSlider.value = localStorage.getItem('music_vol') ?? 60;
    musicSlider.addEventListener('input', (e) => { try { localStorage.setItem('music_vol', e.target.value); window.SoundManager?.updateMusicVolume(); } catch(e) {} });
    musicControlWrap.appendChild(musicSlider);
    body.appendChild(musicLabelWrap);
    body.appendChild(musicControlWrap);

    // Sync buttons when SDK fires mute/unmute events
    try {
      if (window.GamepushService) {
        ['mute:sfx','unmute:sfx','mute:music','unmute:music'].forEach(ev =>
          window.GamepushService.on(ev, updateMuteButtons));
      }
    } catch(e) {}

    // Set initial button state
    setTimeout(updateMuteButtons, 50);

    box.appendChild(body);

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    // populate select with localized names once languages are loaded
    function populateNames() {
      if (!window.i18n) return;
      AVAILABLE.forEach(code => {
        const opt = document.querySelector(`#settings-lang-select option[value="${code}"]`);
        if (opt) opt.textContent = (LANG_FLAGS[code] || '🏳') + ' ' + (window.i18n.t(`lang.name.${code}`) || code);
      });
      // set selected value
      const saved = localStorage.getItem('game_lang') || 'en';
      markSelectedLang(saved);
    }

    if (window.i18n) {
      window.i18n.onChange(() => populateNames());
      // ensure names update once initial load completed
      setTimeout(populateNames, 50);
    }

    // Immediately fill labels from currently-selected language (if i18n already initialized)
    try {
      const curLang = (window.i18n && window.i18n._debug && window.i18n._debug.cache && window.i18n._debug.default) ? window.i18n._debug.default : null;
      // use i18n.t when available
      if (window.i18n && typeof window.i18n.t === 'function') {
        // title
        try { title.textContent = window.i18n.t('settings.title'); } catch(e) { title.textContent = 'Settings'; }
        // labels
        try { langLabel.textContent = window.i18n.t('settings.language_label'); } catch(e) { langLabel.textContent = 'Language'; }
        try { soundLabel.textContent = window.i18n.t('settings.sound_label'); } catch(e) { soundLabel.textContent = 'Sound'; }
        try { musicLabel.textContent = window.i18n.t('settings.music_label'); } catch(e) { musicLabel.textContent = 'Music'; }
      } else {
        // fallbacks
        title.textContent = title.textContent || 'Settings';
        langLabel.textContent = langLabel.textContent || 'Language';
        soundLabel.textContent = soundLabel.textContent || 'Sound';
        musicLabel.textContent = musicLabel.textContent || 'Music';
      }
    } catch (e) {}

    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    // expose helper
    return overlay;
  }

function markSelectedLang(code) {
    const sel = document.getElementById('settings-lang-select');
    if (sel) sel.value = code;
}

  function selectLanguage(code) {
    // apply immediately
    if (window.i18n) {
      window.i18n.changeLang(code);
      localStorage.setItem('game_lang', code);
    }
    markSelectedLang(code);
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (!document.body) return;
    // createButton only runs when no existing #btn-settings is present
    createButton();
  });

  // expose programmatic opener for external callers
  try { window.openSettings = openModal; } catch (e) {}

})();

