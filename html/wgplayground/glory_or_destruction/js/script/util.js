// Put user code here //
me.pool.register("me.Font", me.Font, true);
me.pool.register("me.BitmapFont", me.BitmapFont, true);

game.util = {};

game.util.isPlayerSide = function(side){
    return side === 0;
};

game.util.getValidUserRace = function(isPlayerSide){
    return game.util.getValidRace(isPlayerSide, game.user.userData.race);
};

game.util.getValidRace = function(isPlayerSide, userRace){
    var race = userRace;
    if(!isPlayerSide){
        switch (race) {
            case game.enum.race.POLICE:
                race = game.enum.race.GANGSTER;
                break;
            case game.enum.race.GANGSTER:
                race = game.enum.race.POLICE;
                break;
        }
    }
    return race;
};

game.util.getValidUnitId = function(number, race, territory){
    let raceCode = game.util.getCodeRace(race),
        territoryCode = game.util.getCodeTerritory(territory),
        res = territoryCode + "U" + raceCode + number.toString().padStart(3, '0');
        
    return res;
};

game.util.getValidHeroId = function(number, race, territory){
    let raceCode = game.util.getCodeRace(race),
        territoryCode = game.util.getCodeTerritory(territory),
        res = territoryCode + "H" + raceCode + number.toString().padStart(3, '0');
        
    return res;
};

game.util.findInWorld = function(obj, validFunc){
    if(typeof validFunc === 'undefined') throw "validFunc is undefined.";
    if(typeof validFunc !== 'function') throw "validFunc variable is not a function.";
    
    var lst = [];
    var func = validFunc.bind(obj);
    
    me.game.world.children.forEach(function(child){
        if(func(child)){
            lst.push(child);
        }
    });
    return lst;
};

game.util.getUnitImageName = function(unitId){
    return `${unitId}_img`;
};

game.util.getBattleLayerRandom = function(baseLayer){
    var res = baseLayer + (Math.random() * LAYER_BATTLE_OFFSET);
    return res | 0;
};

// territory   : game.enum.territory
// race     : game.enum.race
// level    : number
// direction: game.enum.direction
game.util.getTowerId = function(race, territory, level){
    let reg = game.util.getCodeTerritory(territory),
        kind = "T",
        rac = game.util.getCodeRace(race),
        lvl = Math.ceil(level / 5).toString().padStart(3, '0');
    return reg + kind + rac + lvl;
};
// --

// headquarter util
game.util.getHqId = function(race, territory, level){
    let reg = game.util.getCodeTerritory(territory),
        kind = "B",
        rac = game.util.getCodeRace(race),
        lvl = level.toString().padStart(3, '0');
    return reg + kind + rac + lvl;
};

game.util.getBuildingid = function(race, bld, territory, level){
    let reg = game.util.getCodeTerritory(territory),
        bd = game.data.building[bld],
        rac = game.util.getCodeRace(race),
        lv = level.toString().padStart(3, '0');
    return reg + bd + rac + lv;
};
// --

game.util.isUnitId = function(id){
    return id && id[1] === 'U';
};

game.util.isHeroId = function(id){
    return id && id[1] === 'H';
};

game.util.isTowerId = function(id){
    return id && id[1] === 'T';
};

game.util.isHqId = function(id){
    return id && id[1] === 'B';
};

game.util.isEffectable = function(id){
    return !game.util.isBuilding(id) && !game.util.isVehicle(id) 
        && (game.util.isUnitId(id) || game.util.isHeroId(id));
};

game.util.isBuilding = function(id){
    return game.util.isTowerId(id) || game.util.isHqId(id);
};

game.util.isVehicle = function(id){
    return game.data.vehicle.indexOf !== -1;
};

