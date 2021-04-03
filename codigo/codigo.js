(async () => {
    if ('loading' in HTMLImageElement.prototype){
        const images = document.querySelectorAll("img.lazyload");
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }else{
        const lazySizesLib = await import('lazysizes.min.js');
        lazySizes.init();
    }
})();