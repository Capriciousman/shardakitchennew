function cooked_updateTotalTimeValue(e,t){var o=e+t;jQuery("#total_time").val(o)}function cooked_image_readURL(e,t){if(e.files&&e.files[0]){if(Math.round(e.files[0].size/1e6)+1>cooked_pro_js_vars.max_image_size)return e.value=null,alert(cooked_pro_js_vars.i18n_image_too_large),!1;var o=new FileReader;o.onload=function(e){jQuery("#"+t).attr("src",e.target.result),setTimeout(function(){jQuery("#"+t).parent().addClass("cooked-has-image")},100)},o.onprogress=function(e){if(e.lengthComputable)e.loaded,e.total},o.readAsDataURL(e.files[0])}}function init_nutrition_facts(e){e.find("input").each(function(){var e=jQuery(this),t=e.attr("id"),o=e.val(),n=jQuery('.cooked-nut-percent[data-labeltype="'+t+'"]').length;if(jQuery('.cooked-nut-label[data-labeltype="'+t+'"]').length)if(o){if(o=o.replace(/<(?:.|\n)*?>/gm,""),jQuery('.cooked-nut-label[data-labeltype="'+t+'"]').html(o),jQuery('.cooked-nut-label[data-labeltype="'+t+'"]').parents(".cooked-li").eq(0).show(),jQuery('.cooked-nut-label[data-labeltype="'+t+'"]').parents(".cooked-p").eq(0).show(),n){var i=jQuery('.cooked-nut-percent[data-labeltype="'+t+'"]'),d=i.data("pdv");d&&(thisPercent=Math.round(o/d*100),i.text(thisPercent))}}else jQuery('.cooked-nut-label[data-labeltype="'+t+'"]').html("___ "),jQuery('.cooked-nut-label[data-labeltype="'+t+'"]').parents(".cooked-li").eq(0).hide(),jQuery('.cooked-nut-label[data-labeltype="'+t+'"]').parents(".cooked-p").eq(0).hide()})}function cooked_reset_direction_builder(){var e=jQuery(".cooked-direction-block");e.each(function(){var o=cooked_get_random_int(1e7,99999999);0,jQuery(this).find("[data-direction-part]").each(function(){var e,t=jQuery(this);""==t.attr("name")&&("image"==(e=t.data("direction-part"))?t.attr("name","directions_"+o+"_"+e):t.attr("name","_recipe_settings[directions]["+o+"]["+e+"]"));(""==t.attr("data-target-id")&&(t.attr("data-target-id","image_"+o),t.parent().find("img").attr("id","image_"+o)),""==t.attr("data-id")&&t.attr("data-id",o),""==t.attr("id"))&&(e=(e=t.data("direction-part")).replace("_","-"),t.attr("id","direction-"+o+"-"+e))})})}function cooked_reset_ingredient_builder(){var e=jQuery(".cooked-ingredient-block"),t=0,n=0;e.each(function(){var o=cooked_get_random_int(1e7,99999999);n++;var e=jQuery(this);e.hasClass("cooked-ingredient-heading")||t++,e.find("[data-ingredient-part]").each(function(){var e=jQuery(this);if(""==e.attr("name")){var t=e.data("ingredient-part");e.attr("name","_recipe_settings[ingredients]["+o+"]["+t+"]")}})}),t?jQuery(".cooked-ingredient-headers").show():jQuery(".cooked-ingredient-headers").hide(),n?jQuery("#cooked-ingredients-builder").css({"margin-bottom":"20px"}):jQuery("#cooked-ingredients-builder").css({"margin-bottom":"0px"})}function cooked_get_random_int(e,t){return Math.floor(Math.random()*(t-e))+e}!function(r){var e=r(".cooked-sortable"),o=r("#cooked-ingredients-builder"),n=r("#cooked-directions-builder"),t=r("#cooked-fe-nutrition"),i=r(".cooked-delete-trigger");r(document).ready(function(){(e.length&&e.sortable(),i.length&&(r("body").on("click",".cooked-delete-trigger",function(e){e.preventDefault();var t=r(this);r("body").find(".cooked-delete-confirm").removeClass("cooked-delete-confirm"),t.parents(".cooked-recipe").addClass("cooked-delete-confirm")}),r("body").on("click",".cooked-cancel-delete",function(e){e.preventDefault(),r("body").find(".cooked-delete-confirm").removeClass("cooked-delete-confirm")}),r("body").on("click",".cooked-delete-final",function(e){e.preventDefault();var t=r(this),o=t.data("recipe"),n=t.parents(".cooked-recipe");if(confirm(cooked_pro_js_vars.i18n_confirm_delete)){n.addClass("cooked-recipe-deleted"),setTimeout(function(){n.addClass("cooked-recipe-hidden")},500);r.post(cooked_js_vars.ajax_url,{action:"cooked_delete_recipe",recipe_id:o},function(e){"error"!=e?setTimeout(function(){n.remove()},1e3):(n.removeClass("cooked-recipe-deleted"),n.removeClass("cooked-recipe-hidden"))}).fail(function(e){n.removeClass("cooked-recipe-deleted"),n.removeClass("cooked-recipe-hidden")})}})),o.length&&(cooked_reset_ingredient_builder(),o.on("keydown",'input[data-ingredient-part="name"]',function(e){9!==e.keyCode&&13!==e.keyCode||r(this).parents(".cooked-ingredient-block").is(":last-child")&&(e.preventDefault(),r("#cooked-fe-ingredients").find(".cooked-add-ingredient-button").trigger("click"),o.find('.cooked-ingredient-block:last-child input[data-ingredient-part="amount"]').focus())}),o.parent().on("click",".cooked-show-url",function(e){e.preventDefault();var t=r(this).parent();t.hasClass("cooked-expanded")?t.removeClass("cooked-expanded"):(t.addClass("cooked-expanded"),t.find('input[data-ingredient-part="url"]').focus())}),o.on("keyup",'input[data-ingredient-part="url"]',function(e){var t=r(this).val(),o=r(this).parents(".recipe-setting-block");t?o.addClass("cooked-has-url"):o.removeClass("cooked-has-url")}),o.parent().on("click",".cooked-add-ingredient-button",function(e){e.preventDefault();var t=o.parent().find(".cooked-ingredient-template").clone().removeClass("cooked-template cooked-ingredient-template").addClass("cooked-ingredient-block");o.append(t),cooked_reset_ingredient_builder()}),o.parent().on("click",".cooked-add-heading-button",function(e){e.preventDefault();var t=o.parent().find(".cooked-heading-template").clone().removeClass("cooked-template cooked-heading-template").addClass("cooked-ingredient-block cooked-ingredient-heading");o.append(t),cooked_reset_ingredient_builder()}),o.parent().on("click",".cooked-delete-ingredient",function(e){e.preventDefault(),r(this).parent().remove(),cooked_reset_ingredient_builder()})),n.length)&&(cooked_reset_direction_builder(),n.parent().on("click",".cooked-add-direction-button",function(e){e.preventDefault();var t=n.parent().find(".cooked-direction-template").clone().removeClass("cooked-template cooked-direction-template").addClass("cooked-direction-block");n.append(t),cooked_reset_direction_builder()}),n.parent().on("click",".cooked-add-heading-button",function(e){e.preventDefault();var t=n.parent().find(".cooked-heading-template").clone().removeClass("cooked-template cooked-heading-template").addClass("cooked-direction-block cooked-direction-heading");n.append(t),cooked_reset_direction_builder()}),n.parent().on("click",".cooked-delete-direction",function(e){e.preventDefault(),r(this).parent().remove(),cooked_reset_direction_builder()}),r("body").on("click",".cooked-direction-img-placeholder, .cooked-direction-img",function(e){e.preventDefault(),r(this).parent().find(".direction-image-button").trigger("click")}));t.length&&(init_nutrition_facts(t),$_CookedNutritionToggle=t.find(".cooked-nutrition-toggle"),$_CookedNutritionButton=t.find(".cooked-add-nutrition-button"),$_CookedNutritionButton.on("click",function(e){e.preventDefault(),$_CookedNutritionButton.hasClass("cooked-active")?($_CookedNutritionButton.text(cooked_pro_js_vars.i18n_nutrition_toggle_enable),$_CookedNutritionButton.removeClass("cooked-active"),$_CookedNutritionToggle.hide()):($_CookedNutritionButton.text(cooked_pro_js_vars.i18n_nutrition_toggle_disable),$_CookedNutritionButton.addClass("cooked-active"),$_CookedNutritionToggle.show())}),t.on("keyup","input",function(e){e.preventDefault();var t=r(this),o=t.attr("id"),n=t.val(),i=r('.cooked-nut-percent[data-labeltype="'+o+'"]').length;if(r('.cooked-nut-label[data-labeltype="'+o+'"]').length)if(n){if(n=n.replace(/<(?:.|\n)*?>/gm,""),r('.cooked-nut-label[data-labeltype="'+o+'"]').html(n),r('.cooked-nut-label[data-labeltype="'+o+'"]').parents(".cooked-li").eq(0).show(),r('.cooked-nut-label[data-labeltype="'+o+'"]').parents(".cooked-p").eq(0).show(),i){var d=r('.cooked-nut-percent[data-labeltype="'+o+'"]'),a=d.data("pdv");a&&(thisPercent=Math.round(n/a*100),d.text(thisPercent))}}else r('.cooked-nut-label[data-labeltype="'+o+'"]').html("___ "),r('.cooked-nut-label[data-labeltype="'+o+'"]').parents(".cooked-li").eq(0).hide(),r('.cooked-nut-label[data-labeltype="'+o+'"]').parents(".cooked-p").eq(0).hide()})),r("body").on("change",".cooked_image_uploader",function(){cooked_image_readURL(this,r(this).data("target-id"))}),r("body").on("click",".cooked-direction-image.cooked-has-image",function(){r(this).find('input[type="file"]').val(""),r(this).find('input[data-direction-part="current_image_removable"]').val(""),r(this).find("img").attr("src",""),r(this).removeClass("cooked-has-image")}),(r("#prep_time").length&&r("#total_time").length||r("#cook_time").length&&r("#total_time").length)&&(console.log("test"),r("#prep_time,#cook_time").on("change",function(){if(r("#prep_time").val())var e=parseInt(r("#prep_time").val());else e=0;if(r("#cook_time").val())var t=parseInt(r("#cook_time").val());else t=0;cooked_updateTotalTimeValue(e,t)}))})}(jQuery);