game.util.getFullAnimationKeys = function(unitId){
    var keys = [];
    var animData = game.data.animation;
    for(var i = 0; i < animData.side.length; i++){
        for(var j = 0; j < animData.unit.length; j++){
            keys.push(unitId + "_" + animData.side[i] + "_" + animData.unit[j]);
        }
        var heroKeys = animData.hero[unitId];
        if(game.util.isHeroId(unitId) && typeof heroKeys !== 'undefined'){
            for(var k = 0; k < heroKeys.length; k++){
                keys.push(unitId + "_" + animData.side[i] + "_" + heroKeys[k]);
            }
        }
    }
    return keys;
};

// getAnimationKeys("ATP001", ["idle", {name: "dead", count: 2}])
game.util.getFullMotionList = function(id, motions){
    let keys = [],
        word = String(id),
        wordSlice = word.slice(0, 3);
        
    motions.forEach((motion) => {
        ANIMATION_SIDES.forEach((side) => {
            // if(wordSlice == "AUP" || wordSlice == "AHP"){
            //     if(id == "AUP003" || id == "AUP006" || id == "AUP007" || id == "AUP008"){
            //         if(typeof motion === "object"){
            //             let nm = game.util.getFullMotion(id, side, motion.name);
            //             keys.push({
            //                 name: nm,
            //                 count: motion.count
            //             });
            //         } else if(typeof motion === "string"){
            //             let nm = game.util.getFullMotion(id, side, motion);
            //             keys.push(nm);
            //         } else {
            //           throw `typeof motion ${motion} is not recognized.`;
            //         }
            //     }else{
            //         if(side == "front"){
            //             if(typeof motion === "object"){
            //                 let nm = game.util.getFullMotion(id, side, motion.name);
            //                 keys.push({
            //                     name: nm,
            //                     count: motion.count
            //                 });
            //             } else if(typeof motion === "string"){
            //                 let nm = game.util.getFullMotion(id, side, motion);
            //                 keys.push(nm);
            //             } else {
            //               throw `typeof motion ${motion} is not recognized.`;
            //             } 
            //         }
            //     }
            // }else{
               if(typeof motion === "object"){
                    let nm = game.util.getFullMotion(id, side, motion.name);
                    keys.push({
                        name: nm,
                        count: motion.count
                    });
                } else if(typeof motion === "string"){
                    let nm = game.util.getFullMotion(id, side, motion);
                    keys.push(nm);
                } else {
                  throw `typeof motion ${motion} is not recognized.`;
                } 
            // }
        });
    });
    return keys;
};

game.util.getFullMotion = function(id, side, motion){
    return `${id}_${side}_${motion}`;
};

game.util.getMultipackKey = function(key, idx){
    return key + '-' + idx;
};

game.util.getUnitSide = function(isPlayerSide){
    let idx = isPlayerSide ? 0 : 1;
    return ANIMATION_SIDES[idx];
};

// back or front
game.util.getBuildingSide = function(direction){
    let idx = 0;
    if(direction === game.enum.direction.NORTH 
    || direction === game.enum.direction.WEST){
        idx = 1;
    }
    return ANIMATION_SIDES[idx];
};

// left or right
game.util.getBuildingAngle = function(direction){
    let idx = 0;
    if(direction === game.enum.direction.NORTH 
    || direction === game.enum.direction.EAST){
        idx = 1;
    }
    return BUILDING_ANGLE[idx];
};

game.util.getCodeRace = function(race){
    switch(race){
        case game.enum.race.POLICE:
            return "P";
        case game.enum.race.GANGSTER:
            return "G";
    }
};

game.util.getCodeTerritory = function(territory){
    switch(territory){
        case game.enum.territory.AMERICA:
            return "A";
        case game.enum.territory.JAPAN:
            return "J";
    }
};

game.util.pauseGame = function(){
    me.state.pause(true);
    me.sys.pauseOnBlur = false;
    me.sys.resumeOnFocus = false;
};

game.util.resumeGame = function(){
    me.state.resume(true);
    me.sys.pauseOnBlur = true;
    me.sys.resumeOnFocus = true;
};

