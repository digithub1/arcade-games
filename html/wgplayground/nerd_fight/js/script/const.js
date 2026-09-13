// Put user code here //
const ADS = true;
const STORE = false;
const DATABASE_ANDROID = false;
//const DATABASE_DEBUG = true;
const DATABASE_TEST_FULL = false;
const DATABASE_LOCAL = true;
///////////////////////////////
const DATABASE_FACEBOOK = false;
const FACEBOOK_ADS = false;
//////////////////////////////
const MAX_HERO = 5;
const MAX_ENEMY = 3;
const TUTORIAL = 8;
const COMIC = 1;
const TAP_PAPER_EVENT = 'TapPaperEvent';
const ENEMY_DROP = 'StarDrop';
const BOSS_DROP = 'MedalDrop';
const SKIN_BUFF_HP = function(skin){
    switch(skin) {
            case 'default':
                return 1;
            break;
            case 'common':
                return 1.5;
            break;
            case 'superb':
                return 2;
            break;
            case 'spectacular':
                return 2.5;
            break;
            case 'radical':
                return 3;
            break;
            case 'atomic':
                return 3.5;
            break;
            default:
                return 1;
        }
};

const SKIN_BUFF_ATK = function(skin){
    switch(skin) {
            case 'default':
                return 1;
            break;
            case 'common':
                return 1.25;
            break;
            case 'superb':
                return 1.5;
            break;
            case 'spectacular':
                return 2;
            break;
            case 'radical':
                return 2.25;
            break;
            case 'atomic':
                return 2.5;
            break;
            default:
                return 1;
        }
};

const OFFSET = function(id, flip){
    let hero = false;
    let heroList = game.controller.data.getDataHeroInfo();
    for(let i in heroList){
        if(id == heroList[i].id){
            hero = true; break;
        }
    }
    
    if(hero){
        let getSkin = (game.user.userData.heroSkin[id] != undefined) ? game.user.userData.heroSkin[id] : 'default';
        return OFFSET_HERO(id, flip, getSkin);
    }
    else{
        return OFFSET_ENEMY(id, flip);
    }
};

OFFSET_HERO = function(id, flip, skin){
    if(skin != "default" && skin != "common"){
        return {x : 0, y : 0};
    }
    else if(flip == false){
        switch(id) {
            case 'H000':
                return {x : 340, y : -280};
            case 'H001':
                return {x : 370, y : -150};
            case 'H002':
                return {x : 230, y : -250};
            case 'H003':
                return {x : 0, y : -194};
            case 'H004':
                return {x : 0, y : -162};
            case 'H005':
                return {x : 0, y : 0};//return {x : 648, y : -111};
            case 'H006':
                return {x : 0, y : -162};
            case 'H007':
                return {x : 24, y : -165};
            break;
            default:
                return {x : 0, y : 0};
        }
    }
    else{
        switch(id) {
            case 'H000':
                    return {x : -320, y : -280};
                case 'H001':
                    return {x : -370, y : -150};
                case 'H002':
                    return {x : -220, y : -250};
                case 'H003':
                    return {x : 0, y : -194};
                case 'H004':
                    return {x : 12, y : -162};
                case 'H005':
                    return {x : 0, y : 0};//return {x : -648, y : -111};
                case 'H006':
                    return {x : 15, y : -162};
                case 'H007':
                    return {x : -13, y : -165};
                break;
                default:
                return {x : 0, y : 0};
        }
    }
};

