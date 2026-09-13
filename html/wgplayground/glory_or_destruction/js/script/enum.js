// Put user code here //
game.enum = {};

game.enum.territory = {
    AMERICA: "america",
    JAPAN: "japan"
};

game.enum.race = {
    POLICE: "police",
    GANGSTER: "gangster",
    VIGILANTE: "vigilante"
};

game.enum.direction = {
    NORTH: 0,
    EAST: 1,
    SOUTH: 2,
    WEST: 3
}; 
game.enum.directionstr = ["north", "east", "south", "west"];

game.enum.category = {
    SPAWNER_UNIT: "spawner_unit",
    SPAWNER_TOWER: "spawner_tower",
    SPAWNER_BASE: "spawner_base",
    HEALTH_HERO: "health_hero",
    HEALTH_SUBSTANCE: "health_substance"
};

game.enum.layer = {
    BATTLE_UNIT_WORLD: 20,
    BATTLE_UNIT_TOWER: 30,
    BATTLE_PROJECTILE: 4000,
    BATTLE_DRONE: 4500,
    BATTLE_AEROPLANE: 5000,
    BATTLE_TOWER_PICK_UNIT: 7000,
    BATTLE_MAIN_UI: 8000,
    BATTLE_END_GAME_UI: 9000,
    CAMPAIGN_FLAG: 100,
    HOMEBASE_UI_KONTEN: 30,
    HOMEBASE_MONUMENT: 30,
    HOMEBASE_CARD: 40,
    HOMEBASE_NOTIF: 80,
    LOADING: 9999,
    CLICKFX: 6000,
    TUTORIAL: 9500,
    HOMEBASE_OPTION: 30,
    GALLERY: 1,
    VIDEO_INTRO:30,
    HOMEBASE_AVATAR:18
};

game.enum.animation = {
    RUN: "run",
    ATTACK: "attack",
    DEAD: "dead"
};

game.enum.unitType = {
    MELEE: "melee",
    RANGE: "range",
    DEFEND: "defend",
    TRAP: "trap"
};

game.enum.material = {
    ROCK: "rock",
    WOOD: "wood",
    FOOD: "food",
    GOLD: "gold",
    DIAMOND: "diamond"
};

game.enum.effect = {
    STUN: "stun",
    BURN: "burn",
    SLOW: "slow",
    RECALL: "recall",
    ASPD: "aspd" // attack speed
};

game.enum.projectile = {
    NONE: "none",
    GRENADE: "grenade",
    FLASHBANG: "flashbang",
    ROCKET: "rocket",
    SNIPER: "sniper",
    SMOKEGRENADE: "smokegrenade",
    FLAMETHROWER: "flamethrower",
    SCARLETKNIFE: "scarletknife",
    TANK: "tank",
    AEROPLANEBOMB: "aeroplaneBomb",
    BASIC: "basic"
};

game.enum.substance = {
    TOWER: "tower",
    HQ: "hq",
    UNIT: "unit",
    HERO: "hero",
    TANK: "tank",
    VEHICLE: "vehicle",
    UTILITY: "utility",
    USER: "user",
    HOMEBASE: "homebase",
    MELEE: "melee"
};

game.enum.data = {
    UNIT: "unit",
    HERO: "hero",
    TOWER: "tower",
    HQ: "hq",
    STAGE: "stage",
    SHOP: "shop",
    HOMEBASE: "homebase"
};

game.enum.table = {
    DEVICE: "device",
    USERDATA: "userData",
    TROOPS: "troops",
    STAGE: "stage",
    HOMEBASE: "homebase",
    SHOP: "shop",
    ACHIEVEMENT : "achievement"
};

game.enum.statistics = {
    HEALTH: "HEALTH",
    DAMAGE: "DAMAGE",
    ATTACKSPEED: "ATTACK SPEED",
    MOVEMENTSPEED: "MOVEMENT SPEED",
    ATTACKRANGE: "ATTACK RANGE"
};

game.enum.building = {
    BANK: "Bank",
    BARRACK: "Barrack",
    HQ: "HomeBase",
    LAB: "Research",
    LUMBERMILL: "LumberMill",
    STONEMILL: "StoneMill",
    FARM: "Farm",
    SHOP: "shop",
    LIBRARY: "Library",
    MONUMENT: "monument",
    GALLERY: "gallery"
};

game.enum.monument = {
    STONE: "stone",
    BRONZE: "bronze",
    SILVER: "silver",
    GOLD: "gold"
};

game.enum.shop = {
    MONUMENT: "monument",
    MATERIALS: "materials",
    CHEST: "chest",
    HERO:"hero"
};

game.enum.shoplist = {
    CHEST: "chest",
    MATERIALS: "materials",
    HERO:"hero"
};

game.enum.skin = {
    BEACH : "beach"
};

game.enum.achievement = {
    LIST: "list"
}



game.enum.tutorialHighlight = {
    4: "tutorial_highlight_4",
    5: "tutorial_highlight_5",
    6: "tutorial_highlight_6",
    10: "tutorial_highlight_10",
    13: "tutorial_highlight_13",
    15: "tutorial_highlight_15",
    17: "tutorial_highlight_17",
    18: "tutorial_highlight_18",
    19: "tutorial_highlight_19",
    20: "tutorial_highlight_20",
    22: "tutorial_highlight_22",
    23: "tutorial_highlight_23",
    24: "tutorial_highlight_24",
    25: "tutorial_highlight_25",
    27: "tutorial_highlight_27",
    29: "tutorial_highlight_29",
    101: "tutorial_highlight_101",
    103: "tutorial_highlight_103"
};
//  End of user code  //
