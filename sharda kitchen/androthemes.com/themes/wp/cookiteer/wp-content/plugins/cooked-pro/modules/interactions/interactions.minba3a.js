!function(o){o(document).ready(function(){o("span.cooked-rating-thumb").length&&o("body").on("click","span.cooked-rating-thumb",function(e){e.preventDefault();var a=o(this),t=a.parents(".cooked-rating"),s=a.parents("span.cooked-rating-thumbs"),n=t.data("recipe-id"),r=a.data("rating-value"),d=s.parent();if(t.hasClass("cooked-ratable")){a.hasClass("cooked-is-selected")?d.find("span.cooked-rating-thumb").removeClass("cooked-is-selected"):(d.find("span.cooked-rating-thumb").removeClass("cooked-is-selected"),a.addClass("cooked-is-selected")),t.removeClass("cooked-ratable");o.post(cooked_js_vars.ajax_url,{action:"cooked_rate_recipe",recipe_id:n,rating_val:r},function(o){s.replaceWith(o),setTimeout(function(){t.addClass("cooked-ratable")},125)}).fail(function(o){console.log("Error:"),console.log(o)})}}),o("span.cooked-rating-stars").length&&o("body").on("click","span.cooked-rating-choice",function(e){e.preventDefault();var a=o(this),t=a.parents(".cooked-rating"),s=a.parents("span.cooked-rating-stars"),n=t.data("recipe-id"),r=a.data("rating-value");if(t.hasClass("cooked-ratable")&&!a.hasClass("cooked-is-selected")){t.removeClass("cooked-ratable"),t.addClass("cooked-loading"),a.addClass("cooked-loading");o.post(cooked_js_vars.ajax_url,{action:"cooked_rate_recipe",recipe_id:n,rating_val:r},function(e){var a=s.parent();s.parents(".cooked-rating");t.html(e),t.find("span.cooked-rating-stars > span").addClass("cooked-done"),t.removeClass("cooked-loading");var n,r=6,d=a.find("span.cooked-rating-stars > span"),i=setInterval(function(){n=d[r--],o(n).removeClass("cooked-done"),r<0&&clearInterval(i)},25);setTimeout(function(){t.addClass("cooked-ratable")},125)}).fail(function(o){console.log("Error:"),console.log(o)})}}),o("span.cooked-favorite-heart").length&&o("body").on("click","span.cooked-favorite-heart",function(e){e.preventDefault();var a=o(this),t=a.data("recipe-id");if(a.hasClass("cooked-is-favorite")){a.removeClass("cooked-is-favorite");s="remove"}else{a.addClass("cooked-is-favorite");var s="add"}o.post(cooked_js_vars.ajax_url,{action:"cooked_favorite_recipe",add_remove:s,recipe_id:t},function(o){"error"!=o&&(o?a.find(".cooked-favorite-total").html(o):a.find(".cooked-favorite-total").html("0"))}).fail(function(o){console.log("Error: "+o)})})})}(jQuery);