OFFSET_ENEMY = function(id, flip) {
    if(flip == false){
        switch(id) {
            case 'E000':
                return {x : -157, y : -231};
            case 'E001':
                return {x : -21, y : -140};
            case 'E002':
                return {x : -44, y : -167};
            case 'E003':
                return {x : -15, y : -107};
            case 'E004':
                return {x : -9, y : -144};
            case 'E005':
                return {x : -56, y : -147};
            case 'E006':
                return {x : 59, y : -139};
            case 'E007':
                return {x : 37, y : -125};
            case 'E008':
                return {x : -76, y : -146};
            case 'E009':
                return {x : -31, y : -223};
            case 'E010':
                return {x : -23, y : -225};
            case 'E011':
                return {x : 41, y : -190};
            case 'E012':
                return {x : -13, y : -248};
            case 'E013':
                return {x : -70, y : -210};
            case 'EB000':
                return {x : -110, y : -219};
            case 'EB001':
                return {x : -235, y : -220};
            case 'EB002':
                return {x : -228, y : -227};
            case 'EB003':
                return {x : -211, y : -198};
            case 'EB004':
                return {x : -31, y : -282};
            case 'EB005':
                return {x : -150, y : -254};
            break;
            default:
                return {x : 0, y : 0};
        }
    }
    else{
        switch(id) {
            case 'E000':
                return {x : 168, y : -231};
            case 'E001':
                return {x : 13, y : -140};
            case 'E002':
                return {x : 53, y : -167};
            case 'E003':
                return {x : 0, y : -107};
            case 'E004':
                return {x : 8, y : -144};
            case 'E005':
                return {x : 60, y : -147};
            case 'E006':
                return {x : -65, y : -139};
            case 'E007':
                return {x : -45, y : -125};
            case 'E008':
                return {x : 75, y : -146};
            case 'E009':
                return {x : 34, y : -223};
            case 'E010':
                return {x : 47, y : -225};
            case 'E011':
                return {x : 40, y : -190};
            case 'E012':
                return {x : 14, y : -248};
            case 'E013':
                return {x : 70, y : -210};
            case 'EB000':
                return {x : -164, y : -219};
            case 'EB001':
                return {x : 251, y : -220};
            case 'EB002':
                return {x : 218, y : -227};
            case 'EB003':
                return {x : 219, y : -198};
            case 'EB004':
                return {x : 31, y : -282};
            case 'EB005':
                return {x : -160, y : -254};
            break;
            default:
                return {x : 0, y : 0};
        }
    }
}

const SHORT_NUMBER = function(number){
    let shortNumber = number;
    if(number > 1000000000000){
        shortNumber = shortNumber / 1000000000;
        shortNumber = Math.floor(shortNumber * 10) / 10; 
        shortNumber += 'T';
    }
    else if(number > 1000000000){
        shortNumber = shortNumber / 1000000000;
        shortNumber = Math.floor(shortNumber * 1000) / 1000; 
        shortNumber += 'B';
    }
    else if(number > 1000000){
        shortNumber = shortNumber / 1000000;
        shortNumber = Math.floor(shortNumber * 100) / 100; 
        shortNumber += 'M';
    }
    else if(number > 100000){
        shortNumber = shortNumber / 1000;
        shortNumber = Math.floor(shortNumber * 10) / 10; 
        shortNumber += 'K';
    }
    
    return shortNumber;
};

const RANDOM_DIALOGUE = ["Why did the cross-eyed teacher get fired?\nShe couldn't control her pupils.",
                        "Why do math teachers exist?\nTo  make a difference in the world.",
                        "Which is the best hand to use when writing\nsomething, left hand or right hand?\nNone of them. Its better to use\na pen or pencil.",
                        "What did the father say whilst teaching\nhis kid to tie his shoelaces?\nKnot bad",
                        "I tried to teach my dog to heel.\nBut it just kept bringing me shoes.",
                        "Hm?what is it dear?",
                        "How are you today?",
                        "Please dont click me too often,\nthats annoying.",
                        "Okay  okay  I  get it you're lonely,\ngo find a girlfriend or boyfriend or\nsomeone please."
                        ];

const TREE_POS = {H000 : {x: - 408, y : 120}, 
                H001 : {x : -405, y: 120}, 
                H002 : {x : -378, y : 137},
                H003 : {x: - 406, y : 127},
                H004 : {x : -392, y: 74}, 
                H005 : {x : -406, y: 116}, 
                H006 : {x : -399, y: 128}, 
                H007 : {x : -403, y: 124}};
                
