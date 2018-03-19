var WEATHER_BAR = {};

(function($) {

  "use strict";

  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    swipers = {},
    $preloader = $('#hellopreloader');

  WEATHER_BAR.preloader = function() {
    $window.scrollTop(0);
    setTimeout(function() {
      $preloader.fadeOut(800);
    }, 500);
    return false;
  };

  WEATHER_BAR.initSwiper = function() {
    var initIterator = 0;
    var index = 'swiper-unique-id-' + initIterator;
    var $swiper = $('.screen-shots');

    $swiper.addClass('swiper-' + index + ' initialized').attr('id', index);
    $swiper.closest('.weather-bar-module').find('.swiper-pagination').addClass('pagination-' + index);

    new Swiper('.screen-shots', {
      pagination: '.pagination-' + index,
      paginationClickable: true,
      direction: 'horizontal',
      mousewheelControl: false,
      mousewheelReleaseOnEdges: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      keyboardControl: true,
      setWrapperSize: true,
      preloadImages: true,
      updateOnImagesReady: true,
      centeredSlides: false,
      autoplay: false,
      autoHeight: false,
      loop: true,
      effect: 'coverflow',
      fade: {
        crossFade: true
      },
      parallax: true,
      onImagesReady: function(swiper) {},
      coverflow: {
        slideShadows: false
      },
      onSlideChangeStart: function(swiper) {
        if ($swiper.closest('.weather-bar-module').find('.slider-slides').length) {
          $swiper.closest('.weather-bar-module').find('.slider-slides .slide-active').removeClass('slide-active');
          var realIndex = swiper.slides.eq(swiper.activeIndex).attr('data-swiper-slide-index');
          $swiper.closest('.weather-bar-module').find('.slider-slides .slides-item').eq(realIndex).addClass('slide-active');
        }
      }
    });
  };

  jQuery('.back-to-top').on('click', function() {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $document.ready(function() {

    jQuery(function() {
      jQuery('.social__item.main').hover(function() {
        jQuery('.social__item.main').siblings('.share-product').addClass('open')
      });
      jQuery('.share-product').mouseleave(function() {
        jQuery('.share-product').removeClass('open')
      });
    });

    WEATHER_BAR.preloader();
    WEATHER_BAR.initSwiper();
  });

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var platform = navigator.platform || navigator.appVersion;

  if (platform.indexOf('Win') !== -1 && /windows phone/i.test(userAgent) === false) {
    document.getElementById('platform-windows').style.display = 'inline-block'
  }
  if (platform.indexOf('Mac') !== -1 && /iPad|iPhone|iPod/.test(userAgent) === false) {
    document.getElementById('platform-macos').style.display = 'inline-block'
  }
  if (platform.indexOf('Linux') !== -1) {
    document.getElementById('platform-linux').style.display = 'inline-block'
  }

})(jQuery);
