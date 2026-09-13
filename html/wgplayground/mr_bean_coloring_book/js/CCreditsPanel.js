function CCreditsPanel(){
    
    var _oFade;
    var _oPanelContainer;
    var _oButExit;
    var _oLogo;
    var _oListenerFade;
    var _oListenerLogo;
    
    var _pStartPanelPos;
    
    this._init = function(){
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0.7;
        _oListenerFade = _oFade.on("mousedown",function(){});
        s_oInteractiveStage.addChild(_oFade);
        
        //new createjs.Tween.get(_oFade).to({alpha:0.7},500);
        
        _oPanelContainer = new createjs.Container();        
        s_oInteractiveStage.addChild(_oPanelContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChild(oPanel);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT/2;  
        //_pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        //new createjs.Tween.get(_oPanelContainer).to({y:CANVAS_HEIGHT/2 - 40},500, createjs.Ease.quartIn);

        var oTitle = new createjs.Text("DEVELOPED BY"," 62px "+PRIMARY_FONT, "#724134");
        oTitle.y = -oSprite.height/2 + 180;
        oTitle.textAlign = "center";
        oTitle.textBaseline = "middle";
        oTitle.lineWidth = 400;
        _oPanelContainer.addChild(oTitle);

        var oLink = new createjs.Text("NEWKIDSGAMES.ORG"," 62px "+PRIMARY_FONT, "#724134");
        oLink.y = 140;
        oLink.textAlign = "center";
        oLink.textBaseline = "middle";
        oLink.lineWidth = 400;
        _oPanelContainer.addChild(oLink);
        
        var oSprite = s_oSpriteLibrary.getSprite('ctl_logo');
        _oLogo = createBitmap(oSprite);
        _oListenerLogo = _oLogo.on("click",this._onLogoButRelease);
        _oLogo.regX = oSprite.width/2;
        _oLogo.regY = oSprite.height/2;
        _oPanelContainer.addChild(_oLogo);
      
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        //_oButExit = new CGfxButton(1320, 330, oSprite, _oPanelContainer);
        _oButExit = new CGfxButton(360, -210, oSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.unload, this);
        
    };
    
    this.unload = function(){
        s_oInteractiveStage.removeChild(_oFade);
        s_oInteractiveStage.removeChild(_oPanelContainer);

        _oButExit.unload();
        
        _oFade.off("mousedown",_oListenerFade);
        _oLogo.off("click",_oListenerLogo);
        
        
    };
    
    this._onLogoButRelease = function(){
        window.open("https://newkidsgames.org/?utm_source=newkidsgames&utm_medium=mr_bean_coloring_book", target="_blank");
    };
    
    this._onMoreGamesReleased = function(){
        window.open("https://newkidsgames.org/?utm_source=newkidsgames&utm_medium=mr_bean_coloring_book", target="_blank");
    };
    
    this._init();
    
    
};


