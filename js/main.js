$(document).ready(function(){
    //navbr collpse function clicking <a> tag and x and 3 bars icon for menu
  $('.js-scroll-trigger').click(function(){
    $('.navbar-collapse').collapse('hide');
    //$('#navbar-close').toggleClass('hidden');
    //$('.navbar-toggler-icon').toggleClass('hidden');
  })
  

  
  $('.navbar-toggler').click(function() {
    $('.navbar-toggler-icon').toggleClass('hidden');
    $('#navbar-close').toggleClass('hidden');
  });

  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled ');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled ');
    }
  });


  //portfolio js

  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })




  ///counterUp.js

    var mixer = mixitup('.filter-container');


    // slick slider for testimonial
    $('.testimonial_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:true,
      });

      // slick slider for clients
      $('.client_slick').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 5,
        autoplay:true,
        dots:true,
        arrows:false,
      });

      // nav bg pop up js
      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');

        if(scrolling >= 100){
          sticky.addClass('nav_bg');
        }
        else{
          sticky.removeClass('nav_bg')
        }
      });


      // Smooths scrolling
      $('body').scrollspy({target: ".navbar", offset: 50});

      var html_body = $('html, body');
      $('nav a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 50
                  }, 1500);
                  return false;
              }
          }
      });

      //aos js
      AOS.init({
        duration: 1000,
        once: true
      });

      //wow js
      new WOW().init();
    // counter js
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
      });
      
})