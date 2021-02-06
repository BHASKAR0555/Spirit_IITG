/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init News Slider
6. Init Milestones


******************************/


$(document).ready(function() {
  "use strict";

 $(".event_item").on('click',function(){

   $("#eventModalImage").prop('src',$("img",this).prop('src'));
   $("#eventModelHeading").html($(".event_title",this).html());
   var registerLink = $(this).attr('data-src');
   console.log(registerLink);
   if(!registerLink.length)
    registerLink="https://docs.google.com/forms/d/e/1FAIpQLSeqK2jEYP5G3NHrdQqnIzeSEl5v10I1xN_EQzesfhR7MxOjLw/viewform";
   $("#eventModalRegisterLink").prop('href',registerLink);
   $("#eventModal").modal('show');

 });

  /*

  1. Vars and Inits

  */
  AOS.init({
    duration: 1200,
  })

  var ctrl = new ScrollMagic.Controller();

  setHeader();
  initMenu();
  initHomeSlider();
  initMilestones();
  initNewsSlider();

  $(window).on('resize', function() {
    setHeader();

    setTimeout(function() {
      $(window).trigger('resize.px.parallax');
    }, 375);
  });

  $(document).on('scroll', function() {
    setHeader();
  });

  /*

  2. Set Header

  */


  function initNewsSlider() {
    if ($('.news_slider').length) {
      var newsSlider = $('.news_slider');
      newsSlider.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 1200
      });
    }
  }

  function setHeader() {
    var header = $('.header');

    if ($(window).scrollTop() > 91) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  }

  /*

  3. Init Menu

  */

  function initMenu() {
    if ($('.menu').length) {
      var menu = $('.menu');
      var hamburger = $('.hamburger');
      var close = $('.menu_close');

      hamburger.on('click', function() {
        menu.toggleClass('active');
      });

      close.on('click', function() {
        menu.toggleClass('active');
      });
    }
    $('.menu_nav a[href*="#"]').bind("click", function() {
      $('.menu a[href*="#"]').parent().removeClass('active');
      menu.toggleClass('active');
      scrollTo($(this).attr('href'));
      $(this).parent().addClass('active');
    });
  }

  /*

  4. Init Home Slider

  */

  function initHomeSlider() {
    if ($('.home_slider').length) {
      var homeSlider = $('.home_slider');
      homeSlider.owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 1200
      });

      // add animate.css class(es) to the elements to be animated
      function setAnimation(_elem, _InOut) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each(function() {
          var $elem = $(this);
          var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

          $elem.addClass($animationType).one(animationEndEvent, function() {
            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
          });
        });
      }

      // Fired before current slide change
      homeSlider.on('change.owl.carousel', function(event) {
        var $currentItem = $('.home_slide', homeSlider).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation($elemsToanim, 'out');
      });

      // Fired after current slide has been changed
      homeSlider.on('changed.owl.carousel', function(event) {
        var $currentItem = $('.home_slide', homeSlider).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");
        setAnimation($elemsToanim, 'in');
      });

      if ($('.home_slider_nav').length) {
        var next = $('.home_slider_nav');
        next.on('click', function() {
          homeSlider.trigger('next.owl.carousel');
        });
      }
    }
  }



  function scrollTo(selector) {
    var destination = $(selector);
    $('html, body').animate({
      scrollTop: destination.offset().top
    }, 'slow');
  }
  $('a[href*="#"]').bind("click", function() {
    $('a[href*="#"]').parent().removeClass('active');
    scrollTo($(this).attr('href'));
    $(this).parent().addClass('active');

  });



  var brochureSlider = $('#brochure-section .owl-carousel');
  brochureSlider.owlCarousel({
    center: true,
    loop: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    autoHeight: false,
    items: 1,
    transitionStyle: 'fadeOut',
    singleItem: true,
    // mergeFit:true,
    lazyLoad: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: ['<span class="p-3"><i class="fas fa-chevron-left"></i></span>', '<span class="p-3"><i class="fas fa-chevron-right"></i></span>'],

  });


  var teamSlider = $('#team-section .owl-carousel');
  teamSlider.owlCarousel({
    center: true,
    loop: true,
    stagePadding: 0,
    margin: 20,
    padding: 0,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    autoHeight: false,
    lazyLoad: true,
    // items: 2,
    navText: ['<span class="p-3"><i class="fas fa-chevron-left"></i></span>', '<span class="p-3"><i class="fas fa-chevron-right"></i></span>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      },


    }
  });


    var gallerySlider = $('#gallery-section .owl-carousel');
    gallerySlider.owlCarousel({
      center: false,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplayTimeout: 2000,
      autoplay: true,
      autoplayHoverPause: true,
      nav: true,
      autoHeight: false,
      lazyLoad: true,
      // items: 2,
      navText: ['<span class="p-3"><i class="fas fa-chevron-left"></i></span>', '<span class="p-3"><i class="fas fa-chevron-right"></i></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        },

      }
    });



  function initMilestones() {
    if ($('.milestone_counter').length) {
      var milestoneItems = $('.milestone_counter');

      milestoneItems.each(function(i) {
        var ele = $(this);
        var endValue = ele.data('end-value');
        var eleValue = ele.text();

        /* Use data-sign-before and data-sign-after to add signs
        infront or behind the counter number */
        var signBefore = "";
        var signAfter = "";

        if (ele.attr('data-sign-before')) {
          signBefore = ele.attr('data-sign-before');
        }

        if (ele.attr('data-sign-after')) {
          signAfter = ele.attr('data-sign-after');
        }

        var milestoneScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 'onEnter',
            reverse: false
          })
          .on('start', function() {
            var counter = {
              value: eleValue
            };
            var counterTween = TweenMax.to(counter, 4, {
              value: endValue,
              roundProps: "value",
              ease: Circ.easeOut,
              onUpdate: function() {
                document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
              }
            });
          })
          .addTo(ctrl);
      });
    }
  }
$("#loader-wrapper").fadeIn(1000);
$("#loader-wrapper").fadeOut(1000);
  // $("#loader-wrapper").hide();

});

$('#gallery-section').on('load', function() {


});
