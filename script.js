wW = $(window).width();

$(".scroll-down, .right a").on('click', function(event) {
  event.preventDefault();
  var full_url = this.href;
  var parts = full_url.split("#");
  var trgt = parts[1];
  var target_offset = $("#" + trgt).offset();
  var target_top = target_offset.top;
  $('html, body').animate({
    scrollTop: target_top
  }, 1000);
  event.preventDefault();
});

var setColor = function() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    ($('.navbar').addClass('top-nav-collapse'));
    $('.navbar').attr('style', 'background: #f3e5d8; box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.35);');
    $('.animated-icon2 span').attr('style', 'background-color: black;');
  } else {
    $('.navbar').attr('style', 'background: transparent; box-shadow: unset;');
    $('.animated-icon2 span').attr('style', 'background-color: white;');
  }
};

setColor();

var stopAnimation = function() {

  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });
};


$('.second-button').on('click', function() {
  $('.animated-icon2').toggleClass('open');
  if ($('.animated-icon2').hasClass('open')) {
    $('.navbar').attr('style', 'background: #f3e5d8; box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.35);');
    $('.animated-icon2 span').attr('style', 'background-color: black;');
    $('.nav-link:not(.active)').attr('style', 'color: black;');
  } else if ((!$('.animated-icon2').hasClass('open')) && (!$('.navbar').hasClass('top-nav-collapse'))) {
    $('.navbar').attr('style', 'background: transparent; box-shadow: unset; transition: .4s;');
    $('.animated-icon2 span').attr('style', 'background-color: white;');
  } else {
    $('.navbar').attr('style', 'background: #f3e5d8; box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.35);');
    $('.animated-icon2 span').attr('style', 'background-color: black;');
  }
});

var setNav = function() {

  if (wW <= 992) {
    if ($('.navbar').hasClass('top-nav-collapse')) {
      $('.navbar').attr('style', 'background: #f3e5d8; box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.35);');
      $('.animated-icon2 span').attr('style', 'background-color: black;');
    } else if ((!$('.navbar').hasClass('top-nav-collapse')) && (!$('.animated-icon2').hasClass('open'))) {
      $('.navbar').attr('style', 'background: transparent; box-shadow: unset;');
      $('.animated-icon2 span').attr('style', 'background-color: white;');
    }
  } else if (wW >= 993) {
    if (!$('.navbar').hasClass('top-nav-collapse')) {
      $('.navbar').attr('style', 'background: transparent; box-shadow: unset;');
      $('.nav-link:not(.active)').attr('style', 'color: white;');
    } else {
      $('.navbar').attr('style', 'background: #f3e5d8; box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.35);');
      $('.nav-link:not(.active)').attr('style', 'color: black;');
    }
  }
};

// var highlightColor = function () {
//   if ($('#navbarSupportedContent').hasClass('dropright')) {
//   $(".navbar").on("mouseover", function() {
//     $(this).attr('style', 'color: grey');
//   });
//   $(".navbar").on("mouseleave", function() {
//     $(this).attr('style', 'color: black');
//   });
// }
// };
//
//  highlightColor();

$(window).on('scroll', setNav);
$(window).on('resize', function() {
  stopAnimation();
  setNav();
  $('.animated-icon2').removeClass('open');
  $('.navbar-collapse').removeClass('show');
  $('.nav-item .dropdown').removeClass('show');
  $('.dropdown-menu').removeClass('show');
});


$('.logo').click(function() {
  location.reload();
  if (wW <= 992 && $('.animated-icon2').hasClass('open')) {
    $('.animated-icon2').toggleClass('open');
    $('.navbar').removeClass('top-nav-collapse');
  }

});

$(function() {
  $("#mdb-lightbox-ui").load("mdb/mdb-addons/mdb-lightbox-ui.html");
});

$(".copyright").text(new Date().getFullYear());

var setMap = function () {
  if (wW >= 993) {
    $('.map').attr('height', 450);
  } else {
    $('.map').attr('height', 350);
  }
};

setMap();


$(document).ready(function() {
  if (wW <= 992) {
    $("#navbarSupportedContent").addClass('dropright');
    // highlightColor();
  }

  $(window).resize(function() {
    wW = $(window).width();
    if (wW >= 993) {
      $("#navbarSupportedContent").removeClass('dropright');
    } else {
      $("#navbarSupportedContent").addClass('dropright');
    }
  });
});

$(".return-to-top").on('click', function() {
  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 1600);
  preventDefault();
});
