(function () {

    var node = ['sequence', 'fallback'];

    Behaviour = me.plugin.Base.extend(
    {
        init: function (classObject) {
            // call the constructor
            this._super(me.plugin.Base, "init");
        },

        convertJSONString: function(string) {
            //replace node behaviour to type JSON
            var new_string = string;
            new_string = new_string.replace(/\s+$/, '');
            for(var a = 0; a < node.length; a++) {
                var re = new RegExp('@'+node[a], 'g');
                new_string = new_string.replace(re, '{type: '+node[a]);
            }

            //component convert to json
            new_string = new_string.replace(/\s+\n|\n/g, ',\n');
            new_string = new_string.replace(/\s\s+/g, ' ');
            new_string += ','
            new_string = new_string.replace(/{,/g, ',\nchildren :[');
            new_string = new_string.replace(/},/g, ']},');
            new_string = new_string.replace(/,\s*]/g, ']');
            new_string = new_string.substring(0, new_string.length-1);

            //get function with parameter
            var new_stringLine;
            var stringLine = string.split('\n').map(function(item) {
                var reWhiteSpace = new RegExp('/\s/g');
                var item = item.trim();
                if(item.indexOf(' ') > 0)
                    return item;
            });
            stringLine = stringLine.filter((item, pos) => { return item !== undefined; })[0]
            if(stringLine == undefined)
                stringLine = '';
            new_stringLine = stringLine.replace(/\"/g, "'");

            //find all word replace ""
            var words = new_string.match(/\b(\w+)\b/g);
            words = words.filter((item, pos) => { return words.indexOf(item) == pos; })

            for(var a = 0; a < words.length; a++) {
                var re = new RegExp(words[a], 'g');
                if(stringLine.indexOf(words[a]) == -1)
                    new_string = new_string.replace(re, '"'+words[a]+'"')
            }

            //replace function with parameter JSON
            if(stringLine != '')
               new_string = new_string.replace(stringLine, '"'+new_stringLine+'"');
            new_string = convertStringFunctoObj(JSON.parse(new_string).children, new_string);

            return JSON.parse(new_string);
        },

        executeBehaviour: function(string, classObject) {
            var json_string = this.convertJSONString(string);
            return behaviourOptionJSON(json_string, classObject)
        },
        
        executeJsonBehaviour: function(json, classObject) {
            return behaviourOptionJSON(json, classObject);
        }
    });

    /******    STRING     ******/


    function convertStringFunctoObj(json, parentjson, same_word = []) {
        for(var a = 0; a < json.length; a++) {
            if(typeof json[a] == 'object') {
                parentjson = convertStringFunctoObj(json[a].children, parentjson, same_word);
            } else if(typeof json[a]  == 'string'){
                var func, parameter, param = '';
                func = json[a];

                // create parameter function JSON
                if(json[a].indexOf(' ') > 0) {
                    parameter = json[a].split(' ');
                    func = parameter[0];
                    parameter.splice(0, 1);

                    param += ', "params": [';
                    for(var b = 0; b < parameter.length; b++) {
                        var is_static = true;

                        if(parameter[b].indexOf('@') >= 0) {
                            is_static = false;
                            parameter[b] = '"' + parameter[b] + '"';
                            parameter[b] = parameter[b].replace(/\@/g, '');
                        }

                        parameter[b] = parameter[b].replace(/\'/g, '"');
                        param += '{"isStatic": '+is_static+', "value": '+parameter[b]+'}';
                        if(b != parameter.length - 1) param += ',';
                    }
                    param += ']';
                }

                // create function JSON
                if(same_word.indexOf(json[a]) == -1) {
                    var re = new RegExp('"'+json[a]+'"', 'g');
                    parentjson = parentjson.replace(re, '{"function": "'+func+'"'+param+'}')
                }
                same_word.push(json[a]);
            }
        }

        return parentjson;
    }
    /******    STRING     ******/



    /******    JSON     ******/
    function behaviourOptionJSON(json, classObject) {
        if(json.type.toLowerCase() == 'sequence') {
            bool_return = sequenceJSON(json.children, classObject);
            return bool_return;
        } else if(json.type.toLowerCase() == 'fallback') {
            bool_return = fallbackJSON(json.children, classObject);
            return bool_return;
        }
    }

    function sequenceJSON(child, classObject) {
        var bool_return = true;

        for(var a = 0; a < child.length; a++) {
            if(child[a].type) {
                bool_return = behaviourOptionJSON(child[a], classObject);
            } else if(child[a].function) {
                var paremeter = getParameterFromJson(child[a].params, classObject)
                var func = classObject[child[a].function];
                if(typeof func == 'function')
                    bool_return = func.call(classObject, ...paremeter);
                else {
                    throw `${child[a].function} is not a function`;
                }
            }

            if(!bool_return)
                return false;
        }

        return true;
    }

    function fallbackJSON(child, classObject) {
        var bool_return = false;
        
        for(var a = 0; a < child.length; a++) {
            if(child[a].type) {
                bool_return = behaviourOptionJSON(child[a], classObject);
            } else if(child[a].function) {
                var paremeter = getParameterFromJson(child[a].params, classObject)
                var func = classObject[child[a].function];
                if(typeof func == 'function')
                    bool_return = func.call(classObject, ...paremeter);
                else {
                    throw `${child[a].function} is not a function`;
                }
            }

            if(bool_return)
                return true;
        }

        return false;
    }

    function getParameterFromJson(params, classObject) {
        params = (params) ? params : [];

        var parameter = params.map(param => {
            if(param.isStatic == true) {
                return param.value;
            } else {
                return classObject[param.value]
            }
        })

        return parameter;
    }
    /******    JSON     ******/
    
    me.device.onReady(function(){
    // window.onReady(function () {
        me.plugin.register(Behaviour, "Behaviour")
        // me.utils.function.defer(me.plugin.register, null, Behaviour, "Behaviour");
    });
})();




/******    NEW ALGORITHM WITH ASYNC    ******/
// (function () {

//     var node = ['sequence', 'fallback'];

//     Behaviour = me.plugin.Base.extend(
//     {
//         init: function (classObject) {
//             // call the constructor
//             this._super(me.plugin.Base, "init");
//         },

//         convertJSONString: function(string) {
//             //replace node behaviour to type JSON
//             var new_string = string;
//             new_string = new_string.replace(/\s+$/, '');
//             for(var a = 0; a < node.length; a++) {
//                 var re = new RegExp('@'+node[a]+'\\s*{+', 'g');

//                 string = string.replace(re, '@'+node[a]+'{');
//                 new_string = new_string.replace(re, '{type: '+node[a]+'{');
//             }

//             //search error
//             searchError(string);

//             //component convert to json
//             new_string = new_string.replace(/\s+\n|\n/g, ',\n');
//             new_string = new_string.replace(/\s\s+/g, ' ');
//             new_string += ','
//             new_string = new_string.replace(/{,/g, ',\nchildren :[');
//             new_string = new_string.replace(/},/g, ']},');
//             new_string = new_string.replace(/,\s*]/g, ']');
//             new_string = new_string.substring(0, new_string.length-1);

//             //get function with parameter
//             var new_stringLine = [];
//             var stringLine = string.split('\n').map(function(item) {
//                 var reWhiteSpace = new RegExp('/\s/g');
//                 var item = item.trim();
//                 if(item.indexOf(' ') > 0)
//                     return item;
//             });
//             stringLine = stringLine.filter((item, pos) => { 
//                 if(item !== undefined) {
//                     var parameter = item.split(" ");
//                     for(var a = 1; a < parameter.length; a++) {
//                         if(!parseInt(parameter[a]) && parameter[a] != 'true' && parameter[a] != 'false' && parameter[a].indexOf('@') == -1) {
//                             // throw error where parameter function invalid
//                             if((/^".*"$/).test(parameter[a]) == false)
//                                 throw `${item} is something wrong! Please check Again`;
//                         }
//                     }
//                 }
//                 return item !== undefined; 
//             })
//             for(var a = 0; a < stringLine.length; a++)
//                 new_stringLine.push(stringLine[a].replace(/\"/g, "'"));

//             //find all word replace quote("")
//             var words = new_string.match(/\b(\w+)\b/g);
//             words = words.filter((item, pos) => { return words.indexOf(item) == pos; })

//             for(var a = 0; a < words.length; a++) {

//                 var re = new RegExp(words[a]+'(?!\\w)', 'g');
//                 // var re = new RegExp(words[a], 'g');
//                 var update = true;

//                 for(var b = 0; b < stringLine.length; b++) {
//                     if(stringLine[b].indexOf(words[a]) >= 0) {
//                         update = false;
//                     }
//                 }

//                 if(update == true) {
//                     new_string = new_string.replace(re, '"'+words[a]+'"')
//                 }
//             }

//             //replace function with parameter JSON
//             stringLine = stringLine.filter((item, pos) => { return stringLine.indexOf(item) == pos; })
//             new_stringLine = new_stringLine.filter((item, pos) => { return new_stringLine.indexOf(item) == pos; })   
//             for(var a = 0; a < stringLine.length; a++) {
//                 var regex = new RegExp(stringLine[a], 'g');
//                 new_string = new_string.replace(regex, '"'+new_stringLine[a]+'"');
//             }

//             new_string = convertStringFunctoObj(JSON.parse(new_string).children, new_string);

//             return JSON.parse(new_string);
//         },

//         executeBehaviour: function(string, classObject) {
//             var json_string = this.convertJSONString(string);
//             var prom = Promise.resolve();

//             return new Promise((resolve,reject) => {
//                 recursiveStep(json_string, classObject, prom, json_string.type)
//                 .then(returnVal => {
//                     console.log(returnVal)
//                     resolve(returnVal.value);
//                 })
//             })
//         },
        
//         executeJsonBehaviour: function(json, classObject) {
//             var prom = Promise.resolve();

//             return new Promise((resolve,reject) => {
//                 recursiveStep(json, classObject, prom, json.type)
//                 .then(returnVal => {
//                     console.log(returnVal)
//                     resolve(returnVal.value);
//                 })
//             })
//         }
//     });

//     /******    STRING     ******/
//     function convertStringFunctoObj(json, parentjson, same_word = []) {
//         for(var a = 0; a < json.length; a++) {
//             if(typeof json[a] == 'object') {
//                 parentjson = convertStringFunctoObj(json[a].children, parentjson, same_word);
//             } else if(typeof json[a]  == 'string'){
//                 var func, parameter, param = '';
//                 func = json[a];

//                 // create parameter function JSON
//                 if(json[a].indexOf(' ') > 0) {
//                     parameter = json[a].split(' ');
//                     func = parameter[0];
//                     parameter.splice(0, 1);

//                     param += ', "params": [';
//                     for(var b = 0; b < parameter.length; b++) {
//                         var is_static = true;

//                         if(parameter[b].indexOf('@') >= 0) {
//                             is_static = false;
//                             parameter[b] = '"' + parameter[b] + '"';
//                             parameter[b] = parameter[b].replace(/\@/g, '');
//                         }

//                         parameter[b] = parameter[b].replace(/\'/g, '"');
//                         param += '{"isStatic": '+is_static+', "value": '+parameter[b]+'}';
//                         if(b != parameter.length - 1) param += ',';
//                     }
//                     param += ']';
//                 }

//                 // create function JSON
//                 if(same_word.indexOf(json[a]) == -1) {
//                     var re = new RegExp('"'+json[a]+'"', 'g');
//                     parentjson = parentjson.replace(re, '{"function": "'+func+'"'+param+'}')
//                 }
//                 same_word.push(json[a]);
//             }
//         }

//         return parentjson;
//     }
//     /******    STRING     ******/



//     /******    JSON     ******/
//     function recursiveStep(json, classObject, prom, type) {
//         return new Promise((resolve, reject) => {
//             var canContinue = true;
//             json = json.children;

//             for(let a = 0; a < json.length; a++){
//                 if(json[a].type) {
//                     prom = recursiveStep(json[a], classObject, prom, json[a].type).then(returnVal => {
//                         canContinue = (typeof returnVal == "object") ? returnVal.next : behaviourOption(type, returnVal).next;
//                         var obj = (typeof returnVal == "object") ? behaviourOption(type, returnVal.value) : behaviourOption(type, returnVal);

//                         console.log(canContinue, returnVal, type, obj)
//                         return obj;
//                     });
//                 } else if(json[a].function) {
//                     prom = prom.then(returnVal => {
//                         canContinue = (typeof returnVal == "object") ? returnVal.next : behaviourOption(type, returnVal).next;
//                         if(returnVal == undefined/* || a == 0*/)
//                             canContinue = true;

//                         console.log(json[a].function, returnVal)
//                         console.log(canContinue, behaviourOption(type, returnVal), type)
//                         if(canContinue == true) {
//                             var paremeter = getParameterFromJson(json[a].params, classObject)
//                             var func = classObject[json[a].function];

//                             if(typeof func != 'function') {
//                                 throw `${json[a].function} is not a function`;
//                                 return;
//                             }

//                             callFunc = func.call(classObject, ...paremeter);
//                             if(callFunc instanceof Promise){
//                                 return callFunc.then(returnVal => {
//                                     obj = behaviourOption(type, returnVal);
//                                     console.log("return func: "+JSON.stringify(obj))
//                                     return Promise.resolve(obj);
//                                 });
//                             } else {
//                                 return Promise.resolve(callFunc);
//                             }
//                         } else {
//                             console.log("not Continue")
//                             var valueRet = (typeof returnVal == "object") ? returnVal : behaviourOption(type, returnVal);
//                             return Promise.resolve(valueRet);
//                         }
//                     })
//                 }
//             }

//             prom.then(returnVal => {
//                 // console.log(bool_return, returnVal)
//                 resolve(returnVal);
//             })
//         })
//     }

//     function behaviourOption(type, ret_val) {
//         var result;
//         if(type == 'sequence') {
//             result = {next: ret_val, value: (!ret_val) ? false : true};
//         } else if(type == 'fallback') {
//             result = {next: !ret_val, value: (ret_val) ? true : false};
//         }

//         return result;
//     }

//     function sequenceJSON(child, classObject) {
//         var bool_return = true;

//         for(var a = 0; a < child.length; a++) {
//             if(child[a].type) {
//                 bool_return = behaviourOptionJSON(child[a], classObject);
//             } else if(child[a].function) {
//                 var paremeter = getParameterFromJson(child[a].params, classObject)
//                 var func = classObject[child[a].function];
//                 if(typeof func == 'function')
//                     bool_return = func.call(classObject, ...paremeter);
//                 else {
//                     throw `${child[a].function} is not a function`;
//                 }
//             }

//             if(!bool_return)
//                 return false;
//         }

//         return true;
//     }

//     function fallbackJSON(child, classObject) {
//         var bool_return = false;
        
//         for(var a = 0; a < child.length; a++) {
//             if(child[a].type) {
//                 bool_return = behaviourOptionJSON(child[a], classObject);
//             } else if(child[a].function) {
//                 var paremeter = getParameterFromJson(child[a].params, classObject)
//                 var func = classObject[child[a].function];
//                 if(typeof func == 'function')
//                     bool_return = func.call(classObject, ...paremeter);
//                 else {
//                     throw `${child[a].function} is not a function`;
//                 }
//             }

//             if(bool_return)
//                 return true;
//         }

//         return false;
//     }

//     function getParameterFromJson(params, classObject) {
//         params = (params) ? params : [];

//         var parameter = params.map(param => {
//             if(param.isStatic == true) {
//                 return param.value;
//             } else {
//                 return classObject[param.value]
//             }
//         })

//         return parameter;
//     }
//     /******    JSON     ******/

//     function searchError(string) {
//         for(var a = 0; a < node.length; a++) {
//             var regNoBrac = new RegExp('@'+node[a]+'\\s*(?!\\w|{)', 'g');
//             var regEndBrac = new RegExp('@'+node[a]+'\\s*{+}', 'g');
//             var error_regex = regNoBrac.exec(string);
//             error_regex = (error_regex) ? error_regex : regEndBrac.exec(string);

//             if(error_regex) 
//                 throw `${'@'+node[a]} does not exist token { at position ${error_regex.index + ('@'+node[a]).length}`;


//         }
//     }
    
//     me.device.onReady(function(){
//     // window.onReady(function () {
//         me.plugin.register(Behaviour, "Behaviour")
//         // me.utils.function.defer(me.plugin.register, null, Behaviour, "Behaviour");
//     });
// })();
/******    NEW ALGORITHM WITH ASYNC    ******/