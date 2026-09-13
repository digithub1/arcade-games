(function () {

    var screenControl = me.plugin.Base.extend(
    {
        init : function () {
            this._super(me.plugin.Base, "init");

            var viewport, lastPointerId = null, offsetX, offsetY;
            this._onPointerDown = function(evt){
                viewport = me.game.viewport;
                if(lastPointerId == null){
                    lastPointerId = evt.pointerId;
                    offsetX = viewport.pos.x + evt.gameScreenX;
                    offsetY = viewport.pos.y + evt.gameScreenY;
                }
            };

            this._onPointerMove = function(evt){
                if(lastPointerId == evt.pointerId){
                    viewport.moveTo(offsetX - evt.gameScreenX, offsetY - evt.gameScreenY);
                    me.game.repaint();
                }
            };

            this._onPointerUp = function(evt){
                if(lastPointerId == evt.pointerId){
                    lastPointerId = null;
                }
            };

            var tempPointerId;
            this._onPointerLeave = function(evt){
                if(lastPointerId == evt.pointerId){
                    tempPointerId = lastPointerId;
                    lastPointerId = null;
                }
            };

            this._onPointerEnter = function(evt){
                if(tempPointerId == evt.pointerId){
                    lastPointerId = tempPointerId;
                    tempPointerId = null;
                }
            };
        },

        start : function () {
            me.input.registerPointerEvent('pointerdown', me.game.viewport, this._onPointerDown);
            me.input.registerPointerEvent('pointermove', me.game.viewport, this._onPointerMove);
            me.input.registerPointerEvent('pointerup', me.game.viewport, this._onPointerUp);
            me.input.registerPointerEvent('pointerleave', me.game.viewport, this._onPointerLeave);
            me.input.registerPointerEvent('pointerenter', me.game.viewport, this._onPointerEnter);
        },

        stop : function() {
            me.input.releasePointerEvent('pointerdown', me.game.viewport, this._onPointerDown);
            me.input.releasePointerEvent('pointermove', me.game.viewport, this._onPointerMove);
            me.input.releasePointerEvent('pointerup', me.game.viewport, this._onPointerUp);
            me.input.releasePointerEvent('pointerleave', me.game.viewport, this._onPointerLeave);
            me.input.releasePointerEvent('pointerenter', me.game.viewport, this._onPointerEnter);
        }
    });

    me.device.onReady(function () {
        me.utils.function.defer(me.plugin.register, null, screenControl, "screenControl");
    });

})();
