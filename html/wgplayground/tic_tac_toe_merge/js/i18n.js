/* Basic i18n runtime
   API:
     i18n.init(defaultLang) -> Promise
     i18n.changeLang(code) -> Promise
     i18n.t(key) -> string
     i18n.onChange(cb)
*/
(function (global) {
  const STORAGE_KEY = 'game_lang';
  const cache = {};
  let current = null;
  let defaultLang = 'en';
  const listeners = [];

  async function loadLang(code) {
    if (cache[code]) {
      console.log('i18n: loadLang - using cached', code, 'keys:', Object.keys(cache[code]).length);
      return cache[code];
    }
    console.log('i18n: loadLang - fetching', code);
    try {
      const res = await fetch(`langs/${code}/lang.json`, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`Failed to load lang ${code}`);
      const json = await res.json();
      cache[code] = json;
      console.log('i18n: loadLang - loaded', code, 'keys:', Object.keys(json).length);
      return json;
    } catch (err) {
      console.error('i18n: loadLang error', err);
      throw err;
    }
  }

  function _interpolate(template, params) {
    if (!params) return template;
    let out = template;
    if (Array.isArray(params)) {
      params.forEach((p, i) => {
        out = out.split('{' + i + '}').join(String(p));
      });
    } else if (typeof params === 'object') {
      Object.keys(params).forEach(k => {
        out = out.split('{' + k + '}').join(String(params[k]));
      });
    }
    return out;
  }

  function t(key, params) {
    const lang = cache[current] || {};
    const d = cache[defaultLang] || {};
    const raw = (lang && lang[key]) || (d && d[key]) || null;
    if (!raw) {
      console.warn('i18n: missing key', key, 'for lang', current);
      return key;
    }
    try { return _interpolate(raw, params); } catch (e) { return raw; }
  }

  function updateDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const text = t(key);
      if (!text) console.warn('i18n: updateDOM missing text for', key);
      // Example logging: if this is the main menu "Play vs AI" key, log resolved value
      if (key === 'menu.pve') {
        try {
          console.log('i18n: updateDOM applying key', key, '=>', text, 'element:', el);
          console.log('i18n: updateDOM before:', el.textContent || el.getAttribute('title') || '(empty)');
        } catch (e) {}
      }
      if (attr) {
        el.setAttribute(attr, text);
      } else {
        // preserve HTML if explicitly requested via data-i18n-html
        if (el.hasAttribute('data-i18n-html')) el.innerHTML = text;
        else el.textContent = text;
      }
      if (key === 'menu.pve') {
        try { console.log('i18n: updateDOM after:', el.textContent || el.getAttribute('title') || '(empty)'); } catch (e) {}
      }
    });
  }

  // Returns boolean: true if language applied, false if failed
  async function changeLang(code, persist = true) {
    try {
      await loadLang(code);
      current = code;
      if (persist) localStorage.setItem(STORAGE_KEY, code);
      console.log('i18n: changeLang ->', code, 'default:', defaultLang, 'cachedKeys:', Object.keys(cache[code] || {}).length);
      // Show specific sample value for troubleshooting
      try { console.log('i18n: sample menu.pve ->', (cache[code] && cache[code]['menu.pve']) || '(not present)'); } catch(e){}
      updateDOM();
      listeners.forEach(cb => {
        try { cb(code); } catch (e) { console.error('i18n listener error', e); }
      });
      return true;
    } catch (e) {
      console.error('i18n: changeLang failed', e);
      // Do not throw to callers; return failure flag so callers can react
      return false;
    }
  }

  async function init(def = 'en') {
    defaultLang = def;
    try {
      await loadLang(defaultLang);
    } catch (e) {
      console.warn('i18n: failed to load default language', e);
    }
    const saved = localStorage.getItem(STORAGE_KEY) || defaultLang;
    // expose default on debug for other modules
    window.i18n = window.i18n || {};
    window.i18n._debug = window.i18n._debug || {};
    window.i18n._debug.default = defaultLang;
    await changeLang(saved, false);
  }

  function onChange(cb) { listeners.push(cb); }

  // expose
  global.i18n = { init, changeLang, t, onChange, _debug: { cache } };

  // auto-init (non-blocking)
  document.addEventListener('DOMContentLoaded', () => {
    // don't await - let caller change language explicitly if needed
    init('en').catch(() => {});
  });

})(window);

