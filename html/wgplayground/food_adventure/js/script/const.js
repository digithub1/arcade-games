// Put user code here //
var TIME = 10000;
var HIGHSCORE = 0;
var BGM = true;
var SFX = true;
const gakAdaADS = false;
const localSave = true;
const NO_PLATE = ["F005","F006","F009", "F012", "F013", "F017", "F020", "F021", "F024", "F026", "F028", "F032", 
        "F033", "F034", "F036", "F037", "F041", "F046", "F049", "F051", "F055", "F057", "F059", "F064"];
const OFFSET =  function(id){
        switch(id){
            case  "F000":
                return {x : 0, y : -5};
            case  "F001":
                return {x : 0, y : -80};   
            case  "F002":
                return {x : 0, y : -90};
            case  "F003":
                return {x : 0, y : -80};   
            case  "F004":
                return {x : 0, y : 0};
            case  "F005":
                return {x : 0, y : -40};   
            case  "F006":
                return {x : 0, y : -20};
            case  "F007":
                return {x : 0, y :-40};   
            case  "F008":
                return {x : 0, y : -85};
            case  "F009":
                return {x : 0, y : 10};   
            case  "F010":
                return {x : 0, y : -35};
            case  "F011":
                return {x : 0, y : -3};
            case  "F012":
                return {x : 0, y : -25};   
            case  "F013":
                return {x : 0, y : -10};
            case  "F014":
                return {x : 5, y : -25};
            case  "F015":
                return {x : 0, y : -60};
            case  "F016":
                return {x : -10, y : -150};   
            case  "F017":
                return {x : 0, y : -4};
            case  "F018":
                return {x : 2.5, y : 0}; 
            case  "F019":
                return {x : -35, y : -100};
            case  "F020":
                return {x : -3, y : -8};   
            case  "F021":
                return {x : 0, y : 40};
            case  "F022":
                return {x : 5, y : 50}; 
            case  "F023":
                return {x : -30, y : -110};
            case  "F024":
                return {x : 0, y : -5};   
            case  "F025":
                return {x : 0, y : -150};
            case  "F026":
                return {x : 0, y : -5}; 
            case  "F027":
                return {x : 5, y : -100};//-8};
            case  "F028":
                return {x : 0, y : 40};   
            case  "F029":
                return {x : 0, y : -80};
            case  "F030":
                return {x : 2, y : -50}; 
            case  "F031":
                return {x : 0, y : 40};
            case  "F032":
                return {x : 0, y : 20};   
            case  "F033":
                return {x : 0, y : 0};
            case  "F034":
                return {x : 0, y : -2}; 
            case  "F035":
                return {x : -5, y : -140};
            case  "F036":
                return {x : 0, y : 10};   
            case  "F037":
                return {x : 0, y : 2};
            case  "F038":
                return {x : 2, y : -90}; 
            case  "F039":
                return {x : 0, y : -80};
            case  "F040":
                return {x : 0, y : 20};   
            case  "F041":
                return {x : 0, y : -10};
            case  "F042":
                return {x : 0, y : -10}; 
            case  "F043":
                return {x : 0, y : 3};
            case  "F044":
                return {x : 3, y : -17};   
            case  "F045":
                return {x : 0, y : -15};
            case  "F046":
                return {x : 0, y : -7.5}; 
            case  "F047":
                return {x : 1.5, y : 20};
            case  "F048":
                return {x : 0, y : -80};   
            case  "F049":
                return {x : 0, y : -5};
            case  "F050":
                return {x : 0, y : -80}; 
            case  "F051":
                return {x : 0, y : -15};
            case  "F052":
                return {x : 3, y : 60};   
            case  "F053":
                return {x : 0, y : 10};
            case  "F054":
                return {x : 2, y : -270}; 
            case  "F055":
                return {x : 0, y : 40}; 
            case  "F056":
                return {x : 0, y : 30}; 
            case  "F057":
                return {x : 0, y : 30}; 
            case  "F058":
                return {x : 0, y : -25}; 
            case  "F059":
                return {x : 0, y : 15};
            case  "F060":
                return {x : 0, y : -48}; 
            case  "F061":
                return {x : 0, y : -2}; 
            case  "F062":
                return {x : 5, y : 55};
            case  "F063":
                return {x : 0, y : -110};
            case  "F064":
                return {x : 0, y : 10};   
            case  "F065":
                return {x : 0, y : 40};
            case  "F066":
                return {x : 0, y : 25}; 
            case  "F067":
                return {x : 2, y : 30}; 
            case  "F068":
                return {x : 0, y : 60}; 
            case  "F069":
                return {x : 0, y : 10}; 
            case  "F070":
                return {x : 0, y : -20}; 
            case  "F071":
                return {x : 0, y : 40};
            case  "F072":
                return {x : 0, y : 50}; 
            case  "F073":
                return {x : 0, y : 57}; 
            case  "F074":
                return {x : 0, y : 45};
            case  "F075":
                return {x : 0, y : 47}; 
            case  "F076":
                return {x : 0, y : 45}; 
            case  "F077":
                return {x : 0, y : 50};
            case  "F078":
                return {x : 0, y : 54};  
        }
        
        return {x : 0, y : 0};
};
//  End of user code  //
