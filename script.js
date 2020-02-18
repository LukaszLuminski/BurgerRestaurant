$('.second-button').on('click', function() {

  $('.animated-icon2').toggleClass('open');
});


$(function() {
  $("#mdb-lightbox-ui").load("mdb/mdb-addons/mdb-lightbox-ui.html");
});

$(".copyright").text(new Date().getFullYear());


$(document).ready(function(){
    w_w = $(window).width();
    if(w_w <= 992){
        $("#navbarSupportedContent").addClass('dropright');
    }

    $(window).resize(function(){
    w_w = $(window).width();
    if(w_w >= 993){
        $("#navbarSupportedContent").removeClass('dropright');
    } else {
      $("#navbarSupportedContent").addClass('dropright');
    }
    });
});
