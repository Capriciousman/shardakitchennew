(function($) {
  'use strict';

  var ctCarousel = function ($scope, $) {

    /*-------------------------------------------------------------------------------
    Banner Slider
    -------------------------------------------------------------------------------*/
    $(".banner-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.banner .slider-prev'),
      nextArrow: $('.banner .slider-next'),
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }]
    });

    /*-------------------------------------------------------------------------------
    Banner Carousel Slider
    -------------------------------------------------------------------------------*/
    $(".banner-carousel-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: $('.banner .slider-prev'),
      nextArrow: $('.banner .slider-next'),
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
          }
        },
      ]
    });

  };

  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/ct-carousel.default', ctCarousel);
  });

})(jQuery);
