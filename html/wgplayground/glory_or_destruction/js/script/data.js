// Put user code here //
// animationkey -> unitId_side_unitMotion
game.data.animation = {};
game.data.animation.unit = {
    "melee": ["attack", "dead", "run", "stun"],
    "range": ["attack", "dead", "run", "stun"],
    "defend": ["idle", "attack_0", "attack_1", "attack_2"]
};

game.data.initUser = {
    // user_id:"",
    device: {
        platform: "",
        os: "",
        lastlogin: 0,
        waitingTimeEnergy:0
    },
    userData: {
        race: "",
        name: "",
        rank:0,
        xp: 0,
        maxXp:400,
        totalXp:0,
        energy: 10,
        maxEnergy: 10,
        gold: 1000,
        diamond: 500,
        food: 1000,
        rock: 1000,
        wood: 1000,
        level: 1,
        hq: {
            level: 1
        },
        tower: {
            level: 1
        },
        team: {
            hero: {id: "", skin: ""},
            unit: ["", "", "", "", "", ""],
            defend: ["", "", "", ""],
            maxUnit: 1
            // hero: {id: "AHP002", skin: "beach"},
            // unit: ["AUP001", "AUP002", "AUP009", "AUP005", "AUP010", "AUP013"],
            // defend: ["AUP003", "AUP007", "AUP006", "AUP008"],
            // maxUnit: 6
        },
        tutorial: 0,
        cekpointutorial: 0,
        shortCut:0
    },
    troops: {
        heroData: {
            "AHP001": {level: 1},
            "AHP002": {level: 1},
            "AHG001": {level: 1},
            "AHG002": {level: 1}
        },
        unitData: {
            "AUP011": {level: 1},
            "AUP002": {level: 1},
            "AUG011": {level: 1},
            "AUG002": {level: 1}
        }
    },
    stage: {
        "A001": {stars: 0}
    },
    homebase: {
        "Bank": {grade: 0, upgradetime: 0},
        "Barrack": {grade: 0, upgradetime: 0},
        "HomeBase": {grade: 0, upgradetime: 0},
        "Research": {grade: 0, upgradetime: 0},
        "StoneMill": {grade: 0, upgradetime: 0},
        "Farm": {grade: 0, upgradetime: 0},
        "LumberMill": {grade: 0, upgradetime: 0},
        monument: ""
    },
    shop: {
        ownedIds: []
    },
    fbUrl: {
        lengthUrl: 0,
        arrayUrl:[]
    },
    achievement: {
        list :{
        "ACH001" : {progres:0, claim:0},
        "ACH002" : {progres:0, claim:0},
        "ACH003" : {progres:0, claim:0},
        "ACH004" : {progres:0, claim:0},
        "ACH005" : {progres:0, claim:0},
        "ACH006" : {progres:0, claim:0},
        "ACH007" : {progres:0, claim:0},
        "ACH008" : {progres:0, claim:0},
        "ACH009" : {progres:0, claim:0},
        "ACH010" : {progres:0, claim:0},
        "ACH011" : {progres:0, claim:0},
        "ACH012" : {progres:0, claim:0},
        "ACH013" : {progres:0, claim:0},
        "ACH014" : {progres:0, claim:0},
        "ACH015" : {progres:0, claim:0},
        "ACH016" : {progres:0, claim:0},
        "ACH017" : {progres:0, claim:0},
        "ACH018" : {progres:0, claim:0},
        "ACH019" : {progres:0, claim:0},
        "ACH020" : {progres:0, claim:0},
        "ACH021" : {progres:0, claim:0},
        "ACH022" : {progres:0, claim:0},
        "ACH023" : {progres:0, claim:0},
        "ACH024" : {progres:0, claim:0},
        "ACH025" : {progres:0, claim:0},
        "ACH026" : {progres:0, claim:0},
        "ACH027" : {progres:0, claim:0},
        "ACH028" : {progres:0, claim:0},
        "ACH029" : {progres:0, claim:0},
        "ACH030" : {progres:0, claim:0},
        "ACH031" : {progres:0, claim:0},
        "ACH032" : {progres:0, claim:0},
        "ACH033" : {progres:0, claim:0},
        "ACH034" : {progres:0, claim:0},
        "ACH035" : {progres:0, claim:0},
        "ACH036" : {progres:0, claim:0},
        "ACH037" : {progres:0, claim:0},
        "ACH038" : {progres:0, claim:0},
        "ACH039" : {progres:0, claim:0},
        "ACH040" : {progres:0, claim:0},
        "ACH041" : {progres:0, claim:0},
        "ACH042" : {progres:0, claim:0},
        "ACH043" : {progres:0, claim:0},
        "ACH044" : {progres:0, claim:0},
        "ACH045" : {progres:0, claim:0},
        "ACH046" : {progres:0, claim:0},
        "ACH047" : {progres:0, claim:0},
        "ACH048" : {progres:0, claim:0},
        "ACH049" : {progres:0, claim:0},
        "ACH050" : {progres:0, claim:0},
        "ACH051" : {progres:0, claim:0},
        "ACH052" : {progres:0, claim:0},
        "ACH053" : {progres:0, claim:0},
        "ACH054" : {progres:0, claim:0},
        "ACH055" : {progres:0, claim:0},
        "ACH056" : {progres:0, claim:0},
        "ACH057" : {progres:0, claim:0},
        "ACH058" : {progres:0, claim:0},
        "ACH059" : {progres:0, claim:0},
        "ACH060" : {progres:0, claim:0},
        "ACH061" : {progres:0, claim:0},
        "ACH062" : {progres:0, claim:0},
        "ACH063" : {progres:0, claim:0},
        "ACH064" : {progres:0, claim:0},
        "ACH065" : {progres:0, claim:0},
        "ACH066" : {progres:0, claim:0},
        "ACH067" : {progres:0, claim:0},
        "ACH068" : {progres:0, claim:0},
        "ACH069" : {progres:0, claim:0},
        "ACH070" : {progres:0, claim:0},
        "ACH071" : {progres:0, claim:0},
        "ACH072" : {progres:0, claim:0},
        "ACH073" : {progres:0, claim:0},
        "ACH074" : {progres:0, claim:0},
        "ACH075" : {progres:0, claim:0},
        "ACH076" : {progres:0, claim:0},
        "ACH077" : {progres:0, claim:0},
        "ACH078" : {progres:0, claim:0},
        "ACH079" : {progres:0, claim:0},
        "ACH080" : {progres:0, claim:0},
        "ACH081" : {progres:0, claim:0},
        "ACH082" : {progres:0, claim:0},
        "ACH083" : {progres:0, claim:0},
        "ACH084" : {progres:0, claim:0},
        "ACH085" : {progres:0, claim:0},
        "ACH086" : {progres:0, claim:0}
        }
    }
};

