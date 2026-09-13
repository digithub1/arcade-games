game.TitleScreen = me.Stage.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        if(localStorage.getItem('1000StartUp.AllData') == undefined){
            localStorage.setItem('1000StartUp.AllData', JSON.stringify(game.data));
        }else{
            game.data = JSON.parse(localStorage.getItem('1000StartUp.AllData'));
        }

        if(me.state.isPaused()) me.state.resume(true);

        this.bg = new me.ColorLayer('background', 'rgba(0, 51, 82, 1)');
        me.game.world.addChild(this.bg, 1);

        this.btnSelect = me.pool.pull("button", me.video.renderer.getWidth()/2, me.video.renderer.getHeight() - 150, 252, 248, "button select midlle", function(){
            me.state.change(me.state.PLAY);
        });
        me.game.world.addChild(this.btnSelect, 2);

        this.btnSelectLeft = me.pool.pull("button", me.video.renderer.getWidth()/2 - 145, me.video.renderer.getHeight()/2 + 220, 58, 70, 'button select left', function(){
            var _this = this;
            game.arrChar -= 1;
            _this.change_char(game.arrChar, 'left');
            if(game.arrChar == 0) game.arrChar = 4;
        }.bind(this));
        me.game.world.addChild(this.btnSelectLeft, 3);

        this.btnSelectRight = me.pool.pull("button", me.video.renderer.getWidth()/2 + 145, me.video.renderer.getHeight()/2 + 220, 58, 70, 'button select right', function(){
            var _this = this;
            game.arrChar += 1;
            _this.change_char(game.arrChar, 'right');
            if(game.arrChar == 6) game.arrChar = 2;
        }.bind(this));
        me.game.world.addChild(this.btnSelectRight, 3);

        // eror disini
        this.charSelection = new me.Sprite(me.video.renderer.getWidth()/2 + this.fixedPostitionX(), me.video.renderer.getHeight()/2 + 135 + this.fixedPostitionY(),{framewidth:170, frameheight:310, image:'stand_'+game.char});
        me.game.world.addChild(this.charSelection, 4);

        this.shadow = new me.Sprite(me.video.renderer.getWidth()/2, me.video.renderer.getHeight()/2 + 290, {framewidth: 120, frameheight: 36, image: game.texture.assets2, region: 'bayangan orang'});
        me.game.world.addChild(this.shadow, 3);

        this.lampu = new me.Sprite(me.video.renderer.getWidth()/2 + 140, me.video.renderer.getHeight()/2 - 20, {framewidth: 162, frameheight: 240, image: game.texture.assets2, region: 'lampu'});
        me.game.world.addChild(this.lampu, 2);

        // this.judul =  new game.HUD.TextLogo("MADE BY UNICORN", me.game.viewport.width/2 + 15, 100, 100, 100, 1, "font-putih-export");
        // me.game.world.addChild(this.judul, 6);

        this.judul2 =  new game.HUD.Text("1000", me.game.viewport.width/2 - 130/*170*/, me.game.viewport.height/2 - 480/*140*/, 100, 100, 2.2, "font-merah-export");
        me.game.world.addChild(this.judul2, 6);

        this.judul3 =  new game.HUD.Text("START-UPS", me.game.viewport.width/2 - 125, me.game.viewport.height/2 - 300, 100, 100, 1.6, "font-putih-export");
        me.game.world.addChild(this.judul3, 6);

        this.textSelect = new game.HUD.Text("SELECT", me.game.viewport.width/2, me.game.viewport.height - 110, 200, 150, 1.3, "font-putih-export");
        me.game.world.addChild(this.textSelect, 6);
    },

    change_char: function(i, arrow){
        this.allLocked = ['locked_hipster', 'locked_mark', 'locked_steve', 'stand_salaryman','locked_hipster', 'locked_mark', 'locked_steve'];

        if(this.allLocked[i] == 'locked_steve' && arrow == 'left'){ 

            var charUnlock = game.data.unlock;
            //console.log(game.data.unlock);

            //find index from array
            var a = charUnlock.indexOf("steve");
            //console.log(a);

            game.char = (a >= 0 ) ? "steve" : null;
 
            var images = (a >= 0) ? "stand_steve" : this.allLocked[i];

            var offsetX = (a >= 0) ? 20 : 0;

            var offsetY = (a >= 0) ? 10 : 0; 

            game.offsetY = offsetY - 5;  

            game.offsetX = offsetX + 10;     

            var removeChar = (me.game.world.hasChild(this.charSelection)) ? me.game.world.removeChild(this.charSelection) : me.game.world.removeChild(this.standSalaryman);
            
            this.locked_steve = new me.Sprite(me.video.renderer.getWidth()/2 - 5 - offsetX, me.video.renderer.getHeight()/2 + 140 + offsetY, {image: images});
            me.game.world.addChild(this.locked_steve, 4);

        }else if(this.allLocked[i] == 'locked_mark' && arrow == 'left'){

            var charUnlock = game.data.unlock;
            //console.log(game.data.unlock);
            var a = charUnlock.indexOf("mark");
            //console.log(a);
            game.char = (a >= 0 ) ? "mark" : null;

            var images = (a >= 0) ? "stand_mark" : this.allLocked[i];

            var offsetX = (a >= 0) ? 24 : 0;

            var offsetY = (a >= 0) ? 10 : 0;

            game.offsetY = offsetY - 4;  

            game.offsetX = offsetX - 40;   

            var removeChar = (me.game.world.hasChild(this.charSelection)) ? me.game.world.removeChild(this.charSelection) : me.game.world.removeChild(this.locked_steve);

            this.locked_mark = new me.Sprite(me.video.renderer.getWidth()/2 - 5 + offsetX, me.video.renderer.getHeight()/2 + 140 + offsetY, {image: images});
            me.game.world.addChild(this.locked_mark, 4);

        }else if(this.allLocked[i] == 'locked_hipster' && arrow == 'left'){

            var charUnlock = game.data.unlock;
            //console.log(game.data.unlock);
            var a = charUnlock.indexOf("hipster");
            //console.log(a); 
            game.char = (a >= 0 ) ? "hipster" : null;

            var images = (a >= 0) ? "stand_hipster" : this.allLocked[i];

            var offsetX = (a >= 0) ? 10 : 0;

            var offsetY = (a >= 0) ? 5 : 0;

            game.offsetY = offsetY;  

            game.offsetX = offsetX;    

            var removeChar = (me.game.world.hasChild(this.charSelection)) ? me.game.world.removeChild(this.charSelection) : me.game.world.removeChild(this.locked_mark);

            this.locked_hipster = new me.Sprite(me.video.renderer.getWidth()/2 - 5 - offsetX, me.video.renderer.getHeight()/2 + 140 - offsetY, {image: images});
            me.game.world.addChild(this.locked_hipster, 4);

        }else if(this.allLocked[i] == 'stand_salaryman' && arrow == 'left'){

            game.char = "salaryman";

            var removeChar = (me.game.world.hasChild(this.charSelection)) ? me.game.world.removeChild(this.charSelection) : me.game.world.removeChild(this.locked_hipster);

            this.standSalaryman = new me.Sprite(me.video.renderer.getWidth()/2, me.video.renderer.getHeight()/2 + 135, {image: 'stand_salaryman'});
            me.game.world.addChild(this.standSalaryman, 4);

            game.offsetY = 0;  

            game.offsetX = 0;      

        }else if(this.allLocked[i] == 'stand_salaryman' && arrow == 'right'){

            game.char = "salaryman";

            var removeChar = (me.game.world.hasChild(this.charSelection)) ? me.game.world.removeChild(this.charSelection) : me.game.world.removeChild(this.locked_steve);

            this.standSalaryman = new me.Sprite(me.video.renderer.getWidth()/2, me.video.renderer.getHeight()/2 + 135, {image: 'stand_salaryman'});
            me.game.world.addChild(this.standSalaryman, 4);

            game.offsetY = 0;  

            game.offsetX = 0;    

        }else if(this.allLocked[i] == 'locked_hipster' && arrow == 'right'){

            var charUnlock = game.data.unlock;
            //console.log(game.data.unlock);

            //find index from array
            var a = charUnlock.indexOf("hipster");
            //console.log(a);
            game.char = (a >= 0 ) ? "hipster" : null;
            //console.log(game.data.char);

            var images = (a >= 0) ? "stand_hipster" : this.allLocked[i];

            var offsetX = (a >= 0) ? 10 : 0;

            var offsetY = (a >= 0) ? 5 : 0;

            game.offsetY = offsetY;  

            game.offsetX = offsetX;       

            var removeChar = (me.game.world.hasChild(this.charSelection)) ? me.game.world.removeChild(this.charSelection) : me.game.world.removeChild(this.standSalaryman);

            this.locked_hipster = new me.Sprite(me.video.renderer.getWidth()/2 - 5 - offsetX, me.video.renderer.getHeight()/2 + 140 - offsetY, {image: images});
            me.game.world.addChild(this.locked_hipster, 4);

        }else if(this.allLocked[i] == 'locked_mark' && arrow == 'right'){

            var charUnlock = game.data.unlock;
            //console.log(game.data.unlock);
            var a = charUnlock.indexOf("mark");
            //console.log(a); 

            game.char = (a >= 0 ) ? "mark" : null; 

            var images = (a >= 0) ? "stand_mark" : this.allLocked[i];

            var offsetX = (a >= 0) ? 24 : 0;

            var offsetY = (a >= 0) ? 10 : 0; 

            game.offsetY = offsetY - 4;  

            game.offsetX = offsetX - 40;       

            var removeChar = (me.game.world.hasChild(this.charSelection)) ? me.game.world.removeChild(this.charSelection) : me.game.world.removeChild(this.locked_hipster);

            this.locked_mark = new me.Sprite(me.video.renderer.getWidth()/2 - 5 + offsetX, me.video.renderer.getHeight()/2 + 140 + offsetY, {image: images});
            me.game.world.addChild(this.locked_mark, 4);

        }else if(this.allLocked[i] == 'locked_steve' && arrow == 'right'){

            var charUnlock = game.data.unlock;
            //console.log(game.data.unlock);
            var a = charUnlock.indexOf("steve");
            //console.log(a);
            game.char = (a >= 0 ) ? "steve" : null;  

            var images = (a >= 0) ? "stand_steve" : this.allLocked[i];
            //console.log(images);

            var offsetX = (a >= 0) ? 20 : 0;

            var offsetY = (a >= 0) ? 10 : 0;

            game.offsetY = offsetY - 5;  

            game.offsetX = offsetX + 10;      

            var removeChar = (me.game.world.hasChild(this.charSelection)) ? me.game.world.removeChild(this.charSelection) : me.game.world.removeChild(this.locked_mark);

            this.locked_steve = new me.Sprite(me.video.renderer.getWidth()/2 - 5 - offsetX, me.video.renderer.getHeight()/2 + 140 + offsetY, {image: images});
            me.game.world.addChild(this.locked_steve, 4);

        }
    },

    alphaBtn: function(){

        if(game.char == null){
            this.btnSelect.alpha = 0.5;
        }else {
            this.btnSelect.alpha = 1;
        }

        //console.log(game.data.char);
        
    },

    fixedPostitionX: function(){
        switch(game.char){
            case 'hipster':
                return -15;
            break;
            case 'mark':
                return 17;
            break;
            case 'steve':
                return -25;
            break;
            default:
                return 0;
        }
    },

    fixedPostitionY: function(){
        switch(game.char){
            case 'mark':
                return 14;
            break;
            case 'steve':
                return 15;
            break;
            default:
                return 0;
        }
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        
    }
});
