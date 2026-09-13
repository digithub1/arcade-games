// Put user code here //
let subDynamic = me.event.subscribe(me.event.LOADER_COMPLETE, function(){
    game.data.dynamic = {
        sound:{
            BGM: 1,
            SFX: 1
        },
        positionBarButton:{
            BGM:408,
            SFX:408
        },
        whiteBarValue:{
            BGM:600,
            SFX:600
        }
    };
    me.event.unsubscribe(subDynamic);
});
//  End of user code  //
