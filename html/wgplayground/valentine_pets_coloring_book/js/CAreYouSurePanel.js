function CAreYouSurePanel(){
    var _aCbCompleted;
    var _aCbOwner;
    
    var _oFade;
    var _oPanelContainer;
    var _oButExit;
    var _oButConfirm;
    var _oListenerFade;
    var _oMsg;

    
    this._init = function(){
        
        _aCbCompleted = new Array();
        _aCbOwner = new Array();
        
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


        _oMsg = new createjs.Text(""," 80px "+PRIMARY_FONT, "#333333");
        _oMsg.y = -180;
        _oMsg.textAlign = "center";
        _oMsg.textBaseline = "middle";
        _oMsg.lineWidth = 800;
        _oPanelContainer.addChild(_oMsg);

      
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _oButExit = new CGfxButton(-200, 150, oSprite, _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this.hide, this);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_yes');
        _oButConfirm = new CGfxButton(200, 150, oSprite, _oPanelContainer);
        _oButConfirm.addEventListener(ON_MOUSE_UP, this._onConfirm, this);
        
        this.hide();
        
    };
    
    this.unload = function(){
        s_oInteractiveStage.removeChild(_oFade);
        s_oInteractiveStage.removeChild(_oPanelContainer);

        _oButExit.unload();
        _oButConfirm.unload();
        
        _oFade.off("mousedown",_oListenerFade);
    };
    
    this.addEventListener = function (iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };
    
    this.hide = function(){
        _oPanelContainer.visible = false;
        _oFade.visible = false;
    };
    
    this.show = function(szText){
        _oPanelContainer.visible = true;
        _oFade.visible = true;
        
        _oMsg.text = szText;
    };
    
    this._onConfirm = function(){
        if (_aCbCompleted[ON_BUT_YES_DOWN]) {
            _aCbCompleted[ON_BUT_YES_DOWN].call(_aCbOwner[ON_BUT_YES_DOWN]);
        }
    };
    
    this._init();
    
    
};


