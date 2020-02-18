$('.second-button').on('click', function() {

  $('.animated-icon2').toggleClass('open');
  wW = $(window).width();
  if(wW <= 992) {
    if ($('.animated-icon2').hasClass('open')) {
      $('.navbar').attr('style', 'background: #f3e5d8; box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.35);');
      $('.animated-icon2 span').attr('style', 'background-color: black;');
      $('.nav-link:not(.active)').attr('style', 'color: black;');
  } else {
    $('.navbar').attr('style', 'background: transparent; box-shadow: unset;');
    $('.animated-icon2 span').attr('style', 'background-color: white;');
    $('.nav-link:not(.active)').attr('style', 'color: white;');
    }
  }

});

$(window).scroll(function(){
if(wW <= 992) {
 if ($('.navbar').hasClass('top-nav-collapse')) {
   $('.navbar').attr('style', 'background: #f3e5d8; box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.35);');
   $('.animated-icon2 span').attr('style', 'background-color: black;');
   $('.nav-link:not(.active)').attr('style', 'color: black;');
 } else if ((!$('.navbar').hasClass('top-nav-collapse'))&&(!$('.animated-icon2').hasClass('open'))){
   $('.navbar').attr('style', 'background: transparent; box-shadow: unset;');
   $('.animated-icon2 span').attr('style', 'background-color: white;');
   $('.nav-link:not(.active)').attr('style', 'color: white;');
 }
}

});


$(function() {
  $("#mdb-lightbox-ui").load("mdb/mdb-addons/mdb-lightbox-ui.html");
});

$(".copyright").text(new Date().getFullYear());


$(document).ready(function(){
    wW = $(window).width();
    if(wW <= 992){
        $("#navbarSupportedContent").addClass('dropright');
      }

    $(window).resize(function(){
    wW = $(window).width();
    if(wW >= 993){
        $("#navbarSupportedContent").removeClass('dropright');
    } else {
      $("#navbarSupportedContent").addClass('dropright');
    }
    });
});