game.util.restartGame = function(){
    game.util.resumeGame();
    me.timer.setTimeout(()=>{
        me.state.change(game.state.temp, me.state.current().id);
        me.plugins.screenControl.start();
    }, 250);
};

game.util.backHome = function(){
    game.util.resumeGame();
    let array = ["A001", "A002", "A003", "A004", "A005", "A006", "A007"
    , "A008", "A009", "A010", "A011", "A012", "A013", "A014", "A015"
    , "A016", "A017", "A018", "A019", "A020", "A021", "A022", "A023"
    , "A024", "A025"];
    
    let level = localStorage.getItem("GoD.level.Now");
    
    for(let i=0;i<=24;i++){
        if(i >= 0 && i <= 14){
            if(level == array[i] || level == "B001"){
                me.state.change(game.state.campaign);
            } 
        } 
        
        if(i > 14 && i <= 24){
            if(level == array[i] || level == "B002"){
                me.state.change(game.state.campaign2);
            }
        }
    }
        
};

impose = function(obj, key, defaultVal){
    if(typeof obj[key] === "undefined"){
        if(typeof defaultVal === "undefined"){
            throw `This variable ${key} cannot be undefined inside ${obj}`;
        }
        obj[key] = defaultVal;
    }
};

game.util.spreadAll = function(obj, clone){
    for(var x in clone){
        obj[x] = clone[x];
    }
}

game.util.spread = function(obj, clone, keys){
    for(var x in clone){
        if(keys.includes(x)){
            obj[x] = clone[x];
        }
    }
}

game.util.spreadExcept = function(obj, clone, keys){
    for(var x in clone){
        if(!keys.includes(x)){
            obj[x] = clone[x];
        }
    }
}

game.util.checkExists = function(obj){
    let res = true;
    for(let i = 1; i < arguments.length; i++){
        let arg = arguments[i];
        if(!obj.hasOwnProperty(arg)){
            res = false;
        }
    }
    return res;
}

verify = function(obj, keys){
    keys.forEach(function(key){
        if(typeof obj[key] === "undefined"){
            throw `This object ${obj} must have variable ${key}`;
        }
    })
}

game.util.scale = function(obj, val){
    obj.currentTransform.translate(obj.pos.x, obj.pos.y);
    obj.scale(val, val);
    obj.currentTransform.translate(-obj.pos.x, -obj.pos.y);
    
    let bounds = obj.getBounds();
    obj.width = bounds.width;
    obj.height = bounds.height;
}

game.util.getDevicePlatform = function(){
    if(me.device.android)   return "android";
    else if(me.device.android2) return "android2";
    else if(me.device.iOS) return "iOS";
    else if(me.device.wp) return "windows phone";
    else if(me.device.BlackBerry) return "blackberry";
    else if(me.device.Kindle) return "kindle";
    else return "undefined";
}

