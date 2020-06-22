(function($) {
  'use strict';

  var ctRecipeSlider = function ($scope, $) {

    /*-------------------------------------------------------------------------------
    Recipe Slider (v1)
    -------------------------------------------------------------------------------*/
    $(".ct-recipe-banner-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      asNavFor: '.ct-recipe-banner-slider-nav-inner',
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }]
    });

    /*-------------------------------------------------------------------------------
    Recipe Slider (v3)
    -------------------------------------------------------------------------------*/
    $(".ct-recipe-banner-slider-2").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: $('.ct-recipe-banner .slider-prev'),
      nextArrow: $('.ct-recipe-banner .slider-next'),
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }]
    });

    /*-------------------------------------------------------------------------------
    Recipe Slider Navigation (v1)
    -------------------------------------------------------------------------------*/
    $(".ct-recipe-banner-slider-nav-inner").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      prevArrow: $('.ct-recipe-banner-slider-nav .slider-prev'),
      nextArrow: $('.ct-recipe-banner-slider-nav .slider-next'),
      asNavFor: '.ct-recipe-banner-slider',
      focusOnSelect: true,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
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
    elementorFrontend.hooks.addAction('frontend/element_ready/ct-recipe-slider.default', ctRecipeSlider);
  });

})(jQuery);
