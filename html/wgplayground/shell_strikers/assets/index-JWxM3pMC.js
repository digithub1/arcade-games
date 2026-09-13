(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const z={bazooka:{name:"Bazooka",damage:45,radius:45,ammo:1/0},grenade:{name:"Grenade",damage:50,radius:55,ammo:5},shotgun:{name:"Shotgun",damage:25,radius:20,ammo:3},airstrike:{name:"Airstrike",damage:35,radius:35,ammo:2},dynamite:{name:"Dynamite",damage:80,radius:80,ammo:1}},C=[{id:1,name:"First Steps",map:"meadow",enemyCount:2,playerCount:3,aiSkill:.35,enemyHealth:80,playerHealth:100,description:"Learn the basics of combat",reward:"Level 2 Unlocked",unlocked:!0},{id:2,name:"Spring Offensive",map:"meadow",enemyCount:3,playerCount:3,aiSkill:.45,enemyHealth:100,playerHealth:100,description:"The enemy strengthens their ranks",reward:"Level 3 Unlocked",unlocked:!1},{id:3,name:"City Ruins",map:"city",enemyCount:3,playerCount:3,aiSkill:.55,enemyHealth:100,playerHealth:100,description:"Fight in the city rubble",reward:"Level 4 Unlocked",unlocked:!1},{id:4,name:"Desert Storm",map:"desert",enemyCount:3,playerCount:3,aiSkill:.6,enemyHealth:110,playerHealth:100,description:"Enemy has terrain advantage",reward:"Level 5 Unlocked",unlocked:!1},{id:5,name:"Elite Squad",map:"city",enemyCount:4,playerCount:3,aiSkill:.7,enemyHealth:100,playerHealth:100,description:"Face elite soldiers",reward:"Level 6 Unlocked",unlocked:!1},{id:6,name:"Surrounded",map:"meadow",enemyCount:4,playerCount:4,aiSkill:.75,enemyHealth:120,playerHealth:100,description:"Outnumbered, fight smart",reward:"Level 7 Unlocked",unlocked:!1},{id:7,name:"Last Stand",map:"desert",enemyCount:4,playerCount:3,aiSkill:.8,enemyHealth:130,playerHealth:110,description:"Enemy stronger than ever",reward:"Level 8 Unlocked",unlocked:!1},{id:8,name:"Battle for the City",map:"city",enemyCount:5,playerCount:4,aiSkill:.85,enemyHealth:120,playerHealth:100,description:"The decisive battle",reward:"Finale Unlocked",unlocked:!1},{id:9,name:"FINALE: Armageddon",map:"desert",enemyCount:5,playerCount:4,aiSkill:.92,enemyHealth:150,playerHealth:120,description:"The final battle for freedom!",reward:"Congratulations! Game Complete!",unlocked:!1}],B=[{primary:"#dc2626",secondary:"#991b1b",light:"#f87171",glow:"rgba(220, 38, 38, 0.5)",name:"RED ARMY"},{primary:"#2563eb",secondary:"#1d4ed8",light:"#60a5fa",glow:"rgba(37, 99, 235, 0.5)",name:"BLUE LEGION"}],O=[["Blaze","Rocket","Fury","Thunder"],["Shadow","Phantom","Ninja","Storm"]],q=["helmet","bandana","cap","beret"],D={en:{title:"SHELL STRIKERS",subtitle:"Artillery Combat",campaign:"CAMPAIGN",quickPlay:"QUICK PLAY",selectMission:"SELECT MISSION",selectMissionSubtitle:"Defeat enemies and advance to the next level",level:"LEVEL",backToMenu:"BACK TO MENU",back:"BACK",play:"PLAY",quickPlayTitle:"QUICK PLAY",selectMapSubtitle:"Select a map for quick battle",greenMeadow:"Green Meadow",greenMeadowDesc:"Classic battle on green hills",ruinedCity:"Ruined City",ruinedCityDesc:"Fight among city ruins",desertDunes:"Desert Dunes",desertDunesDesc:"War in the scorching desert",victory:"VICTORY!",defeat:"DEFEAT",nextLevel:"NEXT LEVEL",retry:"RETRY",menu:"MENU",levelUnlocked:"Level {0} Unlocked!",allLevelsComplete:"You completed all levels!",tryAgain:"Try again!",watchAdForAirstrike:"📺 WATCH AD FOR AIRSTRIKE",airstrikeEarned:"+1 Airstrike earned!",redArmy:"RED ARMY",blueLegion:"BLUE LEGION",turnSuffix:"'s Turn",wind:"WIND",power:"POWER",fire:"FIRE",move:"Move",aim:"Aim",weapons:"Weapons",hintMove:"Move",hintAim:"Aim",hintFire:"Fire",hintWeapons:"Weapons",wins:"WINS!",playAgain:"PLAY AGAIN",levelNames:["First Steps","Spring Offensive","City Ruins","Desert Storm","Elite Squad","Surrounded","Last Stand","Battle for the City","FINALE: Armageddon"],levelDescriptions:["Learn the basics of combat","The enemy strengthens their ranks","Fight in the city rubble","Enemy has terrain advantage","Face elite soldiers","Outnumbered, fight smart","Enemy stronger than ever","The decisive battle","The final battle for freedom!"],levelRewards:["Level 2 Unlocked","Level 3 Unlocked","Level 4 Unlocked","Level 5 Unlocked","Level 6 Unlocked","Level 7 Unlocked","Level 8 Unlocked","Finale Unlocked","Congratulations! Game Complete!"]},ru:{title:"SHELL STRIKERS",subtitle:"Артиллерийский бой",campaign:"КАМПАНИЯ",quickPlay:"БЫСТРАЯ ИГРА",selectMission:"ВЫБОР МИССИИ",selectMissionSubtitle:"Победите врагов и перейдите на следующий уровень",level:"УРОВЕНЬ",backToMenu:"В МЕНЮ",back:"НАЗАД",play:"ИГРАТЬ",quickPlayTitle:"БЫСТРАЯ ИГРА",selectMapSubtitle:"Выберите карту для быстрого боя",greenMeadow:"Зелёный луг",greenMeadowDesc:"Классический бой на зелёных холмах",ruinedCity:"Разрушенный город",ruinedCityDesc:"Сражение среди городских руин",desertDunes:"Пустынные дюны",desertDunesDesc:"Война в раскалённой пустыне",victory:"ПОБЕДА!",defeat:"ПОРАЖЕНИЕ",nextLevel:"ДАЛЕЕ",retry:"ЗАНОВО",menu:"МЕНЮ",levelUnlocked:"Уровень {0} открыт!",allLevelsComplete:"Вы прошли все уровни!",tryAgain:"Попробуйте ещё!",watchAdForAirstrike:"📺 РЕКЛАМА ЗА АВИАУДАР",airstrikeEarned:"+1 Авиаудар получен!",redArmy:"КРАСНАЯ АРМИЯ",blueLegion:"СИНИЙ ЛЕГИОН",turnSuffix:" ходит",wind:"ВЕТЕР",power:"СИЛА",fire:"ОГОНЬ",move:"Движение",aim:"Прицел",weapons:"Оружие",hintMove:"Движение",hintAim:"Прицел",hintFire:"Огонь",hintWeapons:"Оружие",wins:"ПОБЕДИЛА!",playAgain:"ИГРАТЬ СНОВА",levelNames:["Первые шаги","Весеннее наступление","Городские руины","Пустынная буря","Элитный отряд","В окружении","Последний рубеж","Битва за город","ФИНАЛ: Армагеддон"],levelDescriptions:["Изучите основы боя","Враг укрепляет свои ряды","Сражение в городских руинах","У врага преимущество местности","Противостояние элитным солдатам","В меньшинстве — сражайтесь умно","Враг сильнее, чем когда-либо","Решающая битва","Финальная битва за свободу!"],levelRewards:["Уровень 2 открыт","Уровень 3 открыт","Уровень 4 открыт","Уровень 5 открыт","Уровень 6 открыт","Уровень 7 открыт","Уровень 8 открыт","Финал открыт","Поздравляем! Игра пройдена!"]},de:{title:"SHELL STRIKERS",subtitle:"Artilleriekampf",campaign:"KAMPAGNE",quickPlay:"SCHNELLES SPIEL",selectMission:"MISSION WÄHLEN",selectMissionSubtitle:"Besiege Feinde und erreiche das nächste Level",level:"LEVEL",backToMenu:"ZURÜCK ZUM MENÜ",back:"ZURÜCK",play:"SPIELEN",quickPlayTitle:"SCHNELLES SPIEL",selectMapSubtitle:"Wähle eine Karte für schnellen Kampf",greenMeadow:"Grüne Wiese",greenMeadowDesc:"Klassischer Kampf auf grünen Hügeln",ruinedCity:"Zerstörte Stadt",ruinedCityDesc:"Kampf in Stadtruinen",desertDunes:"Wüstendünen",desertDunesDesc:"Krieg in der heißen Wüste",victory:"SIEG!",defeat:"NIEDERLAGE",nextLevel:"NÄCHSTES LEVEL",retry:"NOCHMAL",menu:"MENÜ",levelUnlocked:"Level {0} freigeschaltet!",allLevelsComplete:"Alle Level abgeschlossen!",tryAgain:"Nochmal versuchen!",watchAdForAirstrike:"📺 WERBUNG FÜR LUFTANGRIFF",airstrikeEarned:"+1 Luftangriff erhalten!",redArmy:"ROTE ARMEE",blueLegion:"BLAUE LEGION",turnSuffix:" ist dran",wind:"WIND",power:"KRAFT",fire:"FEUER",move:"Bewegen",aim:"Zielen",weapons:"Waffen",hintMove:"Bewegen",hintAim:"Zielen",hintFire:"Feuer",hintWeapons:"Waffen",wins:"GEWINNT!",playAgain:"NOCHMAL SPIELEN",levelNames:["Erste Schritte","Frühlingsoffensive","Stadtruinen","Wüstensturm","Elitetrupp","Umzingelt","Letztes Gefecht","Kampf um die Stadt","FINALE: Armageddon"],levelDescriptions:["Lerne die Grundlagen des Kampfes","Der Feind verstärkt seine Reihen","Kampf in den Stadtruinen","Feind hat Geländevorteil","Stelle dich Elitesoldaten","In Unterzahl, kämpfe klug","Feind stärker denn je","Die entscheidende Schlacht","Der letzte Kampf für die Freiheit!"],levelRewards:["Level 2 freigeschaltet","Level 3 freigeschaltet","Level 4 freigeschaltet","Level 5 freigeschaltet","Level 6 freigeschaltet","Level 7 freigeschaltet","Level 8 freigeschaltet","Finale freigeschaltet","Glückwunsch! Spiel abgeschlossen!"]},tr:{title:"SHELL STRIKERS",subtitle:"Topçu Savaşı",campaign:"KAMPANYA",quickPlay:"HIZLI OYUN",selectMission:"GÖREV SEÇ",selectMissionSubtitle:"Düşmanları yen ve sonraki seviyeye geç",level:"SEVİYE",backToMenu:"MENÜYE DÖN",back:"GERİ",play:"OYNA",quickPlayTitle:"HIZLI OYUN",selectMapSubtitle:"Hızlı savaş için harita seç",greenMeadow:"Yeşil Çayır",greenMeadowDesc:"Yeşil tepelerde klasik savaş",ruinedCity:"Yıkık Şehir",ruinedCityDesc:"Şehir harabeleri arasında savaş",desertDunes:"Çöl Kumulları",desertDunesDesc:"Kavurucu çölde savaş",victory:"ZAFER!",defeat:"YENİLGİ",nextLevel:"SONRAKİ SEVİYE",retry:"TEKRAR DENE",menu:"MENÜ",levelUnlocked:"Seviye {0} Açıldı!",allLevelsComplete:"Tüm seviyeleri tamamladın!",tryAgain:"Tekrar dene!",watchAdForAirstrike:"📺 HAVA SALDIRISI İÇİN REKLAM İZLE",airstrikeEarned:"+1 Hava saldırısı kazanıldı!",redArmy:"KIRMIZI ORDU",blueLegion:"MAVİ LEJYON",turnSuffix:" oynuyor",wind:"RÜZGAR",power:"GÜÇ",fire:"ATEŞ",move:"Hareket",aim:"Nişan",weapons:"Silahlar",hintMove:"Hareket",hintAim:"Nişan",hintFire:"Ateş",hintWeapons:"Silahlar",wins:"KAZANDI!",playAgain:"TEKRAR OYNA",levelNames:["İlk Adımlar","Bahar Taarruzu","Şehir Harabeleri","Çöl Fırtınası","Elit Birlik","Kuşatma Altında","Son Direniş","Şehir Savaşı","FİNAL: Kıyamet"],levelDescriptions:["Savaşın temellerini öğren","Düşman saflarını güçlendiriyor","Şehir harabelerinde savaş","Düşmanın arazi avantajı var","Elit askerlerle yüzleş","Sayıca az, akıllıca savaş","Düşman her zamankinden güçlü","Belirleyici savaş","Özgürlük için son savaş!"],levelRewards:["Seviye 2 Açıldı","Seviye 3 Açıldı","Seviye 4 Açıldı","Seviye 5 Açıldı","Seviye 6 Açıldı","Seviye 7 Açıldı","Seviye 8 Açıldı","Final Açıldı","Tebrikler! Oyun Tamamlandı!"]},ja:{title:"SHELL STRIKERS",subtitle:"砲撃戦",campaign:"キャンペーン",quickPlay:"クイックプレイ",selectMission:"ミッション選択",selectMissionSubtitle:"敵を倒して次のレベルへ進め",level:"レベル",backToMenu:"メニューに戻る",back:"戻る",play:"プレイ",quickPlayTitle:"クイックプレイ",selectMapSubtitle:"クイックバトル用のマップを選択",greenMeadow:"緑の草原",greenMeadowDesc:"緑の丘での古典的な戦い",ruinedCity:"廃墟都市",ruinedCityDesc:"都市の廃墟での戦闘",desertDunes:"砂漠の砂丘",desertDunesDesc:"灼熱の砂漠での戦争",victory:"勝利！",defeat:"敗北",nextLevel:"次のレベル",retry:"リトライ",menu:"メニュー",levelUnlocked:"レベル{0}解放！",allLevelsComplete:"全レベルクリア！",tryAgain:"もう一度！",watchAdForAirstrike:"📺 広告で空爆獲得",airstrikeEarned:"+1 空爆獲得！",redArmy:"レッドアーミー",blueLegion:"ブルーレギオン",turnSuffix:"のターン",wind:"風",power:"パワー",fire:"発射",move:"移動",aim:"照準",weapons:"武器",hintMove:"移動",hintAim:"照準",hintFire:"発射",hintWeapons:"武器",wins:"勝利！",playAgain:"もう一度プレイ",levelNames:["最初の一歩","春の攻勢","都市廃墟","砂漠の嵐","エリート部隊","包囲","最後の抵抗","都市の戦い","フィナーレ：アルマゲドン"],levelDescriptions:["戦闘の基礎を学ぶ","敵が戦力を強化","都市の瓦礫で戦う","敵に地形の有利あり","エリート兵と対峙","数で劣勢、賢く戦え","敵がかつてないほど強力","決定的な戦い","自由のための最終決戦！"],levelRewards:["レベル2解放","レベル3解放","レベル4解放","レベル5解放","レベル6解放","レベル7解放","レベル8解放","フィナーレ解放","おめでとう！ゲームクリア！"]},ko:{title:"SHELL STRIKERS",subtitle:"포격전",campaign:"캠페인",quickPlay:"빠른 게임",selectMission:"미션 선택",selectMissionSubtitle:"적을 물리치고 다음 레벨로 진행하세요",level:"레벨",backToMenu:"메뉴로 돌아가기",back:"뒤로",play:"플레이",quickPlayTitle:"빠른 게임",selectMapSubtitle:"빠른 전투를 위한 맵 선택",greenMeadow:"푸른 초원",greenMeadowDesc:"푸른 언덕에서의 클래식 전투",ruinedCity:"폐허 도시",ruinedCityDesc:"도시 폐허에서의 전투",desertDunes:"사막 언덕",desertDunesDesc:"뜨거운 사막에서의 전쟁",victory:"승리!",defeat:"패배",nextLevel:"다음 레벨",retry:"재시도",menu:"메뉴",levelUnlocked:"레벨 {0} 해금!",allLevelsComplete:"모든 레벨 완료!",tryAgain:"다시 시도하세요!",watchAdForAirstrike:"📺 광고 보고 공습 얻기",airstrikeEarned:"+1 공습 획득!",redArmy:"레드 아미",blueLegion:"블루 레기온",turnSuffix:" 차례",wind:"바람",power:"파워",fire:"발사",move:"이동",aim:"조준",weapons:"무기",hintMove:"이동",hintAim:"조준",hintFire:"발사",hintWeapons:"무기",wins:"승리!",playAgain:"다시 플레이",levelNames:["첫 걸음","봄의 공세","도시 폐허","사막의 폭풍","엘리트 부대","포위됨","최후의 저항","도시 전투","피날레: 아마겟돈"],levelDescriptions:["전투의 기초를 배우세요","적이 전력을 강화합니다","도시 잔해에서 싸우세요","적에게 지형 이점이 있습니다","엘리트 병사들과 대면","수적 열세, 현명하게 싸우세요","적이 그 어느 때보다 강력합니다","결정적인 전투","자유를 위한 최후의 전투!"],levelRewards:["레벨 2 해금","레벨 3 해금","레벨 4 해금","레벨 5 해금","레벨 6 해금","레벨 7 해금","레벨 8 해금","피날레 해금","축하합니다! 게임 완료!"]},pt:{title:"SHELL STRIKERS",subtitle:"Combate de Artilharia",campaign:"CAMPANHA",quickPlay:"JOGO RÁPIDO",selectMission:"SELECIONAR MISSÃO",selectMissionSubtitle:"Derrote inimigos e avance para o próximo nível",level:"NÍVEL",backToMenu:"VOLTAR AO MENU",back:"VOLTAR",play:"JOGAR",quickPlayTitle:"JOGO RÁPIDO",selectMapSubtitle:"Selecione um mapa para batalha rápida",greenMeadow:"Prado Verde",greenMeadowDesc:"Batalha clássica nas colinas verdes",ruinedCity:"Cidade em Ruínas",ruinedCityDesc:"Lute entre as ruínas da cidade",desertDunes:"Dunas do Deserto",desertDunesDesc:"Guerra no deserto escaldante",victory:"VITÓRIA!",defeat:"DERROTA",nextLevel:"PRÓXIMO NÍVEL",retry:"TENTAR NOVAMENTE",menu:"MENU",levelUnlocked:"Nível {0} Desbloqueado!",allLevelsComplete:"Você completou todos os níveis!",tryAgain:"Tente novamente!",watchAdForAirstrike:"📺 ASSISTA ANÚNCIO POR ATAQUE AÉREO",airstrikeEarned:"+1 Ataque aéreo ganho!",redArmy:"EXÉRCITO VERMELHO",blueLegion:"LEGIÃO AZUL",turnSuffix:" joga",wind:"VENTO",power:"FORÇA",fire:"FOGO",move:"Mover",aim:"Mirar",weapons:"Armas",hintMove:"Mover",hintAim:"Mirar",hintFire:"Atirar",hintWeapons:"Armas",wins:"VENCEU!",playAgain:"JOGAR NOVAMENTE",levelNames:["Primeiros Passos","Ofensiva da Primavera","Ruínas da Cidade","Tempestade no Deserto","Esquadrão de Elite","Cercados","Última Resistência","Batalha pela Cidade","FINAL: Armageddon"],levelDescriptions:["Aprenda o básico do combate","O inimigo fortalece suas fileiras","Lute nos escombros da cidade","Inimigo tem vantagem de terreno","Enfrente soldados de elite","Em desvantagem numérica, lute com inteligência","Inimigo mais forte do que nunca","A batalha decisiva","A batalha final pela liberdade!"],levelRewards:["Nível 2 Desbloqueado","Nível 3 Desbloqueado","Nível 4 Desbloqueado","Nível 5 Desbloqueado","Nível 6 Desbloqueado","Nível 7 Desbloqueado","Nível 8 Desbloqueado","Final Desbloqueado","Parabéns! Jogo Completo!"]},zh:{title:"SHELL STRIKERS",subtitle:"炮击战",campaign:"战役模式",quickPlay:"快速游戏",selectMission:"选择任务",selectMissionSubtitle:"击败敌人并进入下一关",level:"关卡",backToMenu:"返回菜单",back:"返回",play:"开始",quickPlayTitle:"快速游戏",selectMapSubtitle:"选择快速战斗地图",greenMeadow:"绿色草原",greenMeadowDesc:"绿色山丘上的经典战斗",ruinedCity:"废墟城市",ruinedCityDesc:"在城市废墟中战斗",desertDunes:"沙漠沙丘",desertDunesDesc:"在炎热沙漠中的战争",victory:"胜利！",defeat:"失败",nextLevel:"下一关",retry:"重试",menu:"菜单",levelUnlocked:"第{0}关已解锁！",allLevelsComplete:"你完成了所有关卡！",tryAgain:"再试一次！",watchAdForAirstrike:"📺 观看广告获得空袭",airstrikeEarned:"+1 空袭已获得！",redArmy:"红色军团",blueLegion:"蓝色军团",turnSuffix:"的回合",wind:"风力",power:"力量",fire:"开火",move:"移动",aim:"瞄准",weapons:"武器",hintMove:"移动",hintAim:"瞄准",hintFire:"开火",hintWeapons:"武器",wins:"获胜！",playAgain:"再玩一次",levelNames:["初步","春季攻势","城市废墟","沙漠风暴","精英小队","被包围","最后抵抗","城市之战","终章：末日决战"],levelDescriptions:["学习战斗基础","敌人加强了他们的力量","在城市废墟中战斗","敌人拥有地形优势","面对精英士兵","以少敌多，智取胜","敌人前所未有的强大","决定性的战斗","为自由而战的最终决战！"],levelRewards:["第2关已解锁","第3关已解锁","第4关已解锁","第5关已解锁","第6关已解锁","第7关已解锁","第8关已解锁","终章已解锁","恭喜！游戏完成！"]},es:{title:"SHELL STRIKERS",subtitle:"Combate de Artillería",campaign:"CAMPAÑA",quickPlay:"JUEGO RÁPIDO",selectMission:"SELECCIONAR MISIÓN",selectMissionSubtitle:"Derrota enemigos y avanza al siguiente nivel",level:"NIVEL",backToMenu:"VOLVER AL MENÚ",back:"ATRÁS",play:"JUGAR",quickPlayTitle:"JUEGO RÁPIDO",selectMapSubtitle:"Selecciona un mapa para batalla rápida",greenMeadow:"Pradera Verde",greenMeadowDesc:"Batalla clásica en colinas verdes",ruinedCity:"Ciudad en Ruinas",ruinedCityDesc:"Lucha entre ruinas de la ciudad",desertDunes:"Dunas del Desierto",desertDunesDesc:"Guerra en el desierto ardiente",victory:"¡VICTORIA!",defeat:"DERROTA",nextLevel:"SIGUIENTE NIVEL",retry:"REINTENTAR",menu:"MENÚ",levelUnlocked:"¡Nivel {0} Desbloqueado!",allLevelsComplete:"¡Completaste todos los niveles!",tryAgain:"¡Inténtalo de nuevo!",watchAdForAirstrike:"📺 VER ANUNCIO POR ATAQUE AÉREO",airstrikeEarned:"+1 ¡Ataque aéreo ganado!",redArmy:"EJÉRCITO ROJO",blueLegion:"LEGIÓN AZUL",turnSuffix:" juega",wind:"VIENTO",power:"PODER",fire:"FUEGO",move:"Mover",aim:"Apuntar",weapons:"Armas",hintMove:"Mover",hintAim:"Apuntar",hintFire:"Disparar",hintWeapons:"Armas",wins:"¡GANA!",playAgain:"JUGAR DE NUEVO",levelNames:["Primeros Pasos","Ofensiva de Primavera","Ruinas de la Ciudad","Tormenta del Desierto","Escuadrón Élite","Rodeados","Última Resistencia","Batalla por la Ciudad","FINAL: Armagedón"],levelDescriptions:["Aprende lo básico del combate","El enemigo fortalece sus filas","Lucha en los escombros de la ciudad","El enemigo tiene ventaja de terreno","Enfrenta soldados de élite","En inferioridad, lucha inteligente","Enemigo más fuerte que nunca","La batalla decisiva","¡La batalla final por la libertad!"],levelRewards:["Nivel 2 Desbloqueado","Nivel 3 Desbloqueado","Nivel 4 Desbloqueado","Nivel 5 Desbloqueado","Nivel 6 Desbloqueado","Nivel 7 Desbloqueado","Nivel 8 Desbloqueado","Final Desbloqueado","¡Felicitaciones! ¡Juego Completo!"]},it:{title:"SHELL STRIKERS",subtitle:"Combattimento d'Artiglieria",campaign:"CAMPAGNA",quickPlay:"PARTITA VELOCE",selectMission:"SELEZIONA MISSIONE",selectMissionSubtitle:"Sconfiggi i nemici e avanza al livello successivo",level:"LIVELLO",backToMenu:"TORNA AL MENU",back:"INDIETRO",play:"GIOCA",quickPlayTitle:"PARTITA VELOCE",selectMapSubtitle:"Seleziona una mappa per battaglia veloce",greenMeadow:"Prato Verde",greenMeadowDesc:"Battaglia classica sulle colline verdi",ruinedCity:"Città in Rovina",ruinedCityDesc:"Combatti tra le rovine della città",desertDunes:"Dune del Deserto",desertDunesDesc:"Guerra nel deserto rovente",victory:"VITTORIA!",defeat:"SCONFITTA",nextLevel:"LIVELLO SUCCESSIVO",retry:"RIPROVA",menu:"MENU",levelUnlocked:"Livello {0} Sbloccato!",allLevelsComplete:"Hai completato tutti i livelli!",tryAgain:"Riprova!",watchAdForAirstrike:"📺 GUARDA PUBBLICITÀ PER ATTACCO AEREO",airstrikeEarned:"+1 Attacco aereo ottenuto!",redArmy:"ESERCITO ROSSO",blueLegion:"LEGIONE BLU",turnSuffix:" gioca",wind:"VENTO",power:"POTENZA",fire:"FUOCO",move:"Muovi",aim:"Mira",weapons:"Armi",hintMove:"Muovi",hintAim:"Mira",hintFire:"Spara",hintWeapons:"Armi",wins:"VINCE!",playAgain:"GIOCA ANCORA",levelNames:["Primi Passi","Offensiva di Primavera","Rovine della Città","Tempesta del Deserto","Squadra d'Élite","Circondati","Ultima Resistenza","Battaglia per la Città","FINALE: Armageddon"],levelDescriptions:["Impara le basi del combattimento","Il nemico rafforza le sue file","Combatti tra le macerie della città","Il nemico ha vantaggio territoriale","Affronta soldati d'élite","In inferiorità numerica, combatti con astuzia","Nemico più forte che mai","La battaglia decisiva","La battaglia finale per la libertà!"],levelRewards:["Livello 2 Sbloccato","Livello 3 Sbloccato","Livello 4 Sbloccato","Livello 5 Sbloccato","Livello 6 Sbloccato","Livello 7 Sbloccato","Livello 8 Sbloccato","Finale Sbloccato","Congratulazioni! Gioco Completato!"]},fr:{title:"SHELL STRIKERS",subtitle:"Combat d'Artillerie",campaign:"CAMPAGNE",quickPlay:"PARTIE RAPIDE",selectMission:"SÉLECTIONNER MISSION",selectMissionSubtitle:"Vainquez les ennemis et passez au niveau suivant",level:"NIVEAU",backToMenu:"RETOUR AU MENU",back:"RETOUR",play:"JOUER",quickPlayTitle:"PARTIE RAPIDE",selectMapSubtitle:"Sélectionnez une carte pour un combat rapide",greenMeadow:"Prairie Verte",greenMeadowDesc:"Combat classique sur les collines vertes",ruinedCity:"Ville en Ruines",ruinedCityDesc:"Combattez parmi les ruines de la ville",desertDunes:"Dunes du Désert",desertDunesDesc:"Guerre dans le désert brûlant",victory:"VICTOIRE!",defeat:"DÉFAITE",nextLevel:"NIVEAU SUIVANT",retry:"RÉESSAYER",menu:"MENU",levelUnlocked:"Niveau {0} Débloqué!",allLevelsComplete:"Vous avez terminé tous les niveaux!",tryAgain:"Réessayez!",watchAdForAirstrike:"📺 REGARDER PUB POUR FRAPPE AÉRIENNE",airstrikeEarned:"+1 Frappe aérienne gagnée!",redArmy:"ARMÉE ROUGE",blueLegion:"LÉGION BLEUE",turnSuffix:" joue",wind:"VENT",power:"PUISSANCE",fire:"FEU",move:"Déplacer",aim:"Viser",weapons:"Armes",hintMove:"Déplacer",hintAim:"Viser",hintFire:"Tirer",hintWeapons:"Armes",wins:"GAGNE!",playAgain:"REJOUER",levelNames:["Premiers Pas","Offensive de Printemps","Ruines de la Ville","Tempête du Désert","Escouade d'Élite","Encerclés","Dernière Résistance","Bataille pour la Ville","FINALE: Armageddon"],levelDescriptions:["Apprenez les bases du combat","L'ennemi renforce ses rangs","Combattez dans les décombres de la ville","L'ennemi a l'avantage du terrain","Affrontez des soldats d'élite","En infériorité numérique, combattez intelligemment","Ennemi plus fort que jamais","La bataille décisive","La bataille finale pour la liberté!"],levelRewards:["Niveau 2 Débloqué","Niveau 3 Débloqué","Niveau 4 Débloqué","Niveau 5 Débloqué","Niveau 6 Débloqué","Niveau 7 Débloqué","Niveau 8 Débloqué","Finale Débloquée","Félicitations! Jeu Terminé!"]},ar:{title:"SHELL STRIKERS",subtitle:"قتال المدفعية",campaign:"الحملة",quickPlay:"لعبة سريعة",selectMission:"اختر المهمة",selectMissionSubtitle:"اهزم الأعداء وتقدم للمستوى التالي",level:"المستوى",backToMenu:"العودة للقائمة",back:"رجوع",play:"العب",quickPlayTitle:"لعبة سريعة",selectMapSubtitle:"اختر خريطة للمعركة السريعة",greenMeadow:"المرج الأخضر",greenMeadowDesc:"معركة كلاسيكية على التلال الخضراء",ruinedCity:"المدينة المدمرة",ruinedCityDesc:"قاتل بين أنقاض المدينة",desertDunes:"كثبان الصحراء",desertDunesDesc:"حرب في الصحراء الحارقة",victory:"نصر!",defeat:"هزيمة",nextLevel:"المستوى التالي",retry:"إعادة المحاولة",menu:"القائمة",levelUnlocked:"تم فتح المستوى {0}!",allLevelsComplete:"أكملت جميع المستويات!",tryAgain:"حاول مرة أخرى!",watchAdForAirstrike:"📺 شاهد إعلان للغارة الجوية",airstrikeEarned:"+1 غارة جوية!",redArmy:"الجيش الأحمر",blueLegion:"الفيلق الأزرق",turnSuffix:" يلعب",wind:"الرياح",power:"القوة",fire:"إطلاق",move:"تحرك",aim:"تصويب",weapons:"الأسلحة",hintMove:"تحرك",hintAim:"تصويب",hintFire:"إطلاق",hintWeapons:"الأسلحة",wins:"فاز!",playAgain:"العب مرة أخرى",levelNames:["الخطوات الأولى","هجوم الربيع","أنقاض المدينة","عاصفة الصحراء","الفرقة النخبة","محاصرون","المقاومة الأخيرة","معركة المدينة","النهاية: هرمجدون"],levelDescriptions:["تعلم أساسيات القتال","العدو يعزز صفوفه","قاتل في أنقاض المدينة","للعدو ميزة الأرض","واجه جنود النخبة","أقل عدداً، قاتل بذكاء","العدو أقوى من أي وقت","المعركة الحاسمة","المعركة الأخيرة للحرية!"],levelRewards:["تم فتح المستوى 2","تم فتح المستوى 3","تم فتح المستوى 4","تم فتح المستوى 5","تم فتح المستوى 6","تم فتح المستوى 7","تم فتح المستوى 8","تم فتح النهاية","تهانينا! اكتملت اللعبة!"]},hi:{title:"SHELL STRIKERS",subtitle:"तोपखाना युद्ध",campaign:"अभियान",quickPlay:"त्वरित खेल",selectMission:"मिशन चुनें",selectMissionSubtitle:"दुश्मनों को हराएं और अगले स्तर पर जाएं",level:"स्तर",backToMenu:"मेनू पर वापस",back:"वापस",play:"खेलें",quickPlayTitle:"त्वरित खेल",selectMapSubtitle:"त्वरित युद्ध के लिए मानचित्र चुनें",greenMeadow:"हरी घास का मैदान",greenMeadowDesc:"हरी पहाड़ियों पर क्लासिक युद्ध",ruinedCity:"खंडहर शहर",ruinedCityDesc:"शहर के खंडहरों में लड़ाई",desertDunes:"रेगिस्तान के टीले",desertDunesDesc:"तपती रेगिस्तान में युद्ध",victory:"जीत!",defeat:"हार",nextLevel:"अगला स्तर",retry:"पुनः प्रयास",menu:"मेनू",levelUnlocked:"स्तर {0} अनलॉक!",allLevelsComplete:"आपने सभी स्तर पूरे किए!",tryAgain:"फिर से कोशिश करें!",watchAdForAirstrike:"📺 हवाई हमले के लिए विज्ञापन देखें",airstrikeEarned:"+1 हवाई हमला मिला!",redArmy:"लाल सेना",blueLegion:"नीली सेना",turnSuffix:" की बारी",wind:"हवा",power:"शक्ति",fire:"फायर",move:"चलें",aim:"निशाना",weapons:"हथियार",hintMove:"चलें",hintAim:"निशाना",hintFire:"फायर",hintWeapons:"हथियार",wins:"जीता!",playAgain:"फिर से खेलें",levelNames:["पहला कदम","वसंत आक्रमण","शहर के खंडहर","रेगिस्तानी तूफान","एलीट दस्ता","घिरे हुए","अंतिम प्रतिरोध","शहर की लड़ाई","समापन: प्रलय"],levelDescriptions:["युद्ध की मूल बातें सीखें","दुश्मन अपनी ताकत बढ़ा रहा है","शहर के मलबे में लड़ें","दुश्मन को भूमि का फायदा","एलीट सैनिकों का सामना करें","कम संख्या में, समझदारी से लड़ें","दुश्मन पहले से कहीं ज्यादा मजबूत","निर्णायक युद्ध","स्वतंत्रता के लिए अंतिम युद्ध!"],levelRewards:["स्तर 2 अनलॉक","स्तर 3 अनलॉक","स्तर 4 अनलॉक","स्तर 5 अनलॉक","स्तर 6 अनलॉक","स्तर 7 अनलॉक","स्तर 8 अनलॉक","समापन अनलॉक","बधाई! खेल पूरा!"]},id:{title:"SHELL STRIKERS",subtitle:"Pertempuran Artileri",campaign:"KAMPANYE",quickPlay:"MAIN CEPAT",selectMission:"PILIH MISI",selectMissionSubtitle:"Kalahkan musuh dan maju ke level berikutnya",level:"LEVEL",backToMenu:"KEMBALI KE MENU",back:"KEMBALI",play:"MAIN",quickPlayTitle:"MAIN CEPAT",selectMapSubtitle:"Pilih peta untuk pertempuran cepat",greenMeadow:"Padang Rumput Hijau",greenMeadowDesc:"Pertempuran klasik di bukit hijau",ruinedCity:"Kota Reruntuhan",ruinedCityDesc:"Bertarung di reruntuhan kota",desertDunes:"Bukit Pasir Gurun",desertDunesDesc:"Perang di gurun yang terik",victory:"MENANG!",defeat:"KALAH",nextLevel:"LEVEL BERIKUTNYA",retry:"COBA LAGI",menu:"MENU",levelUnlocked:"Level {0} Terbuka!",allLevelsComplete:"Anda menyelesaikan semua level!",tryAgain:"Coba lagi!",watchAdForAirstrike:"📺 TONTON IKLAN UNTUK SERANGAN UDARA",airstrikeEarned:"+1 Serangan udara didapat!",redArmy:"TENTARA MERAH",blueLegion:"LEGIUN BIRU",turnSuffix:" bermain",wind:"ANGIN",power:"KEKUATAN",fire:"TEMBAK",move:"Gerak",aim:"Bidik",weapons:"Senjata",hintMove:"Gerak",hintAim:"Bidik",hintFire:"Tembak",hintWeapons:"Senjata",wins:"MENANG!",playAgain:"MAIN LAGI",levelNames:["Langkah Pertama","Serangan Musim Semi","Reruntuhan Kota","Badai Gurun","Pasukan Elite","Terkepung","Pertahanan Terakhir","Pertempuran untuk Kota","FINAL: Armageddon"],levelDescriptions:["Pelajari dasar pertempuran","Musuh memperkuat barisan","Bertarung di puing kota","Musuh punya keuntungan medan","Hadapi prajurit elite","Kalah jumlah, bertarung cerdas","Musuh lebih kuat dari sebelumnya","Pertempuran penentu","Pertempuran terakhir untuk kebebasan!"],levelRewards:["Level 2 Terbuka","Level 3 Terbuka","Level 4 Terbuka","Level 5 Terbuka","Level 6 Terbuka","Level 7 Terbuka","Level 8 Terbuka","Final Terbuka","Selamat! Game Selesai!"]}};let E="en";function M(){return E}function R(y){E=y}function f(y,...e){const t=D[E][y];return typeof t=="string"?t.replace(/\{(\d+)\}/g,(a,i)=>String(e[parseInt(i)]??"")):String(t)}function A(y,e){return D[E][y][e]||""}function I(y){const e=y.toLowerCase();return e==="ru"?"ru":e==="de"?"de":e==="tr"?"tr":e==="ja"?"ja":e==="ko"?"ko":e==="pt"?"pt":e==="zh"?"zh":e==="es"?"es":e==="it"?"it":e==="fr"?"fr":e==="ar"?"ar":e==="hi"?"hi":e==="id"?"id":e.startsWith("ru")?"ru":e.startsWith("de")?"de":e.startsWith("tr")?"tr":e.startsWith("ja")?"ja":e.startsWith("ko")?"ko":e.startsWith("pt")?"pt":e.startsWith("zh")?"zh":e.startsWith("es")?"es":e.startsWith("it")?"it":e.startsWith("fr")?"fr":e.startsWith("ar")?"ar":e.startsWith("hi")?"hi":e.startsWith("id")?"id":"en"}function F(){const y=window.gp;if(y&&y.language){E=I(y.language),console.log("Language initialized from GamePush SDK:",E,"(SDK language:",y.language,")");return}const e=navigator.language||navigator.userLanguage||"en";E=I(e),console.log("Language initialized from browser:",E,"(browser language:",e,")")}function U(y){E=y,localStorage.setItem("shellStrikers_language",y)}class W{audioContext=null;masterGain=null;enabled=!0;constructor(){this.initOnInteraction()}initOnInteraction(){const e=()=>{this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=.3,this.masterGain.connect(this.audioContext.destination)),this.audioContext.state==="suspended"&&this.audioContext.resume()};document.addEventListener("click",e,{once:!0}),document.addEventListener("touchstart",e,{once:!0}),document.addEventListener("keydown",e,{once:!0})}setEnabled(e){this.enabled=e}isEnabled(){return this.enabled}playShoot(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime,a=e.createBuffer(1,e.sampleRate*.1,e.sampleRate),i=a.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=(Math.random()*2-1)*Math.exp(-r/(e.sampleRate*.02));const n=e.createBufferSource();n.buffer=a;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1500;const l=e.createGain();l.gain.setValueAtTime(.5,t),l.gain.exponentialRampToValueAtTime(.01,t+.1),n.connect(o).connect(l).connect(this.masterGain),n.start(t),n.stop(t+.1)}playExplosion(e=1){if(!this.enabled||!this.audioContext||!this.masterGain)return;const t=this.audioContext,a=t.currentTime,i=.3+e*.2,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(150*e,a),n.frequency.exponentialRampToValueAtTime(30,a+i);const o=t.createGain();o.gain.setValueAtTime(.6,a),o.gain.exponentialRampToValueAtTime(.01,a+i),n.connect(o).connect(this.masterGain),n.start(a),n.stop(a+i);const l=t.createBuffer(1,t.sampleRate*i,t.sampleRate),r=l.getChannelData(0);for(let h=0;h<r.length;h++)r[h]=(Math.random()*2-1)*Math.exp(-h/(t.sampleRate*.1));const s=t.createBufferSource();s.buffer=l;const d=t.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(2e3,a),d.frequency.exponentialRampToValueAtTime(200,a+i);const c=t.createGain();c.gain.setValueAtTime(.4,a),c.gain.exponentialRampToValueAtTime(.01,a+i),s.connect(d).connect(c).connect(this.masterGain),s.start(a),s.stop(a+i)}playHit(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime,a=e.createOscillator();a.type="square",a.frequency.setValueAtTime(200,t),a.frequency.exponentialRampToValueAtTime(80,t+.15);const i=e.createGain();i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.01,t+.15),a.connect(i).connect(this.masterGain),a.start(t),a.stop(t+.15)}playJump(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime,a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(300,t),a.frequency.exponentialRampToValueAtTime(600,t+.1);const i=e.createGain();i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.01,t+.1),a.connect(i).connect(this.masterGain),a.start(t),a.stop(t+.1)}playVictory(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,n)=>{const o=e.createOscillator();o.type="triangle",o.frequency.value=i;const l=e.createGain(),r=t+n*.15;l.gain.setValueAtTime(0,r),l.gain.linearRampToValueAtTime(.3,r+.05),l.gain.exponentialRampToValueAtTime(.01,r+.4),o.connect(l).connect(this.masterGain),o.start(r),o.stop(r+.4)})}playDefeat(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime;[392,349.23,293.66,261.63].forEach((i,n)=>{const o=e.createOscillator();o.type="sawtooth",o.frequency.value=i;const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=800;const r=e.createGain(),s=t+n*.2;r.gain.setValueAtTime(.2,s),r.gain.exponentialRampToValueAtTime(.01,s+.3),o.connect(l).connect(r).connect(this.masterGain),o.start(s),o.stop(s+.3)})}playClick(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime,a=e.createOscillator();a.type="sine",a.frequency.value=800;const i=e.createGain();i.gain.setValueAtTime(.15,t),i.gain.exponentialRampToValueAtTime(.01,t+.05),a.connect(i).connect(this.masterGain),a.start(t),a.stop(t+.05)}playWeaponSwitch(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime,a=e.createOscillator();a.type="square",a.frequency.setValueAtTime(400,t),a.frequency.setValueAtTime(600,t+.03);const i=e.createGain();i.gain.setValueAtTime(.1,t),i.gain.exponentialRampToValueAtTime(.01,t+.06),a.connect(i).connect(this.masterGain),a.start(t),a.stop(t+.06)}playCharging(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime,a=e.createOscillator();a.type="sine",a.frequency.value=220;const i=e.createGain();i.gain.setValueAtTime(.08,t),i.gain.exponentialRampToValueAtTime(.01,t+.05),a.connect(i).connect(this.masterGain),a.start(t),a.stop(t+.05)}playSplash(){if(!this.enabled||!this.audioContext||!this.masterGain)return;const e=this.audioContext,t=e.currentTime,a=e.createBuffer(1,e.sampleRate*.3,e.sampleRate),i=a.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=(Math.random()*2-1)*Math.exp(-r/(e.sampleRate*.1));const n=e.createBufferSource();n.buffer=a;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=600,o.Q.value=1;const l=e.createGain();l.gain.setValueAtTime(.3,t),l.gain.exponentialRampToValueAtTime(.01,t+.3),n.connect(o).connect(l).connect(this.masterGain),n.start(t),n.stop(t+.3)}}const v=new W;class ${ctx;width;height;constructor(e,t,a){this.ctx=e,this.width=t,this.height=a}render(e){switch(e){case"meadow":this.renderMeadowBackground();break;case"city":this.renderCityBackground();break;case"desert":this.renderDesertBackground();break}}renderMeadowBackground(){const e=this.ctx,t=this.width,a=this.height,i=e.createLinearGradient(0,0,0,a);i.addColorStop(0,"#0c1445"),i.addColorStop(.15,"#1a237e"),i.addColorStop(.3,"#283593"),i.addColorStop(.45,"#5c6bc0"),i.addColorStop(.55,"#7986cb"),i.addColorStop(.65,"#ff8a65"),i.addColorStop(.75,"#ffab91"),i.addColorStop(.85,"#ffccbc"),i.addColorStop(1,"#fbe9e7"),e.fillStyle=i,e.fillRect(0,0,t,a),e.fillStyle="#fff";for(let c=0;c<300;c++){const h=Math.random()*t,p=Math.random()*a*.4,m=Math.random()*2.5+.5,u=Math.random();e.globalAlpha=u*.8+.2,e.beginPath(),e.arc(h,p,m,0,Math.PI*2),e.fill(),u>.8&&m>1.5&&(e.globalAlpha=u*.4,e.strokeStyle="#fff",e.lineWidth=.5,e.beginPath(),e.moveTo(h-m*3,p),e.lineTo(h+m*3,p),e.moveTo(h,p-m*3),e.lineTo(h,p+m*3),e.stroke())}e.globalAlpha=1;const n=t*.78,o=a*.58,l=e.createRadialGradient(n,o,0,n,o,400);l.addColorStop(0,"rgba(255, 200, 150, 0.6)"),l.addColorStop(.3,"rgba(255, 150, 100, 0.3)"),l.addColorStop(.6,"rgba(255, 100, 50, 0.1)"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.fillRect(n-400,o-400,800,800);const r=e.createRadialGradient(n,o,0,n,o,150);r.addColorStop(0,"#fffef0"),r.addColorStop(.3,"#fff5d4"),r.addColorStop(.6,"#ffcc80"),r.addColorStop(1,"rgba(255, 150, 50, 0)"),e.fillStyle=r,e.beginPath(),e.arc(n,o,150,0,Math.PI*2),e.fill();const s=e.createRadialGradient(n,o,0,n,o,70);s.addColorStop(0,"#ffffff"),s.addColorStop(.5,"#fffde7"),s.addColorStop(1,"#ffecb3"),e.fillStyle=s,e.beginPath(),e.arc(n,o,70,0,Math.PI*2),e.fill(),[{y:.45,color:"#1a1a2e",amplitude:100},{y:.5,color:"#252547",amplitude:80},{y:.55,color:"#2d2d5a",amplitude:70},{y:.6,color:"#3d3d6b",amplitude:60}].forEach((c,h)=>{const p=a*c.y;e.fillStyle=c.color,e.beginPath(),e.moveTo(0,a);for(let m=0;m<=t;m+=3){const u=Math.sin(m*.002+h)*c.amplitude,g=Math.sin(m*.005+h*2)*(c.amplitude*.5),b=Math.sin(m*.01+h*3)*(c.amplitude*.25),x=p+u+g+b;e.lineTo(m,x)}if(e.lineTo(t,a),e.fill(),h<2){e.fillStyle="rgba(255, 255, 255, 0.2)",e.beginPath();for(let m=0;m<=t;m+=50){const u=Math.sin(m*.002+h)*c.amplitude,g=Math.sin(m*.005+h*2)*(c.amplitude*.5),b=p+u+g,x=20+Math.random()*15;e.moveTo(m-20,b+10),e.lineTo(m,b-x),e.lineTo(m+20,b+10)}e.fill()}})}renderCityBackground(){const e=this.ctx,t=this.width,a=this.height,i=e.createLinearGradient(0,0,0,a);i.addColorStop(0,"#0a0a0f"),i.addColorStop(.2,"#1a1a25"),i.addColorStop(.4,"#2a2535"),i.addColorStop(.6,"#3a3040"),i.addColorStop(.8,"#4a3a45"),i.addColorStop(1,"#5a4550"),e.fillStyle=i,e.fillRect(0,0,t,a);for(let r=0;r<15;r++){const s=e.createRadialGradient(Math.random()*t,Math.random()*a*.6,0,Math.random()*t,Math.random()*a*.6,200+Math.random()*200);s.addColorStop(0,"rgba(60, 50, 50, 0.3)"),s.addColorStop(1,"transparent"),e.fillStyle=s,e.fillRect(0,0,t,a)}const n=t*.8,o=a*.25,l=e.createRadialGradient(n,o,0,n,o,200);l.addColorStop(0,"rgba(200, 80, 60, 0.5)"),l.addColorStop(.5,"rgba(150, 50, 40, 0.2)"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.arc(n,o,200,0,Math.PI*2),e.fill(),e.fillStyle="#c85a50",e.beginPath(),e.arc(n,o,60,0,Math.PI*2),e.fill(),e.fillStyle="rgba(100, 40, 35, 0.5)",e.beginPath(),e.arc(n-20,o-15,12,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(n+15,o+10,8,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(n-5,o+20,10,0,Math.PI*2),e.fill(),e.fillStyle="#1a1520";for(let r=0;r<25;r++){const s=r*80+Math.random()*40,d=40+Math.random()*60,c=150+Math.random()*250,h=a*.5-c+Math.random()*50;e.beginPath(),e.rect(s,h,d,c+a),e.fill(),Math.random()>.3&&(e.beginPath(),e.moveTo(s,h),e.lineTo(s+d*.3,h-20-Math.random()*30),e.lineTo(s+d*.6,h+10),e.lineTo(s+d,h-Math.random()*20),e.lineTo(s+d,h),e.fill());for(let p=h+20;p<a*.6;p+=25)for(let m=s+8;m<s+d-8;m+=15)Math.random()>.5&&(e.fillStyle=Math.random()>.8?"rgba(255, 180, 100, 0.6)":"rgba(30, 25, 35, 0.8)",e.fillRect(m,p,8,12));e.fillStyle="#1a1520"}e.fillStyle="#252030";for(let r=0;r<20;r++){const s=r*100+Math.random()*50-50,d=60+Math.random()*80,c=100+Math.random()*200,h=a*.55-c;e.fillStyle="#252030",e.fillRect(s,h,d,c+a),e.fillStyle="#1a1520";for(let p=0;p<3;p++){const m=s+Math.random()*d,u=h+Math.random()*c*.7;e.beginPath(),e.arc(m,u,5+Math.random()*15,0,Math.PI*2),e.fill()}}for(let r=0;r<8;r++){const s=Math.random()*t,d=a*.4+Math.random()*a*.2,c=e.createRadialGradient(s,d,0,s,d,80);c.addColorStop(0,"rgba(255, 100, 30, 0.4)"),c.addColorStop(.5,"rgba(255, 50, 0, 0.2)"),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.arc(s,d,80,0,Math.PI*2),e.fill()}}renderDesertBackground(){const e=this.ctx,t=this.width,a=this.height,i=e.createLinearGradient(0,0,0,a);i.addColorStop(0,"#1a0a05"),i.addColorStop(.1,"#4a1a10"),i.addColorStop(.25,"#8a3a20"),i.addColorStop(.4,"#cc6030"),i.addColorStop(.55,"#ff8040"),i.addColorStop(.7,"#ffaa60"),i.addColorStop(.85,"#ffd090"),i.addColorStop(1,"#ffe8c0"),e.fillStyle=i,e.fillRect(0,0,t,a);const n=t*.75,o=a*.35;for(let s=4;s>=0;s--){const d=100+s*80,c=e.createRadialGradient(n,o,0,n,o,d);c.addColorStop(0,`rgba(255, 255, 200, ${.3-s*.05})`),c.addColorStop(.5,`rgba(255, 200, 100, ${.2-s*.04})`),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.arc(n,o,d,0,Math.PI*2),e.fill()}const l=e.createRadialGradient(n,o,0,n,o,80);l.addColorStop(0,"#ffffff"),l.addColorStop(.3,"#ffffee"),l.addColorStop(.6,"#ffee99"),l.addColorStop(1,"#ffcc44"),e.fillStyle=l,e.beginPath(),e.arc(n,o,80,0,Math.PI*2),e.fill(),["#c9a050","#b89040","#a88035","#987030"].forEach((s,d)=>{const c=a*(.5+d*.05);e.fillStyle=s,e.beginPath(),e.moveTo(0,a);for(let h=0;h<=t;h+=4){const p=Math.sin(h*.003+d*1.5)*60,m=Math.sin(h*.006+d*2.5)*30,u=Math.sin(h*.001+d)*80,g=c+p+m+u;e.lineTo(h,g)}e.lineTo(t,a),e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.beginPath();for(let h=0;h<=t;h+=100){const p=h+50,m=Math.sin(p*.003+d*1.5)*60,u=Math.sin(p*.006+d*2.5)*30,g=Math.sin(p*.001+d)*80,b=c+m+u+g;e.moveTo(p,b),e.lineTo(p+40,b+30),e.lineTo(p,b+30)}e.fill()}),e.fillStyle="#705030";for(let s=0;s<12;s++){const d=Math.random()*t,c=a*.58+Math.random()*40;this.drawCactus(e,d,c,.5+Math.random()*.3,!0)}e.fillStyle="rgba(255, 240, 200, 0.1)";for(let s=0;s<t;s+=40){const d=a*.65+Math.sin(s*.05)*5;e.beginPath(),e.ellipse(s,d,30,8,0,0,Math.PI*2),e.fill()}}drawCactus(e,t,a,i,n){if(e.save(),e.translate(t,a),e.scale(i,i),n)e.fillRect(-8,-80,16,80),e.fillRect(-8,-60,-25,12),e.fillRect(-33,-60,12,35),e.fillRect(8,-45,20,12),e.fillRect(16,-45,12,30);else{const o=e.createLinearGradient(-10,0,15,0);o.addColorStop(0,"#1a5a20"),o.addColorStop(.3,"#2d8a35"),o.addColorStop(.7,"#25752c"),o.addColorStop(1,"#1a5520"),e.fillStyle=o,e.beginPath(),e.roundRect(-10,-85,20,90,8),e.fill(),e.beginPath(),e.roundRect(-35,-65,30,14,6),e.fill(),e.beginPath(),e.roundRect(-38,-65,14,40,6),e.fill(),e.beginPath(),e.roundRect(5,-50,25,14,6),e.fill(),e.beginPath(),e.roundRect(18,-50,14,35,6),e.fill(),e.strokeStyle="#90a060",e.lineWidth=1;for(let l=-80;l<0;l+=12)e.beginPath(),e.moveTo(-10,l),e.lineTo(-15,l-3),e.stroke(),e.beginPath(),e.moveTo(10,l),e.lineTo(15,l-3),e.stroke();e.fillStyle="rgba(255, 255, 255, 0.15)",e.beginPath(),e.ellipse(-4,-50,4,30,0,0,Math.PI*2),e.fill()}e.restore()}}class V{terrainCtx;undergroundCtx;backgroundRenderer;width;height;terrain=null;constructor(e,t,a,i,n){this.terrainCtx=e,this.undergroundCtx=t,this.backgroundRenderer=a,this.width=i,this.height=n}generate(e){switch(e){case"meadow":this.generateMeadowTerrain();break;case"city":this.generateCityTerrain();break;case"desert":this.generateDesertTerrain();break}}isTerrainAt(e,t){if(!this.terrain||e<0||e>=this.width||t<0||t>=this.height)return t>=this.height;const a=(Math.floor(t)*this.width+Math.floor(e))*4;return this.terrain.data[a+3]>20}destroyTerrain(e,t,a,i){const n=this.terrainCtx;n.globalCompositeOperation="destination-out",n.beginPath(),n.arc(e,t,a,0,Math.PI*2),n.fill(),n.globalCompositeOperation="source-over",this.terrain=n.getImageData(0,0,this.width,this.height);for(let o=0;o<35;o++){const l=Math.random()*Math.PI*2,r=Math.random()*10+4,s=["#5d4037","#4e342e","#3e2723","#6b4423","#4caf50","#388e3c"];i.push({x:e,y:t,vx:Math.cos(l)*r,vy:Math.sin(l)*r-6,life:1.8,maxLife:1.8,color:s[Math.floor(Math.random()*s.length)],size:Math.random()*10+4,type:"debris",rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.4,gravity:.35})}for(let o=0;o<15;o++){const l=Math.random()*Math.PI-Math.PI,r=Math.random()*6+2;i.push({x:e+(Math.random()-.5)*a,y:t-Math.random()*a*.5,vx:Math.cos(l)*r,vy:Math.sin(l)*r-3,life:2,maxLife:2,color:"#4caf50",size:Math.random()*6+3,type:"grass",rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.2,gravity:.15})}}generateUnderground(e,t,a){const i=this.undergroundCtx,n=this.width,o=this.height;i.clearRect(0,0,n,o);const l=i.createLinearGradient(0,t-100,0,o);l.addColorStop(0,a.top),l.addColorStop(.3,a.mid),l.addColorStop(.6,a.deep),l.addColorStop(1,a.darkest),i.fillStyle=l,i.beginPath(),i.moveTo(0,o),e.forEach((r,s)=>i.lineTo(s*2,r-15)),i.lineTo(n,o),i.fill(),i.strokeStyle="rgba(0, 0, 0, 0.8)",i.lineWidth=8,i.beginPath(),e.forEach((r,s)=>{s===0?i.moveTo(0,r-15):i.lineTo(s*2,r-15)}),i.stroke();for(let r=0;r<300;r++){const s=Math.random()*n,d=Math.floor(s/2);if(d<e.length){const c=e[d],h=c+Math.random()*(o-c),p=3+Math.random()*10;i.fillStyle=a.rocks,i.beginPath(),i.arc(s,h,p,0,Math.PI*2),i.fill()}}for(let r=0;r<8;r++){const s=Math.random()*n,d=Math.floor(s/2);if(d<e.length){const c=e[d]+50+Math.random()*150,h=i.createRadialGradient(s,c,0,s,c,40);h.addColorStop(0,"rgba(255, 100, 30, 0.4)"),h.addColorStop(.5,"rgba(200, 50, 0, 0.2)"),h.addColorStop(1,"transparent"),i.fillStyle=h,i.beginPath(),i.arc(s,c,40,0,Math.PI*2),i.fill()}}}generateMeadowTerrain(){const e=this.terrainCtx,t=this.width,a=this.height;e.clearRect(0,0,t,a);const i=[],n=a*.68;for(let d=0;d<=t;d+=2){let c=n;c+=Math.sin(d*.003)*100,c+=Math.sin(d*.008+1)*50,c+=Math.sin(d*.015)*25,c+=Math.sin(d*.03)*12,c-=Math.max(0,180-Math.abs(d-350)*.4),c-=Math.max(0,140-Math.abs(d-900)*.35),c-=Math.max(0,160-Math.abs(d-1400)*.38),c-=Math.max(0,100-Math.abs(d-1750)*.3),i.push(c)}this.generateUnderground(i,n,{top:"#1a0f08",mid:"#120a05",deep:"#0a0603",darkest:"#050302",rocks:"rgba(40, 25, 15, 0.5)"}),e.fillStyle="#0a0805",e.beginPath(),e.moveTo(0,a),i.forEach((d,c)=>e.lineTo(c*2,d+100)),e.lineTo(t,a),e.fill();const o=e.createLinearGradient(0,n+40,0,a);o.addColorStop(0,"#3d3027"),o.addColorStop(.5,"#2a211a"),o.addColorStop(1,"#1a140f"),e.fillStyle=o,e.beginPath(),e.moveTo(0,a),i.forEach((d,c)=>e.lineTo(c*2,d+50)),e.lineTo(t,a),e.fill();const l=e.createLinearGradient(0,n-20,0,n+60);l.addColorStop(0,"#6b4423"),l.addColorStop(.3,"#5c3a1d"),l.addColorStop(.6,"#4a2f18"),l.addColorStop(1,"#3d2515"),e.fillStyle=l,e.beginPath(),e.moveTo(0,a),i.forEach((d,c)=>e.lineTo(c*2,d+25)),e.lineTo(t,a),e.fill();const r=e.createLinearGradient(0,n-50,0,n+30);r.addColorStop(0,"#4caf50"),r.addColorStop(.3,"#43a047"),r.addColorStop(.6,"#388e3c"),r.addColorStop(1,"#5d4037"),e.fillStyle=r,e.beginPath(),e.moveTo(0,a),i.forEach((d,c)=>e.lineTo(c*2,d)),e.lineTo(t,a),e.fill();for(let d=0;d<i.length;d+=2){const c=d*2,h=i[d];for(let p=0;p<3;p++){const m=c+(Math.random()-.5)*6,u=6+Math.random()*10,g=(Math.random()-.5)*8,b=Math.random()*.3;e.strokeStyle=`rgba(${100+b*50}, ${180-b*30}, ${80+b*20}, 0.9)`,e.lineWidth=1.5+Math.random(),e.beginPath(),e.moveTo(m,h),e.quadraticCurveTo(m+g*.6,h-u*.6,m+g,h-u),e.stroke()}}for(let d=0;d<50;d++){const c=Math.random()*t,h=Math.floor(c/2);if(h<i.length){const p=i[h],m=5+Math.random()*12;e.fillStyle="rgba(0, 0, 0, 0.3)",e.beginPath(),e.ellipse(c+3,p+5,m*.9,m*.4,.2,0,Math.PI*2),e.fill();const u=e.createRadialGradient(c-m*.3,p-m*.2,0,c,p,m);u.addColorStop(0,"#9e9e9e"),u.addColorStop(.5,"#757575"),u.addColorStop(1,"#5d5d5d"),e.fillStyle=u,e.beginPath(),e.ellipse(c,p+2,m,m*.65,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.beginPath(),e.ellipse(c-m*.35,p-m*.1,m*.35,m*.2,-.4,0,Math.PI*2),e.fill()}}const s=[{petals:"#ef4444",center:"#fbbf24"},{petals:"#f472b6",center:"#fcd34d"},{petals:"#a78bfa",center:"#fde68a"},{petals:"#60a5fa",center:"#fef3c7"},{petals:"#fbbf24",center:"#92400e"},{petals:"#ffffff",center:"#fcd34d"}];for(let d=0;d<40;d++){const c=Math.random()*t,h=Math.floor(c/2);if(h<i.length){const p=i[h],m=s[Math.floor(Math.random()*s.length)],u=2.5+Math.random()*2;e.strokeStyle="#2d5016",e.lineWidth=1.5;const g=8+Math.random()*8;e.beginPath(),e.moveTo(c,p),e.quadraticCurveTo(c+(Math.random()-.5)*4,p-g*.5,c,p-g),e.stroke(),e.fillStyle=m.petals;const b=5+Math.floor(Math.random()*3);for(let x=0;x<b;x++){const w=x/b*Math.PI*2;e.beginPath(),e.ellipse(c+Math.cos(w)*u*1.2,p-g+Math.sin(w)*u*1.2,u,u*.7,w,0,Math.PI*2),e.fill()}e.fillStyle=m.center,e.beginPath(),e.arc(c,p-g,u*.8,0,Math.PI*2),e.fill()}}for(let d=0;d<15;d++){const c=Math.random()*t,h=Math.floor(c/2);if(h<i.length){const p=i[h];this.drawBush(e,c,p)}}this.terrain=e.getImageData(0,0,t,a)}generateCityTerrain(){const e=this.terrainCtx,t=this.width,a=this.height;e.clearRect(0,0,t,a);const i=[],n=a*.72;for(let r=0;r<=t;r+=2){let s=n;s+=Math.sin(r*.002)*30,s+=Math.sin(r*.01)*15,s-=Math.max(0,60-Math.abs(r-300)*.3),s-=Math.max(0,80-Math.abs(r-700)*.25),s-=Math.max(0,50-Math.abs(r-1100)*.35),s-=Math.max(0,70-Math.abs(r-1500)*.28),s-=Math.max(0,40-Math.abs(r-1800)*.4),i.push(s)}this.generateUnderground(i,n,{top:"#0a0808",mid:"#060404",deep:"#030202",darkest:"#010101",rocks:"rgba(20, 15, 15, 0.6)"}),e.fillStyle="#1a1a1a",e.beginPath(),e.moveTo(0,a),i.forEach((r,s)=>e.lineTo(s*2,r+80)),e.lineTo(t,a),e.fill();const o=e.createLinearGradient(0,n,0,a);o.addColorStop(0,"#5a5a5a"),o.addColorStop(.3,"#4a4a4a"),o.addColorStop(.6,"#3a3a3a"),o.addColorStop(1,"#2a2a2a"),e.fillStyle=o,e.beginPath(),e.moveTo(0,a),i.forEach((r,s)=>e.lineTo(s*2,r+40)),e.lineTo(t,a),e.fill();const l=e.createLinearGradient(0,n-30,0,n+20);l.addColorStop(0,"#4a4a4a"),l.addColorStop(.5,"#3d3d3d"),l.addColorStop(1,"#353535"),e.fillStyle=l,e.beginPath(),e.moveTo(0,a),i.forEach((r,s)=>e.lineTo(s*2,r)),e.lineTo(t,a),e.fill();for(let r=0;r<150;r++){const s=Math.random()*t,d=Math.floor(s/2);if(d<i.length){const c=i[d],h=3+Math.random()*15;e.fillStyle=`rgba(${80+Math.random()*40}, ${80+Math.random()*40}, ${80+Math.random()*40}, 0.9)`,e.save(),e.translate(s,c+2),e.rotate(Math.random()*Math.PI),e.fillRect(-h/2,-h/3,h,h*.6),e.restore()}}e.strokeStyle="#8b4513",e.lineWidth=3;for(let r=0;r<30;r++){const s=Math.random()*t,d=Math.floor(s/2);if(d<i.length){const c=i[d],h=15+Math.random()*25,p=-Math.PI/2+(Math.random()-.5)*.8;e.beginPath(),e.moveTo(s,c),e.lineTo(s+Math.cos(p)*h,c+Math.sin(p)*h),e.stroke()}}for(let r=0;r<8;r++){const s=100+r*230+Math.random()*50,d=Math.floor(s/2);if(d<i.length){const c=i[d],h=80+Math.random()*60,p=30+Math.random()*50;e.fillStyle="#3a3535",e.fillRect(s-h/2,c-p,h,p),e.fillStyle="#4a4545";for(let m=s-h/2;m<s+h/2;m+=8){const u=Math.random()*20;e.fillRect(m,c-p-u,6,u)}e.fillStyle="#1a1a1a";for(let m=c-p+8;m<c-5;m+=15)for(let u=s-h/2+10;u<s+h/2-10;u+=20)Math.random()>.3&&e.fillRect(u,m,10,12)}}e.strokeStyle="#2a2a2a",e.lineWidth=2;for(let r=0;r<20;r++){const s=Math.random()*t,d=Math.floor(s/2);if(d<i.length){const c=i[d]+5;e.beginPath(),e.moveTo(s,c);let h=s,p=c;for(let m=0;m<5;m++)h+=(Math.random()-.5)*40,p+=Math.random()*20,e.lineTo(h,p);e.stroke()}}this.terrain=e.getImageData(0,0,t,a)}generateDesertTerrain(){const e=this.terrainCtx,t=this.width,a=this.height;e.clearRect(0,0,t,a);const i=[],n=a*.7;for(let r=0;r<=t;r+=2){let s=n;s+=Math.sin(r*.002)*80,s+=Math.sin(r*.005+.5)*40,s+=Math.sin(r*.012)*20,s-=Math.max(0,120-Math.abs(r-400)*.3),s-=Math.max(0,100-Math.abs(r-950)*.28),s-=Math.max(0,140-Math.abs(r-1450)*.32),s-=Math.max(0,80-Math.abs(r-1750)*.35),i.push(s)}this.generateUnderground(i,n,{top:"#3a2810",mid:"#2a1a08",deep:"#1a0f04",darkest:"#0a0502",rocks:"rgba(60, 40, 20, 0.5)"}),e.fillStyle="#5a3d20",e.beginPath(),e.moveTo(0,a),i.forEach((r,s)=>e.lineTo(s*2,r+100)),e.lineTo(t,a),e.fill();const o=e.createLinearGradient(0,n+20,0,a);o.addColorStop(0,"#9a7050"),o.addColorStop(.5,"#8a6040"),o.addColorStop(1,"#6a4830"),e.fillStyle=o,e.beginPath(),e.moveTo(0,a),i.forEach((r,s)=>e.lineTo(s*2,r+50)),e.lineTo(t,a),e.fill();const l=e.createLinearGradient(0,n-50,0,n+30);l.addColorStop(0,"#e6c88a"),l.addColorStop(.3,"#d9b870"),l.addColorStop(.6,"#cca860"),l.addColorStop(1,"#b89850"),e.fillStyle=l,e.beginPath(),e.moveTo(0,a),i.forEach((r,s)=>e.lineTo(s*2,r)),e.lineTo(t,a),e.fill(),e.strokeStyle="rgba(180, 140, 80, 0.4)",e.lineWidth=1;for(let r=0;r<i.length;r+=8){const s=r*2,d=i[r];e.beginPath(),e.moveTo(s-15,d+3),e.quadraticCurveTo(s,d,s+15,d+3),e.stroke()}e.fillStyle="rgba(0, 0, 0, 0.15)";for(let r=1;r<i.length;r++){const s=r*2,d=i[r],c=i[r-1];d<c&&(e.beginPath(),e.moveTo(s-2,c),e.lineTo(s,d),e.lineTo(s,d+30),e.lineTo(s-2,c+30),e.fill())}for(let r=0;r<25;r++){const s=Math.random()*t,d=Math.floor(s/2);if(d<i.length){const c=i[d],h=8+Math.random()*20;e.fillStyle="rgba(0, 0, 0, 0.2)",e.beginPath(),e.ellipse(s+4,c+4,h,h*.5,.1,0,Math.PI*2),e.fill();const p=e.createRadialGradient(s-h*.2,c-h*.3,0,s,c,h);p.addColorStop(0,"#c9a070"),p.addColorStop(.5,"#a88050"),p.addColorStop(1,"#886040"),e.fillStyle=p,e.beginPath(),e.ellipse(s,c+2,h,h*.6,0,0,Math.PI*2),e.fill()}}for(let r=0;r<12;r++){const s=Math.random()*t,d=Math.floor(s/2);if(d<i.length){const c=i[d];this.backgroundRenderer.drawCactus(e,s,c,.8+Math.random()*.4,!1)}}e.fillStyle="#e8e0d0";for(let r=0;r<5;r++){const s=Math.random()*t,d=Math.floor(s/2);if(d<i.length){const c=i[d];e.beginPath(),e.ellipse(s,c-3,6,5,0,0,Math.PI*2),e.fill(),e.fillStyle="#1a1a1a",e.beginPath(),e.arc(s-2,c-4,1.5,0,Math.PI*2),e.arc(s+2,c-4,1.5,0,Math.PI*2),e.fill(),e.fillStyle="#e8e0d0"}}for(let r=0;r<8;r++){const s=Math.random()*t,d=Math.floor(s/2);if(d<i.length){const c=i[d],h=10+Math.random()*15;e.strokeStyle="#8b7355",e.lineWidth=1.5,e.beginPath(),e.arc(s,c-h/2,h/2,0,Math.PI*2),e.stroke();for(let p=0;p<6;p++){const m=p*Math.PI/3;e.beginPath(),e.moveTo(s,c-h/2),e.lineTo(s+Math.cos(m)*h/2*.8,c-h/2+Math.sin(m)*h/2*.8),e.stroke()}}}this.terrain=e.getImageData(0,0,t,a)}drawBush(e,t,a){const i=15+Math.random()*20,n=e.createRadialGradient(t,a-i*.4,0,t,a,i);n.addColorStop(0,"#66bb6a"),n.addColorStop(.5,"#43a047"),n.addColorStop(1,"#2e7d32"),e.fillStyle=n;for(let o=0;o<5;o++){const l=(Math.random()-.5)*i*.8,r=Math.random()*i*.3,s=i*(.5+Math.random()*.3);e.beginPath(),e.arc(t+l,a-s*.5-r,s,0,Math.PI*2),e.fill()}e.fillStyle="rgba(255, 255, 255, 0.15)",e.beginPath(),e.ellipse(t-i*.2,a-i*.6,i*.3,i*.2,-.3,0,Math.PI*2),e.fill()}}let G=sessionStorage.getItem("shellStrikersPreloaderShown")==="true",N=!0;function j(){return G}function H(y){G=y,sessionStorage.setItem("shellStrikersPreloaderShown","true")}function K(){return N}function Y(y){N=y}function k(){return window.gp}class X{canvas;ctx;terrainCanvas;terrainCtx;bgCanvas;bgCtx;undergroundCanvas;undergroundCtx;terrain=null;backgroundRenderer;terrainRenderer;width=1920;height=1080;isPaused=!1;soundEnabled=!0;levelCompletedCount=0;worms=[];projectiles=[];particles=[];explosions=[];floatingTexts=[];clouds=[];birds=[];state="menu";currentTeam=0;currentWormIndex=0;turnTime=45;turnTimer=45;wind=0;selectedWeapon="bazooka";ammo;retreatTimer=0;screenShake=0;cameraX=0;cameraY=0;targetCamX=0;targetCamY=0;time=0;lastTime=0;fixedDt=1/60;accumulator=0;dayPhase=0;selectedMap="meadow";mapSelectOpen=!1;currentLevel=1;unlockedLevels=[1];gameMode="campaign";showingLevelSelect=!1;currentLevelConfig=null;aiTeam=1;aiThinking=!1;aiThinkTimer=0;aiTargetAngle=0;aiTargetPower=0;aiPhase="waiting";aiMoveTarget=0;aiMoveDirection=0;aiSkillLevel=.7;keys=new Set;mouseX=0;mouseY=0;isMobile=!1;touchMoveX=0;touchAimAngle=0;touchAiming=!1;teamColors=B;wormNames=O;hatTypes=q;constructor(){this.ammo={bazooka:1/0,grenade:5,shotgun:3,airstrike:2,dynamite:1},this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d",{alpha:!1}),this.terrainCanvas=document.createElement("canvas"),this.terrainCanvas.width=this.width,this.terrainCanvas.height=this.height,this.terrainCtx=this.terrainCanvas.getContext("2d",{willReadFrequently:!0}),this.bgCanvas=document.createElement("canvas"),this.bgCanvas.width=this.width,this.bgCanvas.height=this.height,this.bgCtx=this.bgCanvas.getContext("2d"),this.undergroundCanvas=document.createElement("canvas"),this.undergroundCanvas.width=this.width,this.undergroundCanvas.height=this.height,this.undergroundCtx=this.undergroundCanvas.getContext("2d"),this.backgroundRenderer=new $(this.bgCtx,this.width,this.height),this.terrainRenderer=new V(this.terrainCtx,this.undergroundCtx,this.backgroundRenderer,this.width,this.height),document.getElementById("game-container").appendChild(this.canvas),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.objectFit="contain";for(let t=0;t<8;t++)this.clouds.push({x:Math.random()*this.width,y:50+Math.random()*200,width:150+Math.random()*200,height:60+Math.random()*60,speed:.2+Math.random()*.3,opacity:.6+Math.random()*.3});for(let t=0;t<5;t++)this.birds.push({x:Math.random()*this.width,y:100+Math.random()*150,vx:1+Math.random()*2,wingPhase:Math.random()*Math.PI*2});F(),this.setupUI(),this.setupInput(),this.renderBackground(),this.generateTerrain(),window.gameInstance=this,this.initGamePush(),this.checkPendingGameState(),requestAnimationFrame(t=>this.loop(t))}restoringPendingState=!1;checkPendingGameState(){const e=sessionStorage.getItem("shellStrikersPendingMode"),t=sessionStorage.getItem("shellStrikersPendingLevel");if(console.log("checkPendingGameState - mode:",e,"level:",t),!!e){if(this.restoringPendingState=!0,sessionStorage.removeItem("shellStrikersPendingMode"),e==="campaign"){const a=sessionStorage.getItem("shellStrikersPendingLevel"),i=sessionStorage.getItem("shellStrikersPendingVictory");if(sessionStorage.removeItem("shellStrikersPendingLevel"),sessionStorage.removeItem("shellStrikersPendingVictory"),a){const n=parseInt(a,10);console.log("Restoring pending campaign level:",n,"victory:",i),setTimeout(()=>{if(i==="true"||i==="false"){const o=i==="true",l=o?n-1:n;l>=1&&l<=C.length&&(this.gameMode="campaign",this.currentLevel=l,this.state="gameover",document.getElementById("menu").style.display="none",this.displayResultUI(o))}else n>=1&&n<=C.length?this.startCampaignLevel(n):console.log("Invalid pending level, returning to menu")},100)}}else if(e==="quickplay"){const a=sessionStorage.getItem("shellStrikersPendingMap");sessionStorage.removeItem("shellStrikersPendingMap"),a&&(this.selectedMap=a,console.log("Restoring pending quickplay with map:",a),setTimeout(()=>{this.startGame()},100))}}}async initGamePush(){try{const e=k();if(e){if(typeof e.gameStart=="function"&&(e.gameStart(),console.log("GamePush gameStart called")),typeof e.on=="function"&&(e.on("pause",()=>{console.log("SDK pause event - muting sound"),v.setEnabled(!1)}),e.on("resume",()=>{console.log("SDK resume event - restoring sound to:",this.soundEnabled),v.setEnabled(this.soundEnabled)})),e.ads&&typeof e.ads.isRewardedAvailable=="function"&&Y(e.ads.isRewardedAvailable()),e.language){const t=I(e.language);t!==M()&&(R(t),console.log("Language set from GamePush SDK:",M()),this.state==="menu"&&!this.restoringPendingState&&this.setupUI())}if(e.player&&e.player.ready)try{await Promise.race([e.player.ready,new Promise((t,a)=>setTimeout(()=>a("timeout"),5e3))])}catch{}this.loadProgress()}}catch(e){console.log("GamePush init error:",e)}}loadProgress(){try{const e=k();if(e&&e.player)try{const a=e.player.get("maxLevel");if(console.log("GamePush maxLevel:",a),typeof a=="number"&&a>0){this.unlockedLevels=[];for(let i=1;i<=a;i++)this.unlockedLevels.push(i);console.log("Progress loaded from GamePush, max level:",a),localStorage.setItem("shellStrikers_maxLevel",a.toString());return}}catch(a){console.log("GamePush player.get error:",a)}const t=localStorage.getItem("shellStrikers_maxLevel");if(t){const a=parseInt(t,10);if(a>0){this.unlockedLevels=[];for(let i=1;i<=a;i++)this.unlockedLevels.push(i);console.log("Progress loaded from localStorage, max level:",a)}}console.log("Progress loaded, unlocked levels:",this.unlockedLevels)}catch(e){console.log("Error loading progress:",e)}}saveProgress(){const e=Math.max(...this.unlockedLevels);console.log("Saving progress, max level:",e);try{localStorage.setItem("shellStrikers_maxLevel",e.toString()),console.log("Progress saved to localStorage, max level:",e)}catch(t){console.log("localStorage save error:",t)}try{const t=k();t&&t.player?(console.log("GamePush player available, setting maxLevel..."),t.player.set("maxLevel",e),console.log("Calling player.sync..."),t.player.sync({silent:!0,override:!0,storage:"preferred"}).then(()=>{console.log("Progress saved to GamePush, max level:",e)}).catch(a=>{console.log("GamePush sync error:",a)})):console.log("GamePush player not available for save")}catch(t){console.log("GamePush save error (field may not exist):",t)}}onGameplayStart(){try{const e=k();e&&typeof e.gameplayStart=="function"&&(e.gameplayStart(),console.log("gameplayStart called"))}catch(e){console.log("gameplayStart error:",e)}}onGameplayStop(){try{const e=k();e&&typeof e.gameplayStop=="function"&&(e.gameplayStop(),console.log("gameplayStop called"))}catch(e){console.log("gameplayStop error:",e)}}isGpReady(){try{const e=k();return e!=null&&typeof e.ads<"u"}catch{return!1}}pauseGame(){this.isPaused=!0,v.setEnabled(!1);try{const e=k();e&&typeof e.gamePause=="function"&&e.gamePause()}catch{console.log("GamePush gamePause not available")}}resumeGame(){this.isPaused=!1,v.setEnabled(this.soundEnabled);try{const e=k();e&&typeof e.gameStart=="function"&&e.gameStart()}catch{console.log("GamePush gameStart not available")}}onSdkPause(){console.log("SDK pause - muting sound"),v.setEnabled(!1)}onSdkResume(){console.log("SDK resume - restoring sound to:",this.soundEnabled),v.setEnabled(this.soundEnabled)}updateLanguageFromSDK(e){if(console.log("updateLanguageFromSDK called with:",e,"current:",M()),e){const t=I(e);console.log("SDK language mapped:",e,"->",t),t!==M()?(R(t),console.log("Language CHANGED from GamePush SDK:",M()),this.setupUI()):console.log("Language from SDK matches current:",M())}}showPreloader(e){if(j()){e&&e();return}H(!0),sessionStorage.setItem("shellStrikersPreloaderShown","true");try{const t=k();if(t&&t.ads&&typeof t.ads.showPreloader=="function"){this.pauseGame();let a=!1;const i=()=>{a||(a=!0,this.resumeGame(),e&&e())};setTimeout(i,3e3);try{const n=t.ads.showPreloader({onStart:()=>{v.setEnabled(!1)},onClose:()=>{i()},onError:()=>{console.log("Preloader ad error"),i()}});n&&typeof n.catch=="function"&&n.catch(o=>{console.log("Preloader ad promise rejected:",o),i()})}catch(n){console.log("Preloader inner error:",n),i()}}else e&&e()}catch(t){console.log("GamePush preloader error:",t),e&&e()}}showFullscreen(e){console.log("showFullscreen called");try{const t=k();if(t&&t.ads&&typeof t.ads.showFullscreen=="function"){this.pauseGame();let a=!1;const i=n=>{console.log("Fullscreen safeCallback from:",n),a||(a=!0,this.resumeGame(),e&&(console.log("Executing fullscreen callback"),e()))};setTimeout(()=>i("timeout"),3e4);try{console.log("Calling gpInstance.ads.showFullscreen");const n=t.ads.showFullscreen({onStart:()=>{console.log("Fullscreen ad started"),v.setEnabled(!1)},onClose:o=>{console.log("Fullscreen ad closed, success:",o),i("onClose")},onError:()=>{console.log("Fullscreen ad error"),i("onError")}});n&&typeof n.catch=="function"&&n.catch(o=>{console.log("Fullscreen ad promise rejected:",o),i("promise-reject")}),n&&typeof n.then=="function"&&n.then(o=>{console.log("Fullscreen ad promise resolved:",o),i("promise-resolve")})}catch(n){console.log("Fullscreen inner error:",n),i("inner-catch")}}else console.log("No fullscreen ads available, calling callback directly"),e&&e()}catch(t){console.log("GamePush fullscreen error:",t),e&&e()}}isRewardedAvailable(){try{const e=k();if(e&&e.ads&&typeof e.ads.isRewardedAvailable=="function")return e.ads.isRewardedAvailable()}catch(e){console.log("isRewardedAvailable error:",e)}return K()}showRewardedVideo(e,t){if(!this.isRewardedAvailable()){console.log("Rewarded ads not available"),t&&t();return}let a=!1,i=!1;const n=()=>{i||(i=!0,this.resumeGame(),t&&t())};try{const o=k();if(o&&o.ads){this.pauseGame(),setTimeout(n,3e4);try{const l=o.ads.showRewardedVideo({onStart:()=>{v.setEnabled(!1)},onReward:()=>{a=!0,i=!0,this.resumeGame(),e()},onClose:r=>{i||(i=!0,this.resumeGame(),!r&&!a&&t&&t())}});l&&typeof l.catch=="function"&&l.catch(r=>{console.log("Rewarded ad promise rejected:",r),n()})}catch(l){console.log("Rewarded ad inner error:",l),n()}}else e()}catch(o){console.log("GamePush rewarded error:",o),e()}}setupUI(){const e=document.getElementById("ui-container");e.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .ui {
          font-family: 'Rajdhani', sans-serif;
          user-select: none;
        }

        .menu {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a1a2a 100%);
          z-index: 100;
          overflow: hidden;
          pointer-events: auto;
        }

        .menu::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
          animation: pulse-bg 8s ease-in-out infinite;
        }

        @keyframes pulse-bg {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .menu-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .title-wrapper {
          position: relative;
          margin-bottom: 30px;
          z-index: 1;
        }

        .title {
          font-family: 'Orbitron', sans-serif;
          font-size: 130px;
          font-weight: 900;
          color: #fff;
          text-shadow:
            0 0 80px rgba(255, 100, 50, 0.8),
            0 0 160px rgba(255, 150, 50, 0.4),
            0 4px 0 #dc2626,
            0 8px 0 #991b1b,
            4px 12px 20px rgba(0, 0, 0, 0.5);
          letter-spacing: 20px;
          animation: title-glow 3s ease-in-out infinite;
        }

        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 80px rgba(255, 100, 50, 0.8), 0 0 160px rgba(255, 150, 50, 0.4), 0 4px 0 #dc2626, 0 8px 0 #991b1b, 4px 12px 20px rgba(0, 0, 0, 0.5); }
          50% { text-shadow: 0 0 100px rgba(255, 100, 50, 1), 0 0 200px rgba(255, 150, 50, 0.6), 0 4px 0 #dc2626, 0 8px 0 #991b1b, 4px 12px 20px rgba(0, 0, 0, 0.5); }
        }

        .subtitle {
          font-family: 'Orbitron', sans-serif;
          font-size: 32px;
          font-weight: 500;
          color: #f97316;
          letter-spacing: 20px;
          margin-bottom: 80px;
          text-transform: uppercase;
          text-shadow: 0 0 30px rgba(249, 115, 22, 0.5);
          position: relative;
          z-index: 1;
        }

        .play-btn {
          position: relative;
          padding: 25px 100px;
          font-family: 'Orbitron', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(180deg, #f97316 0%, #ea580c 50%, #c2410c 100%);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          letter-spacing: 8px;
          z-index: 1;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow:
            0 6px 0 #9a3412,
            0 10px 30px rgba(0, 0, 0, 0.4),
            inset 0 2px 0 rgba(255, 255, 255, 0.2);
        }

        .play-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .play-btn:hover::before {
          transform: translateX(100%);
        }

        .play-btn:hover {
          transform: translateY(-4px);
          box-shadow:
            0 10px 0 #9a3412,
            0 16px 40px rgba(0, 0, 0, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.2);
        }

        .play-btn:active {
          transform: translateY(4px);
          box-shadow:
            0 2px 0 #9a3412,
            0 4px 15px rgba(0, 0, 0, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.2);
        }

        .map-selection {
          display: flex;
          gap: 25px;
          margin-bottom: 50px;
          z-index: 1;
        }

        .map-card {
          width: 280px;
          height: 200px;
          background: linear-gradient(135deg, rgba(30, 30, 60, 0.95) 0%, rgba(15, 15, 40, 0.95) 100%);
          border-radius: 20px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .map-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .map-card.selected {
          border-color: #fbbf24;
          box-shadow: 0 0 40px rgba(251, 191, 36, 0.4), 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .map-card.selected::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.15), transparent);
          pointer-events: none;
        }

        .map-preview {
          width: 100%;
          height: 120px;
          position: relative;
          overflow: hidden;
        }

        .map-preview-meadow {
          background: linear-gradient(180deg, #7986cb 0%, #ffab91 50%, #4caf50 80%, #388e3c 100%);
        }

        .map-preview-city {
          background: linear-gradient(180deg, #1a1a2e 0%, #4a4a6a 30%, #5d5d5d 70%, #3d3d3d 100%);
        }

        .map-preview-desert {
          background: linear-gradient(180deg, #ff8a65 0%, #ffcc80 40%, #e6b86a 70%, #c9a050 100%);
        }

        .map-icon {
          font-size: 50px;
          margin-bottom: 5px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        }

        .map-name {
          font-family: 'Orbitron', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          margin: 10px 0 5px;
        }

        .map-desc {
          font-size: 13px;
          color: #94a3b8;
          text-align: center;
          padding: 0 15px;
        }

        .map-check {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 30px;
          height: 30px;
          background: #fbbf24;
          border-radius: 50%;
          display: none;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.5);
        }

        .map-card.selected .map-check {
          display: flex;
        }

        /* Language Selector */
        .lang-selector {
          position: fixed;
          top: 20px;
          right: 20px;
          display: flex;
          gap: 8px;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.5);
          padding: 8px 12px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          pointer-events: auto;
        }

        .lang-btn {
          width: 36px;
          height: 26px;
          border: 2px solid transparent;
          border-radius: 6px;
          cursor: pointer;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          background: rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .lang-btn:hover {
          transform: scale(1.15);
          background: rgba(255, 255, 255, 0.2);
        }

        .lang-btn.active {
          border-color: #fbbf24;
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.5);
          background: rgba(251, 191, 36, 0.2);
        }

        .lang-btn-more {
          width: 36px;
          height: 26px;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .lang-btn-more:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .lang-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          background: rgba(20, 20, 40, 0.98);
          border-radius: 12px;
          padding: 10px;
          display: none;
          flex-wrap: wrap;
          gap: 8px;
          width: 200px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .lang-dropdown.open {
          display: flex;
        }

        .lang-dropdown .lang-btn {
          width: 40px;
          height: 30px;
        }

        /* Level Select Styles */
        .level-select {
          position: absolute;
          inset: 0;
          display: none;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a1a2a 100%);
          z-index: 100;
          overflow-y: auto;
          padding: 40px 20px;
          pointer-events: auto;
        }

        .level-select.active { display: flex; }

        .level-select-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 48px;
          font-weight: 900;
          color: #fff;
          text-shadow: 0 0 40px rgba(251, 191, 36, 0.5);
          margin-bottom: 15px;
        }

        .level-select-subtitle {
          font-size: 18px;
          color: #94a3b8;
          margin-bottom: 40px;
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1000px;
          margin-bottom: 40px;
        }

        .level-card {
          width: 300px;
          background: linear-gradient(135deg, rgba(30, 30, 60, 0.95) 0%, rgba(15, 15, 40, 0.95) 100%);
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          border: 3px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .level-card:hover:not(.locked) {
          transform: translateY(-5px);
          border-color: #fbbf24;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(251, 191, 36, 0.2);
        }

        .level-card.locked {
          opacity: 0.5;
          cursor: not-allowed;
          filter: grayscale(0.5);
        }

        .level-card.locked::after {
          content: '🔒';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 40px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .level-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .level-number {
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.2);
          padding: 4px 12px;
          border-radius: 20px;
        }

        .level-map-icon {
          font-size: 24px;
        }

        .level-name {
          font-family: 'Orbitron', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .level-desc {
          font-size: 14px;
          color: #94a3b8;
          margin-bottom: 15px;
          min-height: 40px;
        }

        .level-stats {
          display: flex;
          gap: 15px;
          font-size: 13px;
          color: #64748b;
        }

        .level-stat {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .level-difficulty {
          display: flex;
          gap: 3px;
          margin-top: 12px;
        }

        .diff-star {
          color: #fbbf24;
          font-size: 16px;
        }

        .diff-star.empty {
          color: #374151;
        }

        .back-btn {
          padding: 15px 50px;
          font-family: 'Orbitron', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(180deg, #4b5563 0%, #374151 100%);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 0 #1f2937;
        }

        .back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 0 #1f2937;
        }

        .menu-buttons {
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 1;
        }

        .menu-btn {
          padding: 20px 80px;
          font-family: 'Orbitron', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .menu-btn.campaign {
          background: linear-gradient(180deg, #f97316 0%, #ea580c 50%, #c2410c 100%);
          box-shadow: 0 6px 0 #9a3412, 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .menu-btn.quickplay {
          background: linear-gradient(180deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
          box-shadow: 0 6px 0 #1e40af, 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .menu-btn:hover {
          transform: translateY(-4px);
        }

        .menu-btn.campaign:hover {
          box-shadow: 0 10px 0 #9a3412, 0 16px 40px rgba(0, 0, 0, 0.5);
        }

        .menu-btn.quickplay:hover {
          box-shadow: 0 10px 0 #1e40af, 0 16px 40px rgba(0, 0, 0, 0.5);
        }

        /* Victory/Defeat Screen */
        .result-screen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #111111;
          z-index: 9999;
          pointer-events: auto;
        }

        .result-screen.active { display: flex; }

        .result-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 80px;
          font-weight: 900;
          margin-bottom: 20px;
          animation: result-pulse 2s ease-in-out infinite;
        }

        .result-title.victory {
          color: #fbbf24;
          text-shadow: 0 0 60px rgba(251, 191, 36, 0.8);
        }

        .result-title.defeat {
          color: #ef4444;
          text-shadow: 0 0 60px rgba(239, 68, 68, 0.8);
        }

        @keyframes result-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .result-level {
          font-family: 'Orbitron', sans-serif;
          font-size: 28px;
          color: #94a3b8;
          margin-bottom: 30px;
        }

        .result-reward {
          font-size: 22px;
          color: #22c55e;
          margin-bottom: 50px;
          padding: 15px 30px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .result-buttons {
          display: flex;
          gap: 20px;
        }

        .result-btn {
          padding: 18px 50px;
          font-family: 'Orbitron', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .result-btn.next {
          background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
          box-shadow: 0 5px 0 #15803d;
        }

        .result-btn.retry {
          background: linear-gradient(180deg, #f97316 0%, #ea580c 100%);
          box-shadow: 0 5px 0 #9a3412;
        }

        .result-btn.menu {
          background: linear-gradient(180deg, #4b5563 0%, #374151 100%);
          box-shadow: 0 5px 0 #1f2937;
        }

        .result-btn.rewarded {
          background: linear-gradient(180deg, #8b5cf6 0%, #7c3aed 100%);
          box-shadow: 0 5px 0 #5b21b6;
          animation: pulse-rewarded 2s infinite;
        }

        @keyframes pulse-rewarded {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .result-btn:hover {
          transform: translateY(-3px);
        }

        .hud {
          position: absolute;
          inset: 0;
          display: none;
          pointer-events: none;
        }

        .hud.active { display: block; }
        .hud .top-bar, .hud .weapons-bar, .hud .power-meter, .hud .hint { pointer-events: auto; }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px 30px;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 70%, transparent 100%);
        }

        .team-panel {
          background: linear-gradient(135deg, rgba(20, 20, 40, 0.95) 0%, rgba(10, 10, 30, 0.95) 100%);
          border-radius: 16px;
          padding: 18px 24px;
          min-width: 300px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }

        .team-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(135deg, var(--team-color), transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .team-panel.red {
          --team-color: #dc2626;
          box-shadow: 0 0 40px rgba(220, 38, 38, 0.2), inset 0 0 30px rgba(220, 38, 38, 0.05);
        }
        .team-panel.blue {
          --team-color: #2563eb;
          box-shadow: 0 0 40px rgba(37, 99, 235, 0.2), inset 0 0 30px rgba(37, 99, 235, 0.05);
        }

        .team-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .team-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .team-icon.red { background: linear-gradient(135deg, #dc2626, #991b1b); }
        .team-icon.blue { background: linear-gradient(135deg, #2563eb, #1d4ed8); }

        .team-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .team-title.red { color: #f87171; }
        .team-title.blue { color: #60a5fa; }

        .worm-row {
          display: flex;
          gap: 12px;
        }

        .worm-hp-box {
          text-align: center;
          flex: 1;
        }

        .worm-name {
          font-size: 14px;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 6px;
          letter-spacing: 1px;
        }

        .worm-name.dead {
          color: #64748b;
          text-decoration: line-through;
          opacity: 0.5;
        }

        .worm-name.active {
          color: #fbbf24;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }

        .hp-bar {
          width: 60px;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hp-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.4s ease;
          position: relative;
        }

        .hp-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
          border-radius: 4px;
        }

        .hp-fill.red {
          background: linear-gradient(90deg, #dc2626, #f87171);
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }
        .hp-fill.blue {
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
        }

        .center-info {
          text-align: center;
          padding: 10px 40px;
          background: linear-gradient(135deg, rgba(20, 20, 40, 0.9) 0%, rgba(10, 10, 30, 0.9) 100%);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sound-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(20, 20, 40, 0.95) 0%, rgba(10, 10, 30, 0.95) 100%);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          z-index: 1000;
          pointer-events: auto;
        }
        .sound-btn:hover {
          transform: scale(1.1);
          border-color: rgba(251, 191, 36, 0.5);
        }
        .sound-btn.muted {
          opacity: 0.6;
        }

        .turn-text {
          font-family: 'Orbitron', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 4px;
          margin-bottom: 5px;
        }

        .timer {
          font-family: 'Orbitron', sans-serif;
          font-size: 72px;
          font-weight: 900;
          color: #fbbf24;
          text-shadow: 0 0 40px rgba(251, 191, 36, 0.5);
          line-height: 1;
        }

        .timer.danger {
          color: #ef4444;
          animation: timer-pulse 0.5s ease-in-out infinite;
          text-shadow: 0 0 40px rgba(239, 68, 68, 0.8);
        }

        @keyframes timer-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .wind-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wind-label {
          color: #94a3b8;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .wind-meter {
          width: 120px;
          height: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }

        .wind-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 3px;
          height: 16px;
          background: #fff;
          border-radius: 2px;
          z-index: 2;
        }

        .wind-bar {
          position: absolute;
          top: 2px;
          height: 8px;
          background: linear-gradient(90deg, #06b6d4, #22d3ee);
          border-radius: 4px;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        .wind-arrow {
          font-size: 20px;
          color: #22d3ee;
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
        }

        .weapons-bar {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          background: linear-gradient(135deg, rgba(20, 20, 40, 0.95) 0%, rgba(10, 10, 30, 0.95) 100%);
          padding: 15px 25px;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }

        .weapon {
          width: 75px;
          height: 75px;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          position: relative;
        }

        .weapon:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        .weapon.active {
          border-color: #fbbf24;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.05));
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1);
        }

        .weapon.empty {
          opacity: 0.3;
          cursor: not-allowed;
          filter: grayscale(1);
        }

        .weapon-icon { font-size: 32px; }
        .weapon-ammo {
          font-size: 13px;
          font-weight: 700;
          color: #94a3b8;
          margin-top: 4px;
        }
        .weapon.active .weapon-ammo { color: #fbbf24; }

        .weapon-key {
          position: absolute;
          top: 5px;
          right: 7px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.3);
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .power-meter {
          position: absolute;
          bottom: 130px;
          left: 50%;
          transform: translateX(-50%);
          width: 350px;
          display: none;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, rgba(20, 20, 40, 0.95) 0%, rgba(10, 10, 30, 0.95) 100%);
          padding: 18px 28px;
          border-radius: 16px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .power-meter.active { display: flex; }

        .power-label {
          font-family: 'Orbitron', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 12px;
          letter-spacing: 3px;
        }

        .power-track {
          width: 100%;
          height: 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4);
        }

        .power-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #84cc16, #eab308, #f97316, #ef4444);
          border-radius: 8px;
          transition: width 0.05s linear;
          position: relative;
        }

        .power-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
        }

        .gameover {
          position: absolute;
          inset: 0;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.92);
          z-index: 100;
          pointer-events: auto;
        }

        .gameover.active { display: flex; }

        .winner {
          font-family: 'Orbitron', sans-serif;
          font-size: 72px;
          font-weight: 900;
          margin-bottom: 50px;
          letter-spacing: 8px;
          animation: winner-glow 2s ease-in-out infinite;
        }

        @keyframes winner-glow {
          0%, 100% { filter: drop-shadow(0 0 30px currentColor); }
          50% { filter: drop-shadow(0 0 60px currentColor); }
        }

        .winner.red { color: #f87171; }
        .winner.blue { color: #60a5fa; }

        .hint {
          position: absolute;
          bottom: 20px;
          left: 25px;
          color: rgba(255, 255, 255, 0.35);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .hint kbd {
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 10px;
          border-radius: 5px;
          margin: 0 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Mobile Controls */
        .mobile-controls {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
          z-index: 50;
        }

        .mobile-controls.active {
          display: block;
        }

        .joystick-zone {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 140px;
          height: 140px;
          pointer-events: auto;
        }

        .joystick-base {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%);
          border: 3px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .joystick-stick {
          position: absolute;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 4px 15px rgba(0,0,0,0.4);
          transition: transform 0.05s ease-out;
        }

        .aim-zone {
          position: absolute;
          bottom: 20px;
          right: 160px;
          width: 140px;
          height: 140px;
          pointer-events: auto;
        }

        .aim-base {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(251,191,36,0.05) 100%);
          border: 3px solid rgba(251,191,36,0.4);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .aim-stick {
          position: absolute;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, rgba(251,191,36,0.9) 0%, rgba(251,191,36,0.6) 100%);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        }

        .fire-btn {
          position: absolute;
          bottom: 40px;
          right: 30px;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, #ef4444 0%, #dc2626 100%);
          border: 4px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          box-shadow: 0 6px 20px rgba(239,68,68,0.5);
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .fire-btn:active {
          transform: scale(0.95);
          box-shadow: 0 3px 10px rgba(239,68,68,0.5);
        }

        .fire-btn.charging {
          background: radial-gradient(circle, #f97316 0%, #ea580c 100%);
          animation: fire-pulse 0.3s ease-in-out infinite;
        }

        @keyframes fire-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 900px), (pointer: coarse) {
          .hint { display: none; }
          .mobile-controls.active { display: block; }

          /* Menu responsive */
          .title {
            font-size: 48px !important;
            letter-spacing: 8px !important;
          }
          .subtitle {
            font-size: 16px !important;
            letter-spacing: 8px !important;
            margin-bottom: 30px !important;
          }
          .play-btn {
            padding: 15px 50px !important;
            font-size: 18px !important;
            letter-spacing: 4px !important;
          }
          .menu-buttons {
            gap: 15px !important;
          }

          .weapons-bar {
            bottom: 40px !important;
            padding: 8px 12px !important;
            gap: 5px !important;
          }

          .weapon {
            width: 45px !important;
            height: 45px !important;
          }

          .weapon-icon { font-size: 20px !important; }
          .weapon-key { display: none !important; }
          .weapon-ammo { font-size: 9px !important; }

          .top-bar {
            flex-wrap: wrap;
            gap: 10px;
            padding: 10px !important;
          }

          .team-panel { padding: 8px 12px !important; }
          .team-title { font-size: 12px !important; }
          .worm-info { padding: 3px 6px !important; }
          .worm-name { font-size: 10px !important; }
          .hp-bar { width: 40px !important; }

          .center-info { padding: 8px 20px !important; }
          .turn-text { font-size: 14px !important; }
          .timer { font-size: 48px !important; }
          .wind-box { margin-top: 8px !important; padding-top: 8px !important; }

          .power-meter {
            top: auto !important;
            bottom: 170px !important;
            right: 20px !important;
            left: auto !important;
            transform: none !important;
          }

          .menu-btn {
            padding: 15px 50px !important;
            font-size: 18px !important;
          }

          .level-card {
            width: 250px !important;
            padding: 15px !important;
          }

          .levels-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }

          .level-select-title { font-size: 32px !important; }

          .map-selection {
            flex-direction: column !important;
            align-items: center;
          }

          .map-card {
            width: 250px !important;
          }
        }

        @media (max-width: 600px) {
          .levels-grid {
            grid-template-columns: 1fr !important;
          }

          .top-bar {
            justify-content: center;
          }

          .team-panel {
            flex: 1;
            min-width: 45%;
          }

          .center-info {
            width: 100%;
            order: -1;
          }

          .title {
            font-size: 36px !important;
            letter-spacing: 4px !important;
          }
          .subtitle {
            font-size: 12px !important;
            letter-spacing: 4px !important;
            margin-bottom: 20px !important;
          }
          .play-btn {
            padding: 12px 40px !important;
            font-size: 14px !important;
            letter-spacing: 2px !important;
          }
        }

        /* Very small landscape screens */
        @media (max-height: 450px) and (orientation: landscape) {
          .menu {
            padding: 10px !important;
            justify-content: center !important;
          }
          .title {
            font-size: 32px !important;
            letter-spacing: 4px !important;
            margin-bottom: 5px !important;
          }
          .subtitle {
            font-size: 10px !important;
            letter-spacing: 4px !important;
            margin-bottom: 10px !important;
          }
          .play-btn {
            padding: 10px 30px !important;
            font-size: 12px !important;
            letter-spacing: 2px !important;
          }
          .menu-buttons {
            gap: 8px !important;
            flex-direction: row !important;
          }
          .title-wrapper {
            margin-bottom: 10px !important;
          }

          /* HUD adjustments for small landscape */
          .top-bar {
            padding: 5px 10px !important;
            flex-wrap: nowrap !important;
            gap: 5px !important;
          }
          .team-panel {
            padding: 4px 8px !important;
            min-width: auto !important;
            max-width: 150px !important;
          }
          .team-header {
            margin-bottom: 4px !important;
          }
          .team-icon {
            width: 20px !important;
            height: 20px !important;
            font-size: 12px !important;
          }
          .team-title {
            font-size: 9px !important;
            letter-spacing: 1px !important;
          }
          .worm-row {
            gap: 4px !important;
          }
          .worm-name {
            font-size: 8px !important;
          }
          .hp-bar {
            width: 30px !important;
            height: 3px !important;
          }
          .center-info {
            padding: 4px 10px !important;
            min-width: 100px !important;
          }
          .turn-text {
            font-size: 10px !important;
            letter-spacing: 1px !important;
          }
          .timer {
            font-size: 28px !important;
          }
          .wind-box {
            margin-top: 4px !important;
            padding-top: 4px !important;
            gap: 5px !important;
          }
          .wind-label {
            font-size: 8px !important;
          }
          .wind-meter {
            width: 60px !important;
          }
          .sound-btn {
            width: 35px !important;
            height: 35px !important;
            font-size: 16px !important;
            top: 5px !important;
            right: 5px !important;
          }
          .weapons-bar {
            bottom: 30px !important;
            padding: 4px 8px !important;
            gap: 3px !important;
          }
          .weapon {
            width: 36px !important;
            height: 36px !important;
          }
          .weapon-icon {
            font-size: 16px !important;
          }
          .weapon-ammo {
            font-size: 7px !important;
          }
          .power-meter {
            bottom: 80px !important;
          }
        }
      </style>

      <div class="ui">
        <!-- Language Selector -->
        <div class="lang-selector" id="lang-selector">
          <button class="lang-btn${M()==="en"?" active":""}" data-lang="en" title="English">🇬🇧</button>
          <button class="lang-btn${M()==="ru"?" active":""}" data-lang="ru" title="Русский">🇷🇺</button>
          <button class="lang-btn${M()==="de"?" active":""}" data-lang="de" title="Deutsch">🇩🇪</button>
          <button class="lang-btn${M()==="es"?" active":""}" data-lang="es" title="Español">🇪🇸</button>
          <button class="lang-btn${M()==="fr"?" active":""}" data-lang="fr" title="Français">🇫🇷</button>
          <button class="lang-btn-more" id="lang-more-btn">•••</button>
          <div class="lang-dropdown" id="lang-dropdown">
            <button class="lang-btn${M()==="it"?" active":""}" data-lang="it" title="Italiano">🇮🇹</button>
            <button class="lang-btn${M()==="pt"?" active":""}" data-lang="pt" title="Português">🇧🇷</button>
            <button class="lang-btn${M()==="tr"?" active":""}" data-lang="tr" title="Türkçe">🇹🇷</button>
            <button class="lang-btn${M()==="ja"?" active":""}" data-lang="ja" title="日本語">🇯🇵</button>
            <button class="lang-btn${M()==="ko"?" active":""}" data-lang="ko" title="한국어">🇰🇷</button>
            <button class="lang-btn${M()==="zh"?" active":""}" data-lang="zh" title="中文">🇨🇳</button>
            <button class="lang-btn${M()==="ar"?" active":""}" data-lang="ar" title="العربية">🇸🇦</button>
            <button class="lang-btn${M()==="hi"?" active":""}" data-lang="hi" title="हिन्दी">🇮🇳</button>
            <button class="lang-btn${M()==="id"?" active":""}" data-lang="id" title="Indonesia">🇮🇩</button>
          </div>
        </div>

        <div class="menu" id="menu">
          <div class="menu-particles" id="menu-particles"></div>
          <div class="title-wrapper">
            <div class="title">${f("title")}</div>
          </div>
          <div class="subtitle">${f("subtitle")}</div>

          <div class="menu-buttons">
            <button class="menu-btn campaign" id="campaign-btn">${f("campaign")}</button>
            <button class="menu-btn quickplay" id="quickplay-btn">${f("quickPlay")}</button>
          </div>
        </div>

        <!-- Level Select Screen -->
        <div class="level-select" id="level-select">
          <div class="level-select-title">${f("selectMission")}</div>
          <div class="level-select-subtitle">${f("selectMissionSubtitle")}</div>
          <div class="levels-grid" id="levels-grid"></div>
          <button class="back-btn" id="back-to-menu">${f("backToMenu")}</button>
        </div>

        <!-- Quickplay Map Selection -->
        <div class="level-select" id="quickplay-select">
          <div class="level-select-title">${f("quickPlayTitle")}</div>
          <div class="level-select-subtitle">${f("selectMapSubtitle")}</div>
          <div class="map-selection" id="map-selection" style="display: flex; gap: 20px; margin-bottom: 40px;">
            <div class="map-card selected" data-map="meadow">
              <div class="map-check">✓</div>
              <div class="map-preview map-preview-meadow">
                <div class="map-icon">🌿</div>
              </div>
              <div class="map-name">${f("greenMeadow")}</div>
              <div class="map-desc">${f("greenMeadowDesc")}</div>
            </div>
            <div class="map-card" data-map="city">
              <div class="map-check">✓</div>
              <div class="map-preview map-preview-city">
                <div class="map-icon">🏙️</div>
              </div>
              <div class="map-name">${f("ruinedCity")}</div>
              <div class="map-desc">${f("ruinedCityDesc")}</div>
            </div>
            <div class="map-card" data-map="desert">
              <div class="map-check">✓</div>
              <div class="map-preview map-preview-desert">
                <div class="map-icon">🏜️</div>
              </div>
              <div class="map-name">${f("desertDunes")}</div>
              <div class="map-desc">${f("desertDunesDesc")}</div>
            </div>
          </div>
          <div style="display: flex; gap: 20px;">
            <button class="back-btn" id="back-from-quickplay">${f("back")}</button>
            <button class="menu-btn campaign" id="start-quickplay">${f("play")}</button>
          </div>
        </div>

        <!-- Result Screen -->
        <div class="result-screen" id="result-screen">
          <div class="result-title" id="result-title">${f("victory")}</div>
          <div class="result-level" id="result-level"></div>
          <div class="result-reward" id="result-reward"></div>
          <div class="result-buttons">
            <button class="result-btn next" id="result-next">${f("nextLevel")}</button>
            <button class="result-btn retry" id="result-retry">${f("retry")}</button>
            <button class="result-btn rewarded" id="result-rewarded" style="display: none;">${f("watchAdForAirstrike")}</button>
            <button class="result-btn menu" id="result-menu">${f("menu")}</button>
          </div>
        </div>

        <div class="hud" id="hud">
          <button class="sound-btn" id="sound-btn" title="Toggle Sound">🔊</button>
          <div class="top-bar">
            <div class="team-panel red">
              <div class="team-header">
                <div class="team-icon red">⚔️</div>
                <div class="team-title red" id="team-title-red">${f("redArmy")}</div>
              </div>
              <div class="worm-row" id="red-team"></div>
            </div>

            <div class="center-info">
              <div class="turn-text" id="turn-text"></div>
              <div class="timer" id="timer">45</div>
              <div class="wind-box">
                <span class="wind-label">${f("wind")}</span>
                <div class="wind-meter">
                  <div class="wind-indicator"></div>
                  <div class="wind-bar" id="wind-bar"></div>
                </div>
                <span class="wind-arrow" id="wind-dir">→</span>
              </div>
            </div>

            <div class="team-panel blue">
              <div class="team-header">
                <div class="team-icon blue">🛡️</div>
                <div class="team-title blue" id="team-title-blue">${f("blueLegion")}</div>
              </div>
              <div class="worm-row" id="blue-team"></div>
            </div>
          </div>

          <div class="weapons-bar" id="weapons">
            <div class="weapon active" data-weapon="bazooka">
              <span class="weapon-key">1</span>
              <span class="weapon-icon">🚀</span>
              <span class="weapon-ammo">∞</span>
            </div>
            <div class="weapon" data-weapon="grenade">
              <span class="weapon-key">2</span>
              <span class="weapon-icon">💣</span>
              <span class="weapon-ammo" id="ammo-grenade">5</span>
            </div>
            <div class="weapon" data-weapon="shotgun">
              <span class="weapon-key">3</span>
              <span class="weapon-icon">🔫</span>
              <span class="weapon-ammo" id="ammo-shotgun">3</span>
            </div>
            <div class="weapon" data-weapon="airstrike">
              <span class="weapon-key">4</span>
              <span class="weapon-icon">✈️</span>
              <span class="weapon-ammo" id="ammo-airstrike">2</span>
            </div>
            <div class="weapon" data-weapon="dynamite">
              <span class="weapon-key">5</span>
              <span class="weapon-icon">🧨</span>
              <span class="weapon-ammo" id="ammo-dynamite">1</span>
            </div>
          </div>

          <div class="power-meter" id="power-meter">
            <div class="power-label">${f("power")}: <span id="power-val">0</span>%</div>
            <div class="power-track">
              <div class="power-fill" id="power-fill"></div>
            </div>
          </div>

          <div class="hint">
            <kbd>A</kbd><kbd>D</kbd> ${f("hintMove")}
            <kbd>Mouse</kbd> ${f("hintAim")}
            <kbd>Space</kbd> ${f("hintFire")}
            <kbd>1-5</kbd> ${f("hintWeapons")}
          </div>

          <!-- Mobile Controls -->
          <div class="mobile-controls" id="mobile-controls">
            <div class="joystick-zone" id="joystick-zone">
              <div class="joystick-base">
                <div class="joystick-stick" id="joystick-stick"></div>
              </div>
            </div>
            <div class="aim-zone" id="aim-zone">
              <div class="aim-base">
                <div class="aim-stick" id="aim-stick"></div>
              </div>
            </div>
            <div class="fire-btn" id="fire-btn">${f("fire")}</div>
          </div>
        </div>

        <div class="gameover" id="gameover">
          <div class="winner" id="winner"></div>
          <button class="play-btn" id="restart-btn">${f("playAgain")}</button>
        </div>
      </div>
    `,document.getElementById("restart-btn").onclick=()=>this.startGame();const t=document.getElementById("lang-more-btn"),a=document.getElementById("lang-dropdown");t.onclick=n=>{n.stopPropagation(),a.classList.toggle("open")},document.addEventListener("click",()=>{a.classList.remove("open")}),document.querySelectorAll(".lang-btn").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const l=n.dataset.lang;l&&l!==M()&&(v.playClick(),U(l),location.reload())})});const i=document.getElementById("sound-btn");i.onclick=()=>{this.soundEnabled=!this.soundEnabled,v.setEnabled(this.soundEnabled),i.textContent=this.soundEnabled?"🔊":"🔇",i.classList.toggle("muted",!this.soundEnabled)},document.getElementById("campaign-btn").onclick=()=>{v.playClick(),this.gameMode="campaign",document.getElementById("menu").classList.remove("active"),this.renderLevelSelect(),document.getElementById("level-select").classList.add("active")},document.getElementById("quickplay-btn").onclick=()=>{v.playClick(),this.gameMode="quickplay",document.getElementById("menu").classList.remove("active"),document.getElementById("quickplay-select").classList.add("active")},document.getElementById("back-to-menu").onclick=()=>{v.playClick(),document.getElementById("level-select").classList.remove("active"),document.getElementById("menu").classList.add("active")},document.getElementById("back-from-quickplay").onclick=()=>{v.playClick(),document.getElementById("quickplay-select").classList.remove("active"),document.getElementById("menu").classList.add("active")},document.getElementById("start-quickplay").onclick=()=>{v.playClick(),document.getElementById("quickplay-select").classList.remove("active"),sessionStorage.setItem("shellStrikersPendingMode","quickplay"),sessionStorage.setItem("shellStrikersPendingMap",this.selectedMap),this.showPreloader(()=>{sessionStorage.removeItem("shellStrikersPendingMode"),sessionStorage.removeItem("shellStrikersPendingMap"),this.startGame()})},document.getElementById("result-next").onclick=()=>{if(v.playClick(),document.getElementById("result-screen").classList.remove("active"),this.currentLevel<C.length){const n=this.currentLevel+1;sessionStorage.setItem("shellStrikersPendingLevel",n.toString()),sessionStorage.setItem("shellStrikersPendingMode","campaign"),this.showFullscreen(()=>{sessionStorage.removeItem("shellStrikersPendingLevel"),sessionStorage.removeItem("shellStrikersPendingMode"),this.currentLevel=n,this.startCampaignLevel(this.currentLevel)})}else this.onGameplayStop(),document.getElementById("hud").classList.remove("active"),document.getElementById("menu").style.display="",document.getElementById("lang-selector").style.display="",document.getElementById("menu").classList.add("active"),this.state="menu"},document.getElementById("result-retry").onclick=()=>{v.playClick(),document.getElementById("result-screen").classList.remove("active"),this.gameMode==="campaign"?(sessionStorage.setItem("shellStrikersPendingLevel",this.currentLevel.toString()),sessionStorage.setItem("shellStrikersPendingMode","campaign")):(sessionStorage.setItem("shellStrikersPendingMode","quickplay"),sessionStorage.setItem("shellStrikersPendingMap",this.selectedMap)),this.showFullscreen(()=>{sessionStorage.removeItem("shellStrikersPendingLevel"),sessionStorage.removeItem("shellStrikersPendingMode"),sessionStorage.removeItem("shellStrikersPendingMap"),this.gameMode==="campaign"?this.startCampaignLevel(this.currentLevel):this.startGame()})},document.getElementById("result-menu").onclick=()=>{v.playClick(),this.onGameplayStop(),document.getElementById("result-screen").classList.remove("active"),document.getElementById("hud").classList.remove("active"),document.getElementById("menu").style.display="",document.getElementById("lang-selector").style.display="",document.getElementById("menu").classList.add("active"),this.state="menu"},document.getElementById("result-rewarded").onclick=()=>{v.playClick(),this.showRewardedVideo(()=>{this.ammo.airstrike+=1,document.getElementById("result-rewarded").style.display="none",document.getElementById("result-reward").textContent=f("airstrikeEarned"),document.getElementById("result-reward").style.display="block"},()=>{})},document.querySelectorAll(".map-card").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-map");this.selectedMap=o,document.querySelectorAll(".map-card").forEach(l=>l.classList.remove("selected")),n.classList.add("selected"),this.renderBackground(),this.generateTerrain()})}),document.querySelectorAll(".weapon").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-weapon");this.ammo[o]>0&&this.selectWeapon(o)})})}setupInput(){window.addEventListener("keydown",e=>{this.keys.add(e.code),e.code==="Digit1"&&this.selectWeapon("bazooka"),e.code==="Digit2"&&this.selectWeapon("grenade"),e.code==="Digit3"&&this.selectWeapon("shotgun"),e.code==="Digit4"&&this.selectWeapon("airstrike"),e.code==="Digit5"&&this.selectWeapon("dynamite"),e.code==="Space"&&this.state==="aiming"&&(e.preventDefault(),this.startCharge())}),window.addEventListener("keyup",e=>{this.keys.delete(e.code),e.code==="Space"&&this.state==="shooting"&&this.fire()}),this.canvas.addEventListener("mousemove",e=>{const t=this.canvas.getBoundingClientRect(),a=this.width/t.width,i=this.height/t.height;this.mouseX=(e.clientX-t.left)*a+this.cameraX,this.mouseY=(e.clientY-t.top)*i+this.cameraY}),this.canvas.addEventListener("mousedown",()=>{this.state==="aiming"&&this.startCharge()}),this.canvas.addEventListener("mouseup",()=>{this.state==="shooting"&&this.fire()}),this.setupMobileControls()}setupMobileControls(){const e="ontouchstart"in window||navigator.maxTouchPoints>0,t=window.innerWidth<=900||window.innerHeight<=500,a=window.matchMedia("(pointer: coarse)").matches;this.isMobile=e||t||a,this.isMobile&&document.getElementById("mobile-controls").classList.add("active"),window.addEventListener("resize",()=>{(window.innerWidth<=900||window.innerHeight<=500)&&(document.getElementById("mobile-controls").classList.add("active"),this.isMobile=!0)});const i=document.getElementById("joystick-zone"),n=document.getElementById("joystick-stick"),o=document.getElementById("aim-zone"),l=document.getElementById("aim-stick"),r=document.getElementById("fire-btn");let s=!1,d=0,c=0;i.addEventListener("touchstart",u=>{u.preventDefault(),s=!0,u.touches[0];const g=i.getBoundingClientRect();d=g.left+g.width/2,c=g.top+g.height/2},{passive:!1}),i.addEventListener("touchmove",u=>{if(!s)return;u.preventDefault();const g=u.touches[0],b=g.clientX-d,x=g.clientY-c,w=40,S=Math.min(Math.sqrt(b*b+x*x),w),T=Math.atan2(x,b),P=Math.cos(T)*S,L=Math.sin(T)*S;n.style.transform=`translate(calc(-50% + ${P}px), calc(-50% + ${L}px))`,this.touchMoveX=P/w},{passive:!1}),i.addEventListener("touchend",()=>{s=!1,n.style.transform="translate(-50%, -50%)",this.touchMoveX=0}),i.addEventListener("mousedown",u=>{u.preventDefault(),s=!0;const g=i.getBoundingClientRect();d=g.left+g.width/2,c=g.top+g.height/2}),document.addEventListener("mousemove",u=>{if(!s)return;const g=u.clientX-d,b=u.clientY-c,x=40,w=Math.min(Math.sqrt(g*g+b*b),x),S=Math.atan2(b,g),T=Math.cos(S)*w,P=Math.sin(S)*w;n.style.transform=`translate(calc(-50% + ${T}px), calc(-50% + ${P}px))`,this.touchMoveX=T/x}),document.addEventListener("mouseup",()=>{s&&(s=!1,n.style.transform="translate(-50%, -50%)",this.touchMoveX=0)});let h=!1,p=0,m=0;o.addEventListener("touchstart",u=>{u.preventDefault(),h=!0,this.touchAiming=!0;const g=o.getBoundingClientRect();p=g.left+g.width/2,m=g.top+g.height/2},{passive:!1}),o.addEventListener("touchmove",u=>{if(!h)return;u.preventDefault();const g=u.touches[0],b=g.clientX-p,x=g.clientY-m,S=Math.min(Math.sqrt(b*b+x*x),40),T=Math.atan2(x,b),P=Math.cos(T)*S,L=Math.sin(T)*S;l.style.transform=`translate(calc(-50% + ${P}px), calc(-50% + ${L}px))`,this.touchAimAngle=T*180/Math.PI},{passive:!1}),o.addEventListener("touchend",()=>{h=!1,this.touchAiming=!1,l.style.transform="translate(-50%, -50%)"}),o.addEventListener("mousedown",u=>{u.preventDefault(),h=!0,this.touchAiming=!0;const g=o.getBoundingClientRect();p=g.left+g.width/2,m=g.top+g.height/2}),document.addEventListener("mousemove",u=>{if(!h)return;const g=u.clientX-p,b=u.clientY-m,w=Math.min(Math.sqrt(g*g+b*b),40),S=Math.atan2(b,g),T=Math.cos(S)*w,P=Math.sin(S)*w;l.style.transform=`translate(calc(-50% + ${T}px), calc(-50% + ${P}px))`,this.touchAimAngle=S*180/Math.PI}),document.addEventListener("mouseup",()=>{h&&(h=!1,this.touchAiming=!1,l.style.transform="translate(-50%, -50%)")}),r.addEventListener("touchstart",u=>{u.preventDefault(),this.state==="aiming"&&this.currentTeam!==this.aiTeam&&(this.startCharge(),r.classList.add("charging"))},{passive:!1}),r.addEventListener("touchend",u=>{u.preventDefault(),this.state==="shooting"&&this.fire(),r.classList.remove("charging")}),r.addEventListener("mousedown",u=>{u.preventDefault(),this.state==="aiming"&&this.currentTeam!==this.aiTeam&&(this.startCharge(),r.classList.add("charging"))}),r.addEventListener("mouseup",u=>{u.preventDefault(),this.state==="shooting"&&this.fire(),r.classList.remove("charging")}),r.addEventListener("mouseleave",()=>{this.state==="shooting"&&this.fire(),r.classList.remove("charging")}),this.canvas.addEventListener("touchstart",u=>{u.preventDefault()},{passive:!1}),this.canvas.addEventListener("touchmove",u=>{if(u.preventDefault(),u.touches.length>0){const g=u.touches[0],b=this.canvas.getBoundingClientRect(),x=this.width/b.width,w=this.height/b.height;this.mouseX=(g.clientX-b.left)*x+this.cameraX,this.mouseY=(g.clientY-b.top)*w+this.cameraY}},{passive:!1})}selectWeapon(e){this.ammo[e]<=0||this.state!=="aiming"||(this.selectedWeapon=e,v.playWeaponSwitch(),document.querySelectorAll(".weapon").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-weapon")===e)}))}renderBackground(){this.backgroundRenderer.render(this.selectedMap)}generateTerrain(){this.terrainRenderer.generate(this.selectedMap),this.terrain=this.terrainRenderer.terrain}isTerrainAt(e,t){return this.terrainRenderer.isTerrainAt(e,t)}destroyTerrain(e,t,a){this.terrainRenderer.destroyTerrain(e,t,a,this.particles),this.terrain=this.terrainRenderer.terrain}renderLevelSelect(){const e=document.getElementById("levels-grid");e.innerHTML="";const t={meadow:"🌿",city:"🏙️",desert:"🏜️"};C.forEach(a=>{const i=this.unlockedLevels.includes(a.id),n=Math.ceil(a.aiSkill*5),o=a.id-1,l=document.createElement("div");l.className=`level-card${i?"":" locked"}`,l.innerHTML=`
        <div class="level-header">
          <span class="level-number">${f("level")} ${a.id}</span>
          <span class="level-map-icon">${t[a.map]}</span>
        </div>
        <div class="level-name">${A("levelNames",o)}</div>
        <div class="level-desc">${A("levelDescriptions",o)}</div>
        <div class="level-stats">
          <div class="level-stat">👤 ${a.playerCount}</div>
          <div class="level-stat">👾 ${a.enemyCount}</div>
        </div>
        <div class="level-difficulty">
          ${Array(5).fill(0).map((r,s)=>`<span class="diff-star${s<n?"":" empty"}">★</span>`).join("")}
        </div>
      `,i&&(l.onclick=()=>{v.playClick(),this.currentLevel=a.id,document.getElementById("level-select").classList.remove("active"),sessionStorage.setItem("shellStrikersPendingLevel",a.id.toString()),sessionStorage.setItem("shellStrikersPendingMode","campaign"),this.showPreloader(()=>{sessionStorage.removeItem("shellStrikersPendingLevel"),sessionStorage.removeItem("shellStrikersPendingMode"),this.startCampaignLevel(a.id)})}),e.appendChild(l)})}startCampaignLevel(e){const t=C.find(a=>a.id===e);t&&(this.currentLevel=e,this.selectedMap=t.map,this.aiSkillLevel=t.aiSkill,this.currentLevelConfig=t,document.getElementById("menu").style.display="none",document.getElementById("lang-selector").style.display="none",document.getElementById("gameover").classList.remove("active"),document.getElementById("hud").classList.add("active"),this.renderBackground(),this.generateTerrain(),this.spawnWormsForLevel(t),this.wind=(Math.random()-.5)*.6,this.updateWindUI(),this.ammo={bazooka:1/0,grenade:5,shotgun:3,airstrike:2,dynamite:1},this.selectedWeapon="bazooka",this.currentTeam=0,this.currentWormIndex=0,this.turnTimer=this.turnTime,this.state="aiming",this.particles=[],this.projectiles=[],this.explosions=[],this.floatingTexts=[],this.updateUI(),this.focusWorm(),this.onGameplayStart())}spawnWormsForLevel(e){this.worms=[];const t=(n,o,l)=>{const r=[],s=(l-o)/(n+1);for(let d=1;d<=n;d++)r.push(o+s*d);return r},a=t(e.playerCount,100,700),i=t(e.enemyCount,1200,1800);for(let n=0;n<e.playerCount;n++){const o=a[n];let l=0;for(;l<this.height&&!this.isTerrainAt(o,l);)l++;this.worms.push({x:o,y:l-25,vx:0,vy:0,health:e.playerHealth,maxHealth:e.playerHealth,team:0,name:this.wormNames[0][n%this.wormNames[0].length],angle:-45,power:0,onGround:!0,facingRight:!0,walkFrame:0,blinkTimer:100+Math.random()*100,expression:"normal",breathePhase:Math.random()*Math.PI*2,hatType:n%4})}for(let n=0;n<e.enemyCount;n++){const o=i[n];let l=0;for(;l<this.height&&!this.isTerrainAt(o,l);)l++;this.worms.push({x:o,y:l-25,vx:0,vy:0,health:e.enemyHealth,maxHealth:e.enemyHealth,team:1,name:this.wormNames[1][n%this.wormNames[1].length],angle:-135,power:0,onGround:!0,facingRight:!1,walkFrame:0,blinkTimer:100+Math.random()*100,expression:"normal",breathePhase:Math.random()*Math.PI*2,hatType:n%4})}}startGame(){document.getElementById("menu").style.display="none",document.getElementById("lang-selector").style.display="none",document.getElementById("gameover").classList.remove("active"),document.getElementById("hud").classList.add("active"),this.generateTerrain(),this.spawnWorms(),this.wind=(Math.random()-.5)*.6,this.updateWindUI(),this.ammo={bazooka:1/0,grenade:5,shotgun:3,airstrike:2,dynamite:1},this.selectedWeapon="bazooka",this.currentTeam=0,this.currentWormIndex=0,this.turnTimer=this.turnTime,this.state="aiming",this.particles=[],this.projectiles=[],this.explosions=[],this.floatingTexts=[],this.updateUI(),this.focusWorm(),this.onGameplayStart()}spawnWorms(){this.worms=[];const e=[[180,330,480,630],[1280,1430,1580,1730]];for(let t=0;t<2;t++)for(let a=0;a<4;a++){const i=e[t][a];let n=0;for(;n<this.height&&!this.isTerrainAt(i,n);)n++;this.worms.push({x:i,y:n-25,vx:0,vy:0,health:100,maxHealth:100,team:t,name:this.wormNames[t][a],angle:t===0?-45:-135,power:0,onGround:!0,facingRight:t===0,walkFrame:0,blinkTimer:100+Math.random()*100,expression:"normal",breathePhase:Math.random()*Math.PI*2,hatType:a%4})}}currentWorm(){const e=this.worms.filter(t=>t.team===this.currentTeam&&t.health>0);return e[this.currentWormIndex%e.length]||null}focusWorm(){const e=this.currentWorm();e&&(this.targetCamX=e.x-this.width/2,this.targetCamY=Math.max(0,e.y-this.height/2))}startCharge(){const e=this.currentWorm();e&&(this.state="shooting",e.power=0,document.getElementById("power-meter").classList.add("active"))}fire(){const e=this.currentWorm();if(!e)return;if(this.ammo[this.selectedWeapon]<=0){this.state="aiming",document.getElementById("power-meter").classList.remove("active");return}this.ammo[this.selectedWeapon]!==1/0&&(this.ammo[this.selectedWeapon]--,this.updateAmmoUI()),v.playShoot();const t=e.angle*Math.PI/180,a=e.power*.2;if(this.selectedWeapon==="airstrike")for(let i=-2;i<=2;i++)this.projectiles.push({x:this.mouseX+i*60,y:-50-Math.abs(i)*40,vx:0,vy:12,type:"airstrike",active:!0,timer:0,rotation:Math.PI/2,trail:[]});else if(this.selectedWeapon==="dynamite"){this.projectiles.push({x:e.x+(e.facingRight?25:-25),y:e.y,vx:e.facingRight?3:-3,vy:-3,type:"dynamite",active:!0,timer:180,rotation:0,trail:[]}),this.state="retreating",this.retreatTimer=90,document.getElementById("power-meter").classList.remove("active");return}else if(this.selectedWeapon==="shotgun"){for(let i=-2;i<=2;i++){const n=t+i*.15;this.projectiles.push({x:e.x,y:e.y-10,vx:Math.cos(n)*a*2,vy:Math.sin(n)*a*2,type:"shotgun",active:!0,timer:0,rotation:n,trail:[]})}this.createMuzzleFlash(e.x+Math.cos(t)*30,e.y+Math.sin(t)*30-10)}else this.projectiles.push({x:e.x+Math.cos(t)*30,y:e.y+Math.sin(t)*30-10,vx:Math.cos(t)*a,vy:Math.sin(t)*a,type:this.selectedWeapon,active:!0,timer:this.selectedWeapon==="grenade"?180:0,rotation:t,trail:[]});this.state="waiting",document.getElementById("power-meter").classList.remove("active")}createMuzzleFlash(e,t){for(let a=0;a<25;a++){const i=Math.random()*Math.PI*2,n=Math.random()*10+4;this.particles.push({x:e,y:t,vx:Math.cos(i)*n,vy:Math.sin(i)*n,life:.35,maxLife:.35,color:a%2===0?"#ffff00":"#ff8800",size:Math.random()*6+3,type:"spark",rotation:0,rotationSpeed:0,gravity:0})}}showResultScreen(e){if(this.onGameplayStop(),this.levelCompletedCount++,this.levelCompletedCount%2===0){if(this.gameMode==="campaign"){const t=e?this.currentLevel+1:this.currentLevel;t<=C.length&&(sessionStorage.setItem("shellStrikersPendingLevel",t.toString()),sessionStorage.setItem("shellStrikersPendingMode","campaign"),sessionStorage.setItem("shellStrikersPendingVictory",e?"true":"false"))}this.showFullscreen(()=>{sessionStorage.removeItem("shellStrikersPendingLevel"),sessionStorage.removeItem("shellStrikersPendingMode"),sessionStorage.removeItem("shellStrikersPendingVictory"),this.displayResultUI(e)})}else this.displayResultUI(e)}displayResultUI(e){console.log("displayResultUI called, playerWon:",e,"currentLevel:",this.currentLevel);const t=this.currentLevel-1;e?v.playVictory():v.playDefeat();const a=document.getElementById("dynamic-result-overlay");a&&a.remove();const i=document.createElement("div");i.id="dynamic-result-overlay",i.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(17, 17, 17, 0.98);
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'Segoe UI', Arial, sans-serif;
    `;const n=f(e?"victory":"defeat"),o=e?"#fbbf24":"#ef4444",l=`${f("level")} ${this.currentLevel}: ${A("levelNames",t)}`;let r="";e?this.currentLevel<C.length&&!this.unlockedLevels.includes(this.currentLevel+1)?(this.unlockedLevels.push(this.currentLevel+1),this.saveProgress(),r=f("levelUnlocked",this.currentLevel+1)):this.currentLevel>=C.length&&(r=f("allLevelsComplete")):r=f("tryAgain");const s=e&&this.currentLevel<C.length,d=!e&&this.isRewardedAvailable();i.innerHTML=`
      <div style="font-size: clamp(48px, 10vw, 80px); font-weight: bold; color: ${o}; text-shadow: 0 4px 20px rgba(0,0,0,0.5); margin-bottom: 20px;">${n}</div>
      <div style="font-size: clamp(18px, 4vw, 28px); color: #e2e8f0; margin-bottom: 10px;">${l}</div>
      ${r?`<div style="font-size: clamp(16px, 3vw, 22px); color: #94a3b8; margin-bottom: 30px;">${r}</div>`:""}
      <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
        ${s?`<button id="dyn-result-next" style="padding: 15px 50px; font-size: 18px; font-weight: bold; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; border: none; border-radius: 10px; cursor: pointer; box-shadow: 0 4px 0 #15803d, 0 8px 20px rgba(0,0,0,0.3);">${f("nextLevel")}</button>`:""}
        <button id="dyn-result-retry" style="padding: 15px 50px; font-size: 18px; font-weight: bold; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none; border-radius: 10px; cursor: pointer; box-shadow: 0 4px 0 #b45309, 0 8px 20px rgba(0,0,0,0.3);">${f("retry")}</button>
        ${d?`<button id="dyn-result-rewarded" style="padding: 15px 50px; font-size: 18px; font-weight: bold; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white; border: none; border-radius: 10px; cursor: pointer; box-shadow: 0 4px 0 #6d28d9, 0 8px 20px rgba(0,0,0,0.3);">${f("watchAdForAirstrike")}</button>`:""}
        <button id="dyn-result-menu" style="padding: 15px 50px; font-size: 18px; font-weight: bold; background: linear-gradient(135deg, #64748b 0%, #475569 100%); color: white; border: none; border-radius: 10px; cursor: pointer; box-shadow: 0 4px 0 #334155, 0 8px 20px rgba(0,0,0,0.3);">${f("menu")}</button>
      </div>
    `,document.body.appendChild(i);const c=document.getElementById("dyn-result-next");c&&(c.onclick=()=>{v.playClick(),i.remove(),this.startCampaignLevel(this.currentLevel+1)});const h=document.getElementById("dyn-result-retry");h&&(h.onclick=()=>{v.playClick(),i.remove(),this.gameMode==="campaign"?this.startCampaignLevel(this.currentLevel):this.startGame()});const p=document.getElementById("dyn-result-rewarded");p&&(p.onclick=()=>{v.playClick(),this.showRewardedVideo(()=>{this.ammo.airstrike+=1,i.remove(),this.gameMode==="campaign"?this.startCampaignLevel(this.currentLevel):this.startGame()},()=>{console.log("Rewarded video cancelled or failed")})});const m=document.getElementById("dyn-result-menu");m&&(m.onclick=()=>{v.playClick(),i.remove(),this.onGameplayStop(),document.getElementById("menu").style.display="",document.getElementById("lang-selector").style.display="",document.getElementById("menu").classList.add("active"),this.state="menu"}),document.getElementById("hud").classList.remove("active"),console.log("Dynamic result overlay created and displayed")}nextTurn(){if(this.state==="gameover")return;const e=this.worms.some(i=>i.team===0&&i.health>0),t=this.worms.some(i=>i.team===1&&i.health>0);if(!e||!t){this.state="gameover";const i=e;if(this.gameMode==="campaign")this.showResultScreen(i);else{const n=e?"red":"blue",o=document.getElementById("winner");o.className=`winner ${n}`;const l=f(e?"redArmy":"blueLegion");o.textContent=`${l} ${f("wins")}`,document.getElementById("gameover").classList.add("active")}return}this.currentTeam=1-this.currentTeam;const a=this.worms.filter(i=>i.team===this.currentTeam&&i.health>0);this.currentWormIndex=(this.currentWormIndex+1)%a.length,this.wind+=(Math.random()-.5)*.2,this.wind=Math.max(-.8,Math.min(.8,this.wind)),this.updateWindUI(),this.turnTimer=this.turnTime,this.state="aiming",this.updateUI(),this.focusWorm(),this.currentTeam===this.aiTeam&&this.startAITurn()}startAITurn(){this.aiThinking=!0,this.aiThinkTimer=30+Math.random()*30,this.aiPhase="waiting";const e=this.currentWorm();if(!e){this.aiThinking=!1,setTimeout(()=>this.nextTurn(),500);return}const t=this.worms.filter(s=>s.team!==this.aiTeam&&s.health>0);if(t.length===0){this.aiThinking=!1,setTimeout(()=>this.nextTurn(),500);return}let a;const i=t.find(s=>s.health<=30);i&&Math.random()>.3?a=i:a=t.reduce((s,d)=>{const c=Math.abs(d.x-e.x),h=Math.abs(s.x-e.x);return c<h?d:s});const n=a.x-e.x,o=a.y-e.y,l=Math.sqrt(n*n+o*o);Math.random()>.4?(l>600?(this.aiMoveDirection=n>0?1:-1,this.aiMoveTarget=e.x+this.aiMoveDirection*(100+Math.random()*150)):l<200?(this.aiMoveDirection=n>0?-1:1,this.aiMoveTarget=e.x+this.aiMoveDirection*(50+Math.random()*80)):(this.aiMoveDirection=Math.random()>.5?1:-1,this.aiMoveTarget=e.x+this.aiMoveDirection*(30+Math.random()*60)),this.aiMoveTarget=Math.max(50,Math.min(this.width-50,this.aiMoveTarget))):this.aiMoveTarget=e.x,this.calculateAIShot(e,a)}calculateAIShot(e,t){const a=t.x-e.x,i=t.y-e.y,n=Math.sqrt(a*a+i*i),o=1-this.aiSkillLevel,l=(Math.random()-.5)*20*o,r=(Math.random()-.5)*20*o,s=Math.abs(a);let d;if(i<-50?d=Math.atan2(i-s*.5,a)*180/Math.PI:i>50?d=Math.atan2(i-s*.2,a)*180/Math.PI:d=Math.atan2(i-s*.35,a)*180/Math.PI,Math.random()<this.aiSkillLevel){const h=this.wind*s*.02;d-=h}let c;n<300?c=35+n*.08:n<600?c=50+(n-300)*.1:c=70+(n-600)*.05,c=Math.min(95,Math.max(30,c)),this.aiTargetAngle=d+l,this.aiTargetPower=Math.min(100,Math.max(25,c+r)),n<150&&this.ammo.shotgun>0&&Math.random()>.5?(this.selectedWeapon="shotgun",this.aiTargetPower=Math.min(70,this.aiTargetPower)):n>500&&this.ammo.airstrike>0&&Math.random()>.6?this.selectedWeapon="airstrike":this.ammo.grenade>0&&Math.random()>.75?this.selectedWeapon="grenade":this.selectedWeapon="bazooka"}updateAI(){if(!this.aiThinking||this.currentTeam!==this.aiTeam)return;const e=this.currentWorm();if(!e){this.aiThinking=!1,setTimeout(()=>this.nextTurn(),500);return}switch(this.aiPhase){case"waiting":this.aiThinkTimer--,this.aiThinkTimer<=0&&(Math.abs(e.x-this.aiMoveTarget)>20?(this.aiPhase="moving",this.aiThinkTimer=120):(this.aiPhase="aiming",this.aiThinkTimer=25+Math.random()*20));break;case"moving":const t=this.aiMoveTarget>e.x?1:-1;e.x+=t*2.5,e.facingRight=t>0,e.walkFrame+=.25,e.onGround||(e.vy+=.4,e.y+=e.vy),this.aiThinkTimer--;const a=Math.abs(e.x-this.aiMoveTarget)<15,i=this.aiThinkTimer<=0,n=this.isTerrainAt(e.x+t*25,e.y);if(a||i||n){const l=this.worms.filter(r=>r.team!==this.aiTeam&&r.health>0);if(l.length>0){const r=l.reduce((s,d)=>{const c=Math.abs(d.x-e.x),h=Math.abs(s.x-e.x);return c<h?d:s});this.calculateAIShot(e,r),this.aiPhase="aiming",this.aiThinkTimer=20+Math.random()*15}else this.aiThinking=!1,setTimeout(()=>this.nextTurn(),500)}break;case"aiming":const o=this.aiTargetAngle-e.angle;e.angle+=o*.12,e.facingRight=Math.cos(e.angle*Math.PI/180)>0,this.aiThinkTimer--,(this.aiThinkTimer<=0||Math.abs(o)<1)&&(this.aiPhase="charging",this.state="shooting",e.power=0,document.getElementById("power-meter").classList.add("active"));break;case"charging":e.power+=3,document.getElementById("power-val").textContent=Math.floor(e.power).toString(),document.getElementById("power-fill").style.width=`${e.power}%`,e.power>=this.aiTargetPower&&(this.aiPhase="done",this.aiThinking=!1,this.fire());break}}updateWindUI(){const e=document.getElementById("wind-bar"),t=document.getElementById("wind-dir"),a=Math.abs(this.wind)/.8*50;this.wind>=0?(e.style.left="50%",e.style.width=`${a}%`):(e.style.left=`${50-a}%`,e.style.width=`${a}%`),t.textContent=this.wind>.1?"→":this.wind<-.1?"←":"•"}updateAmmoUI(){document.getElementById("ammo-grenade").textContent=String(this.ammo.grenade),document.getElementById("ammo-shotgun").textContent=String(this.ammo.shotgun),document.getElementById("ammo-airstrike").textContent=String(this.ammo.airstrike),document.getElementById("ammo-dynamite").textContent=String(this.ammo.dynamite),document.querySelectorAll(".weapon").forEach(e=>{const t=e.getAttribute("data-weapon");e.classList.toggle("empty",this.ammo[t]<=0),e.classList.toggle("active",t===this.selectedWeapon&&this.ammo[t]>0)})}updateUI(){const e=this.currentWorm(),t=document.getElementById("turn-text");t.textContent=e?`${e.name}${f("turnSuffix")}`:"",t.style.color=this.teamColors[this.currentTeam].light,["red","blue"].forEach((a,i)=>{const n=document.getElementById(`${a}-team`);n.innerHTML="",this.worms.filter(o=>o.team===i).forEach(o=>{const l=o===e,r=document.createElement("div");r.className="worm-hp-box",r.innerHTML=`
          <div class="worm-name ${o.health<=0?"dead":""} ${l?"active":""}">${o.name}</div>
          <div class="hp-bar">
            <div class="hp-fill ${a}" style="width: ${o.health}%"></div>
          </div>
        `,n.appendChild(r)})}),this.updateAmmoUI()}loop(e){if(requestAnimationFrame(a=>this.loop(a)),this.isPaused)return;if(this.lastTime===0){this.lastTime=e;return}let t=(e-this.lastTime)/1e3;for(this.lastTime=e,this.time=e,t>.25&&(t=.25),this.accumulator+=t;this.accumulator>=this.fixedDt;)this.update(this.fixedDt),this.accumulator-=this.fixedDt;this.render()}update(e){if(this.updateClouds(),this.updateBirds(),this.state==="menu"||this.state==="gameover")return;this.cameraX+=(this.targetCamX-this.cameraX)*.08,this.cameraY+=(this.targetCamY-this.cameraY)*.08,this.cameraX=Math.max(0,Math.min(this.width-this.width,this.cameraX)),this.screenShake>0&&(this.screenShake*=.9);const t=this.currentWorm();if(this.currentTeam===this.aiTeam&&this.updateAI(),this.state==="aiming"&&t&&this.currentTeam!==this.aiTeam)if((this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t.x-=3,t.facingRight=!1,t.walkFrame+=.2),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t.x+=3,t.facingRight=!0,t.walkFrame+=.2),Math.abs(this.touchMoveX)>.2&&(t.x+=this.touchMoveX*3,t.facingRight=this.touchMoveX>0,t.walkFrame+=.2),this.touchAiming)t.angle=this.touchAimAngle,t.facingRight=Math.cos(this.touchAimAngle*Math.PI/180)>0;else{const a=this.mouseX-t.x,i=this.mouseY-t.y;t.angle=Math.atan2(i,a)*180/Math.PI,t.facingRight=a>0}if(this.state==="aiming"&&t){this.turnTimer-=e,this.turnTimer<=0&&this.nextTurn();const a=document.getElementById("timer");a.textContent=Math.ceil(this.turnTimer).toString(),a.classList.toggle("danger",this.turnTimer<10),this.targetCamX=t.x-this.width/2,this.targetCamY=Math.max(0,t.y-this.height/2)}if(this.state==="retreating"&&t&&this.currentTeam!==this.aiTeam){(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t.x-=4,t.facingRight=!1,t.walkFrame+=.3),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t.x+=4,t.facingRight=!0,t.walkFrame+=.3),Math.abs(this.touchMoveX)>.2&&(t.x+=this.touchMoveX*4,t.facingRight=this.touchMoveX>0,t.walkFrame+=.3),this.retreatTimer--;const a=document.getElementById("timer");a.textContent=Math.ceil(this.retreatTimer/60).toString(),a.classList.add("danger"),this.targetCamX=t.x-this.width/2,this.targetCamY=Math.max(0,t.y-this.height/2),this.retreatTimer<=0&&(this.state="waiting")}if(this.state==="shooting"&&t&&this.currentTeam!==this.aiTeam){if(t.power=Math.min(100,t.power+2.5),document.getElementById("power-val").textContent=Math.floor(t.power).toString(),document.getElementById("power-fill").style.width=`${t.power}%`,this.touchAiming)t.angle=this.touchAimAngle,t.facingRight=Math.cos(this.touchAimAngle*Math.PI/180)>0;else{const a=this.mouseX-t.x,i=this.mouseY-t.y;t.angle=Math.atan2(i,a)*180/Math.PI,t.facingRight=a>0}t.power>=100&&this.fire()}this.worms.forEach(a=>{if(!(a.health<=0)){if(a.blinkTimer--,a.blinkTimer<=0&&(a.blinkTimer=100+Math.random()*150),a.breathePhase+=.08,a.onGround||(a.vy+=.4,a.vx*=.99),a.x+=a.vx,a.y+=a.vy,this.isTerrainAt(a.x,a.y+22)){let i=0;for(;this.isTerrainAt(a.x,a.y+21)&&i++<50;)a.y--;if(a.vy>8){const n=Math.floor((a.vy-8)*3),o=a.health>0;a.health=Math.max(0,a.health-n),this.addFloatingText(a.x,a.y-30,`-${n}`,"#ef4444"),this.updateUI(),o&&a.health<=0&&setTimeout(()=>this.nextTurn(),500)}a.vy=0,a.vx*=.8,a.onGround=!0}else a.onGround=!1;a.x=Math.max(20,Math.min(this.width-20,a.x)),a.y>this.height-80&&(a.health=0,v.playSplash(),this.createExplosion(a.x,this.height-80,40),this.updateUI(),setTimeout(()=>this.nextTurn(),500))}}),this.projectiles.forEach(a=>{if(a.active){if(a.type!=="shotgun"&&(a.trail.push({x:a.x,y:a.y,alpha:1}),a.trail.length>20&&a.trail.shift()),a.vy+=.3,a.type!=="dynamite"&&(a.vx+=this.wind*.015),a.x+=a.vx,a.y+=a.vy,a.rotation=Math.atan2(a.vy,a.vx),(a.type==="bazooka"||a.type==="airstrike")&&Math.random()>.2&&(this.particles.push({x:a.x-a.vx*.3,y:a.y-a.vy*.3,vx:(Math.random()-.5)*3,vy:-Math.random()*2,life:.4,maxLife:.4,color:["#ff6b35","#f7c548","#ffffff"][Math.floor(Math.random()*3)],size:Math.random()*8+4,type:"fire",rotation:0,rotationSpeed:.02,gravity:-.05}),Math.random()>.5&&this.particles.push({x:a.x-a.vx*.5,y:a.y-a.vy*.5,vx:(Math.random()-.5)*2,vy:-Math.random()*2,life:.8,maxLife:.8,color:"#666",size:Math.random()*12+6,type:"smoke",rotation:0,rotationSpeed:.02,gravity:-.03})),a.timer>0&&(a.timer--,a.type==="dynamite"&&a.timer%6===0&&this.particles.push({x:a.x,y:a.y-20,vx:(Math.random()-.5)*5,vy:-Math.random()*5,life:.4,maxLife:.4,color:Math.random()>.5?"#fbbf24":"#ef4444",size:4,type:"spark",rotation:0,rotationSpeed:0,gravity:0}),a.timer<=0)){this.explode(a);return}if(a.type!=="grenade"&&a.type!=="dynamite")for(const i of this.worms){if(i.health<=0)continue;const n=a.x-i.x,o=a.y-(i.y-5);if(Math.sqrt(n*n+o*o)<28){this.explode(a);return}}this.isTerrainAt(a.x,a.y)&&(a.type==="grenade"?(a.vy*=-.5,a.vx*=.6,a.y-=5):a.type==="dynamite"?(a.vx*=.2,a.vy=0):this.explode(a)),(a.x<-50||a.x>this.width+50||a.y>this.height+50)&&(a.active=!1,this.projectiles.every(i=>!i.active)&&setTimeout(()=>this.nextTurn(),500))}}),this.projectiles.forEach(a=>{a.trail.forEach(i=>i.alpha-=.06),a.trail=a.trail.filter(i=>i.alpha>0)}),this.particles=this.particles.filter(a=>(a.x+=a.vx,a.y+=a.vy,a.vy+=a.gravity,a.rotation+=a.rotationSpeed,a.type==="smoke"&&(a.size*=1.025,a.vx*=.98),a.type==="fire"&&(a.size*=.95),a.life-=.02,a.life>0)),this.explosions=this.explosions.filter(a=>(a.radius+=(a.maxRadius-a.radius)*.3,a.life-=.05,a.life>0)),this.floatingTexts=this.floatingTexts.filter(a=>(a.y+=a.vy,a.vy*=.95,a.life-=.018,a.scale=Math.min(1,a.scale+.1),a.life>0))}updateClouds(){this.clouds.forEach(e=>{e.x+=e.speed,e.x>this.width+e.width&&(e.x=-e.width,e.y=50+Math.random()*200)})}updateBirds(){this.birds.forEach(e=>{e.x+=e.vx,e.wingPhase+=.15,e.x>this.width+50&&(e.x=-50,e.y=100+Math.random()*150)})}explode(e){e.active=!1;const t=z[e.type];v.playExplosion(t.radius/60),this.screenShake=t.radius*.25,this.createExplosion(e.x,e.y,t.radius),this.destroyTerrain(e.x,e.y,t.radius),this.worms.forEach(a=>{if(a.health<=0)return;const i=a.x-e.x,n=a.y-e.y,o=Math.sqrt(i*i+n*n);if(o<t.radius+30){const l=1-o/(t.radius+30),r=Math.floor(t.damage*l);a.health=Math.max(0,a.health-r),a.expression="hurt",setTimeout(()=>{a.expression="normal"},1e3),v.playHit(),this.addFloatingText(a.x,a.y-40,`-${r}`,"#ef4444");const s=Math.atan2(n,i),d=l*15;a.vx+=Math.cos(s)*d,a.vy+=Math.sin(s)*d-8,a.onGround=!1}}),this.updateUI(),setTimeout(()=>{this.projectiles.every(a=>!a.active)&&setTimeout(()=>this.nextTurn(),800)},100)}createExplosion(e,t,a){this.explosions.push({x:e,y:t,radius:0,maxRadius:a,life:1});for(let i=0;i<60;i++){const n=Math.random()*Math.PI*2,o=Math.random()*14+5;this.particles.push({x:e,y:t,vx:Math.cos(n)*o,vy:Math.sin(n)*o-5,life:.9+Math.random()*.4,maxLife:1.3,color:["#ff4444","#ff8800","#ffcc00","#fff"][Math.floor(Math.random()*4)],size:Math.random()*18+10,type:"fire",rotation:0,rotationSpeed:0,gravity:-.12})}for(let i=0;i<20;i++)this.particles.push({x:e+(Math.random()-.5)*a,y:t+(Math.random()-.5)*a,vx:(Math.random()-.5)*3,vy:-Math.random()*8-3,life:2.5,maxLife:2.5,color:"#ff6b35",size:Math.random()*4+2,type:"ember",rotation:0,rotationSpeed:0,gravity:-.02});for(let i=0;i<40;i++){const n=Math.random()*Math.PI*2,o=Math.random()*7+3;this.particles.push({x:e,y:t,vx:Math.cos(n)*o,vy:Math.sin(n)*o-5,life:2.5,maxLife:2.5,color:"#333",size:Math.random()*25+18,type:"smoke",rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.04,gravity:-.04})}for(let i=0;i<35;i++){const n=Math.random()*Math.PI*2,o=Math.random()*18+10;this.particles.push({x:e,y:t,vx:Math.cos(n)*o,vy:Math.sin(n)*o-7,life:.7,maxLife:.7,color:"#ffffaa",size:Math.random()*5+2,type:"spark",rotation:0,rotationSpeed:0,gravity:.45})}}addFloatingText(e,t,a,i){this.floatingTexts.push({x:e,y:t,text:a,color:i,life:1.2,vy:-4,scale:.5})}render(){const e=this.ctx;e.fillStyle="#0a0a1a",e.fillRect(0,0,this.width,this.height);const t=(Math.random()-.5)*this.screenShake,a=(Math.random()-.5)*this.screenShake;e.save(),e.translate(-this.cameraX+t,-this.cameraY+a),e.drawImage(this.bgCanvas,0,0),this.renderClouds(e),this.renderBirds(e),e.drawImage(this.undergroundCanvas,0,0),e.drawImage(this.terrainCanvas,0,0),this.renderWater(e),this.worms.forEach(i=>{i.health>0&&this.renderWorm(e,i)}),this.projectiles.forEach(i=>{i.active&&this.renderProjectile(e,i)}),this.explosions.forEach(i=>this.renderExplosion(e,i)),this.particles.forEach(i=>this.renderParticle(e,i)),this.floatingTexts.forEach(i=>{e.save(),e.globalAlpha=Math.min(1,i.life),e.translate(i.x,i.y),e.scale(i.scale,i.scale),e.font='bold 28px "Orbitron"',e.textAlign="center",e.fillStyle="rgba(0, 0, 0, 0.5)",e.fillText(i.text,2,2),e.fillStyle=i.color,e.fillText(i.text,0,0),e.restore()}),e.restore()}renderUnderground(e){}renderClouds(e){this.clouds.forEach(t=>{e.fillStyle=`rgba(255, 255, 255, ${t.opacity*.4})`;const a=t.x,i=t.y,n=t.width,o=t.height;e.beginPath(),e.arc(a,i,o*.6,0,Math.PI*2),e.arc(a+n*.25,i-o*.15,o*.5,0,Math.PI*2),e.arc(a+n*.5,i,o*.55,0,Math.PI*2),e.arc(a+n*.35,i+o*.1,o*.45,0,Math.PI*2),e.arc(a+n*.15,i+o*.05,o*.4,0,Math.PI*2),e.fill()})}renderBirds(e){e.strokeStyle="#1a1a2e",e.lineWidth=2,this.birds.forEach(t=>{const a=Math.sin(t.wingPhase)*5;e.beginPath(),e.moveTo(t.x-8,t.y+a),e.quadraticCurveTo(t.x,t.y-3,t.x+8,t.y+a),e.stroke()})}renderWater(e){const t=this.height-70,a=e.createLinearGradient(0,t,0,this.height);a.addColorStop(0,"rgba(6, 182, 212, 0.85)"),a.addColorStop(.3,"rgba(14, 116, 144, 0.9)"),a.addColorStop(.6,"rgba(8, 78, 108, 0.95)"),a.addColorStop(1,"rgba(2, 44, 68, 1)"),e.fillStyle=a,e.beginPath(),e.moveTo(0,this.height);for(let i=0;i<=this.width;i+=6){const n=Math.sin((i+this.time*.002)*.015)*8,o=Math.sin((i+this.time*.003)*.025)*4,l=Math.sin((i+this.time*.001)*.04)*2;e.lineTo(i,t+n+o+l)}e.lineTo(this.width,this.height),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.5)",e.lineWidth=3,e.beginPath();for(let i=0;i<=this.width;i+=6){const n=Math.sin((i+this.time*.002)*.015)*8,o=Math.sin((i+this.time*.003)*.025)*4;i===0?e.moveTo(i,t+n+o):e.lineTo(i,t+n+o)}e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.8)";for(let i=0;i<30;i++){const n=(this.time*.05+i*73)%this.width,o=Math.sin((n+this.time*.002)*.015)*8,l=t+o+Math.sin(this.time*.01+i)*3+5,r=2+Math.sin(this.time*.005+i*2)*1.5;r>1.5&&(e.globalAlpha=(r-1.5)/2,e.beginPath(),e.arc(n,l,r,0,Math.PI*2),e.fill())}e.globalAlpha=1}renderWorm(e,t){const a=t===this.currentWorm(),i=t.blinkTimer<5,n=this.teamColors[t.team],o=Math.sin(t.breathePhase)*2;e.save(),e.translate(t.x,t.y),e.fillStyle="rgba(0, 0, 0, 0.4)",e.beginPath(),e.ellipse(0,24,20,7,0,0,Math.PI*2),e.fill();const l=e.createRadialGradient(-5,-8+o*.3,0,0,0,28);l.addColorStop(0,n.light),l.addColorStop(.5,n.primary),l.addColorStop(1,n.secondary),e.fillStyle=l,e.beginPath(),e.ellipse(0,o*.2,20+o*.3,24-o*.2,0,0,Math.PI*2),e.fill(),e.strokeStyle=n.secondary,e.lineWidth=1.5;for(let h=1;h<=4;h++)e.globalAlpha=.5,e.beginPath(),e.ellipse(0,h*6+o*.1,18-h*1.5,3,0,0,Math.PI*2),e.stroke();e.globalAlpha=1,e.fillStyle="rgba(255, 255, 255, 0.35)",e.beginPath(),e.ellipse(-7,-12+o*.2,7,10,-.4,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.15)",e.beginPath(),e.ellipse(5,-5,4,6,.3,0,Math.PI*2),e.fill();const r=t.facingRight?8:-8,s=-9+o*.15;if(e.fillStyle="rgba(0, 0, 0, 0.2)",e.beginPath(),e.ellipse(r,s+2,10,10,0,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.beginPath(),e.ellipse(r,s,9,i?2:9,0,0,Math.PI*2),e.fill(),e.strokeStyle="#333",e.lineWidth=2,e.stroke(),!i){const h=t.facingRight?3:-3,p=0;e.fillStyle="#1a1a2e",e.beginPath(),e.arc(r+h,s+p,5,0,Math.PI*2),e.fill(),e.fillStyle="#000",e.beginPath(),e.arc(r+h,s+p,3,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.beginPath(),e.arc(r+h-2,s+p-2,2.5,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(r+h+1,s+p+2,1,0,Math.PI*2),e.fill()}if((t.expression==="angry"||a)&&(e.strokeStyle=n.secondary,e.lineWidth=3,e.lineCap="round",e.beginPath(),e.moveTo(r-8,s-12),e.lineTo(r+8,s-8),e.stroke()),this.renderHat(e,t,s),e.restore(),a&&(this.state==="aiming"||this.state==="shooting")){const h=t.angle*Math.PI/180,p=70+t.power*.9;e.save(),e.shadowColor="#fbbf24",e.shadowBlur=10,e.strokeStyle="#fbbf24",e.lineWidth=3,e.setLineDash([12,8]),e.beginPath(),e.moveTo(t.x,t.y-8),e.lineTo(t.x+Math.cos(h)*p,t.y+Math.sin(h)*p-8),e.stroke(),e.setLineDash([]),e.restore();const m=t.x+Math.cos(h)*p,u=t.y+Math.sin(h)*p-8;e.save(),e.shadowColor="#fbbf24",e.shadowBlur=15,e.strokeStyle="#fbbf24",e.lineWidth=3,e.beginPath(),e.arc(m,u,14,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(m,u,6,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(m-22,u),e.lineTo(m-8,u),e.moveTo(m+8,u),e.lineTo(m+22,u),e.moveTo(m,u-22),e.lineTo(m,u-8),e.moveTo(m,u+8),e.lineTo(m,u+22),e.stroke(),e.restore();const g=t.y-55+Math.sin(this.time*.006)*8;e.fillStyle="#fbbf24",e.shadowColor="#fbbf24",e.shadowBlur=15,e.beginPath(),e.moveTo(t.x,g+15),e.lineTo(t.x-14,g),e.lineTo(t.x+14,g),e.fill(),e.shadowBlur=0}e.fillStyle="rgba(0, 0, 0, 0.7)",e.beginPath(),e.roundRect(t.x-24,t.y-42,48,12,6),e.fill();const d=t.health/100,c=d>.5?"#22c55e":d>.25?"#eab308":"#ef4444";e.fillStyle=c,e.shadowColor=c,e.shadowBlur=8,e.beginPath(),e.roundRect(t.x-22,t.y-40,44*d,8,4),e.fill(),e.shadowBlur=0,e.font='bold 14px "Rajdhani"',e.textAlign="center",e.fillStyle="#000",e.fillText(t.name,t.x+1,t.y-49),e.fillStyle="#fff",e.fillText(t.name,t.x,t.y-50)}renderHat(e,t,a){const i=this.teamColors[t.team];switch(this.hatTypes[t.hatType]){case"helmet":e.fillStyle="#4a5568",e.beginPath(),e.ellipse(0,a-12,16,10,0,Math.PI,0),e.fill(),e.fillStyle="#2d3748",e.beginPath(),e.ellipse(0,a-8,18,5,0,Math.PI*.9,Math.PI*.1),e.fill();break;case"bandana":e.fillStyle=i.primary,e.beginPath(),e.ellipse(0,a-10,14,6,0,Math.PI,0),e.fill();const n=t.facingRight?-12:12;e.beginPath(),e.moveTo(n,a-8),e.lineTo(n-6,a),e.lineTo(n+2,a+4),e.fill();break;case"cap":e.fillStyle=i.primary,e.beginPath(),e.arc(0,a-10,12,Math.PI,0),e.fill();const o=t.facingRight?1:-1;e.beginPath(),e.ellipse(o*8,a-6,10,4,o*.3,0,Math.PI*2),e.fill();break;case"beret":e.fillStyle=i.primary,e.beginPath(),e.ellipse(-3,a-12,14,8,-.2,0,Math.PI*2),e.fill(),e.fillStyle=i.secondary,e.beginPath(),e.arc(0,a-18,3,0,Math.PI*2),e.fill();break}}renderProjectile(e,t){if(t.trail.length>1)for(let a=1;a<t.trail.length;a++){const i=t.trail[a-1],n=t.trail[a],o=t.type==="bazooka"||t.type==="airstrike"?`rgba(255, 150, 50, ${n.alpha*.7})`:`rgba(100, 100, 100, ${n.alpha*.5})`;e.strokeStyle=o,e.lineWidth=5*n.alpha,e.lineCap="round",e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(n.x,n.y),e.stroke()}switch(e.save(),e.translate(t.x,t.y),t.type!=="dynamite"&&e.rotate(t.rotation),t.type){case"bazooka":case"airstrike":const a=e.createLinearGradient(-15,-6,-15,6);a.addColorStop(0,"#78909c"),a.addColorStop(.5,"#546e7a"),a.addColorStop(1,"#37474f"),e.fillStyle=a,e.beginPath(),e.roundRect(-15,-6,30,12,3),e.fill(),e.fillStyle="#ef4444",e.beginPath(),e.moveTo(18,0),e.lineTo(10,-6),e.lineTo(10,6),e.closePath(),e.fill(),e.fillStyle="#b71c1c",e.beginPath(),e.moveTo(-15,-6),e.lineTo(-18,-12),e.lineTo(-10,-6),e.fill(),e.beginPath(),e.moveTo(-15,6),e.lineTo(-18,12),e.lineTo(-10,6),e.fill();const i=15+Math.random()*12,n=e.createLinearGradient(-15,0,-15-i,0);n.addColorStop(0,"#fff"),n.addColorStop(.2,"#fbbf24"),n.addColorStop(.5,"#f97316"),n.addColorStop(1,"rgba(239, 68, 68, 0)"),e.fillStyle=n,e.beginPath(),e.moveTo(-15,0),e.lineTo(-15-i,-5-Math.random()*3),e.lineTo(-15-i*.8,0),e.lineTo(-15-i,5+Math.random()*3),e.closePath(),e.fill();break;case"grenade":const o=e.createRadialGradient(-3,-3,0,0,0,12);o.addColorStop(0,"#4ade80"),o.addColorStop(.7,"#22c55e"),o.addColorStop(1,"#15803d"),e.fillStyle=o,e.beginPath(),e.arc(0,0,11,0,Math.PI*2),e.fill(),e.strokeStyle="#166534",e.lineWidth=1.5,e.beginPath(),e.moveTo(-11,0),e.lineTo(11,0),e.moveTo(0,-11),e.lineTo(0,11),e.stroke(),e.fillStyle="#374151",e.fillRect(-4,-17,8,8),e.fillStyle="#6b7280",e.fillRect(-3,-16,6,2);break;case"shotgun":e.fillStyle="#fbbf24",e.shadowColor="#fbbf24",e.shadowBlur=15,e.beginPath(),e.arc(0,0,6,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.beginPath(),e.arc(-1,-1,2,0,Math.PI*2),e.fill(),e.shadowBlur=0;break;case"dynamite":for(let l=-1;l<=1;l++){const r=e.createLinearGradient(l*9-6,0,l*9+6,0);r.addColorStop(0,"#dc2626"),r.addColorStop(.5,"#ef4444"),r.addColorStop(1,"#b91c1c"),e.fillStyle=r,e.beginPath(),e.roundRect(l*9-6,-16,12,32,3),e.fill(),e.fillStyle="#fff",e.font="bold 8px Arial",e.textAlign="center",e.fillText("TNT",l*9,4)}e.strokeStyle="#1f2937",e.lineWidth=2,e.beginPath(),e.moveTo(0,-16),e.quadraticCurveTo(10,-24,0,-32),e.stroke(),t.timer%10<5&&(e.fillStyle="#fbbf24",e.shadowColor="#ef4444",e.shadowBlur=20,e.beginPath(),e.arc(0,-32,6,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.beginPath(),e.arc(0,-32,3,0,Math.PI*2),e.fill(),e.shadowBlur=0);break}e.restore()}renderExplosion(e,t){e.strokeStyle=`rgba(255, 200, 100, ${t.life*.4})`,e.lineWidth=4,e.beginPath(),e.arc(t.x,t.y,t.radius*1.8,0,Math.PI*2),e.stroke();const a=e.createRadialGradient(t.x,t.y,0,t.x,t.y,t.radius);a.addColorStop(0,`rgba(255, 255, 240, ${t.life})`),a.addColorStop(.15,`rgba(255, 220, 150, ${t.life*.95})`),a.addColorStop(.35,`rgba(255, 150, 50, ${t.life*.8})`),a.addColorStop(.6,`rgba(220, 80, 20, ${t.life*.5})`),a.addColorStop(.85,`rgba(150, 30, 0, ${t.life*.2})`),a.addColorStop(1,"rgba(80, 10, 0, 0)"),e.fillStyle=a,e.beginPath(),e.arc(t.x,t.y,t.radius,0,Math.PI*2),e.fill();const i=e.createRadialGradient(t.x,t.y,0,t.x,t.y,t.radius*.3);i.addColorStop(0,`rgba(255, 255, 255, ${t.life})`),i.addColorStop(1,"rgba(255, 255, 200, 0)"),e.fillStyle=i,e.beginPath(),e.arc(t.x,t.y,t.radius*.3,0,Math.PI*2),e.fill()}renderParticle(e,t){const a=t.life/t.maxLife;switch(e.globalAlpha=a,e.save(),e.translate(t.x,t.y),e.rotate(t.rotation),t.type){case"fire":const i=e.createRadialGradient(0,0,0,0,0,t.size);i.addColorStop(0,t.color),i.addColorStop(.6,t.color.replace(")",", 0.5)").replace("rgb","rgba")),i.addColorStop(1,"rgba(255, 100, 0, 0)"),e.fillStyle=i,e.beginPath(),e.arc(0,0,t.size,0,Math.PI*2),e.fill();break;case"smoke":e.fillStyle=t.color,e.globalAlpha=a*.4,e.beginPath(),e.arc(0,0,t.size,0,Math.PI*2),e.fill();break;case"debris":e.fillStyle=t.color,e.fillRect(-t.size/2,-t.size/2,t.size,t.size*.8),e.fillStyle="rgba(255,255,255,0.2)",e.fillRect(-t.size/2,-t.size/2,t.size*.4,t.size*.3);break;case"spark":e.fillStyle=t.color,e.shadowColor=t.color,e.shadowBlur=10,e.beginPath(),e.arc(0,0,t.size,0,Math.PI*2),e.fill(),e.shadowBlur=0;break;case"grass":e.fillStyle=t.color,e.beginPath(),e.ellipse(0,0,t.size*.3,t.size,0,0,Math.PI*2),e.fill();break;case"ember":e.fillStyle=t.color,e.shadowColor=t.color,e.shadowBlur=8,e.globalAlpha=a*(.5+Math.sin(this.time*.02+t.x)*.5),e.beginPath(),e.arc(0,0,t.size,0,Math.PI*2),e.fill(),e.shadowBlur=0;break;case"leaf":e.fillStyle=t.color,e.beginPath(),e.ellipse(0,0,t.size,t.size*.5,t.rotation,0,Math.PI*2),e.fill();break}e.restore(),e.globalAlpha=1}}document.addEventListener("DOMContentLoaded",()=>{const y=new X;window.gameInstance=y,window.debugWin=()=>{y&&(y.state="gameover",y.displayResultUI(!0))}});