// min include, max exclude
game.util.randomIntFromInterval = function(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

// return is array of "userData_hq_level"
game.util.objectToSequence = function(obj, arr = [], seq = ""){
	for(let prop in obj){
		let value = obj[prop];
        if(typeof value !== "object" || Array.isArray(value)
            || Object.entries(value).length === 0 && value.constructor === Object){
        	arr.push(seq + "_" + prop);
        }else{
        	let delimiter = (seq.length > 0) ? "_" : "";
        	seq += delimiter + prop;
            game.util.objectToSequence(value, arr, seq);
            seq = seq.replace(/^[^_]+$|_([a-zA-Z0-9]+)$/g, ""); // remove the last prop
        }
	}
    return arr;
}

// Function: createNestedObject( base, names[, value] )
//   base: the object on which to create the hierarchy
//   names: an array of strings contaning the names of the objects
//   value (optional): if given, will be the last object in the hierarchy
// Returns: the last object in the hierarchy
game.util.sequenceToObject = function( base, names, value ) {
    // If a value is given, remove the last name and keep it for later:
    let lastName = arguments.length === 3 ? names.pop() : false;

    // Walk the hierarchy, creating new objects where needed.
    // If the lastName was removed, then the last object is not set yet:
    for( let i = 0; i < names.length; i++ ) {
        base = base[ names[i] ] = base[ names[i] ] || {};
    }

    // If a value was given, set it to the last name:
    if( lastName ) base = base[ lastName ] = value;

    // Return the last object in the hierarchy:
    return base;
}

// name is "ABG001_back_left"
// count is 2
// return ["ABG001_back_left_0", "ABG001_back_left_1"]
game.util.createImageNameList = function(name, count){
    if(count === 1){
        return [name];
    }else{
        let arr = [];
        for(let i = 0; i < count; i++){
            arr.push(name + "_" + i);
        }
        return arr;
    }
}

game.util.populateAtlasIndices = function(texture, names){
    let atlas = [], atlasIndices = {},
        framewidth = 0, frameheight = 0;
        
    for (let i = 0; i < names.length; i++) {
        let region = texture.getRegion(names[i]);
        if (region == null) {
            // throw an error
            throw new me.video.renderer.Texture.Error(
                    "Texture - region for " + names[i] + " not found");
        }
        
        atlas[i] = region;
        atlasIndices[names[i]] = i;
        framewidth = Math.max(region.width, framewidth);
        frameheight = Math.max(region.height, frameheight);
    }
    
    return {
        framewidth, frameheight,
        atlas, atlasIndices
    };
}

game.util.createAnimIndex = function(arr, delay){
    let obj = [];
    delay = delay || DEFAULT_ANIMATION_SPEED;
    for(let i = 0; i < arr.length; i++){
        obj.push({name: arr[i], delay});
    }
    return obj;
}

game.util.gacha = function(src){
    var newdata = [];
    var balance = [];
        
       
        let target = game.util.cloneData(src);
        var i = 0;
  
        let values = Object.values(target);
        let total = values.reduce((acc, val) => acc + val);
        
        var cekdata = 0;
    
        for(i = 0; i < 5; i++){
            var chance =  Math.floor(Math.random()*total);
            for(let value in target){
                cekdata = cekdata + target[value];
                if(cekdata >= chance){
                    newdata.push(value);
                    delete target[value];
                    break;
                }
            }
       
            var randombalance = Math.floor(Math.random() * 10) + 1 ;
            balance.push(randombalance);
            // console.log(newdata)
        }
        
        return [newdata, balance];
}

game.util.cloneData = function(src){
       let data = {};
          for (let prop in src) {
            if (src.hasOwnProperty(prop)) {
              data[prop] = src[prop];
            }
          }
        return data;
}

game.util.randomSkin = function(src){
    let newdata = [];

    for (let data in src){
        newdata.push(data);
    }
    
    let randomType = newdata[(Math.random() * newdata.length) | 0];
    let arr = game.data.skin[randomType];
    var randomId = arr[(Math.random() * arr.length) | 0];
    
    return [randomId, randomType, randomId+"_"+randomType];
}

// totalTime in seconds
game.util.calculateAnimationSpeed = function(totalTime, frames){
    return totalTime * 1000 / frames;
}

game.util.checkTutorialStep = function(stepList){
    stepList = Array.isArray(stepList) ? stepList : [stepList];
    let res = false;
    for(let i = 0; i < stepList.length; i++){
        let step = stepList[i];
        res = game.controller.tutorial && game.controller.tutorial.step === step;
        if(res) break;
    }
    return res;
}

game.util.newCanvas = function(nameImg, posX, posY){
    var canvas = document.getElementById("BackgroundCanvas");
    if(!canvas) {
        canvas = document.createElement("CANVAS");
    }
    canvas.id = "BackgroundCanvas";
    canvas.width = 2340;
    canvas.height = 1080;
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.zIndex = -1;
    
    let ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    
    var base_image = new Image();
    base_image.src = './data/image/'+nameImg;
    base_image.onload = function(){
        ctx.drawImage(base_image, posX, posY);
    }
}
//  End of user code  //
