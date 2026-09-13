const ranks = [{ru:'Рядовой',en:'Recruit',xp:0},{ru:'Ефрейтор',en:'Gefreiter',xp:30},{ru:'Капрал',en:'Corporal',xp:70},{ru:'Мастер капрал',en:'Master Corporal',xp:150},{ru:'Сержант',en:'Sergeant',xp:370},{ru:'Штаб сержант',en:'Staff Sergeant',xp:710},{ru:'Младший сержант',en:'Master Sergeant',xp:1230},{ru:'Первый сержант',en:'First Sergeant',xp:2000},{ru:'Прапорщик',en:'Sergeant-Major',xp:2500},{ru:'Офицер I',en:'Officer I',xp:2900},{ru:'Офицер II',en:'Officer II',xp:4100},{ru:'Офицер III',en:'Officer III',xp:5700},{ru:'Офицер IV',en:'Officer IV',xp:7600},{ru:'Офицер V',en:'Officer V',xp:9800},{ru:'Младший лейтенант',en:'Third Lieutenant',xp:12500},{ru:'Лейтинант',en:'Second Lieutenant',xp:15600},{ru:'Старший лейтенант',en:'First Lieutenant',xp:19200},{ru:'Капитан',en:'Captain',xp:23300},{ru:'Майор',en:'Major',xp:28000},{ru:'Подполковник',en:'Lieutenant Colonel',xp:33200},{ru:'Полковник',en:'Colonel',xp:39000},{ru:'Бригадир',en:'Brigadier',xp:45500},{ru:'Генерал-майор',en:'Major General',xp:52700},{ru:'Генерал-лейтенант',en:'Lieutenant General',xp:60600},{ru:'Генерал',en:'General',xp:80000},{ru:'Маршал',en:'Marshal',xp:100000}];

function getRankByScore(s){
  s = parseInt(s);
  const c = ranks.length;
  let cr = null;
  for(var i = 0; i < c; i++){
    const rank = ranks[i];
    if(rank.xp > s){
      break;
    }
    cr = rank;
  }
  if(cr.img == null){
    cr.img = $('<img>').attr('src','Ranks/' + i + '.png');
  }
  return cr;
}

async function showleads(LeadID){
  if (showleads.showleadsLock) return;
    showleads.showleadsLock = true;

    const result = await gp.leaderboard.fetchScoped({
		tag: LeadID,
		variant: 'global',
		limit: 20,
		includeFields: [gflb(LeadID)],
		withMe: 'last'
	});
	
	showlb(result,LeadID);
}

function showlb(result, LeadID){
  const lb_data = $('<div class="leaderbord_data_rows">');
  const players = result.players;
  const myPid = result.player.id;

  let disp = 0;

  const noTime = LeadID == 'lead';
  const ffff = gflb(LeadID);

  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    const avatar = p.avatar || 'avatar.jpg';
    let nick = p.name || (lang === 'ru' ? "Аноним" : "Anonymous");
	
	if(p[ffff] == 999999){
		continue;
	}
	
	disp++;
    const score = noTime ? p[ffff] : timeToString(p[ffff]);

    if(noTime){
      const rank = getRankByScore(score);
      lb_data.append(getRow([
        getColumn(['<span>№'+parseInt(i+1)+' </span>',$('<span>').text(lang == 'ru' ? rank.ru : rank.en)]),
        getColumn([rank.img.clone(),"<img src='"+avatar+"'>"]),
        getColumn('<span>' + nick + '</span>').css(p.id === myPid ? { 'color': 'lime' } : {}),
        getColumn('<span>' + score + '</span>')
      ]));
    } else {
      lb_data.append(getRow([
        getColumn(['<span>№' + (i + 1) + ' </span>']),
        getColumn("<img src='" + avatar + "'>"),
        getColumn('<span>' + nick + '</span>').css(p.id === myPid ? { 'color': 'lime' } : {}),
        getColumn('<span>' + score + '</span>')
      ]));
    }
  }
  
  if (disp === 0) {
    lb_data.html(lang === 'ru' ? "<p><center>Пусто</center></p>" : "<p><center>Empty</center></p>");
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
      $('<h3>').text(lang === 'ru' ? getLeadNameRu(LeadID) : getLeadNameEn(LeadID)),
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

// Пример функций для отображения названия лидерборда
function getLeadNameRu(id) {
  const names = {
    lead: "Лучшие игроки",
    attack: "Лучшие штурмовики",
    defence: "Лучшие защитники"
  };
  return names[id] || "Лидерборд";
}

function getLeadNameEn(id) {
  const names = {
    lead: "The best players",
    attack: "The best stormtroopers",
    defence: "The best defenders"
  };
  return names[id] || "Leaderboard";
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

function getPushObj(lead, score){
	if(lead == 'lead'){
		return {score: score};
	} else {
		return {time: score};
	}
}

function gflb(lead){
	if(lead == 'lead'){
		return 'score';
	} else {
		return 'time';
	}
}

function ScoreToLead(lead, score){
	//if(window.lb != null) window.lb.setLeaderboardScore(lead, parseInt(score));
		gp.leaderboard.publishRecord({
		tag: lead,
		variant: 'global',
		override: true,
		record: getPushObj(lead,score)
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
