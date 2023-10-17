document.addEventListener("DOMContentLoaded", function () {

    const urlInput = document.getElementById("urlInput");
    const loadPageButton = document.getElementById("loadPageButton");
    const screenSizes = document.getElementById("screenSizes");
    const previewFrame = document.getElementById("previewFrame");
  
    loadPageButton.addEventListener("click", function () {
      
      const selectedSize = screenSizes.value.split("x");
      
      let width, height;
      
      if(selectedSize[0] === '1920') {
        width = '100%';
        height = '100vh';
      } else {
        width = selectedSize[0];  
        height = selectedSize[1];
      }
  
      const url = urlInput.value;
  
      if (url) {
        const src = `proxy.php?url=${encodeURIComponent(url)}`;
        previewFrame.style.width = width;
        previewFrame.style.height = height;  
        previewFrame.src = src;
      }
  
    });
  
});