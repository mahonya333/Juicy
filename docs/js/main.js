$(function () {
    $("html,body").css("overflow", "hidden");
    var
        images = document.images,
        imagesTotalCount = images.length,
        imagesLoadedCount = 0;
    percDisplay = document.getElementById('load-border');
    for (var i = 0; i < imagesTotalCount; i++) {
        imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
    }
    //функция полосы загрузки в зависимости от количества загруженных картинок с минимальным временем в 1 секунду
    function imageLoaded() {
        imagesLoadedCount++;
        percDisplay.style.width = (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';
        if (imagesLoadedCount >= imagesTotalCount) {
            setTimeout(function () {
                var preloader = document.getElementById('page-preloader');
                /*   var loader = document.getElementById('loader'); */
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                    $("html,body").css("overflow", "visible");
                    $('.preloader').css('background-image', 'none');
                    /* loader.classList.add('loader-static'); */
                }
            }, 1000);
        }
    }



});