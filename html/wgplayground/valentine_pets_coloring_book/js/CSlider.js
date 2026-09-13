function CSlider(iXPos,iYPos,oSprite,iMinValue, iMaxValue, oParentContainer){
    var _iValue;
    var _iLowBound;
    var _iUpBound;
    
    var _oParent;
    var _oPointer;
    var _oBar;
    var _oLabel;
    var _oText;
    var _oSliderContainer;
    var _oListenerMouseMove;
    var _oListenerMouseUp;
    
    this._init = function(iXPos,iYPos,oSprite,iMinValue, iMaxValue, oParentContainer){
        
        _iValue = Math.round((iMaxValue - iMinValue)/2);
        
        _oSliderContainer = new createjs.Container();
        _oSliderContainer.x = iXPos;
        _oSliderContainer.y = iYPos;
        oParentContainer.addChild(_oSliderContainer);
        
        var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: oSprite.width/3, height: oSprite.height, regX: (oSprite.width/3)/2, regY: oSprite.height/2}, 
                        animations: {pointer:[0],bar:[1],label:[2]}
                   };
                   
        var oSpriteSheet = new createjs.SpriteSheet(oData);      
        
        _oBar = createSprite(oSpriteSheet,"bar",(oSprite.width/3)/2,oSprite.height/2,oSprite.width/3,oSprite.height);        
        _oBar.stop();        
        _oSliderContainer.addChild(_oBar);
        
        _oLabel = createSprite(oSpriteSheet,"label",(oSprite.width/3)/2,oSprite.height/2,oSprite.width/3,oSprite.height);        
        _oLabel.stop();
        _oLabel.y = -oSprite.height/2 - (oSprite.width/3)/2;
        _oSliderContainer.addChild(_oLabel);
        
        _oText = new createjs.Text(_iValue," 24px "+PRIMARY_FONT, "#ffffff");
        _oText.y = -oSprite.height/2 - (oSprite.width/3)/2;
        _oText.textAlign = "center";
        _oText.textBaseline = "middle";
        _oText.lineWidth = 280;
        _oSliderContainer.addChild(_oText);
        
        _oPointer = createSprite(oSpriteSheet,"pointer",(oSprite.width/3)/2,oSprite.height/2,oSprite.width/3,oSprite.height);        
        _oPointer.stop();        
        _oSliderContainer.addChild(_oPointer);
        
        _iUpBound = oSprite.height/2 - (oSprite.width/3)/2;
        _iLowBound = -oSprite.height/2 + (oSprite.width/3)/2;
        
        _oSliderContainer.visible = false;

        this._initListener();
    };
    
    this.unload = function(){
       _oPointer.off("pressmove", _oListenerMouseMove);
       _oPointer.off("pressup" , _oListenerMouseUp);
	   
       oParentContainer.removeChild(_oSliderContainer);
    };
    
    this._initListener = function(){
       _oListenerMouseMove = _oPointer.on("pressmove", this.buttonDown);
       _oListenerMouseUp = _oPointer.on("pressup" , this.buttonRelease);      
    };
    
    this.buttonRelease = function(){
        s_oGame.sliderMoving(false);
        s_oInterface.setSliderVisible(false);
        s_oInterface.setStroke(_iValue);
        s_oInterface.restartStroke();

        s_oInteractiveStage.update();
        
    };
    
    this.buttonDown = function(event){
        s_oGame.sliderMoving(true);
        var pPoint = _oSliderContainer.globalToLocal(event.stageX,event.stageY) ;
        _oPointer.y = pPoint.y;
        if(pPoint.y > _iUpBound){
            _oPointer.y = _iUpBound;
        } else if(pPoint.y < _iLowBound) {
            _oPointer.y = _iLowBound;
        }
        
        _oParent.setValue();
        _oText.text = _iValue;

        s_oInterface.setCircleImage(_iValue, s_oGame.getTempColor());

        s_oInteractiveStage.update();
        
    };
    
    this.setValue = function(){
        _iValue = ( (_oPointer.y -_iUpBound)/(_iLowBound - _iUpBound) ) * (iMaxValue - iMinValue) + iMinValue;
        _iValue = Math.round(_iValue);
    };
    
    this.getValue = function(){
        return _iValue;
    };
    
    this.setLabel = function(){
        
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oPointer.x = iXPos;
         _oPointer.y = iYPos;
    };
    
    this.setVisible = function(bVisible){
        _oSliderContainer.visible = bVisible;
        s_oInteractiveStage.update();
    };
    
    this.getVisible = function(){
        return _oSliderContainer.visible;
    };
    
    _oParent = this;
    this._init(iXPos,iYPos,oSprite,iMinValue, iMaxValue, oParentContainer);
}