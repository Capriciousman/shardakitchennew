(function($) {
  'use strict';

  var ctVidoeRecipes = function ($scope, $) {

    /*-------------------------------------------------------------------------------
    Recipe Video slider (v2)
    -------------------------------------------------------------------------------*/
    $(".ct-recipe-video-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      dots: true,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

  };

  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/ct-vidoe-recipes.default', ctVidoeRecipes);
  });

})(jQuery);
