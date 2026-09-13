function CGame(oData){
    var _bTouchActive;
    var _bInitGame;
    var _bErase;
    var _bSliderMoving;
    
    var _szCurColor;
    var _szTempColor;

    var _iCurStroke;
    var _iWidthArea;
    var _iHeightArea;
    var _iAdCounter;

    var _oInterface;
    var _oEndPanel = null;
    var _oParent;
    var _oBg;
    var _oStroke;
    var _oBlank;
    var _oFrame;
    var _oDrawingContainer;
    var _oDrawing;
    var _oDrawingArea;
    var _oStrokeContainer;
    var _oAdviceArea;
    var _oTextAdvice;
    var _oTextAdviceOutline;
    var _oListener;
    
    var _oCtx = s_oDrawStage.canvas.getContext('2d');

    this._init = function(){        
        _bTouchActive=false;
        _bInitGame=true;
        _bErase = false;
        
        _iCurStroke = 10;
        _szCurColor = null;
        _iAdCounter = 0;
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        s_oDrawStage.addChild(_oBg);        
        
        _oDrawingContainer = new createjs.Container();
        _oDrawingContainer.x = CANVAS_WIDTH/2;
        _oDrawingContainer.y = CANVAS_HEIGHT/2;
        s_oDrawStage.addChild(_oDrawingContainer); 
        
        var oSprite = s_oSpriteLibrary.getSprite('canvas_drawing');
        _iWidthArea = oSprite.width;
        _iHeightArea = oSprite.height;
        _oBlank = createBitmap(oSprite);
        _oDrawingContainer.addChild(_oBlank);
        _oDrawingContainer.regX = _iWidthArea/2;
        _oDrawingContainer.regY = _iHeightArea/2;              
        _oDrawingArea = {x : CANVAS_WIDTH/2 - _iWidthArea/2 + _iCurStroke*0.5, y: CANVAS_HEIGHT/2 - _iHeightArea/2 + _iCurStroke*0.5, endX: _iWidthArea + CANVAS_WIDTH/2 - _iWidthArea/2 - _iCurStroke*0.5, endY: _iHeightArea + CANVAS_HEIGHT/2 - _iHeightArea/2 - _iCurStroke*0.5};        
         
        _oStroke = new createjs.Shape();
        _oStroke.graphics.setStrokeStyle(_iCurStroke, "round", "round");
        
        _oStrokeContainer = new createjs.Container();
        s_oStage.addChild(_oStrokeContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite(s_szCurDraw);
        _oDrawing = createBitmap(oSprite);
        _oDrawing.x = CANVAS_WIDTH/2;
        _oDrawing.y = CANVAS_HEIGHT/2;
        _oDrawing.regX = oSprite.width/2;
        _oDrawing.regY = oSprite.height/2;
        s_oInteractiveStage.addChild(_oDrawing);
        
        _oStrokeContainer.addChild(_oStroke);

        var oSprite = s_oSpriteLibrary.getSprite('drawcanvas_frame');
        _oFrame = createBitmap(oSprite);
        _oFrame.x = CANVAS_WIDTH/2;
        _oFrame.y = CANVAS_HEIGHT/2;
        _oFrame.regX = oSprite.width/2;
        _oFrame.regY = oSprite.height/2;
        s_oInteractiveStage.addChild(_oFrame);


        _oTextAdvice = new createjs.Text(TEXT_HELP1," 60px "+PRIMARY_FONT, "#ffc300");
        _oTextAdvice.x = CANVAS_WIDTH/2;
        _oTextAdvice.y = CANVAS_HEIGHT/2;
        _oTextAdvice.textAlign = "center";
        _oTextAdvice.textBaseline = "alphabetic";
        _oTextAdvice.lineWidth = 800;
        _oTextAdvice.visible = false;
        _oTextAdviceOutline = new createjs.Text(TEXT_HELP1," 60px "+PRIMARY_FONT, "#5E352B");
        _oTextAdviceOutline.x = CANVAS_WIDTH/2;
        _oTextAdviceOutline.y = CANVAS_HEIGHT/2;
        _oTextAdviceOutline.textAlign = "center";
        _oTextAdviceOutline.textBaseline = "alphabetic";
        _oTextAdviceOutline.lineWidth = 800;
        _oTextAdviceOutline.outline = 8;
        _oTextAdviceOutline.visible = false;
        s_oInteractiveStage.addChild(_oTextAdviceOutline, _oTextAdvice);

        _oAdviceArea = new createjs.Shape();
        _oAdviceArea.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(-580, -410, 1160, 820);
        _oAdviceArea.x = CANVAS_WIDTH/2;
        _oAdviceArea.y = CANVAS_HEIGHT/2;
        _oListener = _oAdviceArea.on("mousedown", this._setAdvice);
        s_oInteractiveStage.addChild(_oAdviceArea);
    
        //TOUCH EVENTS
        if(s_bMobile) {
            //IE BROWSER
            if (window.navigator.msPointerEnabled) {
				_iContTouchMS = 0;
                
                s_oInteractiveStage.addEventListener( "stagemousedown", this.onMouseStart, false );
                s_oInteractiveStage.addEventListener( 'stagemouseup', this.onMouseEnd, false );
                
            }else{
                
                s_oInteractiveStage.addEventListener( "stagemousedown", this.onMouseStart, false );
                s_oInteractiveStage.addEventListener( 'stagemouseup', this.onMouseEnd, false );
            }
        }else{
            
            s_oInteractiveStage.addEventListener( 'stagemousedown', this.onMouseStart);
            s_oInteractiveStage.addEventListener( 'stagemouseup', this.onMouseEnd);
        }
        _oInterface = new CInterface();
        s_oDrawStage.update();
        //s_oStage.update();
        s_oInteractiveStage.update();

    };
    
    this.printImg = function(){
        //Add base image to drawcanvas
        var oSprite = s_oSpriteLibrary.getSprite(s_szCurDraw);
        var _oDrawingTemp = s_oSpriteLibrary.getSprite(s_szCurDraw);
        _oDrawingTemp = createBitmap(oSprite);
        _oDrawingTemp.x = CANVAS_WIDTH/2;
        _oDrawingTemp.y = CANVAS_HEIGHT/2;
        _oDrawingTemp.regX = oSprite.width/2;
        _oDrawingTemp.regY = oSprite.height/2;
        _oDrawing.visible = false;
        s_oDrawStage.addChild(_oDrawingTemp);
        _oBg.visible = false;
        s_oDrawStage.update();
        
        ///Open window for print
        var dataUrl = document.getElementById('draw_canvas').toDataURL(); //attempt to save base64 string to server using this var        
        var windowContent = '<!DOCTYPE html>';
        windowContent += '<html>';
        windowContent += '<img src="' + dataUrl + '">';
        windowContent += '</html>';
        var printWin = window.open('','','width=1920,height=1080');
        printWin.document.open();
        printWin.document.write(windowContent);
        printWin.document.close();
        printWin.focus();
        printWin.print();
        printWin.close();
       
        ///Restablish initial conditions
        s_oDrawStage.removeChild(_oDrawingTemp);
        _oDrawing.visible = true;
        _oBg.visible = true; 
        s_oDrawStage.update();
       
    };
    
    this.saveImg = function(){
        //Add base image to drawcanvas
        var oSprite = s_oSpriteLibrary.getSprite(s_szCurDraw);
        var _oDrawingTemp = s_oSpriteLibrary.getSprite(s_szCurDraw);
        _oDrawingTemp = createBitmap(oSprite);
        _oDrawingTemp.x = CANVAS_WIDTH/2;
        _oDrawingTemp.y = CANVAS_HEIGHT/2;
        _oDrawingTemp.regX = oSprite.width/2;
        _oDrawingTemp.regY = oSprite.height/2;
        _oDrawing.visible = false;
        s_oDrawStage.addChild(_oDrawingTemp);
        _oBg.visible = false;
        s_oDrawStage.update();        
        
        //Save image
        var link = document.createElement('a'); 
        document.body.appendChild(link); // Firefox requires the link to be in the body
        var szImageName = s_szCurDraw + pad(Math.round(Math.random()*1000), 4)+".png";
        link.download = szImageName;
        link.href = s_oDrawCanvas.toDataURL("image/png");
        link.click();
        
        ///Restablish initial conditions
        s_oDrawStage.removeChild(_oDrawingTemp);
        _oDrawing.visible = true;
        _oBg.visible = true; 
        s_oDrawStage.update();
    };
    
    this.sliderMoving = function(bVal){
        _bSliderMoving = bVal;
    };
    
    this.tryShowAd = function(){
        _iAdCounter++;
        if(_iAdCounter === AD_SHOW_COUNTER){
            _iAdCounter = 0;
            $(s_oMain).trigger("show_interlevel_ad");
        }
    };
    
    this.setColor = function(szColor){
        _szCurColor = szColor;
        this.tryShowAd();
    };
    
    this.getColor = function(){
        return _szCurColor;
    };
    
    this.saveTempColor = function(){
        _szTempColor = _szCurColor;
    };
    
    this.setTempColor = function(){
        _szCurColor = _szTempColor;
    };
    
    this.getTempColor = function(){
        return _szTempColor;
    };
    
    this.setStroke = function(iSize){
        _iCurStroke = iSize;
        _oDrawingArea = {x : CANVAS_WIDTH/2 - _iWidthArea/2 + _iCurStroke*0.5, y: CANVAS_HEIGHT/2 - _iHeightArea/2 + _iCurStroke*0.5, endX: _iWidthArea + CANVAS_WIDTH/2 - _iWidthArea/2 - _iCurStroke*0.5, endY: _iHeightArea + CANVAS_HEIGHT/2 - _iHeightArea/2 - _iCurStroke*0.5};
    };
    
    this.deleteStroke = function(bActive){
        if(bActive){
            _szCurColor = "#ffffff";
        } else {
            _szCurColor = null;
        }
    };    
    
    this.initStroke = function(){
        _oStroke = new createjs.Shape();
        _oStroke.graphics.setStrokeStyle(_iCurStroke, "round", "round");        
        _oStroke.graphics.beginStroke(_szCurColor);
        _oStrokeContainer.addChild(_oStroke);
        
    };
    
    this.onMouseStart = function(event) {
	event = event || window.event;
        if (!event.primary) { 
            return; 
        }
        if((s_oInteractiveStage.mouseX < _oDrawingArea.x || s_oInteractiveStage.mouseX > _oDrawingArea.endX) || (s_oInteractiveStage.mouseY < _oDrawingArea.y || s_oInteractiveStage.mouseY > _oDrawingArea.endY)){
            return;
        }        
        
        _bTouchActive=true;
        s_oGame.initStroke();
        
        _oStroke.graphics.moveTo(s_oInteractiveStage.mouseX, s_oInteractiveStage.mouseY);
       
        s_oInteractiveStage.addEventListener("stagemousemove", _oParent.onMouseMove);          
    };
    
    this.onMouseMove = function(event) {
        if (!event.primary) { 
            return; 
        }
        if((s_oInteractiveStage.mouseX < _oDrawingArea.x || s_oInteractiveStage.mouseX > _oDrawingArea.endX) || (s_oInteractiveStage.mouseY < _oDrawingArea.y || s_oInteractiveStage.mouseY > _oDrawingArea.endY)){
           return;
        }
        
        _oStroke.graphics.lineTo(s_oInteractiveStage.mouseX, s_oInteractiveStage.mouseY);
        
        if(checkIfiOS()){
            _oStroke.draw(_oCtx);            
            //s_oStage.update();
        } else {
            s_oStage.update();
            //_oStroke.draw(_oCtx);
        }

    };
    
    this.onMouseEnd = function(event) {
        if (!event.primary) { 
            return; 
        }
        _bTouchActive = false;
        s_oDrawStage.addChild(_oStroke);
        _oStroke.graphics.endStroke();
        _oStrokeContainer.removeChild(_oStroke);
        
        s_oDrawStage.update();
        s_oStage.update();
       
        s_oInteractiveStage.removeEventListener("stagemousemove", _oParent.onMouseMove);
        
    };
   
    this.restartGame = function () {
        s_oDrawStage.removeAllChildren();
        _oStroke.graphics.clear();

        s_oDrawStage.addChild(_oBg);
        s_oDrawStage.addChild(_oDrawingContainer);
        var oSprite = s_oSpriteLibrary.getSprite('canvas_drawing');
        _iWidthArea = oSprite.width;
        _iHeightArea = oSprite.height;
        _oBlank = createBitmap(oSprite);
        _oDrawingContainer.addChild(_oBlank);
        
        s_oDrawStage.update();
        
        s_oStage.update();
        
    };        
    
    this.unload = function(){
        _bInitGame = false;
        _oInterface.unload();

        if(_oEndPanel !== null){
            _oEndPanel.unload();
        }

        _oAdviceArea.off("mousedown", _oListener);

        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        s_oInteractiveStage.removeAllChildren(); 
        s_oDrawStage.removeAllChildren(); 
        
        s_oStage.update();
    };
 
    this.onExit = function(){
        this.unload();
        s_oMain.gotoMenu();
    };
    
    this._setAdvice = function(){
        if(_szCurColor === null && !_oInterface.getSliderVisible()){
            _oParent.colorAdvice(true);
        }
    };
    
    this.colorAdvice = function(bVal){
        
        _oTextAdvice.visible = bVal;
        _oTextAdviceOutline.visible = bVal;
        
        s_oInteractiveStage.update();
        
    };
    
    this.update = function(){
        
    };

    s_oGame=this;
    
    COLORS = oData.colors;
    MIN_STROKE = oData.min_stroke_size;
    MAX_STROKE = oData.max_stroke_size;
    
    AD_SHOW_COUNTER = oData.ad_show_counter; 
    
    _oParent=this;
    this._init();
}

var s_oGame;
