async function storage(loadcallback){
	console.log("storage bind gamepush");
    await gp.player.ready;
    storage.get = function(key){
      return gp.player.get(key);
    }
    storage.set = function(key,value){
      gp.player.set(key,value);
    }
    storage.push = function(){
      gp.player.sync();
    }
    storage.getraw = function(){
      return null;
    }
    storage.type = 0;
    loadcallback();
}
