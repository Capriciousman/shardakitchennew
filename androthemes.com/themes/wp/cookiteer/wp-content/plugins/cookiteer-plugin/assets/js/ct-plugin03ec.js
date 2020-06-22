(function($) {
  'use strict';

  $(".ct-who-made-it.ct-can-make-it").on('click', function(e){

    e.preventDefault();

    $(".ct-who-made-it").html('<i class="fa fa-spinner fa-spin"></i>');

    var recipeId = $(this).data('id');

    $.ajax({
      type: "post",
      dataType: "json",
      url: ct_plugin_ajax_object.ajax_url,
      data: {
        recipe_id: recipeId,
        action: 'cookiteer_plugin_made_recipe_response'
      },
      success: function(response){
        $(".ct-who-made-it-wrapper").html(response);
      },
      error: function(xhr){
        $(".ct-who-made-it").html(response);
      }
    });

  });

})(jQuery);
