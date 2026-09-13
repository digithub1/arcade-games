// Put user code here //
var FacebookDatabase = baseDatabase.extend({
    init: function(){
        this.facebookKeys = [];
    },
    
    createDatabase: function(race, callback){
        let db = game.data.initUser;
        // console.log(db);
        // populate db
        db.device.platform = "Facebook Instant Games";
        db.device.os = game.util.getDevicePlatform();
        
        db.userData.race = race;
        db.userData.userId = FBInstant.player.getID();
        db.userData.name = FBInstant.player.getName();
        // --
        
        // save to facebook database
        let obj = {},
            sequenceList = game.util.objectToSequence(db);
            // console.log(sequenceList);
        for(let i = 0; i < sequenceList.length; i++){
            let sequence = sequenceList[i].split("_"),
                value = db;
            for(let j = 0; j < sequence.length; j++){
                let prop = sequence[j];
                value = value[prop];
            }
            obj[sequenceList[i]] = value;
        }
        // console.log("[FACEBOOK] db init user");
        // console.log(db);
        // console.log("[FACEBOOK] sequence list");
        // console.log(obj);
        // --
        
        FBInstant.player.setDataAsync(obj).then(function(){
            console.log("[FACEBOOK] database created.");
            callback();
        });
    },
    
    loadDatabase: function (){
        this.facebookKeys = [];
        
        // table is game.enum.table
        let loadKeys = (table, keys, pre = "", post = "") => {
            for(let i = 0; i < keys.length; i++){
                let res = table;
                if(pre !== "") res += "_" + pre;
                res += "_" + keys[i];
                if(post !== "") res += "_" + post;
                
                this.facebookKeys.push(res);
            }
        };
        
        // device
        let deviceKey = ["os", "platform", "lastlogin", "waitingTimeEnergy"];
        loadKeys(game.enum.table.DEVICE, deviceKey);
        // --
        
        // userData
        let userDataKey = ["totalXp", "maxXp","xp", "race", "energy", "maxEnergy", "gold", "diamond", "food", "rock", "wood",
                        "level", "hq_level", "tower_level", "team_hero_id", "team_hero_skin", "team_unit", 
                        "team_defend", "team_maxUnit", "userId", "tutorial", "cekpointutorial", "name","rank","shortCut"];
        loadKeys(game.enum.table.USERDATA, userDataKey);
        // --
        
        // troops
        let heroKey = game.data.hero.filter(h => h.id !== "").map(p => p.id);
        loadKeys(game.enum.table.TROOPS, heroKey, "heroData", "level");
        
        let unitKey = game.data.unit.filter(u => u.id !== "").map(p => p.id);
        loadKeys(game.enum.table.TROOPS, unitKey, "unitData", "level");
        // --
        
        // stage
        let stageIds = game.data.stage.filter(p => p.id !== "").map(s => s.id);
        loadKeys(game.enum.table.STAGE, stageIds, "", "stars");
        // --
        
        // homebase
        let homebaseBuildingKey = [game.enum.building.BANK, game.enum.building.BARRACK,
            game.enum.building.HQ, game.enum.building.LAB, game.enum.building.LUMBERMILL,
            game.enum.building.STONEMILL, game.enum.building.FARM];
        loadKeys(game.enum.table.HOMEBASE, homebaseBuildingKey, "", "grade");
        loadKeys(game.enum.table.HOMEBASE, homebaseBuildingKey, "", "upgradetime");
        
        let homebaseDataKey = ["monument"];
        loadKeys(game.enum.table.HOMEBASE, homebaseDataKey);
        // --
        
        // shop
        let shopDataKey = ["ownedIds"];
        loadKeys(game.enum.table.SHOP, shopDataKey);
        // --
        
        // fbPhoto
        let fbPhotoDataKey = ["lengthUrl","arrayUrl"];
        loadKeys("fbUrl", fbPhotoDataKey);
        // --
        
        // achievement
        let achievementDataKey = ["list"];
        loadKeys(game.enum.table.ACHIEVEMENT, achievementDataKey);
        // --
        
        // this.setData([game.enum.table.ACHIEVEMENT, "list"], undefined);
        return new Promise((resolve, reject) => {
            FBInstant.player.getDataAsync(this.facebookKeys).then(data => {
                let db = {},
                    dataKeys = Object.keys(data);
                    
                for(let i = 0; i < this.facebookKeys.length; i++){
                    let key = this.facebookKeys[i],
                        val = data[key],
                        isValid = val => typeof val !== "undefined";
                        
                    // console.log(i, "key", key, "value", val);
                    if(!dataKeys.includes(key)){
                        // console.log("key not present");
                        let split = key.split("_"),
                            value = game.data.initUser;
                        for(let j = 0; j < split.length; j++){
                            if(isValid(value)){
                                value = value[split[j]];
                            }
                        }
                        // console.log("value is", value);
                        if(isValid(value)) this.setData(split, value);
                        val = value;
                    }
                    
                    if(isValid(val)){
                        game.util.sequenceToObject(db, key.split("_"), val);
                    }
                }
                
                if(!db.troops.hasOwnProperty("unitData")) db.troops.unitData = {};
                if(!db.troops.hasOwnProperty("heroData")) db.troops.heroData = {};
                
                console.log("[FACEBOOK] database loaded.");
                // console.log(db);
                resolve(db);
            });
        });
    },
    
    getData: function(sequence){
        let prop = sequence.join("_");
        // console.log(prop);
        return new Promise((resolve, reject) => {
            FBInstant.player.getDataAsync([prop]).then(function(data){
                resolve(data[prop]);
            });
        });
    },
    
    // because facebook only support one hierarchy in object,
    // we join the sequence into one string with separator underscore
    setData: function(sequence, value, flush = false){
        let obj = {[sequence.join("_")]: value},
            promise = FBInstant.player.setDataAsync(obj);
            // console.log(obj);
        if(flush){
            return promise.then(FBInstant.player.flushDataAsync);
        }
        return promise;
    },
    
    setDataLeaderboards: function(score, obj){
        FBInstant
        .getLeaderboardAsync('GoDtestrank')
        .then(leaderboard => {
            return leaderboard.setScoreAsync(score, obj);
        });
    },
});
//  End of user code  //
