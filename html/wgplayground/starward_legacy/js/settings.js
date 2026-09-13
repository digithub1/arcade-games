/* ============================================================
 * settings.js — options overlay: sound volume, mute, high-contrast
 * bullets, onboarding mode, replay tutorial. Opened from the Hangar
 * and the pause menu. Persists to profile.settings and applies live.
 *
 * Layout: full-screen hub-style (sticky back + title + resources,
 * scrollable body, OK footer) — same language as shop / rewards.
 * ========================================================== */
const Settings = (() => {
  const el = () => document.getElementById('settings');
  let onClose = null;

  // Push the saved settings into the engine (call at boot + on change).
  function apply() {
    const s = Profile.get().settings;
    Engine.audio.setVolume(s.sfx);
    Music.setVolume(s.music != null ? s.music : 0.5);
    Engine.audio.setMuted(s.muted);
    Music.setMuted(s.muted);
    // Default ON: an existing save has no key, and the shake is part of how
    // combat feels — you opt out of it, you do not opt in. Written back
    // explicitly, because the generic toggle flips `!s[key]` and an absent key
    // reads as false — the first tap would have turned ON a switch that was
    // already showing as on, and looked broken.
    if (s.shake === undefined) s.shake = true;
    if (Engine.setShake) Engine.setShake(s.shake !== false);
  }

  function syncSdkMute(muted) {
    try {
      if (Platform.sdk && typeof Platform.sdk.setSoundMuted === 'function') {
        Platform.sdk.setSoundMuted(!!muted);
      }
    } catch (e) {}
  }

  function open(closeCb) {
    onClose = closeCb || null;
    if (typeof Onboarding !== 'undefined' && Onboarding.enter) Onboarding.enter('settings');
    render();
    el().classList.remove('hidden');
  }
  function close() {
    el().classList.add('hidden');
    if (onClose) { const cb = onClose; onClose = null; cb(); }
  }

  // Cube back to whoever opened us (hub or pause) — mirrors the cube that got
  // us here. Standalone open (no caller to return to) just fades out.
  function goBack() {
    const style = onClose ? 'cube' : 'fade';
    if (typeof FXTrans !== 'undefined') FXTrans.go({ style, run: close });
    else close();
  }

  function row(label, control, hint) {
    return `<div class="set-row"><span class="set-label">${label}${
      hint ? `<span class="set-sub">${hint}</span>` : ''}</span>${control}</div>`;
  }
  function head(title) { return `<div class="set-head">${title}</div>`; }
  function toggle(key, on) {
    return `<button class="switch ${on ? 'on' : ''}" data-toggle="${key}" role="switch" aria-checked="${on}">
      <span class="knob"></span></button>`;
  }

  function onboardingMode() {
    const s = Profile.get().settings;
    return (s.onboarding === 'tips') ? 'tips' : 'full';
  }

  function render() {
    const prevWrap = el().querySelector('.hub-wrap');
    const savedScroll = prevWrap ? prevWrap.scrollTop : 0;
    const p = Profile.get();
    const s = p.settings;
    const vol = Math.round(s.sfx * 100);
    const mus = Math.round((s.music != null ? s.music : 0.5) * 100);
    const credits = p.credits.toLocaleString();
    const gems = (p.gems || 0).toLocaleString();
    const onb = onboardingMode();
    const tier = Quality.tier();
    const lang = (typeof I18N !== 'undefined' && I18N.lang) || p.lang || 'ru';

    el().innerHTML = `
      <div class="hub-wrap panel-scroll">
        <div class="scr-head">
          <button type="button" class="hub-icon-btn scr-back" id="set-back" aria-label="${T('btn.back')}">${Icons.svg('chevron', 18)}</button>
          <div class="scr-title title-grad">${T('set.title')}</div>
          <div class="curr-row">
            <span class="curr curr-gold">${Icons.svg('credit', 16)} ${credits}</span>
            <span class="curr-sep">|</span>
            <span class="curr curr-gem">${Icons.svg('gem', 16)} ${gems}</span>
          </div>
        </div>

        <div class="scr-body">
          <div class="glass-card glass-card-cyan set-block">
            ${head(T('set.grp.sound'))}
            ${row(T('set.sfx'),
              `<div class="set-slider"><input type="range" id="set-vol" min="0" max="100" value="${vol}" ${s.muted ? 'disabled' : ''}><span id="set-vol-val">${vol}</span></div>`)}
            ${row(T('set.music'),
              `<div class="set-slider"><input type="range" id="set-mus" min="0" max="100" value="${mus}" ${s.muted ? 'disabled' : ''}><span id="set-mus-val">${mus}</span></div>`)}
            ${row(T('set.mute'), toggle('muted', s.muted))}
          </div>

          <div class="glass-card glass-card-cyan set-block">
            ${head(T('set.grp.comfort'))}
            ${row(T('set.contrast'), toggle('highContrast', s.highContrast), T('set.contrastHint'))}
            ${row(T('set.shake'), toggle('shake', s.shake !== false), T('set.shakeHint'))}
            ${row(T('set.lang'), `<div class="seg-row set-lang-seg">
              ${[['ru', 'РУС'], ['en', 'ENG']].map(([code, label]) =>
                `<button type="button" class="seg ${lang === code ? 'on' : ''}" data-lang="${code}">${label}</button>`).join('')}
            </div>`)}
          </div>

          <div class="glass-card glass-card-cyan set-block set-onb-block">
            ${head(T('set.grp.graphics'))}
            <div class="set-label set-onb-title">${T('set.quality')}</div>
            <div class="seg-row set-onb-seg set-qual-seg">
              ${Quality.TIERS.map(q =>
                `<button type="button" class="seg ${q === tier ? 'on' : ''}" data-qual="${q}">${T('q.' + q)}</button>`).join('')}
            </div>
            <div class="set-onb-hint">${T(Quality.isManual() ? 'set.qualityManual' : 'set.qualityAuto')}${
              Quality.score() ? ` <span class="set-score">${Tf('set.qualityScore', Math.round(Quality.score()))}</span>` : ''}</div>
            ${Quality.isManual() ? `<button type="button" id="set-qual-redo" class="btn btn-ghost set-wide">${T('set.qualityRedo')}</button>` : ''}
          </div>

          <div class="glass-card glass-card-cyan set-block set-onb-block">
            ${head(T('set.grp.game'))}
            <div class="set-label set-onb-title">${T('set.onboarding')}</div>
            <div class="seg-row set-onb-seg">
              <button type="button" class="seg ${onb === 'full' ? 'on' : ''}" data-onb="full">${T('set.onb.full')}</button>
              <button type="button" class="seg ${onb === 'tips' ? 'on' : ''}" data-onb="tips">${T('set.onb.tips')}</button>
            </div>
            <div class="set-onb-hint">${T(onb === 'full' ? 'set.onb.fullHint' : 'set.onb.tipsHint')}</div>

            ${row(T('set.replayStory'), toggle('replayStory', !!s.replayStory), T('set.replayStoryHint'))}
            <button id="set-replay" class="btn btn-ghost set-wide">${T('set.replayTutorial')}</button>
          </div>
        </div>

        <div class="scr-foot">
          <button id="set-ok" class="btn btn-cta set-wide">✓ ${T('btn.ok')}</button>
        </div>
      </div>`;
    const newWrap = el().querySelector('.hub-wrap');
    if (newWrap) newWrap.scrollTop = savedScroll;
    VoxUI.bg(el(), 'settings');
    wire();
  }

  function wire() {
    const root = el(), s = Profile.get().settings;
    const vol = root.querySelector('#set-vol');
    if (vol) vol.oninput = () => {
      s.sfx = vol.value / 100; root.querySelector('#set-vol-val').textContent = vol.value;
      apply(); Profile.save();
    };
    const mus = root.querySelector('#set-mus');
    if (mus) mus.oninput = () => {
      s.music = mus.value / 100; root.querySelector('#set-mus-val').textContent = mus.value;
      apply(); Profile.save();
    };
    root.querySelectorAll('[data-toggle]').forEach(b => b.onclick = () => {
      const k = b.dataset.toggle; s[k] = !s[k]; apply();
      if (k === 'shake' && Engine.setShake) Engine.setShake(s.shake !== false);
      if (k === 'muted') syncSdkMute(s.muted);
      Profile.save();
      Engine.audio.blip(600, 0.05, 'sine', 0.12); render();
    });
    root.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => {
      I18N.setLang(b.dataset.lang, true);          // manual choice, same as the hub
      Engine.audio.blip(700, 0.05, 'sine', 0.1);
      render();
    });
    root.querySelectorAll('[data-qual]').forEach(b => b.onclick = () => {
      Quality.set(b.dataset.qual, true);
      Engine.audio.blip(640, 0.05, 'sine', 0.1);
      render();
    });
    const redo = root.querySelector('#set-qual-redo');
    if (redo) redo.onclick = () => {
      Quality.remeasure();
      Engine.audio.blip(700, 0.06, 'sine', 0.12);
      render();
    };
    root.querySelectorAll('[data-onb]').forEach(b => b.onclick = () => {
      s.onboarding = b.dataset.onb === 'tips' ? 'tips' : 'full';
      Profile.save();
      Engine.audio.blip(640, 0.05, 'sine', 0.1);
      render();
    });
    root.querySelector('#set-replay').onclick = () => {
      const p = Profile.get();
      p.tutorialDone = false;
      // Full mode re-arms the first-flight intro; tips mode only coach marks.
      if ((p.settings.onboarding || 'full') === 'full') p.introDone = false;
      Profile.save();
      if (typeof Onboarding !== 'undefined') Onboarding.reset();
      Engine.audio.power(); goBack();
    };
    const back = root.querySelector('#set-back');
    if (back) back.onclick = goBack;
    const ok = root.querySelector('#set-ok');
    if (ok) ok.onclick = goBack;
  }

  function highContrast() { return Profile.get().settings.highContrast; }

  return { open, close, apply, highContrast, onboardingMode, syncSdkMute };
})();
