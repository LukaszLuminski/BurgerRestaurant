wW = $(window).width();

$(window).on('load', function() {
  $('#mdb-preloader').addClass('loaded');
  $('#mdb-preloader').attr('style', 'visibility: hidden;');
});

//<!--Smooth scroll to href-->

$(".contact-link, .main a").on('click', function(event) {
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



//<!--Dropdown menu button behaviour-->

$(".contact-link, .dropdown-menu a").on('click', function () {
  if ($('.animated-icon2').hasClass('open')) {
    $('.animated-icon2').removeClass('open');
    $('.navbar-collapse').removeClass('show');
    $('.nav-item .dropdown').removeClass('show');
    $('.dropdown-menu').removeClass('show');
  }
});



//<!--Disable parralax on smaller screen-->

jarallax(document.querySelectorAll('.jarallax'), {
  disableParallax: function () {
    return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
  }
});



//<!--Set proper navbar color and navbar background color on load & reload-->

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



//<!--Stop all animations on window resize -->

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



//<!--Hamburger menu button behaviour-->

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



//<!--Set navbar color and navbar background color on resize-->

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



//<!--Set dropdown or dropright menu depending on width-->

var setDropdownMenu = function () {
  wW = $(window).width();
  if (wW >= 993) {
    $("#navbarSupportedContent").removeClass('dropright');
  } else {
    $("#navbarSupportedContent").addClass('dropright');
  }
};

setDropdownMenu();



//<!--Activate behaviours on scroll and resize-->

$(window).on('scroll', setNav);
$(window).on('resize', function() {
  stopAnimation();
  setDropdownMenu();
  setNav();
  $('.animated-icon2').removeClass('open');
  $('.navbar-collapse').removeClass('show');
  $('.nav-item .dropdown').removeClass('show');
  $('.dropdown-menu').removeClass('show');
});



//<!--Reload window on clicking logo-->

$('.logo').click(function() {
  location.reload();
  if (wW <= 992 && $('.animated-icon2').hasClass('open')) {
    $('.animated-icon2').toggleClass('open');
    $('.navbar').removeClass('top-nav-collapse');
  }

});



//<!--Activate lightbox gallery behaviour-->

$(function() {
  $("#mdb-lightbox-ui").load("mdb/mdb-addons/mdb-lightbox-ui.html");
});



//<!--Set current date in footer-->

$(".copyright").text(new Date().getFullYear());



//<!--Change googlemap height accordingly on load-->

var setMap = function () {
  if (wW >= 993) {
    $('.map').attr('height', 450);
  } else {
    $('.map').attr('height', 320);
  }
};

setMap();



//<!--Scroll to top from footer-->

$(".return-to-top").on('click', function() {
  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 1600);
  preventDefault();
});
