const lbcMap = {};

async function showleads(LeadID){
	if (showleads.showleadsLock) return;
		showleads.showleadsLock = true;

    const result = await gp.leaderboard.fetchScoped({
		tag: LeadID,
		variant: 'global',
		limit: 20,
		includeFields: ['score'],
		withMe: 'last'
	});
	
	showlb(result,LeadID);
}

function showlb(result, LeadID){
  const lb_data = $('<div class="leaderbord_data_rows">');
  const players = result.players;
  const myPid = result.player.id;

  for (let i = 0; i < players.length; i++) {
    const p = players[i];
     const avatar = p.avatar || 'avatar.jpg';
    let nick = p.name || (lang === 'ru' ? "Аноним" : "Anonymous");
    const score = p.score;

    lb_data.append(getRow([
      getColumn(['<span>№' + (i + 1) + ' </span>']),
      getColumn("<img src='" + avatar + "'>"),
      getColumn('<span>' + nick + '</span>').css(p.id === myPid ? { 'color': 'lime' } : {}),
      getColumn('<span>' + score + '</span>')
    ]));
  }

  const o = getOverlay();
  o.append(
    $('<div class="leaderbords">').append(getCurlb()),
    $('<p>').append(
      $('<button>').text(lang === 'ru' ? "Назад" : "Back").click(function () {
        $('.overlay').remove();
        showleads.showleadsLock = false;
      })
    )
  ).hide().show(200);

  function getCurlb() {
    return $('<div class="leaderbord">').append([
      $('<h3>').text(lang == 'ru' ? leadRu : leadEn),
      $('<div class="leaderbord_data">').append(lb_data)
    ]);
  }

  function getRow(data) {
    return $('<div class="row">').append(data);
  }

  function getColumn(data) {
    return $('<div class="col">').append(data);
  }
}

function timeToString(val) {
  const mm = Math.floor(val / 60);
  const ss = val % 60;

  const mmStr = mm < 10 ? "0" + mm : mm.toString();
  const ssStr = ss < 10 ? "0" + ss : ss.toString();

  return mmStr + " : " + ssStr;
}

var gp = null;
function onGPInit(gp){
	window.gp = gp;
}

function shareOnClick(){
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

  if(window.ndk!=null){
   ndk.getLeaderboards().then(lb => {
       window.lb = lb;
   });

   ndk.features.LoadingAPI?.ready();
   }
   else if(window.gp!=null)
    gp.gameStart();

   window.WorldLoaded = function(){

   };
}

function ScoreToLead(lead, score){
	//if(window.lb != null) window.lb.setLeaderboardScore(lead, parseInt(score));
		gp.leaderboard.publishRecord({
		tag: lead,
		variant: 'global',
		override: true,
		record: {'score': score}
	});
}

function ScoreToLeadD(lead, score){
	setTimeout(()=>{
    ScoreToLead(lead,score);
  },4000);
}

function SetCursor(cursor){
	$('canvas').css({'cursor':cursor});
}
