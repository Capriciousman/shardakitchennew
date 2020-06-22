(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Open Direction Style 2 images with a lightbox
  -------------------------------------------------------------------------------*/
  $(".ct-recipe-directions-lightbox .cooked-recipe-directions .cooked-direction img").on("click", showImage);
  function showImage(e){
    $.colorbox(
      {
        href:$(this).parent().data('lightbox'),
        maxWidth:'95%',
        maxHeight:'95%'
      }
    );
  }

  /*-------------------------------------------------------------------------------
  Cookies
  -------------------------------------------------------------------------------*/
  function setCookie(cname, cvalue, days){

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
      var expires = "; expires=" + date.toGMTString();
    } else {
      var expires = "";
    }
    document.cookie = cname + "=" + cvalue + expires + "; path=/";
  }

  //Return a particular cookie
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //Checks if a cookie exists
  function checkCookie(cookieToCheck){
    var cookie = getCookie(cookieToCheck);
    if (cookie != "") {
      return true;
    }
    return false;
  }

  //Delet an existing cookie
  function deleteCookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  /*-------------------------------------------------------------------------------
  Newsletter popup close and set cookie
  -------------------------------------------------------------------------------*/
  $(".newsletter-popup-trigger").on('click', function(){
    setCookie('newsletter_popup_viewed', 'true');
  });

  $('#ctNewsletterPopup').on('hidden.bs.modal', function () {
    setCookie('newsletter_popup_viewed', 'true');
  });

  /*-------------------------------------------------------------------------------
  Preloader
	-------------------------------------------------------------------------------*/
  $(window).on('load', function(){
    $(".ct-preloader").addClass('hidden');

    if(!checkCookie('newsletter_popup_viewed')){
      setTimeout(function(){
        $("#ctNewsletterPopup").modal('show');
      }, 3000);
    }

  });

  /*-------------------------------------------------------------------------------
  Aside Menu
	-------------------------------------------------------------------------------*/
  $(".aside-trigger").on('click', function() {
    $(".main-aside").toggleClass('open');
  });
  $(".main-aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".sub-menu");
    e.preventDefault();

    submenu.slideToggle(200);
  })

  /*-------------------------------------------------------------------------------
  Cart Trigger
  -------------------------------------------------------------------------------*/
  $(".cart-trigger i").on('click', function(e) {
    $(this).parent().toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  Search Trigger
  -------------------------------------------------------------------------------*/
  $(".search-trigger").on('click', function(e) {
    $(".search-form-wrapper").toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  Sticky Header
	-------------------------------------------------------------------------------*/
  var header = $(".can-sticky");
  var headerHeight = header.innerHeight();
  function doSticky() {
    if (window.pageYOffset > headerHeight) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();

  var sideNav = $(".main-aside");
  function doStickySidenav(){
    if (window.pageYOffset > 46) {
      sideNav.addClass("sticky");
    } else {
      sideNav.removeClass("sticky");
    }
  }

  /*-------------------------------------------------------------------------------
  Aside Scroll
	-------------------------------------------------------------------------------*/
  function initAsideScrollbar() {
    var scrollHeight = $('.main-aside').innerHeight() - $(".main-aside .navbar-brand").innerHeight(); // Calculate the height of the scroll container
    var calculatedHeight = isNaN(scrollHeight) ? "auto" : scrollHeight;
    $('.aside-scroll').slimScroll({
      height: calculatedHeight,
      position: "right",
      size: "5px",
      color: "#dcdcdc",
      opacity: 1,
      wheelStep: 5,
      touchScrollStep: 50,
    });
  }
  initAsideScrollbar();

  /*-------------------------------------------------------------------------------
  Cooked Filter scroll
	-------------------------------------------------------------------------------*/
  $(".cooked-tax-scrollable").slimScroll({
    position: "right",
    size: "5px",
    color: "#dcdcdc",
    opacity: 1,
    wheelStep: 5,
    touchScrollStep: 50,
  });

  /*-------------------------------------------------------------------------------
  Advanced search form ingredient tags
	-------------------------------------------------------------------------------*/
  var ingredientList = document.getElementById('ct-ingredient-list');
  if(ingredientList){
    new Tagify(ingredientList, {
      delimiters: ", ",
      maxTags: 5,
      keepInvalidTags: true,
      blacklist: ["fuck", "shit", "pussy"],
      whitelist: ingredientList.getAttribute('data-keys').split(', '),
      dropdown: {
        enabled: true,
        maxItems: 5
      }
    });

  }

  /*-------------------------------------------------------------------------------
  Count Up
  -------------------------------------------------------------------------------*/
  $('.counter-number span').each(function() {
    $(this).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  /*-------------------------------------------------------------------------------
  Tooltips
  -------------------------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  function doMagnificPopup(){
    $('.popup-youtube').magnificPopup({
      type: 'iframe'
    });
    $('.popup-vimeo').magnificPopup({
      type: 'iframe'
    });
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
  }
  doMagnificPopup();
  $("body").on('click', '.popup-youtube', function(e){
    e.preventDefault();
    doMagnificPopup();
  });

  /*-------------------------------------
  Instagram Photos
  -------------------------------------*/
  $('.ct-instagram-photos').each(function() {
    $.instagramFeed({
      'username': $(this).data('username'),
      'container': $(this),
      'display_profile': false,
      'display_biography': false,
      'items': $(this).data('items'),
      'items_per_row': $(this).data('items-row'),
      'margin': 0,
    });
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.masonry').imagesLoaded(function() {
    var isotopeContainer = $('.masonry');
    isotopeContainer.isotope({
      itemSelector: '.masonry-item',
    });
  });

  /*-------------------------------------------------------------------------------
  Product List/Grid Toggle
  -------------------------------------------------------------------------------*/
  $(".toggle-grid").on('click', function(){
    $(".view-toggler i").removeClass('active');
    $(this).addClass('active');
    $('.products').removeClass('list-view');
  })
  $(".toggle-list").on('click', function(){
    $(".view-toggler i").removeClass('active');
    $(this).addClass('active');
    $('.products').addClass('list-view');
  });

  /*-------------------------------------------------------------------------------
  Login / Register
  -------------------------------------------------------------------------------*/
  $("#login-trigger").on('click', function(e){
    e.preventDefault();
    $(".auth-form.register").removeClass('active');
    $(".auth-form.login").addClass('active');
  });

  $("#register-trigger").on('click', function(e){
    e.preventDefault();
    $(".auth-form.login").removeClass('active');
    $(".auth-form.register").addClass('active');
  });

  /*-------------------------------------------------------------------------------
  Countdown
  -------------------------------------------------------------------------------*/
  $(".ct-countdown-timer").each(function(){
    var $this = $(this);
    $this.countdown($this.data('countdown'), function(event) {
      $(this).text(
        event.strftime('%D days %H:%M:%S')
      );
    });
  });

  /*-------------------------------------------------------------------------------
  Related Products / Posts
  -------------------------------------------------------------------------------*/
  $(".ct-related-posts-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $('.related .slider-prev'),
    nextArrow: $('.related .slider-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  External Products sliders
  -------------------------------------------------------------------------------*/
  $(".post-single.cp_recipe .ct-extproducts-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });

  $(".sidebar .ct-extproducts-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });


  /*-------------------------------------------------------------------------------
  Back to top
  -------------------------------------------------------------------------------*/
  function stickBackToTop(){
    if (window.pageYOffset > 400) {
      $('.andro_back-to-top').addClass('show');
    }else{
      $('.andro_back-to-top').removeClass('show');
    }
  }
  stickBackToTop();

  $('.andro_back-to-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  //On scroll events
  $(window).on('scroll', function() {

    doSticky();
    doStickySidenav();
    stickBackToTop();

  });

  //On resize events
  $(window).on('resize', function() {

    initAsideScrollbar();

  });

})(jQuery);