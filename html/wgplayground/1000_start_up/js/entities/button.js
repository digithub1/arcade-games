game.Button = me.GUI_Object.extend({
	init: function(x, y, width, height, nameImages, functionClick, functionRelease){
		var settings = {};
		settings.image = game.texture.assets2;
		settings.region = nameImages;
		settings.width = width;
		settings.height = height;

		this._super(me.GUI_Object, 'init', [x, y, settings]);
		this.anchorPoint.set(0.5, 0.5);
		this.name = nameImages;
		this.click = functionClick;
		this.onReleased = functionRelease;
		this.alpha = 1;
	},

	onClick: function(){

		if(this.alpha == 0.5) return;
		if(this.name == 'button select midlle' || this.name == 'button select left'
			|| this.name == 'button select right'|| this.name == 'button menu'
			|| this.name == 'button start'|| 'button turn'
			|| this.name == 'retry button'){
			this.click();
		}
	},

	onRelease: function(){
		if(this.name == 'button start' || this.name == 'button turn'){
			this.onReleased();
		}
	}
});