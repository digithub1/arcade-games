// Put user code here //
// envi
const IS_DEBUG = true;
const DATABASE_TEST_FULL = true;
const DEBUG_VAR = false;
const DATABASE_EMPTY = false;
const IS_ADS = false;
const STB_Ver = true;
var firstPlay;
if(localStorage.getItem("GoD.firstPlay") == undefined){
    firstPlay = true;
}else{
    firstPlay = false;
}

const Game_HelperOn = false;
const LOCAL_SAVE = true;
var layerAdsOn = false;

var layer = 1;
var HOMEBASE_OPTION_ON = false;
var POP_UP_Uikonten = false;
var POP_UP_monumentContainer = false;
var POP_UP_HeroKonten = false;
var POP_UP_shopKonten = false;
var POP_UP_HERO_ON = false;
var POP_UP_ADS = false;
var END_GAME = false;
const ADS_STB = false;
var ADS_Video = false;
var ADS_Banner = true;
var ADS_KeRestart = false;
var SHOW_Info = true;
var SHOW_AdsNoRV = false;
var SHOW_AdsRV = false;
var PausedGameToHome = false;
//

var TOTAL_TEAM_UNIT = 6;
var LAYER_BATTLE_OFFSET = 9;
var HERO_RECALL_TIME = 3; // in seconds
var UNIT_DRONE_OFFSET_Y = -100;
var MAX_POS_Y = 100000;

// Component
var RADIUS_AWARENESS = 100;
var EFFECT_IMMOBILIZE = [game.enum.effect.STUN, "knock"];
var EFFECT_NO_OBJECT = [game.enum.effect.SLOW, game.enum.effect.ASPD, "heal"];
var DEFAULT_ANIMATION_SPEED = 60;
var ANIMATION_SIDES = ["front", "back"];
var BUILDING_ANGLE = ["left", "right"];
// --

// stamina
var MAX_STAMINA = 20;
var STAMINA_RATE = 2000; //in milliseconds
// --

//waktu
var time = {
    upgrade1 : 3600,
    upgrade2 : 5000,
    upgrade3 : 1000,
    upgrade4 : 5000,
    upgrade5 : 1000,
    instan: 100
}

var faksi = null;
var sisatower = null;

var flag = {
    tero : "flag_tero",
    police : "flag_police"
}

var BINTANG_POS_Y = {
    bintang1 : 88,
    bintang2 : 73
}

var BINTANG_POS_X = {
    bintang1 : 100,
    bintang2 : 148,
    bintang3 : 194
}

var box = {
    boxpolis :"hero_box_glory",
    boxtero :"hero_box_anarchist",
    polis1:"Police_cobra",
    polis2:"Police_Mantis",
    tero1:"Gangster_Miguel",
    tero2:"Gangster_Scarlet"
}

// max level
var MAX_LEVEL = {};
MAX_LEVEL[game.enum.substance.TOWER] = 1;
MAX_LEVEL[game.enum.substance.HQ] = 5;
MAX_LEVEL[game.enum.substance.HERO] = 5;
MAX_LEVEL[game.enum.substance.UNIT] = 5;
MAX_LEVEL[game.enum.substance.USER] = 999999;
MAX_LEVEL[game.enum.substance.HOMEBUILDING] = 5;

var MAX_TEAM_DEFEND = 4;
// --

// pick hero
const MAX_STATISTICS_VALUE = {
    [game.enum.statistics.HEALTH]: 300,
    [game.enum.statistics.DAMAGE]: 30,
    [game.enum.statistics.ATTACKSPEED]: 5,
    [game.enum.statistics.MOVEMENTSPEED]: 5,
    [game.enum.statistics.ATTACKRANGE]: 450
};
// --
//  End of user code  //
