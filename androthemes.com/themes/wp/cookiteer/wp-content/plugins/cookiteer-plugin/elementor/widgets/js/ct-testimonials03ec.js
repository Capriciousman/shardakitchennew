(function($) {
  'use strict';

  var ctTestimonials = function ($scope, $) {

    /*-------------------------------------------------------------------------------
    Testimonials Slider
    -------------------------------------------------------------------------------*/
    $(".ct-testimonials-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.ct-testimonials-nav-slider-inner',
    });

    $(".ct-testimonials-nav-slider-inner").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      asNavFor: '.ct-testimonials-slider',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });

    /*-------------------------------------------------------------------------------
    Testimonials Slider
    -------------------------------------------------------------------------------*/
    $(".ct-testimonials-slider-2").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.ct-testimonials.style-2 .slider-prev'),
      nextArrow: $('.ct-testimonials.style-2 .slider-next'),
      responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

  };

  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/ct-testimonials.default', ctTestimonials);
  });

})(jQuery);
