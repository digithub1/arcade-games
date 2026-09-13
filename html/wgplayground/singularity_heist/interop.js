var gp = null;
function onGPInit(gp){
	window.gp = gp;
}

function share(n){
  if(gp!=null) gp.socials.share({
    text: lang == 'ru' ? shareRu : shareEn
	});
}

function getOverlay(){
  const overlay = $('<div class="overlay">').css({
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'color':'white',
    'width': '100%',
    'height': '100%',
    'background': 'rgba(0,0,0,0.9)',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'z-index': 9999
  });

  const content = $('<div>').css({'text-align':'center'});//блок content, чтобы центрировать

  $('body').append(overlay.append(content));

  return content;
}

function PushSave(json){
  storage.set('main',json);
  storage.push();
}

var advscr = false;

function yabanner(){
	if(advscr)return;

 advscr = true;
 unityInstance.SendMessage('Interop', 'PreBanner');
  ysdk.adv.showFullscreenAdv({callbacks: {onClose: function(){
    unityInstance.SendMessage('Interop', 'PostBanner');

	advscr = false;
	}}});
}

async function buyMicrosxeme() {
  unityInstance.SendMessage('Interop', 'PreBanner');
  const success = await gp.ads.showRewardedVideo();
  if (success) {
		unityInstance.SendMessage('InAppSys', 'MicrosxemeRecive');
  }
  unityInstance.SendMessage('Interop', 'PostBanner');
}

async function yarbanner() {
  unityInstance.SendMessage('Interop', 'PreBanner');
  const success = await gp.ads.showRewardedVideo();
  if (success) {
		unityInstance.SendMessage('Interop', 'REWARDCOMPLITE');
  }
  unityInstance.SendMessage('Interop', 'PostBanner');
}

function WorldLoaded() {

   gp.gameStart();

   window.WorldLoaded = function(){

   };
}

function showleads(){
  gp.leaderboard.openScoped({
    tag: 'lead',
	variant: 'global',
    withMe: 'first',
    showNearest: 5,
});
}

function ScoreToLead(score){
	gp.leaderboard.publishRecord({
		tag: 'lead',
		variant: 'global',
		override: true,
		record: {'score': score}
	});
}

function SetCursor(cursor){
	$('canvas').css({'cursor':cursor});
}
