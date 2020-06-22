(function($) {
  'use strict';

  var ctCategories = function ($scope, $) {

    /*-------------------------------------------------------------------------------
    Recipe Category Slider
    -------------------------------------------------------------------------------*/
    $(".recipe-category-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
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
    elementorFrontend.hooks.addAction('frontend/element_ready/ct-categories.default', ctCategories);
  });

})(jQuery);