game.data.vehicle = [
    "AUP009", "AUP010", "AUG009", "AUG010"
];

game.data.newHero = {level: 1};
game.data.newUnit = {level: 1};

// statistics
game.data.statisticsProperties = {
    [game.enum.statistics.HEALTH]: "hp",
    [game.enum.statistics.DAMAGE]: "damage",
    [game.enum.statistics.ATTACKSPEED]: "attackSpeed",
    [game.enum.statistics.MOVEMENTSPEED]: "movementSpeed",
    [game.enum.statistics.ATTACKRANGE]: "radius"
};
game.data.building = {
    [game.enum.building.BANK]: "K",
    [game.enum.building.HQ]: "Q",
    [game.enum.building.BARRACK]: "C",
    [game.enum.building.LAB]:"R",
    [game.enum.building.FARM]: "F",
    [game.enum.building.LUMBERMILL]: "L",
    [game.enum.building.STONEMILL]: "S",
    [game.enum.building.SHOP]:"P"
};
game.data.explosion = {
    [game.enum.substance.HQ]: {frames: 15, time: 1.5},
    [game.enum.substance.TANK]: {frames: 4, time: 1},
    [game.enum.substance.TOWER]: {frames: 7, time: 1},
    [game.enum.substance.MELEE]: {frames: 5, time: 1}
};

game.data.regen = {
    [game.enum.building.BANK]: game.enum.material.GOLD,
    [game.enum.building.HQ]: game.enum.material.DIAMOND,
    [game.enum.building.FARM]: game.enum.material.FOOD,
    [game.enum.building.LUMBERMILL]: game.enum.material.WOOD,
    [game.enum.building.STONEMILL]: game.enum.material.ROCK
};

game.data.unlockunit = {
    1: [11 , 2],
    2: [1, 4],
    3: [5, 10],
    4: [9, 13],
    5: [12]
};

game.data.unlockUnitDefend = {
    1: 3,
    2: 8,
    3: 6,
    4: 7
};

game.data.gacha = {
    energy : 15,
    gold: 15,
    food: 15,
    wood: 15,
    rock: 15,
    diamond : 15,
    skin: 5
};

game.data.skin = {
    [game.enum.skin.BEACH]: ["AHP001", "AHP002", "AHG001", "AHG002"]
};

game.data.nation = {
    [game.enum.race.POLICE]: "Glory",
    [game.enum.race.GANGSTER]: "Anarchist"
};

game.data.npc = {
    [game.enum.race.POLICE]: "Sherly",
    [game.enum.race.GANGSTER]: "Jenny"
};

game.data.tutorialExcludeStep = {
    mainBox: [10, 13, 17, 103],
    miniBox: [4, 20, 22, 23, 24, 25, 26, 27, 28]
};

game.data.heroSkillChance = [40, 75, 100];

game.data.availableHero = ["AHV001","AHV002","AHG003","AHP003"];

game.data.tableProperties = {
    [game.enum.table.DEVICE]: ["os", "platform"],
    [game.enum.table.USERDATA]: ["xp", "race", "energy", "maxEnergy", "gold", "gem", "food", "rock", "wood",
                        "level", "hq_level", "tower_level", "team_hero", "team_unit", "team_defend", 
                        "team_maxUnit", "userId"],
    [game.enum.table.TROOPS]: ["os", "platform"],
    [game.enum.table.STAGE]: ["os", "platform"],
    [game.enum.table.HOMEBASE]: ["os", "platform"],
    [game.enum.table.SHOP]: ["os", "platform"],
}
//  End of user code  //
