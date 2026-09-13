function CModeMenu(){
    
    var _oBg;
    var _oTextChoose;
    var _oTextChooseOutline;    
    var _oAudioToggle;
    var _oButFullscreen;
    
    var _oContainerImage1;
    var _oContainerImage2;
    var _oContainerImage3;
    var _oContainerImage4;
    var _oContainerImage5;
    var _oContainerImage6;
    var _oListener1;
    var _oListener2;
    var _oListener3;
    var _oListener4;
    var _oListener5;
    var _oListener6;
    
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    
    this._init = function(){
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_modemenu'));
        
        _oTextChooseOutline = new createjs.Text(TEXT_CHOOSE," 60px "+PRIMARY_FONT, "#5E352B");
        _oTextChooseOutline.x = CANVAS_WIDTH/2;
        _oTextChooseOutline.y = CANVAS_HEIGHT/2 + 30;
        _oTextChooseOutline.textAlign = "center";
        _oTextChooseOutline.textBaseline = "middle";
        _oTextChooseOutline.lineWidth = 1700;
        _oTextChooseOutline.outline = 8;
        
        _oTextChoose = new createjs.Text(TEXT_CHOOSE," 60px "+PRIMARY_FONT, "#E1C7A7");
        _oTextChoose.x = CANVAS_WIDTH/2;
        _oTextChoose.y = CANVAS_HEIGHT/2 + 30;
        _oTextChoose.textAlign = "center";
        _oTextChoose.textBaseline = "middle";
        _oTextChoose.lineWidth = 1700;
        
        /////IMAGE 1//////////
        _oContainerImage1 = new createjs.Container();
        _oContainerImage1.x = CANVAS_WIDTH/2 - 500;
        _oContainerImage1.y = CANVAS_HEIGHT/2 - 190;
        _oContainerImage1.scaleX = 0.3;
        _oContainerImage1.scaleY = 0.3;
        _oContainerImage1.cursor = "pointer";
        _oListener1 = _oContainerImage1.on("click", this._onImageClicked, this, false, 'image1');
        
        var oSprite = s_oSpriteLibrary.getSprite('image1');
        var iWidth = oSprite.width;
        var iHeight = oSprite.height;
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginFill("#ffffff").drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage1.addChild(oShape);
     
        var oImage1 = createBitmap(oSprite);
        oImage1.regX = iWidth/2;
        oImage1.regY = iHeight/2;        
        _oContainerImage1.addChild(oImage1);
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginStroke("#5E352B").setStrokeStyle(16).drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage1.addChild(oShape);
        
        /////IMAGE 2//////////
        _oContainerImage2 = new createjs.Container();
        _oContainerImage2.x = CANVAS_WIDTH/2;
        _oContainerImage2.y = CANVAS_HEIGHT/2 - 190;
        _oContainerImage2.scaleX = 0.3;
        _oContainerImage2.scaleY = 0.3;
        _oContainerImage2.cursor = "pointer";
        _oListener2 = _oContainerImage2.on("click", this._onImageClicked, this, false, 'image2');
        
        var oSprite = s_oSpriteLibrary.getSprite('image2');
        var iWidth = oSprite.width;
        var iHeight = oSprite.height;
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginFill("#ffffff").drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage2.addChild(oShape);
     
        var oImage2 = createBitmap(oSprite);
        oImage2.regX = iWidth/2;
        oImage2.regY = iHeight/2;        
        _oContainerImage2.addChild(oImage2);
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginStroke("#5E352B").setStrokeStyle(16).drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage2.addChild(oShape);
        
        /////IMAGE 3//////////
        _oContainerImage3 = new createjs.Container();
        _oContainerImage3.x = CANVAS_WIDTH/2 + 500;
        _oContainerImage3.y = CANVAS_HEIGHT/2 - 190;
        _oContainerImage3.scaleX = 0.3;
        _oContainerImage3.scaleY = 0.3;
        _oContainerImage3.cursor = "pointer";
        _oListener3 = _oContainerImage3.on("click", this._onImageClicked, this, false, 'image3');
        
        var oSprite = s_oSpriteLibrary.getSprite('image3');
        var iWidth = oSprite.width;
        var iHeight = oSprite.height;
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginFill("#ffffff").drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage3.addChild(oShape);
     
        var oImage3 = createBitmap(oSprite);
        oImage3.regX = iWidth/2;
        oImage3.regY = iHeight/2;        
        _oContainerImage3.addChild(oImage3);
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginStroke("#5E352B").setStrokeStyle(16).drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage3.addChild(oShape);
        
        /////IMAGE 4//////////
        _oContainerImage4 = new createjs.Container();
        _oContainerImage4.x = CANVAS_WIDTH/2 - 500;
        _oContainerImage4.y = CANVAS_HEIGHT/2 + 230;
        _oContainerImage4.scaleX = 0.3;
        _oContainerImage4.scaleY = 0.3;
        _oContainerImage4.cursor = "pointer";
        _oListener4 = _oContainerImage4.on("click", this._onImageClicked, this, false, 'image4');
        
        var oSprite = s_oSpriteLibrary.getSprite('image4');
        var iWidth = oSprite.width;
        var iHeight = oSprite.height;
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginFill("#ffffff").drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage4.addChild(oShape);
     
        var oImage4 = createBitmap(oSprite);
        oImage4.regX = iWidth/2;
        oImage4.regY = iHeight/2;        
        _oContainerImage4.addChild(oImage4);
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginStroke("#5E352B").setStrokeStyle(16).drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage4.addChild(oShape);
        
        /////IMAGE 5//////////
        _oContainerImage5 = new createjs.Container();
        _oContainerImage5.x = CANVAS_WIDTH/2;
        _oContainerImage5.y = CANVAS_HEIGHT/2 + 230;
        _oContainerImage5.scaleX = 0.3;
        _oContainerImage5.scaleY = 0.3;
        _oContainerImage5.cursor = "pointer";
        _oListener5 = _oContainerImage5.on("click", this._onImageClicked, this, false, 'image5');
        
        var oSprite = s_oSpriteLibrary.getSprite('image5');
        var iWidth = oSprite.width;
        var iHeight = oSprite.height;
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginFill("#ffffff").drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage5.addChild(oShape);
     
        var oImage5 = createBitmap(oSprite);
        oImage5.regX = iWidth/2;
        oImage5.regY = iHeight/2;        
        _oContainerImage5.addChild(oImage5);
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginStroke("#5E352B").setStrokeStyle(16).drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage5.addChild(oShape);
        
        /////IMAGE 5//////////
        _oContainerImage6 = new createjs.Container();
        _oContainerImage6.x = CANVAS_WIDTH/2 + 500;
        _oContainerImage6.y = CANVAS_HEIGHT/2 + 230;
        _oContainerImage6.scaleX = 0.3;
        _oContainerImage6.scaleY = 0.3;
        _oContainerImage6.cursor = "pointer";
        _oListener6 = _oContainerImage6.on("click", this._onImageClicked, this, false, 'image6');
        
        var oSprite = s_oSpriteLibrary.getSprite('image6');
        var iWidth = oSprite.width;
        var iHeight = oSprite.height;
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginFill("#ffffff").drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage6.addChild(oShape);
     
        var oImage6 = createBitmap(oSprite);
        oImage6.regX = iWidth/2;
        oImage6.regY = iHeight/2;        
        _oContainerImage6.addChild(oImage6);
        
        var oShape = new createjs.Shape();
        oShape.graphics.beginStroke("#5E352B").setStrokeStyle(16).drawRect(-iWidth/2, -iHeight/2, iWidth, iHeight);
        _oContainerImage6.addChild(oShape);
        
        s_oInteractiveStage.addChild(_oBg, _oTextChooseOutline, _oTextChoose, _oContainerImage1, _oContainerImage2, _oContainerImage3, _oContainerImage4, _oContainerImage5, _oContainerImage6);
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }  
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }

        var oSprite = s_oSpriteLibrary.getSprite("but_fullscreen");
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _pStartPosFullscreen = {x: _pStartPosAudio.x - (oSprite.width/2)- 10, y: (oSprite.height/2) + 10};            
        }else {
            _pStartPosFullscreen = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};         
        }

        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreenRelease,this);
        }
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
        
    };
    
    this.unload = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
                _oButFullscreen.unload();
        }
        
        s_oInteractiveStage.removeAllChildren();
        _oContainerImage1.off("click", _oListener1);
        _oContainerImage2.off("click", _oListener2);
        _oContainerImage3.off("click", _oListener3);
        _oContainerImage4.off("click", _oListener4);
        _oContainerImage5.off("click", _oListener5);
        _oContainerImage5.off("click", _oListener6);
        
        s_oModeMenu = null;
        
        s_oInteractiveStage.update(); 
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
       
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }

        if (_fRequestFullScreen && screenfull.enabled){
                _oButFullscreen.setPosition(_pStartPosFullscreen.x - iNewX, _pStartPosFullscreen.y + iNewY);
        }

        s_oInteractiveStage.update();
    };
    
    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.enabled){
		_oButFullscreen.setActive(s_bFullscreen);
	}
    };

        
    this._onFullscreenRelease = function(){
	if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };
    
    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onImageClicked = function(evt, szParam){
        this.unload();
        $(s_oMain).trigger("start_level",1);
        s_oMain.gotoGame(szParam);  
        playSound("click", 1, false);
    };
    
    s_oModeMenu = this;
  
    this._init();
    
};

var s_oModeMenu = null;