const TRAIT_POS = {H000 : [{x: - 403, y : 262}, 
                        {x: - 522, y : 175},
                        {x: - 284, y : 175},  
                        {x: - 403, y : 125},
                        {x: - 591, y : 56},
                        {x: - 215, y : 56},
                        {x: - 403, y : -7}],
                H001 : [{x : -404, y : 246},
                        {x : -536, y : 190},
                        {x : -272, y :190},
                        {x : -404, y : 109},
                        {x : -536, y : 32},
                        {x : -272, y : 32},
                        {x : -404, y : -32}],
                H002 : [{x : -569, y : 243},
                        {x : -394, y : 243},
                        {x : -228, y : 243},
                        {x : -394, y : 110},
                        {x : -569, y : -27},
                        {x : -394, y : -27},
                        {x : -228, y : -27}],
                H003 : [{x: - 546, y : 240}, 
                        {x: - 403, y : 240},
                        {x: - 260, y : 240},  
                        {x: - 403, y : 108},
                        {x: - 546, y : -15},
                        {x: - 403, y : -15},
                        {x: - 260, y : -15}],
                H004 : [{x : -399, y : 274},
                        {x : -399, y : 148},
                        {x : -537, y : 110},
                        {x : -261, y : 110},
                        {x : -537, y : -24},
                        {x : -399, y : -7},
                        {x : -261, y : -24}],
                H005 : [{x : -462, y : 232},
                        {x : -350, y : 232},
                        {x : -537, y : 107},
                        {x : -271, y : 107},
                        {x : -404, y : 107},
                        {x :-462, y : -3},
                        {x : -350, y : -3}],
                H006 : [{x : -478, y : 260},
                        {x : -320, y : 260},
                        {x : -537, y : 110},
                        {x : -399, y : 110},
                        {x : -261, y : 110},
                        {x : -478, y : -26},
                        {x : -320, y : -26}],
                H007 : [{x : -403, y : 259},
                        {x : -564, y : 236},
                        {x : -242, y : 236},
                        {x : -564, y : 113},
                        {x : -403, y : 113},
                        {x : -242, y : 113},
                        {x : -403, y : -22}]};
const TRAIT_REQUIREMENT = {H000 : {1 : null,
                                    2 : [1],
                                    3 : [1],
                                    4 :[1],
                                    5 :[2],
                                    6 :[3],
                                    7 :[4,5,6]},
                            H001: {1 : null,
                                    2 : [1],
                                    3 :[1],
                                    4 :[1],
                                    5 :[2,4],
                                    6 :[3,4],
                                    7 :[4,5,6]},
                            H002: {1 : null,
                                    2 :[1],
                                    3 :[2],
                                    4 :[3],
                                    5 :[4],
                                    5 :[5],
                                    6 :[6]},
                            H003: {1 : null,
                                    2 : null,
                                    3 : null,
                                    4 : [1,2,3],
                                    5 : [4],
                                    6 : [4],
                                    7 :[4]},
                            H004: {1 : null,
                                    2 : [1],
                                    3 : [2],
                                    4 : [2],
                                    5 : [3],
                                    6 : [2],
                                    7 : [4]},
                            H005: {1 : null,
                                    2 : null,
                                    3 : [1],
                                    4 : [2],
                                    5 : [3,4],
                                    6 : [3,5],
                                    7 :[4,5]},
                            H006: {1 : null,
                                    2 : null,
                                    3 : [1],
                                    4 : [1,2],
                                    5 : [2],
                                    6 : [3,4],
                                    7 :[4,5]},
                            H007: {1 : null,
                                    2 : null,
                                    3 : null,
                                    4 : [2],
                                    5 : [1,2,3],
                                    6 : [3],
                                    7 : [4,5,6]}
                            };
    
DEFAULT_DATA = {
        name		    :"Rob",
        id              :"123",
	    candy		    :0,
	    star	        :0,
	    token           :0,
	    medal           :0,
	    campaignProgress:{stage : 1, wave : 0, timer : 0, startPlay : 0},
	    hiredHero       : {},
	    comic : "not finished",
	    tutorialStep : 0,
	    tutorialStepTimeAtk : 1,
	    timeAtkProgress : [],
	    unlockHero : [''],
	    traitHero : {},
        timeAtkHero : {},
	    enemyCampaign : [],
	    item : {},
    	nerdItem : {},
    	labItem : {},
    	heroSkin : {},
    	equipSkin : {},
    	cafeTimer : {},
    	homeroom : {},
    	homeroomTutorial : false,
    	achievementProgress : {},
    	achievementClaim : [],
    	unlockLibraryHero : [],
    	unlockLibraryEnemy : [],
    };
//  End of user code  //
