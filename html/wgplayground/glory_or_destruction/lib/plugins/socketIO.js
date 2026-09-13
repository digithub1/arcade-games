(function () {

    SocketIO = me.plugin.Base.extend(
    {
    	init: function () {
	        this._super(me.plugin.Base, "init");
	        var socket;
	        // call the constructor
	    },

	    open: function(url, setting = {}) {
	    	this.socket = io(url, setting);
	    },

	    connect: function() {
	    	// Connect Socket manually
	    	this.socket.connect();
	    },

	    emit: function(eventName, args = '', arc = () => {}) {
	    	this.socket.emit(eventName, args, arc);
	    },

	    disconnect: function(arc) {
	    	// Fired upon a disconnection.
	    	// return reason string	
	    	this.socket.on('disconnect', arc);
	    },

	    onEvent: function(eventName, arc) {
	    	this.socket.on(eventName, arc);
	    },

	    reconnect: function(arc) {
	    	// Fired upon a successful reconnection.
	    	// return attempt number
	    	this.socket.on('reconnect', arc);
	    },

	    reconnectAttempt: function(arc) {
	    	// Fired upon an attempt to reconnect.
	    	// return attempt number
	    	this.socket.on('reconnect_attempt', arc);
	    }
    });
    
    // automatically register
    window.addEventListener("load",function(){
    	var socket = document.createElement("script");
    	socket.async = true;
    	socket.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js";

    	var tag = document.getElementsByTagName("script")[0];
    	tag.parentNode.insertBefore(socket, tag);
    });

    me.device.onReady(function(){
    // window.onReady(function () {
    	// me.plugin.register(SocketIO, "SocketIO")
        me.utils.function.defer(me.plugin.register, null, SocketIO, "SocketIO");
    });
})();