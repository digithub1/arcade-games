// Put user code here //
var DataController = me.Object.extend({
    init: function(){
        // init variables
        this.datatypeValues = Object.values(game.enum.data);
        
        // select db
        if(IS_DEBUG){
            this.dbController = new TestDatabase();
            // this.dbController = new APIDatabase();
        }else{
            this.dbController = new FacebookDatabase();
        }
    },
    
    emptyDatabase: async function(callback){
        if(typeof callback !== "function") callback = function(){};
        await this.dbController.createDatabase("", async () => {
            await this.dbController.setData([game.enum.table.USERDATA, "race"], "", true);
            callback();
        });
        console.log("empty database successful.");
    },
    
    getDataFromJSON: function(datatype, id, checking){
        if(typeof checking === "undefined"){
            checking = (obj, id) => obj.id === id;
        }
        
        if(this.datatypeValues.indexOf(datatype) === -1){
            throw `datatype [${datatype}] is not valid.`;
        }
        
        let data = game.data[datatype];
        if(!data){
            throw `game.data.${datatype} is not a valid.`;
        }
        
        let res = data.find(obj => checking(obj, id));
        return res;
    },
    
    // excludedProperties is the properties that dont have a level index
    // example, skill in hero is an excludedProperty
    getDataSubstance: function(datatype, id, level, excludedProperties, checking){
        let data = this.getDataFromJSON(datatype, id, checking);
        let res = {};
        
        for(let prop in data){
            let val = data[prop];
            if(Array.isArray(val) && val.length > 0){
                if(Array.isArray(excludedProperties) && excludedProperties.includes(prop)){
                    res[prop] = val;
                }else{
                    if(level - 1 >= val.length){
                        throw `level ${level} is not in the range of subtance level ${val.length}`;
                    }
                    res[prop] = val[level - 1];
                }
            }else if(typeof val !== "undefined"){
                res[prop] = val;
            }
        }
        return res;
    },
    
    getDataUnit: function(id, level){
        let excludedUnitProperties = ["effect"];
        return this.getDataSubstance(game.enum.data.UNIT, id, level, excludedUnitProperties);
    },
    
    getDataHero: function(id, level){
        let excludedHeroProperties = ["skill", "atkFrameList"];
        return this.getDataSubstance(game.enum.data.HERO, id, level, excludedHeroProperties);
    },
    
    getDataHq: function(level){
        // karena data untuk hq sama untuk territory yg berbeda, maka memakai contoh territory america saja
        let id = game.util.getHqId(game.user.userData.race, game.enum.territory.AMERICA, level);
        return this.getDataSubstance(game.enum.data.HQ, id, level);
    },
    
    getDataTower: function(level){
        // karena data untuk tower sama untuk territory yg berbeda, maka memakai contoh territory america saja
        let id = game.util.getTowerId(game.user.userData.race, game.enum.territory.AMERICA, level);
        return this.getDataSubstance(game.enum.data.TOWER, id, level);
    },
    
    getDataBuilding: function(building, grade){
        let checking = (obj, id) => obj.building === id;
        let buildingGrade = grade;
        if(buildingGrade == 5){
            return this.getDataSubstance(game.enum.data.HOMEBASE, building, grade, "", checking);
        }else{
            return this.getDataSubstance(game.enum.data.HOMEBASE, building, grade + 1, "", checking);
        }
    },
    
    initDatabase: async function(callback){
        // console.log("[DATA CONTROLLER] init database");
        // create user Object
        game.user = await this.dbController.loadDatabase();
        
        // console.log(game.user);
        
        // check if game.user is empty object
        let isDatabaseEmpty = !game.user || (game.user.userData.race !== game.enum.race.POLICE 
                && game.user.userData.race !== game.enum.race.GANGSTER);
        if(isDatabaseEmpty) {
            console.log("returned db is empty"); 
            if(typeof callback !== "undefined") callback(false);
            return;
        }
        
        // game.user = {};
        // populate hq data
        let hq = this.getDataHq(game.user.userData.hq.level);
        game.util.spreadAll(game.user.userData.hq, hq);
        
        // populate tower data
        let tower = this.getDataTower(game.user.userData.tower.level);
        game.util.spreadAll(game.user.userData.tower, tower);
        
        // populate troops data hero
        for(let id in game.user.troops.heroData){
            let hero = this.getDataHero(id, game.user.troops.heroData[id].level);
            game.util.spreadAll(game.user.troops.heroData[id], hero);
        }
        
        // populate troops data unit
        for(let id in game.user.troops.unitData){
            let unit = this.getDataUnit(id, game.user.troops.unitData[id].level);
            game.util.spreadAll(game.user.troops.unitData[id], unit);
        }
        // console.log("[DATA CONTROLLER] finish init database");
        // console.log(game.user);
        
        // populate shop data
        let shopData = game.data.shop.filter(d => d.race === game.user.userData.race),
            monumentData = shopData.filter(d => d.type === game.enum.shop.MONUMENT),
            materialData = game.data.shop.filter(d => d.type === game.enum.shop.MATERIALS),
            chestData = game.data.shop.filter(d => d.type === game.enum.shop.CHEST),
            heroData = game.data.shop.filter(d => d.type === game.enum.shop.HERO && d.race === game.user.userData.race || d.race === game.enum.race.VIGILANTE);
        
        game.user.shop.monument = [];
        monumentData.forEach(data => {
            data.isOwned = game.user.shop.ownedIds.includes(data.id);
            game.user.shop.monument.push(data);
        });
        
        game.user.shop.materials = [];
        materialData.forEach(data => {
            game.user.shop.materials.push(data);
        });
        
        game.user.shop.chest = [];
        chestData.forEach(data => {
            game.user.shop.chest.push(data);
        });
        
        game.user.shop.hero = [];
        heroData.forEach(data => {
            game.user.shop.hero.push(data);
        });
        
        //populate data list achievement
        game.data.achievement.forEach(data =>{
            let listId = game.user.achievement.list[data.id];
            if(typeof listId === "undefined"){
                game.user.achievement.list[data.id] = {progres:0, claim:0};
            }
             game.util.spreadAll(game.user.achievement.list[data.id], data);
        });
        
      
        for (let building in game.user.homebase){
            let data = this.getDataBuilding(building, game.user.homebase[building].grade);
            game.util.spreadAll(game.user.homebase[building], data);
        }
        // --
        
        if(LOCAL_SAVE){
            if(firstPlay){
                firstPlay = false;
                console.log("Data Awal Local");
                localStorage.setItem("GoD.firstPlay", "1");
                localStorage.setItem("GoD.AllData.achievement", JSON.stringify(game.user.achievement));
                localStorage.setItem("GoD.AllData.device", JSON.stringify(game.user.device));
                localStorage.setItem("GoD.AllData.homebase", JSON.stringify(game.user.homebase));
                localStorage.setItem("GoD.AllData.stage", JSON.stringify(game.user.stage));
                localStorage.setItem("GoD.AllData.troops", JSON.stringify(game.user.troops));
                localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
                localStorage.setItem("GoD.AllData.shop", JSON.stringify(game.user.shop));
                localStorage.setItem("GoD.AllData.shop.ownedIds", JSON.stringify(game.user.shop.ownedIds));

                localStorage.setItem("GoD.AllData.shop.monument.batu.1", JSON.stringify(game.user.shop.monument[0].isOwned));
                localStorage.setItem("GoD.AllData.shop.monument.batu.2", JSON.stringify(game.user.shop.monument[1].isOwned));
                localStorage.setItem("GoD.AllData.shop.monument.bronze.1", JSON.stringify(game.user.shop.monument[2].isOwned));
                localStorage.setItem("GoD.AllData.shop.monument.bronze.2", JSON.stringify(game.user.shop.monument[3].isOwned));
                localStorage.setItem("GoD.AllData.shop.monument.perak.1", JSON.stringify(game.user.shop.monument[4].isOwned));
                localStorage.setItem("GoD.AllData.shop.monument.perak.2", JSON.stringify(game.user.shop.monument[5].isOwned));
                localStorage.setItem("GoD.AllData.shop.monument.gold.1", JSON.stringify(game.user.shop.monument[6].isOwned));
                localStorage.setItem("GoD.AllData.shop.monument.gold.2", JSON.stringify(game.user.shop.monument[7].isOwned));
            }else{
                // game.user = JSON.parse(localStorage.getItem("GoD.AllData"));
                game.user = {};
                console.log("Load Data Local");
                game.user.achievement = JSON.parse(localStorage.getItem("GoD.AllData.achievement"));
                game.user.device = JSON.parse(localStorage.getItem("GoD.AllData.device"));
                game.user.homebase = JSON.parse(localStorage.getItem("GoD.AllData.homebase"));
                game.user.stage = JSON.parse(localStorage.getItem("GoD.AllData.stage"));
                game.user.troops = JSON.parse(localStorage.getItem("GoD.AllData.troops"));
                game.user.userData = JSON.parse(localStorage.getItem("GoD.AllData.userData"));
                game.user.shop = JSON.parse(localStorage.getItem("GoD.AllData.shop"));
                game.user.shop.ownedIds = JSON.parse(localStorage.getItem("GoD.AllData.shop.ownedIds"));

                game.user.shop.monument[0].isOwned  = JSON.parse(localStorage.getItem("GoD.AllData.shop.monument.batu.1"));
                game.user.shop.monument[1].isOwned  = JSON.parse(localStorage.getItem("GoD.AllData.shop.monument.batu.2"));
                game.user.shop.monument[2].isOwned  = JSON.parse(localStorage.getItem("GoD.AllData.shop.monument.bronze.1"));
                game.user.shop.monument[3].isOwned  = JSON.parse(localStorage.getItem("GoD.AllData.shop.monument.bronze.2"));
                game.user.shop.monument[4].isOwned  = JSON.parse(localStorage.getItem("GoD.AllData.shop.monument.perak.1"));
                game.user.shop.monument[5].isOwned  = JSON.parse(localStorage.getItem("GoD.AllData.shop.monument.perak.2"));
                game.user.shop.monument[6].isOwned  = JSON.parse(localStorage.getItem("GoD.AllData.shop.monument.gold.1"));
                game.user.shop.monument[7].isOwned  = JSON.parse(localStorage.getItem("GoD.AllData.shop.monument.gold.2"));
            }
        }
        if(typeof callback !== "undefined") callback(true);
    },
    
    createDatabase: function(race, callback){
        // console.log("[DATA CONTROLLER] create database");
        this.dbController.createDatabase(race, () => {
            this.initDatabase(() => {
                callback();
            })
        });
    },
    
    modifyUserDataProperty: async function(property, value, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", property],
            oldValue = await this.dbController.getData(sequence),
            newValue = oldValue + value;
            
        // console.log(property, "old", oldValue, "inc", value, "new", newValue);
        this.dbController.setData(sequence, newValue);
        game.user.userData[property] = newValue;
        
        game.controller.achievement.setAchievement(property, newValue);
        callback();
        
        if(property == "energy"){
            this.cekEnergy();
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.achievement", JSON.stringify(game.user.achievement));
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
        return newValue;
    },
    
    modifyXp: async function(val){
        await this.modifyUserDataProperty("xp", val);
        this.cekXp();
        this.addTotalXp();
    },
    
    modifyEnergy: async function(val){
        await this.modifyUserDataProperty("energy", val);
        this.cekEnergy();
    },
    
    modifyGold: function(val, callback){
        return this.modifyUserDataProperty(game.enum.material.GOLD, val, callback);
    },
    
    modifyGem: function(val, callback){
        return this.modifyUserDataProperty(game.enum.material.DIAMOND, val, callback);
    },
    
    modifyMaterial: function(material, val, callback){
        return this.modifyUserDataProperty(material, val, callback);
    },
    
    modifyFood: function(val, callback){
        return this.modifyMaterial(game.enum.material.FOOD, val, callback);
    },
    
    modifyRock: function(val, callback){
        return this.modifyMaterial(game.enum.material.ROCK, val, callback);
    },
    
    modifyWood: function(val, callback){
        return this.modifyMaterial(game.enum.material.WOOD, val, callback);
    },
    
    levelupUserDataSubstance: async function(substance){
        let isUser = substance === game.enum.substance.USER,
            sequence =  isUser ? [game.enum.table.USERDATA, "level"] 
                        : [game.enum.table.USERDATA, substance, "level"],
            level = await this.dbController.getData(sequence);
        if(level < MAX_LEVEL[substance]){
            level += 1;
            this.dbController.setData(sequence, level);
            
            if(isUser){
                game.user.userData.level = level;
            }else{
                game.user.userData[substance].level = level;
                let func = "getData" + substance.capitalize(),
                    newData = this[func](level);
                game.util.spreadAll(game.user.userData[substance], newData);
            }
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
        return isUser ? game.user.userData.level : game.user.userData[substance];
    },
    
    levelupTroopsSubstance: async function(substance, id, callback){
        let type = substance + "Data",
            sequence = [game.enum.table.TROOPS, type, id, "level"],
            level = await this.dbController.getData(sequence);
        if(level < MAX_LEVEL[substance]){
            level += 1;
            this.dbController.setData(sequence, level);
            game.user.troops[type][id].level = level;
            
            let func = "getData" + substance.capitalize(),
                newData = this[func](id, level);
            game.util.spreadAll(game.user.troops[type][id], newData);
        }
        if(typeof callback !== "undefined") callback();
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.troops", JSON.stringify(game.user.troops));
        }
        return game.user.troops[type][id];
    },
    
    levelupHomebaseBuilding: async function(type){
            let sequence = [game.enum.table.HOMEBASE, type, "grade"],
            grade = game.user.homebase[type].grade;
            if(grade < MAX_LEVEL[game.enum.substance.HOMEBUILDING]){
                grade += 1;
                this.dbController.setData(sequence, grade);
                game.user.homebase[type].grade = grade;
                
                let newData = this.getDataBuilding(type, grade);
                game.util.spreadAll(game.user.homebase[type], newData);
            }
            
            if(LOCAL_SAVE){
                localStorage.setItem("GoD.AllData.homebase", JSON.stringify(game.user.homebase));
            }
            return game.user.homebase[type];
    },
    
    levelupHq: function(){
        return this.levelupUserDataSubstance(game.enum.substance.HQ);
    },
    
    levelupTower: function(){
        return this.levelupUserDataSubstance(game.enum.substance.TOWER);
    },
    
    levelupUser: function(){
    let currentLv   = game.user.userData.level,
        sequence    = ["userData", "level"],
        upLevel     = currentLv+1;
        
        this.dbController.setData(sequence, upLevel);
        game.user.userData.level = upLevel;
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
    },
    
    levelupHero: function(id, callback){
        return this.levelupTroopsSubstance(game.enum.substance.HERO, id, callback);
    },
    
    levelupUnit: function(id, callback){
        return this.levelupTroopsSubstance(game.enum.substance.UNIT, id, callback);
    },
    
    setTeamHero: function(id, skin = ""){
        let sequence = ["userData", "team", "hero"];
        if(game.util.isHeroId(id)){
            sequence[3] = "id";
            this.dbController.setData(sequence, id);
            game.user.userData.team.hero.id = id;
        }
        if(skin === "" || Object.values(game.enum.skin).includes(skin)){
            sequence[3] = "skin";
            this.dbController.setData(sequence, skin);
            game.user.userData.team.hero.skin = skin;
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
        return game.user.userData.team.hero;
    },
    
    setTeamUnit: async function(id, idx){
        if(game.util.isUnitId(id) && idx >= 0 && idx <= 5){
            let sequence = ["userData", "team", "unit"],
                obj = await this.dbController.getData(sequence);
            obj[idx] = id;
            this.dbController.setData(sequence, obj);
            game.user.userData.team.unit = obj;
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
        return game.user.userData.team.unit;
    },
    
    setAllTeamUnit: function(idList){
        if(idList.length === 6){
            let sequence = ["userData", "team", "unit"];
            this.dbController.setData(sequence, idList);
            game.user.userData.team.unit = idList;
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
        return game.user.userData.team.unit;
    },
    
    // function to add unit or hero id
    // squad is either unit or hero
    // number is the type of the squad
    addSquad: async function(squad, id, opts){
        if(!id){
            verify(opts, ["territory", "race", "number"]);
            id = game.code.territory[opts.territory] + game.code.squad[squad] 
                + game.code.race[opts.race] + opts.number.toString().padStart(3, '0');
        }
        
        let isValidId = game.util["is" + squad.capitalize() + "Id"](id);
        if(isValidId){
            let type = squad + "Data",
                sequence = ["troops" , type, id, "level"],
                level = await this.dbController.getData(sequence);
                
            if(level == null){
                level = 1;
                this.dbController.setData(sequence, level);
                game.user.troops[type][id] = {level};
                
                let data = this["getData" + squad.capitalize()](id, level);
                game.util.spreadAll(game.user.troops[type][id], data);
            }
            
            if(LOCAL_SAVE){
                localStorage.setItem("GoD.AllData.troops", JSON.stringify(game.user.troops));
            }
            return game.user.troops[type][id];
        }
    },
    
    addHero: async function(id, territory, race, number){
        return await this.addSquad(game.enum.substance.HERO, id, {territory, race, number});
    },
    
    addUnit: async function(id, territory, race, number){
        return await this.addSquad(game.enum.substance.UNIT, id, {territory, race, number});
    },
    
    addUnitDefend: async function(id, territory, race, number){
        let sequence = ["userData", "team", "defend"],
            obj = await this.dbController.getData(sequence),
            idx = obj.findIndex(o => o === ""),
            data = await this.addUnit(id, territory, race, number);
            
        if(obj.length > MAX_TEAM_DEFEND){
            obj = obj.slice(0, MAX_TEAM_DEFEND);
        }else if(obj.length < MAX_TEAM_DEFEND){
            let diff = MAX_TEAM_DEFEND - obj.length;
            for(let i = 0; i < diff; i++) obj.push("");
        }
        
        obj[idx] = data.id;
        this.dbController.setData(sequence, obj);
        game.user.userData.team.defend = obj;
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
    },
    
    completedStage: async function(currentId, nextId, stars){
        let sequence = [game.enum.table.STAGE, currentId, "stars"],
            currentStars = await this.dbController.getData(sequence);
            
        if(currentStars < stars){
            this.dbController.setData(sequence, stars);
            game.user.stage[currentId].stars = stars;
        }
        
        if(nextId != null){
            if(!Array.isArray(nextId)) nextId = [nextId];
            for(let i = 0; i < nextId.length; i++){
                let id = nextId[i];
                sequence = [game.enum.table.STAGE, id, "stars"];
                let nextStars = await this.dbController.getData(sequence);
                if(nextStars == null){
                    this.dbController.setData(sequence, 0);
                    if(!game.user.stage.hasOwnProperty(id)){
                        game.user.stage[id] = {};
                    }
                    game.user.stage[id].stars = 0;
                }
            }
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.stage", JSON.stringify(game.user.stage));
        }
    },
    
    buyShopItem: async function(itemId, price, isPremium, callback){
        let currency = isPremium ? "diamond" : "gold",
            sequence = [game.enum.table.USERDATA, currency],
            userMoney = await this.dbController.getData(sequence);
        
        userMoney -= price;
        if(userMoney >= 0){
            this.dbController.setData(sequence, userMoney);
            game.user.userData[currency] = userMoney;
            
            sequence = [game.enum.table.SHOP, "ownedIds"];
            let ownedIds = await this.dbController.getData(sequence);
     
            if(!ownedIds.includes(itemId)){
                ownedIds.push(itemId);
                this.dbController.setData(sequence, ownedIds);
                game.user.shop.ownedIds = ownedIds;
            }
        }
        if(typeof callback !== "undefined") callback();
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
            localStorage.setItem("GoD.AllData.shop.ownedIds", JSON.stringify(game.user.shop.ownedIds));
            localStorage.setItem("GoD.AllData.shop.monument.batu.1", JSON.stringify(game.user.shop.monument[0].isOwned));
            localStorage.setItem("GoD.AllData.shop.monument.batu.2", JSON.stringify(game.user.shop.monument[1].isOwned));
            localStorage.setItem("GoD.AllData.shop.monument.bronze.1", JSON.stringify(game.user.shop.monument[2].isOwned));
            localStorage.setItem("GoD.AllData.shop.monument.bronze.2", JSON.stringify(game.user.shop.monument[3].isOwned));
            localStorage.setItem("GoD.AllData.shop.monument.perak.1", JSON.stringify(game.user.shop.monument[4].isOwned));
            localStorage.setItem("GoD.AllData.shop.monument.perak.2", JSON.stringify(game.user.shop.monument[5].isOwned));
            localStorage.setItem("GoD.AllData.shop.monument.gold.1", JSON.stringify(game.user.shop.monument[6].isOwned));
            localStorage.setItem("GoD.AllData.shop.monument.gold.2", JSON.stringify(game.user.shop.monument[7].isOwned));
        }
    },
    
    buymaterials: async function(material, price, isPremium, value){
        let currency = isPremium ? "diamond" : "gold",
            sequence = [game.enum.table.USERDATA, currency],
            userMoney = await this.dbController.getData(sequence);
            
            userMoney -= price;
            if(userMoney >= 0){
                this.dbController.setData(sequence, userMoney);
                game.user.userData[currency] = userMoney;
                
                this.modifyUserDataProperty(material, value);
            }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
    },
    
    buyHero: async function(isPremium, price, id, territory, race){
        let currency = isPremium ? "diamond" : "gold",
            sequence = [game.enum.table.USERDATA, currency],
            userMoney = await this.dbController.getData(sequence);
            // addhero
            userMoney -= price;
            if(userMoney >= 0){
                this.dbController.setData(sequence, userMoney);
                game.user.userData[currency] = userMoney;
                
                this.addHero(id, territory, race);
                
                if(LOCAL_SAVE){
                    localStorage.setItem("GoD.AllData.troops", JSON.stringify(game.user.troops));
                }
                // if(heroid && game.data.availableHero.includes(heroid)){
                //     this.addHero(heroid);
                // }
            }
            
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
    },
    
    changeMonument: async function(monumentId, callback){
        let sequence = [game.enum.table.HOMEBASE, "monument"];
        this.dbController.setData(sequence, monumentId);
        game.user.homebase.monument = monumentId;
        if(typeof callback !== "undefined") callback();
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.homebase", JSON.stringify(game.user.homebase));
        }
    },
    
    changeTimeBuilding: async function(buildingId, upgradetime){
        sequence = [game.enum.table.HOMEBASE, buildingId,"upgradetime"],
        data = await this.dbController.getData(sequence);
        data = upgradetime;
            
        this.dbController.setData(sequence, data);
        game.user.homebase[buildingId].upgradetime = data;
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.homebase", JSON.stringify(game.user.homebase));
        }
    },
    
    setlastlogin: async function(value){
        let sequence = ["device", "lastlogin"]
        this.dbController.setData(sequence, value);
        game.user.device.lastlogin = value;
        
    },
    
    unlockSkin: async function(itemId){
        sequence = [game.enum.table.SHOP, "ownedIds"];
        let ownedIds = await this.dbController.getData(sequence);
        
        // console.log(ownedIds);
        
        if(!ownedIds.includes(itemId)){
                ownedIds.push(itemId);
                this.dbController.setData(sequence, ownedIds);
                game.user.shop.ownedIds = ownedIds;
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.shop.ownedIds", JSON.stringify(game.user.shop.ownedIds));
        }
    },
    
    setDataAchievement: async function(id, progres){
        
        let sequence = ["achievement", "list", id, "progres"],
                data = await this.dbController.getData(sequence);

            let oldvalue = data,
                newvalue = oldvalue + progres;
       
            this.dbController.setData(sequence, newvalue);
            game.user.achievement.list[id].progres = newvalue;
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.achievement", JSON.stringify(game.user.achievement));
        }
    },
    
    setClaimAchievement: async function(id){
        
         let sequence = ["achievement","list",id, "claim"],
                data = await this.dbController.getData(sequence);
             
            let oldvalue = data,
                newvalue = oldvalue + 1;
    
            this.dbController.setData(sequence, newvalue);
            game.user.achievement.list[id].claim = newvalue;
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.achievement", JSON.stringify(game.user.achievement));
        }
    },
    
    finishTutorial: async function(){
        let sequence = ["userData", "tutorial"];
        this.dbController.setData(sequence, 1);
        game.user.userData.tutorial = 1;
    },
    
    cekTutorial: async function(){
        let sequence = ["userData", "cekpointutorial"];
        this.dbController.setData(sequence, 1);
        game.user.userData.cekpointutorial = 1;
    },
    
    setMaxunit: async function(){
        let sequence = ["userData", "team", "maxUnit"],
            data = await this.dbController.getData(sequence),
            OldData = data,
            newdata = OldData + 1;

            this.dbController.setData(sequence, newdata);
            game.user.userData.team.maxUnit = newdata;
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
    },
    
    addTotalXp:function(){
        let currentXp   = game.user.userData.xp,
            maxXp       = game.user.userData.maxXp,
            currentLv   = game.user.userData.level,
            sequence    = ["userData", "totalXp"],
            totalXp     = ((currentLv-1)*maxXp)+currentXp;
        
        let obj = String(currentLv);
        
        this.dbController.setData(sequence, totalXp);
        game.user.userData.totalXp = totalXp;
        if(IS_DEBUG == false){
            this.dbController.setDataLeaderboards(totalXp, obj);
        }
        
        if(LOCAL_SAVE){
            if(ADS_STB){postScore(game.user.userData.totalXp)}
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
    },
    
    cekXp:function(){
        let currentXp   = game.user.userData.xp,
            currentLv   = game.user.userData.level,
            sequence    = ["userData", "xp"],
            newdata     = 0;
            
        if(currentXp >= game.user.userData.maxXp){
            this.levelupUser();
            let sisaXp  = currentXp - game.user.userData.maxXp;
            this.dbController.setData(sequence, sisaXp);
            game.user.userData.xp = sisaXp;
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
    },
    
    cekEnergy:function(){
        let currentEnergy   = game.user.userData.energy,
            sequence        = ["userData", "energy"];
            
        if(currentEnergy >= 10){
            this.dbController.setData(sequence, 10);
            game.user.userData.energy = 10;
            
            let sequenceTime = ["device", "waitingTimeEnergy"];
            this.dbController.setData(sequenceTime, 0);
            game.user.device.waitingTimeEnergy = 0;
        }
        
        if(currentEnergy < 0){
            this.dbController.setData(sequence, 0);
            game.user.userData.energy = 0;
        }
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.device", JSON.stringify(game.user.device));
            localStorage.setItem("GoD.AllData.userData", JSON.stringify(game.user.userData));
        }
    },
    
    missingEnergy: function(){
        let sequence    = ["device", "waitingTimeEnergy"],
            value       = new Date().getTime()/1000;
        
        this.dbController.setData(sequence, value);
        game.user.device.waitingTimeEnergy = value;
        
        if(LOCAL_SAVE){
            localStorage.setItem("GoD.AllData.device", JSON.stringify(game.user.device));
        }
    },
    
    getFbEntryLength: function(){
        FBInstant
            .getLeaderboardAsync('GoDtestrank')
            .then(leaderboard => leaderboard.getEntriesAsync(10, 0))
            .then(entries => {
                let value = entries.length,
                    arrayValue = [],
                    sequenceValue = ["fbUrl","lengthUrl"],
                    sequenceArray = ["fbUrl","arrayUrl"];
                    
                for (let i = 0; i < value; i++) {
                    arrayValue.push(entries[i].getPlayer().getPhoto());
                }
                
                this.dbController.setData(sequenceValue, value);
                this.dbController.setData(sequenceArray, arrayValue);
                
                game.user.fbUrl.lengthUrl = value;
                game.user.fbUrl.arrayUrl = arrayValue;
            });
    },
    
    myRank: function(){
        FBInstant
            .getLeaderboardAsync('GoDtestrank')
            .then(leaderboard => leaderboard.getPlayerEntryAsync())
            .then(entry => {
                let value       = entry.getRank(),
                    sequence    = ["userData","rank"];

                this.dbController.setData(sequence, value);
                game.user.userData.rank = value;
            });
    },
    
    addShortCut: function(){
        let sequence = ["userData","shortCut"];
        
        this.dbController.setData(sequence, 1);
        game.user.userData.shortCut = 1;
    },
    
    getCircularReplacer: function(){
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    }
});
//  End of user code  //
