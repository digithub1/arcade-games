// Put user code here //
var testDatabase = baseDatabase.extend({
    init: function(){
        
    },
    
    createDatabase: function(callback){
        if(typeof callback !== "function") callback = function(){};
        console.log(game.data.initUser);
        let db = game.data.initUser;
        
        // populate db
        db.device.platform = "Test Database";
        db.device.os = game.util.getDevicePlatform();
        // --
        
        console.log("[TEST] database created.");
        callback();
    },
    
    loadDatabase: function(id, name){
        let db = game.data.initUser;
        db.userData.id = id;
        db.userData.name = name;
        
        if(DATABASE_TEST_FULL){
            db.device.platform = "DEBUG";
	        db.device.os = "Windows";
	        db.device.lastlogin = 0;
	        db.device.deviceid = "001";
	        db.device.waitingTimeEnergy = 0;
	        
	        db.userData.star = 0;
	        db.userData.name = "User001";
	        db.userData.candy = 0;
	        db.userData.token = 0;
	        db.userData.tutorialStep = 0;
	        db.userData.comic = "finished",
	        db.userData.tutorialStepTimeAtk = 0;
	        db.userData.timeAtkProgress = [];
	        db.userData.campaignProgress = {stage : 1, wave : 1, timer : 0, startPlay : 0}; 
	        db.userData.unlockHero = [];
	        db.userData.hiredHero = {};
	        db.userData.traitHero = {};
            db.userData.timeAtkHero = {};
	        db.userData.enemyCampaign = [];
	        db.userData.item = {};
	        db.userData.nerdItem = {};
	        db.userData.labItem = {};
	        db.userData.heroSkin = {};
	        db.userData.cafeTimer = {};
	        db.userData.homeroom = {};
	        db.userData.homeroomTutorial = false;
	        db.userData.achievementProgress = {};
	        db.userData.achievementClaim = [];
	        db.userData.unlockLibraryHero = [];
	        db.userData.unlockLibraryEnemy = [];
	        db.userData.nerdItem = {};
        }
        
        if(DATABASE_LOCAL){
            console.log(localStorage.getItem("comic"));
            if(localStorage.getItem("star") == null){}else{db.userData.star = 
            JSON.parse(localStorage.getItem("star"))}
            if(localStorage.getItem("name") == null){}else{db.userData.name = 
            JSON.parse(localStorage.getItem("name"))}
            if(localStorage.getItem("candy") == null){}else{db.userData.candy = 
             JSON.parse(localStorage.getItem("candy"))}
            if(localStorage.getItem("token") == null){}else{db.userData.token = 
            JSON.parse(localStorage.getItem("token"))}
            if(localStorage.getItem("tutorialStep") == null){}else{db.userData.tutorialStep = 
            JSON.parse(localStorage.getItem("tutorialStep"))}
            if(localStorage.getItem("comic") == null){}else{db.userData.comic = 
            localStorage.getItem("comic")}
            if(localStorage.getItem("tutorialStepTimeAtk") == null){}else{db.userData.tutorialStepTimeAtk = 
            JSON.parse(localStorage.getItem("tutorialStepTimeAtk"))}
            if(localStorage.getItem("timeAtkProgress") == null){}else{db.userData.timeAtkProgress = 
            JSON.parse(localStorage.getItem("timeAtkProgress"))}
            if(localStorage.getItem("campaignProgress") == null){}else{db.userData.campaignProgress = 
            JSON.parse(localStorage.getItem("campaignProgress"))}
            if(localStorage.getItem("unlockHero") == null){}else{db.userData.unlockHero = 
            JSON.parse(localStorage.getItem("unlockHero"))}
            if(localStorage.getItem("hiredHero") == null){}else{db.userData.hiredHero = 
            JSON.parse(localStorage.getItem("hiredHero"))}
            if(localStorage.getItem("traitHero") == null){}else{db.userData.traitHero = 
            JSON.parse(localStorage.getItem("traitHero"))}
            if(localStorage.getItem("timeAtkHero") == null){}else{db.userData.timeAtkHero = 
            JSON.parse(localStorage.getItem("timeAtkHero"))}
            if(localStorage.getItem("enemyCampaign") == null){}else{db.userData.enemyCampaign = 
            JSON.parse(localStorage.getItem("enemyCampaign"))}
            if(localStorage.getItem("item") == null){}else{db.userData.item = 
            JSON.parse(localStorage.getItem("item"))}
            if(localStorage.getItem("nerdItem") == null){}else{db.userData.nerdItem = 
            JSON.parse(localStorage.getItem("nerdItem"))}
            if(localStorage.getItem("labItem") == null){}else{db.userData.labItem = 
            JSON.parse(localStorage.getItem("labItem"))}
            if(localStorage.getItem("heroSkin") == null){}else{db.userData.heroSkin = 
            JSON.parse(localStorage.getItem("heroSkin"))}
            if(localStorage.getItem("cafeTimer") == null){}else{db.userData.cafeTimer = 
            JSON.parse(localStorage.getItem("cafeTimer"))}
            if(localStorage.getItem("homeroom") == null){}else{db.userData.homeroom = 
            JSON.parse(localStorage.getItem("homeroom"))}
            if(localStorage.getItem("homeroomTutorial") == null){}else{db.userData.homeroomTutorial = 
            JSON.parse(localStorage.getItem("homeroomTutorial"))}
            if(localStorage.getItem("achievementProgress") == null){}else{db.userData.achievementProgress = 
            JSON.parse(localStorage.getItem("achievementProgress"))}
            if(localStorage.getItem("achievementClaim") == null){}else{db.userData.achievementClaim = 
            JSON.parse(localStorage.getItem("achievementClaim"))}
            if(localStorage.getItem("unlockLibraryHero") == null){}else{db.userData.unlockLibraryHero = 
            JSON.parse(localStorage.getItem("unlockLibraryHero"))}
            if(localStorage.getItem("unlockLibraryEnemy") == null){}else{db.userData.unlockLibraryEnemy = 
            JSON.parse(localStorage.getItem("unlockLibraryEnemy"))}
            if(localStorage.getItem("nerdItem") == null){}else{db.userData.nerdItem = 
            JSON.parse(localStorage.getItem("nerdItem"))}
        }
            
        console.log(db);
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
    
    getUserData : function(){
        return game.data.initUser.userData;
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
