// Put user code here //
var TestDatabase = baseDatabase.extend({
    init: function(){
        
    },
    
    createDatabase: function(race, callback){
        let db = game.data.initUser;
        
        // populate db
        db.device.platform = "Test Database";
        db.device.os = game.util.getDevicePlatform();
        db.userData.race = race;
        localStorage.setItem("GoD.race", race);
        // --
        
        console.log("[TEST] database created.");
        callback();
    },
    
    loadDatabase: function(){
        console.log("[TEST DATABASE] load database");
        let db = game.data.initUser;
        
        if(DATABASE_TEST_FULL){

            //Data tidak berubah
                db.device.platform = "DEBUG";
                db.device.os = "Windows";
                db.troops.unitData = {
                    "AUP001": {level: 5},
                    "AUP002": {level: 5},
                    "AUP003": {level: 1},
                    "AUP004": {level: 5},
                    "AUP005": {level: 5},
                    "AUP006": {level: 1},
                    "AUP007": {level: 1},
                    "AUP008": {level: 1},
                    "AUP009": {level: 5},
                    "AUP010": {level: 5},
                    "AUP011": {level: 5},
                    "AUP012": {level: 5},
                    "AUP013": {level: 5},
                    "AUG001": {level: 5},
                    "AUG002": {level: 5},
                    "AUG003": {level: 1},
                    "AUG004": {level: 5},
                    "AUG005": {level: 5},
                    "AUG006": {level: 1},
                    "AUG007": {level: 1},
                    "AUG008": {level: 1},
                    "AUG009": {level: 5},
                    "AUG010": {level: 5},
                    "AUG011": {level: 5},
                    "AUG012": {level: 5},
                    "AUG013": {level: 5}
                };
                db.userData.name = "Player";
                db.userData.cekpointutorial = 1;
                db.userData.tutorial = 1;
                if(firstPlay == false){
                    db.userData.race = localStorage.getItem("GoD.race");
                }
                console.log(db.userData.race);
                if(db.userData.race == "police"){
                    db.userData.team.defend = ['AUP003', 'AUP008', 'AUP007'];
                    db.userData.team.unit = ['AUP001', 'AUP002', 'AUP011', 'AUP004', 'AUP013', 'AUP009'];
                    db.userData.team.hero = {id: "AHP001", skin: ""};
                }else{
                    db.userData.team.defend = ['AUG003', 'AUG008', 'AUG007'];
                    db.userData.team.unit = ['AUG001', 'AUG002', 'AUG011', 'AUG004', 'AUG013', 'AUG009'];
                    db.userData.team.hero = {id: "AHG001", skin: ""};
                }                    
            //
            
            // Data awalan
                db.device.lastlogin = new Date().getTime() / 1000;
                db.homebase = {
                    "Bank": {grade: 1, upgradetime: 0},
                    "Barrack": {grade: 5, upgradetime: 0},
                    "HomeBase": {grade: 1, upgradetime: 0},
                    "Research": {grade: 1, upgradetime: 0},
                    "StoneMill": {grade: 1, upgradetime: 0},
                    "Farm": {grade: 1, upgradetime: 0},
                    "LumberMill": {grade: 1, upgradetime: 0},
                    monument : ""
                };
            //
        }   
        
        return new Promise((resolve, reject) => {
            resolve(db);
        });
    
    },
    
    saveToDatabase: function(obj, callback){
        // console.log("[TEST DATABASE] success save to database, this is the object that you save");
        // console.log(obj);
    },
    
    getData: function(sequence){
        let res = game.user;
        // console.log(res);
        for(let i = 0; i < sequence.length; i++){
            if(res != null) res = res[sequence[i]];
        }
        return new Promise((resolve, reject) => {
            resolve(res);
        });
    },
    
    setData: function(sequence, value){
        // success set data
        let res = game.data.initUser;
        for(let i = 0; i < sequence.length; i++){
            let temp = res[sequence[i]];
            if(typeof temp === "undefined"){
                res = value;
                break;
            }
            res = temp;
        }
        return res;
    }
});
//  End of user code  //
