class WebHelper {
  static IsMobileDevice(){
    return unityInstance.SendMessage('WebGLController', 'IsMobileDevice_Callback', this.isMobileDevice());
  }
  static IsMobileDevice(webpUrl){
    return unityInstance.SendMessage('WebGLController', 'OnImageGet', this.convertWebPToPNG(webpUrl));
  }
  static convertWebPToPNG(webpUrl) {
    if (!unityInstance) {
      console.error("Unity instance is not initialized.");
      return;
    }
    
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Включаем CORS
    img.src = webpUrl;

    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0); // Отрисовываем изображение

      const pngData = canvas.toDataURL("image/png"); // Конвертируем в PNG
      return pngData;
    };

    img.onerror = function (error) {
      console.error("Failed to load WebP image:", error);
      return '';
      
    };
  }
  
  static isMobileDevice(){
    let isIPad = false;
    let isIpadRatio = window.matchMedia("(max-width: 768px) and (min-aspect-ratio: 3/4)").matches;

    if (isIpadRatio) {
      isIPad = true
    }
    else {
      switch (navigator.platform){
        case 'MacIntel':
          if (navigator.maxTouchPoints > 0) {
            isIPad = true;
          }
          break;

        case 'iPad':
          isIPad = true;
          break;
      }
    }

    console.log('is iPad:' + isIPad);
    
    let device = false;

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlnackBerry/i)
        || navigator.userAgent.match(/Widows Phone/i)) {
      device = true;
    } else {
      device = false;
    }
    console.log('device mobale:' + device);
    
    if (device || isIPad)
      return 1;
    else 
      return 0;
  }
}
