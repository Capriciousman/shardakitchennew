(function($) {
  'use strict';

  var foodMenuFilter = function ($scope, $) {

    $(".andro_product-filter-items").each(function(i, filterDynamicIds){
      var $filterDaynamicId = $( filterDynamicIds );

      $filterDaynamicId.isotope({
        filter: $filterDaynamicId.prev().find('.andro_filter-first-item').data('filter'),
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });

    });

  };

  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/ct-recipe-tabs.default', foodMenuFilter);
  });

  $('body').on('click', '.andro_product-filter a', function() {
    $('.andro_product-filter .active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.andro_product-filter-items').isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });

})(jQuery);
