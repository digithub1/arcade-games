// Put user code here //
var DataController = me.Object.extend({
    init: function(){
        if(DATABASE_ANDROID){
            this.dbController = new androidDatabase();
        }else{
            console.log("local");
            this.dbController = new testDatabase();
        }
    },

    initDatabase: async function(id, name, email, callback){
        console.log("init data controlller");
        game.user = await this.dbController.loadDatabase(id, name);
        let isDatabaseEmpty = !game.user || game.user.device.haveLogin == 0 || game.user == null;
        
        if(isDatabaseEmpty) {
            await this.createDatabase(id, name, email);
            console.log("empty");
            if(typeof callback !== "undefined")
            {
                console.log(" not undefined");
                callback(false);
            }
            return;
        }
        else{
            console.log("not empty");
            if(typeof callback !== "undefined")
            { 
                console.log(" not undefined");
                callback(false);
            }
            return;
        }
        
        if(typeof callback !== "undefined") callback(true);
    },
    
    createDatabase: function(id, name, email){
        this.dbController.createDatabase(id, name, email);
    },
    
    
    getDataFromJSON: function(datatype, id, checking){
        if(typeof checking === "undefined"){
            checking = (obj, id) => obj.id === id;
        }
        
        let data = game.data[datatype];
        if(!data){
            throw `game.data.${datatype} is not a valid.`;
        }
        
        return data;
    },
    
    getData : async function(callback){
        if(typeof callback !== "function") callback = function(){};
        
        let getValue = await this.dbController.getUserData();
        
        callback(getValue);
    },
    
    getDataHeroInfo: function(){
        return this.getDataFromJSON('heroInfo', 0);
    },
    
    getDataEnemyInfo: function(){
        return this.getDataFromJSON('enemyInfo', 0);
    },
    
    getDataStageInfo: function(){
        return this.getDataFromJSON('stageInfo', 0);
    },
    
    getDataWaveInfo: function(){
        return this.getDataFromJSON('waveInfo', 0);
    },
    
    getDataTraitInfo: function(){
        return this.getDataFromJSON('traitInfo', 0);
    },
    
    getDataCafeInfo: function(){
        if(DATABASE_LOCAL == false){
            return this.getDataFromJSON('cafetariaInfo', 0);
        }
        else{
            return this.getDataFromJSON('cafetariaInfoWeb', 0);
        }
    },
    
    getDataNerdItemInfo: function(){
        return this.getDataFromJSON('nerdItemInfo', 0);
    },
    
    getDataItemInfo: function(){
        return this.getDataFromJSON('itemInfo', 0);
    },
    
    getDataHomeroomInfo: function(){
        return this.getDataFromJSON('homeroomInfo', 0);
    },
    
    getDataAchievementInfo: function(){
        return this.getDataFromJSON('achievementInfo', 0);
    },
    
    getDataAchievementInfoFB: function(){
        return this.getDataFromJSON('achievementInfoFB', 0);
    },
    
    getDataTimeAtkInfo: function(){
        return this.getDataFromJSON('timeAtkInfo', 0);
    },
    
    hireHero: async function(heroID, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let traitSequence = ["userData", 'traitHero'],
            heroSequence = ["userData", 'hiredHero'],
            starSequence = ["userData", 'star'],
            traitHero = await this.dbController.getData(traitSequence),
            userHero = await this.dbController.getData(heroSequence),
            userStar = await this.dbController.getData(starSequence);
    
            let getPrice = 0,
                heroInfo = this.getDataHeroInfo();
            
            for(let j in heroInfo){
                if(heroInfo[j].id == heroID){
                    getPrice = heroInfo[j].hireCost;
                }
            }
            
            
            newStar = userStar - getPrice;
            if(newStar >= 0){
                userHero[heroID] = {level : 1,
                                    hp : 'full', 
                                    protectTime : 0, 
                                    cooldownTime : 0, 
                                    deathTime : 0,
                                    atkCounter : 0,
                                    spcCounter : 0,
                                    rest       : 0
                                    };
                await this.modifyUserDataProperty('star', newStar);
                await this.modifyUserDataProperty('hiredHero', userHero);
                
                if(traitHero[heroID] == undefined){
                    traitHero[heroID] = {};
                    await this.modifyUserDataProperty('traitHero', traitHero);
                }
                
                callback();
            }
    },
    
    lvlUpTrait: async function(heroID, traitNumber, cost, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let traitSequence = ["userData", 'traitHero'],
            medalSequence = ["userData", 'medal'],
            traitHero = await this.dbController.getData(traitSequence),
            userMedal = await this.dbController.getData(medalSequence);
        
        let newMedal = userMedal - cost;
        if(newMedal >= 0){
            if(traitHero[heroID][traitNumber] == undefined){
                traitHero[heroID][traitNumber] = 1;
            }
            else{
                traitHero[heroID][traitNumber] += 1;
            }
            
            await this.modifyUserDataProperty('medal', newMedal);
            await this.modifyUserDataProperty('traitHero', traitHero);
            callback(newMedal);
        }
    },
    
    lvlUpHero: async function(id, cost, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let heroSequence = ["userData", 'hiredHero'],
            starSequence = ["userData", 'star'],
            userHero = await this.dbController.getData(heroSequence),
            userStar = await this.dbController.getData(starSequence);
        
        let newStar = userStar - cost;
        if(newStar >= 0){
            console.log(userHero);
            userHero[id].level += 1;
            console.log(userHero);
            await this.modifyUserDataProperty('star', newStar);
            await this.modifyUserDataProperty('hiredHero', userHero);
            callback();
        }
    },
    
    saveCampaign : async function(hero, enemy, campaignProgress, callback){
        if(typeof callback !== "function") callback = function(){};
        
        await this.modifyUserDataProperty('hiredHero', hero);
        await this.modifyUserDataProperty('enemyCampaign', enemy);
        await this.modifyUserDataProperty('campaignProgress', campaignProgress);
        callback();
    },
    
    saveHeroStatus : async function(id, status, callback){
        if(typeof callback !== "function") callback = function(){};
        
        
        let heroSequence = ["userData", 'hiredHero'],
            userHero = await this.dbController.getData(heroSequence);
           
        
            userHero[id] = status;
            
            await this.modifyUserDataProperty('hiredHero', userHero);
            callback();
    },
    
    saveEnemyStatus : async function(status, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let enemySequence = ["userData", 'enemyCampaign'],
            enemyList = await this.dbController.getData(enemySequence);
            
            enemyList[status.index] = status;
            
            await this.modifyUserDataProperty('enemyCampaign', enemyList);
            callback();
    },
    
    buyItem : async function(list, cost, IAP, callback){
        if(typeof callback !== "function") callback = function(){};
        let resourceSequence, userResource,
            able = false;
            
        if(cost.price == 0){
            able = true;
        }
        else{
            resourceSequence = ["userData", cost.type],
            userResource = await this.dbController.getData(resourceSequence);
        
            if(userResource >= cost.price){
                able = true;
            }
        }
        
        if(able){
            for(let i in list){
                if(list[i].type == 'item'){
                    let sequence = ["userData", 'item'],
                        userItem = await this.dbController.getData(sequence),
                        contain = 0;
                    
                    let itemInfo = this.getDataItemInfo();
                    for(let j in itemInfo){
                        if(itemInfo[j].id == list[i].id){
                            if(itemInfo[j].duration != '-'){
                                contain = itemInfo[j].duration;
                            }
                            else{
                                contain = 1;
                            }
                        }
                    }
                    
                    if(userItem[list[i].id] == undefined){//kalo belom ada di DB
                        userItem[list[i].id] = contain;
                    }
                    else{//kalo udah ada di DB di tambah aja timernya
                        userItem[list[i].id] += contain;
                    }
                    
                    await this.modifyUserDataProperty(list[i].type, userItem);
                }
                else if(list[i].type == 'nerdItem'){
                    let sequence = ["userData", 'nerdItem'],
                        userItem = await this.dbController.getData(sequence);
                        
                    if(userItem[list[i].id] == undefined){
                        userItem[list[i].id] = list[i].contain;
                    }
                    else{
                        userItem[list[i].id] += list[i].contain;
                    }
                    
                    await this.modifyUserDataProperty(list[i].type, userItem);
                }
                else if(list[i].type == 'resource'){
                    let sequence = ["userData", list[i].id],
                        userRes = await this.dbController.getData(sequence);
                        
                    let newRes = userRes + list[i].contain;
                    
                    await this.modifyUserDataProperty(list[i].id, newRes);
                }
            }
            
            if(IAP == false){
                if(cost.price > 0){
                    let res = userResource - cost.price;
                    await this.modifyUserDataProperty(cost.type, res); 
                }
            }
            else{
                
            }
            callback();
        }
    },
    
    UltiMing : async function(duration, callback){
        let sequence = ["userData", 'item'],
            userItem = await this.dbController.getData(sequence);
            
        if(userItem["I003"] == undefined){
            userItem["I003"] = duration;
        }
        else{
            userItem["I003"] += duration;
        }
        
        await this.modifyUserDataProperty("item", userItem);
        callback(userItem["I003"]);
    },
    
    getCafeTimer : async function(cafeID, maxTime, currentTime, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", 'cafeTimer'],
            getTimer = await this.dbController.getData(sequence);
            
        if(getTimer[cafeID] == undefined)
            getTimer[cafeID] = 0;
            
        let lastTime = getTimer[cafeID],
            remainingTime = Math.max(0, (maxTime * 3600000) - (currentTime - lastTime));
        
        //callback(remainingTime);
        callback(remainingTime);
    },
    
    setCafeTimer : async function(cafeID, currentTime, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", 'cafeTimer'],
            getTimer = await this.dbController.getData(sequence);
            
        getTimer[cafeID] = currentTime;
        await this.modifyUserDataProperty('cafeTimer', getTimer);
        callback();
    },
    
    setItemTimer : async function(itemID, currentTime, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", 'item'],
            getTimer = await this.dbController.getData(sequence);
            
        getTimer[itemID] = currentTime;
        await this.modifyUserDataProperty('item', getTimer);
        callback();
    },
    
    claimHomeroomStar : async function(id, getLvl, getStar, callback){
        let sequence = ['userData', 'star'];
            userStar = await this.dbController.getData(sequence),
            homeroomSequence = ['userData', 'homeroom'],
            userHomeroom = await this.dbController.getData(homeroomSequence);
            
        let now = new Date().getTime();
        
        userStar += getStar;
        userHomeroom[id] = {level : getLvl, time : now};

        await this.modifyUserDataProperty('star', userStar);
        await this.modifyUserDataProperty('homeroom', userHomeroom);
        callback();
    },
    
    upgradeHomeroom : async function(id, level, cost, callback){
        let sequence = ['userData', 'candy'];
            userCandy = await this.dbController.getData(sequence),
            homeroomSequence = ['userData', 'homeroom'],
            userHomeroom = await this.dbController.getData(homeroomSequence);
        
        if(userCandy - cost >= 0){
            let newLevel = level ++;
            let newTime = 0;
            if(userHomeroom[id] != undefined)
                newTime = userHomeroom[id].time
            
            userHomeroom[id] = {level : newLevel, time : newTime};
            await this.modifyUserDataProperty('candy', userCandy - cost);
            await this.modifyUserDataProperty('homeroom', userHomeroom);
            callback();
        }
    },
    
    saveAchievementProgress : async function(type, value, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", 'achievementProgress'],
            getValue = await this.dbController.getData(sequence);
            
        getValue[type] = value;
        
        await this.modifyUserDataProperty('achievementProgress', getValue);
        callback(getValue);
    },
    
    claimAchievement : async function(id, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", 'achievementClaim'],
            getValue = await this.dbController.getData(sequence),
            achInfo = this.getDataAchievementInfo(),
            reward, rewardType;
        
        for(let i in achInfo){
            if(achInfo[i].id == id){
                reward = achInfo[i].reward;
                rewardType = achInfo[i].rewardType; break;
            }
        }
        
        let resourceSequence = ["userData", rewardType],
            userResource = await this.dbController.getData(resourceSequence),
            newUserResource = userResource + reward;
            
        getValue.push(id);
        await this.modifyUserDataProperty('achievementClaim', getValue);
        await this.modifyUserDataProperty(rewardType, newUserResource);
        callback();
    },
    
    remedial : async function(callback){
        if(typeof callback !== "function") callback = function(){};
        
        let campaignProgress = {stage : 1, wave : 1, timer : 0, startPlay : 0}, 
                                hiredHero = {}, traitHero = {}, enemyCampaign = [];
                                
        let sequence = ["userData", 'achievementProgress'],
            achievementValue = await this.dbController.getData(sequence),
            remedialCount = 0;
        
        if(achievementValue['Remedial'] == undefined){
            remedialCount = 1;
        }
        else{
            remedialCount = achievementValue['Remedial'] + 1;
        }

        await this.saveAchievementProgress('Remedial', remedialCount);
        await this.modifyUserDataProperty('campaignProgress', campaignProgress);
        await this.modifyUserDataProperty('hiredHero', hiredHero);
        await this.modifyUserDataProperty('enemyCampaign', enemyCampaign);
        await this.modifyUserDataProperty('traitHero', traitHero);
        callback();
    },
    
    getUserDataProperty : async function(property, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", property],
            getValue = await this.dbController.getData(sequence);
        
        callback(getValue);
    },
    
    modifyUserDataProperty: async function(property, value, callback){
        if(typeof callback !== "function") callback = function(){};
        
        let sequence = ["userData", property];
            newValue = value;
        
        this.dbController.setData(sequence, newValue);
        game.user.userData[property] = newValue;
        
        if(DATABASE_LOCAL == true){
            let prop = ["star", "name", "candy", "token", "tutorialStep", "comic", "tutorialStepTimeAtk", "homeroomTutorial"];
            if(prop.includes(property)){
                localStorage.setItem(property, value);
            }
            else{
                localStorage.setItem(property, JSON.stringify(value));
            }
        }
        callback(newValue);
    },
    
    clearData : function(){
        for(let i in game.data.initUser.userData){
            let property = i;
            let data = game.data.initUser.userData[i];
            if(property != 'id' && property != 'name'){
                this.modifyUserDataProperty(property, data);
            }
        }
    }
});
//  End of user code  //
