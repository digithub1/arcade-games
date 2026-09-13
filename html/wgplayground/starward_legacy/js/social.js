/* ============================================================
 * social.js — repost score / invite friends. Thin: delegates to the
 * active platform adapter (Platform.sdk). Buttons that call these are
 * gated by Platform.caps.share / Platform.caps.invite.
 * ============================================================ */
const Social = (() => {
  function repost(score) {
    Analytics.share({ method: Platform.id, content_type: 'score', score });
    const text = Tf('social.repostText', (score || 0).toLocaleString());
    try { Platform.sdk.share(text, Platform.shareUrl()); } catch (e) {}
  }

  function invite() {
    Analytics.invite({ method: Platform.id });
    const text = Tf('social.inviteText');
    // Prefer native invite; fall back to share so the button always does something.
    try {
      if (Platform.caps && Platform.caps.invite) Platform.sdk.invite(text);
      else if (Platform.caps && Platform.caps.share) Platform.sdk.share(text, Platform.shareUrl());
      else if (navigator.share) navigator.share({ title: 'Starward Legacy', text, url: Platform.shareUrl() });
      else if (navigator.clipboard && Platform.shareUrl) {
        navigator.clipboard.writeText(text + ' ' + Platform.shareUrl()).catch(() => {});
      } else Platform.sdk.invite(text);
    } catch (e) {}
  }

  return { repost, invite };
})();
