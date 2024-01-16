 // slick 
 $('.project-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.news-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });
  $('.related-sites-logo').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  

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
    $("#btn-lang").removeClass("btn-lang-transparant");
    $("#btn-lang").addClass("btn-lang-white");
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
    $("#btn-lang").removeClass("btn-lang-white");
    $("#btn-lang").addClass("btn-lang-transparant");
  }
})


