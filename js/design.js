 // slick 
//  $('.project-slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });

  // $('.news-item').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });

  // $('.related-sites-logo').slick({
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         centerMode: true,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: true,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       }
  //     },
  //   ]
  // });

  

// navbar change on scroll
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 250) {
    $("#navbar").removeClass("bg-nav-transparant");
    $("#navbar").addClass("bg-nav-white");
   
    $('#logo-white').css("display", "none");
    $('#logo-color').css("display", "block");  
   
    $(".nav-link").removeClass("text-white");
    $(".nav-link").addClass("text-dark");
    
    $("#btn-manager, #btn-menu-offcanvas").removeClass("btn-outline-light text-white");
    $("#btn-manager, #btn-menu-offcanvas").addClass("btn-outline-dark text-dark");
    
    $("#btn-lang").removeClass("btn-lang-transparant text-white");
    $("#btn-lang").addClass("btn-lang-white text-dark");

    $("#icon-lang-white").removeClass("d-inline-block");
    $("#icon-lang-white").addClass("d-none");
    $("#icon-lang-black").removeClass("d-none");
    $("#icon-lang-black").addClass("d-inline-block");
  }

  else{
    $("#navbar").removeClass("bg-nav-white");
    $("#navbar").addClass("bg-nav-transparant");
    
    $('#logo-white').css("display", "block");
    $('#logo-color').css("display", "none");
    
    $(".nav-link").removeClass("text-dark");
    $(".nav-link").addClass("text-white");
    
    $("#btn-manager, #btn-menu-offcanvas").removeClass("btn-outline-dark text-dark");
    $("#btn-manager, #btn-menu-offcanvas").addClass("btn-outline-light text-white");
    
    $("#btn-lang").removeClass("btn-lang-white text-dark");
    $("#btn-lang").addClass("btn-lang-transparant text-white");

    $("#icon-lang-black").removeClass("d-inline-block");
    $("#icon-lang-black").addClass("d-none");
    $("#icon-lang-white").removeClass("d-none");
    $("#icon-lang-white").addClass("d-inline-block");
  }
})

document.addEventListener( 'DOMContentLoaded', function() {
  // var splide = new Splide( '.splide' );
  // splide.mount();

  // news list section
  new Splide( '#news-list', {
    autoWidth: true,
    fixedHeight: 534,
    // type   : 'loop',
    perPage    : 1,
    pagination : false,
    breakpoints: {
      600: {
        fixedWidth : 60,
        fixedHeight: 860,
      },
    },
  } ).mount();

  // related-site-logo section
  new Splide( '#related-site_slider', {
    fixedWidth : 230,
    fixedHeight: 80,
    type   : 'loop',
    gap        : 30,
    rewind     : true,
    pagination : false,
    cover      : true,
    focus      : 'center',
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      600: {
        fixedWidth : 230,
        fixedHeight: 80,
      },
    },
  } ).mount(  window.splide.Extensions );

  // project list section
  new Splide( '#project-list-container', {
    autoWidth: true,
    autoHeight : true,
    type   : 'loop',
    gap        : 30,
    perPage    : 3,
    rewind: true,
    pagination : false,
    arrows: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      600: {
        fixedWidth : 60,
        perPage    : 1,
      },
    },
  } ).mount( 
    window.splide.Extensions 
    );

} );
