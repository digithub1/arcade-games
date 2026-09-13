(function () {

    HTTPClient = me.plugin.Base.extend(
    {
    	init: function () {
	        this._super(me.plugin.Base, "init");
	        var socket;
	        // call the constructor
	    },

	    post: function(url, data = {}, option = {}) {
	    	return $.ajax({
		        url,
		        method: 'POST',
		        data: data,
		        headers: option.headers,
		        processData: false,
		        contentType: "application/json; charset=utf-8",
		    });
	    },

	    get: function(url) {
	    	return $.ajax({
		        url,
		        method: "GET",
		    });
	    },
    });
    
    // automatically register
    window.addEventListener("load",function(event) {
	    var http = document.createElement("script");
    	http.async = true;
    	http.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

    	var tag = document.getElementsByTagName("script")[0];
    	tag.parentNode.insertBefore(http, tag);
	},false);

    me.device.onReady(function(){
    	me.plugin.register(HTTPClient, "HTTPClient")
    });
})();