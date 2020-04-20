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
    //Функция отвечает за планвый переход по якорным ссылкам
  $(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var scrollToBlock = $(this).attr("href"),
          blockPosition = $(scrollToBlock).offset().top;
      /*
      scrollToBlock - в переменную заносим информацию о том, к какому блоку надо перейти
      blockPosition - определяем положение блока на странице
      */ 
      $('html, body').animate({scrollTop: blockPosition}, 2000); 
      // 2000 скорость перехода в миллисекундах
    });
  });
  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true,
  });


});