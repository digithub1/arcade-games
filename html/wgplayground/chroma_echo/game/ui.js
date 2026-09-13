/* Chroma Echo — UI wiring for the HTML transport bar */
window.CE = window.CE || {};
(function (CE) {
  'use strict';
  const $ = sel => document.querySelector(sel);

  CE.ui = {
    init(game) {
      this.g = game;
      this.playBtn = $('#play');
      this.bpmRange = $('#bpm'); this.bpmVal = $('#bpmVal');
      this.layerBadge = $('#layers');
      this.muteBtn = $('#mute');
      this.keyWrap = $('#keys');

      this.playBtn.addEventListener('click', () => game.togglePlay());
      this.bpmRange.addEventListener('input', e => { const v = +e.target.value; this.bpmVal.textContent = v; game.setBpm(v); });
      $('#surprise').addEventListener('click', () => game.surprise());
      $('#clear').addEventListener('click', () => game.clearAll());
      this.muteBtn.addEventListener('click', () => {
        const on = !this.muteBtn.classList.contains('on');
        this.muteBtn.classList.toggle('on', on);
        this.muteBtn.querySelector('.lbl').textContent = on ? 'Muted' : 'Sound';
        game.masterMute(on);
      });
      // key segmented
      ['C', 'D', 'E', 'F', 'G', 'A'].forEach(k => {
        const b = document.createElement('button'); b.className = 'key'; b.textContent = k; b.dataset.k = k;
        b.addEventListener('click', () => { game.setKey(k); this.setKey(k); });
        this.keyWrap.appendChild(b);
      });
      this.setKey('C');

      // share modal
      this.modal = $('#shareModal');
      $('#share').addEventListener('click', () => this.openShare());
      $('#shareClose').addEventListener('click', () => this.modal.classList.remove('show'));
      $('#copyCode').addEventListener('click', () => {
        const ta = $('#shareCode'); ta.select();
        navigator.clipboard && navigator.clipboard.writeText(ta.value);
        const btn = $('#copyCode'); btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Copy', 1400);
      });
      $('#loadCode').addEventListener('click', () => {
        const ok = game.loadCode($('#pasteCode').value);
        $('#loadMsg').textContent = ok ? 'Loaded! 🎉' : 'Hmm, that code looks off.';
        if (ok) setTimeout(() => this.modal.classList.remove('show'), 700);
      });
      this.modal.addEventListener('click', e => { if (e.target === this.modal) this.modal.classList.remove('show'); });

      this.refresh();
    },
    openShare() {
      $('#shareCode').value = this.g.shareCode();
      $('#pasteCode').value = ''; $('#loadMsg').textContent = '';
      this.modal.classList.add('show');
    },
    setPlaying(p) {
      if (!this.playBtn) return;
      this.playBtn.classList.toggle('playing', p);
      this.playBtn.querySelector('.icon').innerHTML = p
        ? '<rect x="6" y="5" width="4" height="14" rx="1.5"/><rect x="14" y="5" width="4" height="14" rx="1.5"/>'
        : '<path d="M7 4.5l13 7.5-13 7.5z"/>';
    },
    setBpm(v) { if (!this.bpmRange) return; this.bpmRange.value = v; this.bpmVal.textContent = v; },
    setKey(k) { if (!this.keyWrap) return; this.keyWrap.querySelectorAll('.key').forEach(b => b.classList.toggle('on', b.dataset.k === k)); },
    refresh() {
      if (!this.g) return;
      this.layerBadge.textContent = this.g.activeCount() + ' / 7';
    },
  };
})(window.CE);
