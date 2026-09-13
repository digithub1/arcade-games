(function(){
    // di run pas index.html digenerate
    // index.html digenerate setelah game.js selesai di build
    // menghapus otomatis game.texture dan resource.js jika ada deletedTexturenya
    // string yg dihapus disimpan di sebuah variable jika ingin ditambahkan
    
    var LazyLoading = me.plugin.Base.extend({
        init: function(classObject){            
            // call the constructor
            this._super(me.plugin.Base, "init");
        },
        
        addTexture: function(key, callback){
            if(typeof callback !== "function") callback = function(){};
            if(this.isTextureLoaded(key)) { callback(); return; }
            
            let count = game.tpLazyLoading[key];
            
            // add to game.texture
            let addGameTexture = () => {
				let jsonArr = [];
                for(let i = 0; i < count; i++){
					jsonArr.push(me.loader.getJSON(`texture_${key}_${i}`));
                }
				game.textureMap.set(key, new me.video.renderer.Texture(jsonArr, undefined, false));
                callback();
            }
            // --
            
            // add to resources
            for(let i = 0; i < count; i++){
                let name = `texture_${key}_${i}`;
                me.loader.load({
                    name,
                    type: "json",
                    src: `data/json/${name}.json`
                }, function(){
                    me.loader.load({
                        name,
                        type: "image",
                        src: `data/image/${name}.png`
                    }, i ===  count - 1 ? addGameTexture : function(){},
                    (name) => this.onError(name));
                }, (name) => this.onError(name));
                
            }
            // --
        },
        
        isTextureLoaded: function(key){
            if(!game.tpLazyLoading.hasOwnProperty(key)) throw `key [${key}]is not valid.`;
            
            let name = `texture_${key}_0.png`,
				texture = game.textureMap.get(key);
            return texture && texture.atlases && texture.atlases.size > 0;
        },
        
        addTextureList: function(keyList, callback){
            if(keyList.length === 1){
                this.addTexture(keyList[0], callback);
            }else{
				let newList = keyList.splice(1);
                this.addTexture(keyList[0], () => this.addTextureList(newList, callback));
            }
        },
        
        onError: function(name=""){
            throw `error loading asset [${name}]`;
        }
    });
    
    me.device.onReady(function(){
        me.plugin.register(LazyLoading, "lazyLoading");
    });
})();